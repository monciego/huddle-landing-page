import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        background-color: ${({ theme }) => theme.backgroundColor.body};
        color: ${({ theme }) => theme.colors.darkCyan};
        font-family: ${({ theme }) => theme.fontFamily.OpenSans};
    }   

    a{
        color: inherit;
        text-decoration: none;
    }

    p{
        color: ${({ theme }) => theme.colors.grayishBlue};
        line-height: 1.5;
    }

    img{
        max-width: 100%;
    }

`;

export default GlobalStyles;
