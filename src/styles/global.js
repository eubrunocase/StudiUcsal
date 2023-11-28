import { createGlobalStyle } from "styled-components"
import { theme } from "./theme"

export const GlobalStyle = createGlobalStyle`
    ::-webkit-scrollbar-track {
        background: transparent;
    }

    ::-webkit-scrollbar-thumb {
        background: transparent;
        border-radius: 8px;
    }

    &:hover::-webkit-scrollbar-thumb {
        background-color: ${( )=> theme.COLORS.BLUE_PRIMARY};
    }

    ::-webkit-scrollbar {
        width: 5px;
    }

    * {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    :root {
        font-size: 62.5%;
        font-family: 'Inika', serif;
    }

    a {
        text-decoration: none;
        color: ${() => theme.COLORS.WHITE};
    }

    a:hover,
    button:hover {
        filter: brightness(0.88);
    }

    a,
    button {
        transition: all 250ms ease-out ;
        cursor: pointer;
    }

    ul,
    ol {
        list-style: none;
    }

    button,
    input {
        border: none;
        outline: none;
    }
`