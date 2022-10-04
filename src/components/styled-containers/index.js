import styled from 'styled-components';
import { TextStyle } from "../../style"


export const FormsPageContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const PageTitle = styled.h2`
    ${TextStyle.Normal}
    text-align: center;
    color: #000;
    margin: 13px 0;
`

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 90%;

    @media (min-width: 800px) {
        width: 30%;
    }

`

export const FormButton = styled.button`
    ${TextStyle.Normal}
    border: none;
    width: 100%;
    height: 42px;
    border-radius: 2px;
    background-color:#e8222e;
    text-align: center;
    cursor: pointer;
    margin: 8px 0;

    :hover {
        opacity: 0.9;
    }

`

export const SignUpButton = styled.button`
    ${TextStyle.Normal}
    background: none;
    border: none;
    text-align: center;
    margin: 13px 0;

    :hover {
        cursor: pointer;
        text-decoration: underline;
    }
`

export const SignUpImg = styled.img`
    width: 104px;
    height: 58px;
    margin: 22px 128px 16px;
    object-fit: contain;
`

export const LoginImg = styled.img`
    width: 104px;
    height: 58px;
    margin: 68px 128px 16px;
    object-fit: contain;
`

export const LoadingDiv = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;

    img {
        width: 130px;
    }
    
`