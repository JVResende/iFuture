import styled from "styled-components";
import { TextStyle } from "../../style"

export const ProfileContainer = styled.div`
    display: flex;
    flex-direction: column;
    min-height: 100vh;
`

export const ProfileDiv = styled.div`
    display: flex;
    flex-direction: column;
`

export const InfoDiv = styled.div`
    display: flex;
    margin: 8px 0;
    width: 90%;
    align-self: center;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        margin: 4px 0;
        ${TextStyle.Normal}
    }

    @media (min-width: 800px) {
        width: 30%;
    }

`

export const AddressDiv = styled.div`
    display: flex;
    background-color: #eeeeee;
    margin-bottom: 8px;
    width: 100%;
    padding: 8px 5%;
    justify-content: space-between;

    div {
        display: flex;
        flex-direction: column;
    }

    span {
        ${TextStyle.Normal}
        margin: 4px 0;
    }

    p {
        ${TextStyle.Gray}
        margin: 4px 0;
    }

    @media (min-width: 800px) {
        width: 30%;
        margin: 0 auto 8px;
        padding: 8px 0 8px 10px;
  }
`

export const HistoryDiv = styled.div`
    display: flex;
    flex-direction: column;
    width: 90%;
    margin: 0 auto 15px;

    @media (min-width: 800px) {
        width: 30%;
    }
`

export const HistoryTitle = styled.p`
    ${TextStyle.Normal}
    border-bottom: 1px solid #000;
    align-self: center;
    padding: 8px 0;
    width: 100%;
`

export const HistoryCard = styled.div`
    display: flex;
    flex-direction: column;
    gap: 9px;
    width: 100%;
    border: solid 1px #b8b8b8;
    border-radius: 8px;
    margin-top: 8px;
    padding: 16px;

    .name {
        ${TextStyle.Red}
        letter-spacing: -0.4px;
    }

    .price {
        ${TextStyle.Normal}
        font-weight: bold;
    }

    .date {
        ${TextStyle.Small}
    }

`

export const EmptyHistory = styled.span`
    ${TextStyle.Normal}
    opacity: 0.89;
    text-align: center;
    margin: 20px 0;
`

export const LogoutButton = styled.button`
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