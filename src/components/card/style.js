import styled from "styled-components";
import dropdown from "../../img/dropdown.svg"
import { TextStyle } from "../../style"

export const ProductCard = styled.div`
  display: flex;
  width: 90vw;
  height: 112px;
  border-radius: 8px;
  margin-top: 10px;
  border: solid 1px #b8b8b8;
  align-self: center;

  @media (min-width: 800px) {
    width: 30vw;
  }

`

export const ProductImg = styled.img`
  width: 30%;
  height: 100%;
  border-top-left-radius: 8px;
  border-bottom-left-radius: 8px;
`

export const CardTextDiv = styled.div`
  display: flex;
  width: 70%;
  height: 100%;
  flex-direction: column;
`

export const NameCountDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  max-height: 40px;
  min-height: 33px;
`

export const ItemName = styled.p`
  ${TextStyle.Red}
  margin-left: 15px;
  align-self: flex-end;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const ItemCount = styled.div`
  ${TextStyle.Red}
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #e8222e;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  min-width: 33px;
  height: 33px;
`

export const ItemDescription = styled.p`
  ${TextStyle.SmallGray}  
  margin: 10px 15px 0;
  -ms-hyphens: auto;
  -moz-hyphens: auto;
  -webkit-hyphens: auto;
  hyphens: auto;
  overflow-wrap: break-word;
  word-wrap: break-word;
`

export const PriceDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  height: 31px;
  margin-top: auto;
`

export const PriceSpan = styled.span`
  ${TextStyle.Normal}  
  margin-left: 15px;
`

export const AddButton = styled.button`
  ${TextStyle.Small}  
  background: none;
  border: 1px solid #000;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  width: 90px;

`

export const RemoveButton = styled.button`
  ${TextStyle.Small}  
  background: none;
  border: 1px solid #e8222e;
  border-top-left-radius: 8px;
  border-bottom-right-radius: 8px;
  cursor: pointer;
  height: 31px;
  width: 90px;
  color: #e8222e;

`


export const SetQty = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  background: white;
  width: 90%;
  z-index: 101;

  span {
    ${TextStyle.Normal}  
    margin: 30px 0;
  }

  button {
    background: transparent;
    border: none !important;
    color: lightskyblue;
    margin: 25px 5% 20px;
    color: #4f81a8;
    align-self: flex-end;
    cursor: pointer;
    font-size: 16px;
    letter-spacing: -0.4px;

    :hover {
      opacity: 0.8;
    }
  }

  select {
    ${TextStyle.Normal}  
    border: 1px solid #b8b8b8;
    padding: 16px;
    border-radius: 4px;
    width: 90%;
    height: 56px;
    -webkit-appearance: none;
    appearance: none;
    background-image: url(${dropdown});
    background-repeat: no-repeat;
    background-position: calc(100% - 16px) center;
  }
`

export const TransparentQtyMask = styled.div`
  position: absolute;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
`