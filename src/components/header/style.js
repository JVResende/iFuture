import styled from "styled-components";
import { TextStyle } from "../../style"

export const HeaderContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100vw;
    height: 44px;
    -webkit-backdrop-filter: blur(10px);
    backdrop-filter: blur(10px);
    box-shadow: 0 0.5px 0 0 rgba(0, 0, 0, 0.25);
    padding: 0 5%;

    button {
        background: none;
        border: none;
    }
`

export const Title = styled.h2`
    ${TextStyle.Normal}
    width: 100%;
    text-align: center;

`

export const TitleWithMargin = styled.h2`
    ${TextStyle.Normal}
    width: 100%;
    text-align: center;
    margin-right: 19px;
`