import React, { useState } from "react";
import { useNavigate } from "react-router-dom"
import * as All from './style'
import { FooterMenu } from "../../components/footer-menu";
import { useProtectedPage } from "../../hooks/useProtectedPage"
import { goToDetailPage } from "../../routes/Coordinator";
import { Header, LoadingDiv } from "../../components";
import SearchIcon from '@mui/icons-material/Search';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import { BASE_URL } from "../../constants/constants";
import { useRequestData } from "../../hooks/useRequestData";
import gif from '../../img/loading-gif.gif'
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import { useRef } from "react";

export function FeedPage() {

    useProtectedPage()

    const navigate = useNavigate()

    // REQUISITIONS

    const [restaurantsData,
        loadingRestaurants,
        errorRestaurants] = useRequestData(`${BASE_URL}restaurants`);
    const [activeOrderData,
        loadingActiveOrder,
        errorActiveOrder] = useRequestData(`${BASE_URL}active-order`)

    const activeOrderArray = [{ ...activeOrderData }]

    // STATES

    const [selectionValue, setSelectionValue] = useState('Todos')
    const [filterValue, setFilterValue] = useState('')
    const [focused, setFocused] = useState(false);
    const [title, setTitle] = useState('iFuture')
    const [display, setDisplay] = useState('flex')
    const [selected, setSelected] = useState("")

    const margin = useRef('49px')

    //FUNCTIONS

    const onClickCard = (id) => {
        goToDetailPage(navigate, id)
    }

    const handleSelection = (e) => {
        if (e.target.id === selected) {
            setSelected('')
            setSelectionValue('Todos')
        } else {
            setSelectionValue(e.target.value)
            setSelected(e.target.id);
        }
    }

    const handleFilter = (e) => {
        setFilterValue(e.target.value)
    }

    const onFocus = () => {
        setFocused(true);
        setTitle('Buscar');
        setDisplay('none');
        setSelectionValue('Todos')
    }

    const onBlur = () => {
        setFocused(false);
        setTitle('iFuture');
        setDisplay('flex');
        setSelectionValue('Todos')
        setSelected('0')
        setFilterValue('')
    }

    //FILTERS

    let arrayFiltrado = restaurantsData && restaurantsData.restaurants.filter((item, index, array) => {
        if (selectionValue === 'Todos') {
            return array
        } else {
            return item.category.toLowerCase().includes(selectionValue.toLowerCase())
        }
    }).filter((item, index, array) => {
        if (filterValue === '') {
            return array
        } else {
            return item.name.toLowerCase().includes(filterValue.toLowerCase())
        }
    })

    if (arrayFiltrado && focused && filterValue === '') {
        arrayFiltrado = [0]
    }

    if (arrayFiltrado?.length === 0) {
        arrayFiltrado = [1]
    }

    // MAP

    const restaurantList = arrayFiltrado && arrayFiltrado.map((item, index, array) => {
        if (item === 0) {
            return (
                <All.MessageSpan key={index}>Busque por nome de restaurante</All.MessageSpan>
            )
        } else if (item === 1) {
            return (
                <All.MessageSpan key={index}>Não encontramos :(</All.MessageSpan>
            )
        } else {
            return (
                <All.RestaurantCard key={index} onClick={() => onClickCard(item.id)}>
                    <img src={item.logoUrl} alt="Logo do restaurante" />
                    <All.InfoDiv>
                        <h3>{item.name}</h3>
                        <div>
                            <p>{`${item.deliveryTime} min`}</p>
                            <p>{`Frete R$ ${item.shipping},00`}</p>
                        </div>
                    </All.InfoDiv>
                </All.RestaurantCard>
            )
        }
    })

    const orderAlert = activeOrderData && activeOrderData.order && activeOrderArray.map((order, index) => {
        return (
            <All.ActiveOrderAlert key={index}>
                <div>
                    <AccessTimeIcon style={{ color: '#fff' }} fontSize="large" />
                </div>
                <All.ActiveTextDiv>
                    <All.ActiveTitle>Pedido em andamento</All.ActiveTitle>
                    <All.ActiveRestaurantName>{order.order.restaurantName}</All.ActiveRestaurantName>
                    <All.ActiveSubtotal>
                        SUBTOTAL R${order.order.totalPrice.toFixed(2)}
                    </All.ActiveSubtotal>
                </All.ActiveTextDiv>
            </All.ActiveOrderAlert>
        )
    })

    if (activeOrderData && activeOrderData.order) {
        margin.current = '165px'
    } else {
        margin.current = '49px'
    }

    return (
        <>
            <Header pageTitle={title} />
            <All.FeedContainer>

                <TextField
                    id="outlined-start-adornment"
                    sx={{ m: 1, width: '100%' }}
                    InputProps={{
                        startAdornment: <InputAdornment position="start"><SearchIcon /> </InputAdornment>,
                    }}
                    value={filterValue}
                    onChange={handleFilter}
                    placeholder="Restaurante"
                    onFocus={onFocus}
                    onBlur={onBlur}
                />
                <All.Categories display={display} >
                    <button className={selected === "1" ? "selected" : undefined} id={"1"} onClick={handleSelection} value='Árabe'>Árabe</button>
                    <button className={selected === "2" ? "selected" : undefined} id={"2"} onClick={handleSelection} value='Asiática'>Asiática</button>
                    <button className={selected === "3" ? "selected" : undefined} id={"3"} onClick={handleSelection} value='Baiana'>Baiana</button>
                    <button className={selected === "4" ? "selected" : undefined} id={"4"} onClick={handleSelection} value='Hamburguer'>Burger</button>
                    <button className={selected === "5" ? "selected" : undefined} id={"5"} onClick={handleSelection} value='Carnes'>Carnes</button>
                    <button className={selected === "6" ? "selected" : undefined} id={"6"} onClick={handleSelection} value='Italiana'>Italiana</button>
                    <button className={selected === "7" ? "selected" : undefined} id={"7"} onClick={handleSelection} value='Mexicana'>Mexicana</button>
                    <button className={selected === "8" ? "selected" : undefined} id={"8"} onClick={handleSelection} value='Petiscos'>Petiscos</button>
                    <button className={selected === "9" ? "selected" : undefined} id={"9"} onClick={handleSelection} value='Sorvetes'>Sorvetes</button>
                </All.Categories>

                <All.RestaurantCardContainer margin={margin.current} >
                    {loadingRestaurants && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
                    {!loadingRestaurants && restaurantsData && restaurantList}
                    {!loadingRestaurants && !restaurantsData && errorRestaurants}
                </All.RestaurantCardContainer>

                {!loadingActiveOrder && activeOrderData && orderAlert}
                {!loadingActiveOrder && !activeOrderData && errorActiveOrder}

            </All.FeedContainer>
            <FooterMenu selectedPage={'Feed'} />
        </>

    )
}