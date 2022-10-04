import React from "react";
import gif from '../../img/home-gif.gif'
import { HomePageContainer } from "./style";
import { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import { goToFeedPage } from '../../routes/Coordinator';

export function HomePage() {

    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            goToFeedPage(navigate)
        }, 3000)
    }, [])
    

    return (
        <HomePageContainer>
            <img src={gif} alt='gif'/>
        </HomePageContainer>
    )
}