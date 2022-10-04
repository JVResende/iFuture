import React, { useContext, useState } from 'react'
import { GlobalStateContext } from '../../global/globalStateContext'
import * as All from './style'

export function ItemCard({ product, toggleGrayBackground, setToggleGrayBackground, details }) {

    const { shippingValue, storedArray, restaurantId, cartArray, setCartArray } = useContext(GlobalStateContext)


    const [popQty, setPopQty] = useState(false)
    const [itemQty, setItemQty] = useState(0)
    const [selectedItem, setSelectedItem] = useState([])

    // FUNCTIONS

    const addProduct = (qty) => {
        if (qty > 0) {
            localStorage.setItem('restaurantid', details.restaurant.id)
            restaurantId.current = localStorage.getItem('restaurantid')
            localStorage.setItem('shipping', details.restaurant.shipping)
            shippingValue.current = parseInt(localStorage.getItem('shipping'))
            if (!storedArray.current) {
                storedArray.current = []
            }
            const exists = cartArray?.find((e) => e.id === selectedItem.id)
            if (exists) {
                var newArray = storedArray.current.map((e) =>
                    e.id === selectedItem.id ? { ...exists, quantity: exists.quantity + qty } : e
                )
                localStorage.setItem('cart', JSON.stringify(newArray))
                storedArray.current = JSON.parse(localStorage.getItem('cart'))
                setCartArray(
                    cartArray.map((e) =>
                        e.id === selectedItem.id ? { ...exists, quantity: exists.quantity + qty } : e
                    ))
            } else {
                var newArray = [...storedArray.current, { ...selectedItem, quantity: qty }]
                localStorage.setItem('cart', JSON.stringify(newArray))
                storedArray.current = JSON.parse(localStorage.getItem('cart'))
                setCartArray([...cartArray, { ...selectedItem, quantity: qty }])
            }
        }
        toggleQty()
        setItemQty(0)
    }

    const deleteProduct = (product) => {
        const exists = cartArray.find((e) => e.id === product.id)
        setCartArray(cartArray.filter((e) => e.id !== exists.id))
        var newArray = storedArray.current.filter((e) => e.id !== exists.id)
        localStorage.setItem('cart', JSON.stringify(newArray))
        storedArray.current = JSON.parse(localStorage.getItem('cart'))
        if (storedArray.current?.length === 0) {
            localStorage.setItem('shipping', '0')
            shippingValue.current = parseInt(localStorage.getItem('shipping'))
            localStorage.setItem('restaurantid', '')
            restaurantId.current = parseInt(localStorage.getItem('restaurantid'))
        }
    }

    const toggleQty = (product) => {
        if (restaurantId.current && restaurantId.current !== '' && (restaurantId.current !== details.restaurant.id)) {
            if (window.confirm("Você já tem itens adicionados no seu carrinho. Deseja limpar o carrinho?")) {
                localStorage.setItem('cart', JSON.stringify([]))
                storedArray.current = JSON.parse(localStorage.getItem('cart'))
                localStorage.setItem('restaurantid', '')
                restaurantId.current = parseInt(localStorage.getItem('restaurantid'))
                localStorage.setItem('shipping', '0')
                shippingValue.current = parseInt(localStorage.getItem('shipping'))
                setPopQty(!popQty)
                setSelectedItem(product)
                setToggleGrayBackground(!toggleGrayBackground)
            }
        } else {
            setPopQty(!popQty)
            setSelectedItem(product)
            setToggleGrayBackground(!toggleGrayBackground)
        }
    }

    const handleItemQty = (e) => {
        setItemQty(e.target.value)
    }

    var exists = cartArray?.find((e) => e.id === product.id)
    var toggle = false
    if (exists) {
        toggle = true
    }

    return (
        <All.ProductCard>
            <All.ProductImg src={product.photoUrl} />
            <All.CardTextDiv>
                <All.NameCountDiv>
                    <All.ItemName>{product.name}</All.ItemName>
                    {toggle && <All.ItemCount>{exists.quantity}</All.ItemCount>}
                </All.NameCountDiv>
                <All.ItemDescription>{product.description}</All.ItemDescription>
                <All.PriceDiv>
                    <All.PriceSpan>R${product.price.toFixed(2)}</All.PriceSpan>
                    {
                        !toggle ?
                            <All.AddButton onClick={() => toggleQty(product)}>adicionar</All.AddButton> :
                            <All.RemoveButton onClick={() => { deleteProduct(product) }}>remover</All.RemoveButton>
                    }
                </All.PriceDiv>
            </All.CardTextDiv>
            {popQty &&
                <>
                    <All.TransparentQtyMask onClick={() => toggleQty(product)} />
                    <All.SetQty>
                        <span>Selecione a quantidade desejada</span>
                        <select value={itemQty} onChange={handleItemQty} >
                            <option value={0}>0</option>
                            <option value={1}>1</option>
                            <option value={2}>2</option>
                            <option value={3}>3</option>
                            <option value={4}>4</option>
                            <option value={5}>5</option>
                            <option value={6}>6</option>
                            <option value={7}>7</option>
                            <option value={8}>8</option>
                            <option value={9}>9</option>
                            <option value={10}>10</option>
                        </select>
                        <button onClick={() => addProduct(itemQty)}>ADICIONAR AO CARRINHO</button>
                    </All.SetQty>
                </>
            }
        </All.ProductCard>
    )
}