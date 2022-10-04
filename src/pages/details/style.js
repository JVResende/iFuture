import styled from "styled-components";
import { TextStyle } from "../../style"

export const DetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  ::after{
    content:'';
    height: ${(props) => props.toggleGrayBackground ? '100%' : '0'};
    width: 100%;
    background: rgba(0,0,0,0.5);
    position: absolute;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
  }
`

export const DetailsInfoDiv = styled.div`
  display: flex;
  flex-direction: column;
  width: 90%;
  margin: 16px auto;

  @media (min-width: 800px) {
    width: 30%;
  }
`

export const RestaurantImg = styled.img`
  width: 100%;
  height: 160px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`

export const RestaurtTitle = styled.h2`
  ${TextStyle.Red}
  margin: 10px 0;
`
export const RestaurantDescription = styled.span`
  ${TextStyle.Gray}
  margin-bottom: 10px;
`

export const DescriptionContainer = styled.div`
  display: flex;
  gap: 50px;
`
export const ProductsTitle = styled.div`
  ${TextStyle.Normal}
  border-bottom: 1px solid #000;
  padding: 8px 0;
  width: 100%;
`
