import styled from "styled-components";
import { TextStyle } from "../../style"

export const CartPageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

export const CartDiv = styled.div`
  display: flex;
  flex-direction: column;
  
  @media (min-width: 800px) {
    width: 30%;
    margin: 0 auto;
  }
`

export const AddressDiv = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #eeeeee;
  width: 100%;
  padding: 16px 5%;
`

export const AddressText = styled.span`
  ${TextStyle.Gray}
  margin: 4px 0;
`

export const MyAddressText = styled.span`
  ${TextStyle.Normal}
  margin: 4px 0;
`

export const EmptyCartText = styled.span`
  ${TextStyle.Normal}
  opacity: 0.89;
  text-align: center;
  margin: 20px 0;
`
export const ShippingText = styled.div`
  ${TextStyle.Normal}
  text-align: right;
  width: 90%;
  margin: 15px auto 0;

  @media (min-width: 800px) {
    width: 100%;
  }
  
`
export const TotalDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  margin: 10px auto;

  @media (min-width: 800px) {
    width: 100%;
  }

`
export const SubTotal = styled.span`
  ${TextStyle.Normal}
`
export const FinalValue = styled.span`
  font-size: 18px;
  font-weight: bold;
  letter-spacing: -0.4px;
  color: #e8222e;
`

export const PaymentDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 0 auto;

  @media (min-width: 800px) {
    width: 100%;
  }
`

export const PaymentTitle = styled.p`
  ${TextStyle.Normal}
  border-bottom: 1px solid #000;
  align-self: center;
  padding: 8px 0;
  width: 100%;
`

export const PaymentOptions = styled.div`
  display: flex;
  flex-direction: column;
  margin: 8px 0;
`

export const OptionDiv = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 8px;

  input[type='radio'] {
    -webkit-appearance: none;
    width: 20px;
    height: 20px;
    border: 2px solid black;
    border-radius: 50%;
    outline: none;
    margin-right: 8px;
  }

  input[type='radio']:before {
    content:'';
    display: block;
    width: 65%;
    height: 65%;
    margin: 17.5% auto;    
    border-radius: 50%;    
  }

  input[type='radio']:checked:before {
    background: black;
  }

  input[type="radio"]:checked {
    border-color: black;
  }

  label {
    ${TextStyle.Normal}
    display: flex;
    align-items: center;
  }
`

export const CartButton = styled.button`
  ${TextStyle.Normal}
  border: none;
  width: 90%;
  height: 42px;
  border-radius: 2px;
  text-align: center;
  margin: auto auto 64px;
  background-color:#e8222e;

  :hover {
    opacity: 0.9;
    cursor: pointer;
  }

  :disabled {
    background-color: rgba(232, 34, 46, 0.5);
  }

  :disabled:hover {
    opacity: 1;
    cursor: not-allowed;
  }

  @media (min-width: 800px) {
    width: 30%;
  }

`
