import React from 'react'
import { useParams } from "react-router-dom"
import { BASE_URL } from "../../constants/constants"
import { useRequestData } from '../../hooks/useRequestData'
import { Header, LoadingDiv, ItemCard } from '../../components'
import gif from '../../img/loading-gif.gif'
import { useState } from 'react'
import { useProtectedPage } from "../../hooks/useProtectedPage"
import * as All from './style'


export function DetailsPage() {

    useProtectedPage();

    const pathParams = useParams()
    const [toggleGrayBackground, setToggleGrayBackground] = useState(false)

    // REQUEST

    const [restaurantData, isLoading, error] = useRequestData(`${BASE_URL}restaurants/${pathParams.id}`)

    const detailsArray = [{ ...restaurantData }]


    // RENDER RESTAURANT DETAIL

    const detailsList = restaurantData && detailsArray.map(details => {
        return (
            <All.DetailsInfoDiv key={details.restaurant.id}>
                <All.RestaurantImg src={details.restaurant.logoUrl} alt='logo' />
                <All.RestaurtTitle>{details.restaurant.name}</All.RestaurtTitle>
                <All.RestaurantDescription>{details.restaurant.category}</All.RestaurantDescription>
                <All.DescriptionContainer>
                    <All.RestaurantDescription>{details.restaurant.deliveryTime} min</All.RestaurantDescription>
                    <All.RestaurantDescription>Frete R${details.restaurant.shipping.toFixed(2)}</All.RestaurantDescription>
                </All.DescriptionContainer>
                <All.RestaurantDescription>{details.restaurant.address}</All.RestaurantDescription>

                <All.ProductsTitle>Produtos</All.ProductsTitle>
                {details.restaurant.products.map(product => {
                    return (
                        <ItemCard
                            details={details}
                            key={product.id}
                            product={product}
                            toggleGrayBackground={toggleGrayBackground}
                            setToggleGrayBackground={setToggleGrayBackground} />
                    )
                }
                )}
            </ All.DetailsInfoDiv>
        )
    })

    return (
        <All.DetailsContainer toggleGrayBackground={toggleGrayBackground}>
            <Header buttonExists={true} pageTitle={'Restaurante'} />
            {isLoading && <LoadingDiv><img src={gif} alt="gif" /></LoadingDiv>}
            {!isLoading && restaurantData && detailsList}
            {!isLoading && !restaurantData && error}
        </All.DetailsContainer>
    )
}
