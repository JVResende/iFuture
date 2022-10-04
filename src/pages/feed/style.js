import styled from "styled-components";
import { TextStyle } from "../../style"

export const FeedContainer = styled.main`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 90%;
    margin: 0 auto;

    @media (min-width: 800px) {
        width: 30%;
    }
`

export const Categories = styled.div`
    flex-shrink: 0;
    overflow-x: scroll;
    height: 42px;
    margin-bottom: 8px;
    width: 100%;
    display: ${(props) => props.display};

    ::-webkit-scrollbar {
        height: 8px;
    }
    ::-webkit-scrollbar-track {
        background-color: #bbb;
    }
    ::-webkit-scrollbar-button {
        display: none;
    }
    ::-webkit-scrollbar-thumb {
        background-color: #aaa;
    }
    ::-webkit-scrollbar-thumb:hover {
        background-color: #999;
    }

    .selected {
            color: #e8222e;
        }

    button {
        ${TextStyle.Normal}
        display: inline;
        width: auto;
        height: auto;
        background: transparent;
        cursor: pointer;    
        border: none !important;
        margin: 0 7%;
    }



    @media (max-width: 800px) {
        ::-webkit-scrollbar { 
        display: none; 
    }
    }
`

export const RestaurantCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: ${(props) => props.margin};
`

export const RestaurantCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    margin-bottom: 10px;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    cursor: pointer;

    img{
        width: 100%;
        height: 160px;
        border-top-left-radius: 8px;
        border-top-right-radius: 8px;
    }

`

export const InfoDiv = styled.div`
    display: flex;
    flex-direction: column;
    border-top: solid 1px #e0dcdc;

    h3 {
        ${TextStyle.Normal}
        width: 90%;
        margin: auto;
        margin-top: 10px;
        color: #e8222e;
        text-align: start;
    }

    div {
        width: 90%;
        margin: auto;
        display: flex;
        justify-content: space-between;
        margin-bottom: 10px;
        margin-top: 5px;
    }

    div p {
        ${TextStyle.Gray}
    }

`

export const ActiveOrderAlert = styled.div`
    display: flex;
    align-items: center;
    gap: 30px;
    width: 100vw;
    padding: 20px 30px;
    background: #e8222e;
    position: fixed;
    bottom: 49px;

    @media (min-width: 800px) {
        width: 30vw;
    }
`

export const ActiveTextDiv = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;

`

export const ActiveTitle = styled.p`
    ${TextStyle.Normal}
    color: #fff;
    font-weight: 300;
`
export const ActiveRestaurantName = styled.p`
    ${TextStyle.Normal}
    font-weight: 400;
`

export const ActiveSubtotal = styled.p`
    ${TextStyle.Normal}
    font-weight: bold; 
`

export const MessageSpan = styled.span`
    ${TextStyle.Normal}
    width: 100%;
    text-align: center;
    margin: 8px 0;
`