import { createGlobalStyle, css } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        font-family: 'Roboto', sans-serif;
    }
`

export const TextStyle = {
    Red: css`
        font-size: 16px;
        letter-spacing: -0.4px;
        font-weight: 500;
        color: #e8222e;
    `,
    Normal: css`
        font-size: 16px;
        letter-spacing: -0.4px;
        font-weight: 500;
    `,
    Gray: css`
        color: #b8b8b8;
        font-size: 16px;
        letter-spacing: -0.4px;
    `,
    Small: css`
        font-weight: 500;
        font-size: 12px;
        letter-spacing: -0.3px;
    `,
    SmallGray: css`
        font-size: 12px;
        letter-spacing: -0.3px;
        color: #b8b8b8;
`
}