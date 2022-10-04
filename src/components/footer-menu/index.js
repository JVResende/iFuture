import React, { useContext } from "react";
import { AiOutlineHome } from "@react-icons/all-files/ai/AiOutlineHome";
import { AiOutlineShoppingCart } from "@react-icons/all-files/ai/AiOutlineShoppingCart";
import { BsPerson } from "@react-icons/all-files/bs/BsPerson";
import { useNavigate } from "react-router-dom";
import { goToCartPage, goToFeedPage, goToProfilePage } from "../../routes/Coordinator";
import * as All from './style'
import { GlobalStateContext } from "../../global/globalStateContext";


export function FooterMenu({ selectedPage }) {

    const navigate = useNavigate();

    const { storedArray } = useContext(GlobalStateContext)

    return (
        <All.FooterContainer>
            <AiOutlineHome
                onClick={() => { goToFeedPage(navigate) }}
                style={selectedPage === "Feed" ? { color: '#e8222e', fontSize: '30px', cursor: 'pointer' } : { color: '#b8b8b8', fontSize: '30px', cursor: 'pointer' }}
            />
            <All.CartDiv>
                <AiOutlineShoppingCart
                    onClick={() => { goToCartPage(navigate) }}
                    style={selectedPage === "Cart" ? { color: '#e8222e', fontSize: '30px', cursor: 'pointer' } : { color: '#b8b8b8', fontSize: '30px', cursor: 'pointer' }}
                />
                {storedArray.current?.length > 0 && <All.CardCount><span>{storedArray.current?.length}</span></All.CardCount>}
            </All.CartDiv>
            <BsPerson
                onClick={() => { goToProfilePage(navigate) }}
                style={selectedPage === "Profile" ? { color: '#e8222e', fontSize: '30px', cursor: 'pointer' } : { color: '#b8b8b8', fontSize: '30px', cursor: 'pointer' }}
            />
        </All.FooterContainer>
    )
}