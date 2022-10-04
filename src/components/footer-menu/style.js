import styled from "styled-components";

export const FooterContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    position: fixed;
    bottom: 0;
    height: 49px;
    background-color: white;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0 0 0.5px rgba(0, 0, 0, 0.25);

`

export const CartDiv = styled.div`
    position: relative;
`

export const CardCount = styled.span`
    position: absolute;
    background-color: #e8222e;
    color: white;
    border-radius: 1rem;
    width: 16px;
    height: 16px;
    font-size: 14px;
    text-align: center;
    z-index: 1;
    font-weight: 700;
    right: -11px;
    top: -4px;

`