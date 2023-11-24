import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    grid-area: header;

    font-size: 1.5rem;
    color: ${(props) => props.$whiteTheme ? theme.COLORS.BLACK : theme.COLORS.WHITE};

    margin: 3.5rem auto 0;
    padding-inline: 2.2rem;

    width: 106.1rem;
    height: 5.8rem; 

    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 3rem;

    background-color: ${(props) => props.$whiteTheme ? theme.COLORS.WHITE : theme.COLORS.BLUE_PRIMARY};

    > div#title {
        font-weight: 700;
        font-size: 1.3rem;

        display: flex;
        align-items: center;
        gap: 1.2rem;

        ${(props) => props.$whiteTheme ? `
            svg path {
                fill: ${theme.COLORS.BLUE_PRIMARY};
            }
            ` : null
            }
    }

    > div#links {
        display: flex;
        align-items: center;
        gap: 5rem;

        a {
            color: ${(props) => props.$whiteTheme ? theme.COLORS.BLACK : theme.COLORS.WHITE};
        }
    }

    > a {
        color: ${(props) => props.$whiteTheme ? theme.COLORS.BLACK : theme.COLORS.WHITE};
    }
`