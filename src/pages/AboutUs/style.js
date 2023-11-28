import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: 9.3rem auto;
    gap: 4rem;

    width: 100%;
    height: 100vh;

    overflow: hidden;

    position: relative;
`

export const Content = styled.div`
    grid-area: content;

    display: flex;
    flex-direction: column;

    width: 90rem;
    height: 100%;

    margin: 0 auto 2.5rem;

    > div:first-child {

        display: flex;
        flex-direction: column;
        gap: 2.8rem;

        h2 {
            font-size: 4rem;
            color: ${() => theme.COLORS.BLACK};
        } 

        p {
            font-size: 1.5rem;
        }
    }

`