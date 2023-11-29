import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header"
    "content";
    grid-template-rows: 9.3rem auto;
    row-gap: 8.6rem;

    height: 100vh;
    width: 100%;
`

export const Content = styled.div`
    grid-area: content;

    padding: 0 7rem 7rem 11rem;

    display: flex;
    flex-direction: column;
    gap: 6rem;

    overflow-y: scroll;
    overflow-x: hidden;

    > div.sectionCourses {
        display: flex;
        flex-direction: column;
        gap: 3.5rem;

        strong:first-child {
            color: ${() => theme.COLORS.BLACK};
            font-size: 3rem;
            font-weight: 700;
            margin-left: 6rem;
        }
    }
`