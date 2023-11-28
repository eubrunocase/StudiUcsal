import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header header"
    "form contact";

    width: 100%;
    height: 100vh;

    overflow: hidden;

    padding: 0 8rem 13rem;
`
export const Form = styled.form`
    grid-area: form;

    margin-left: 12vw;
    margin-bottom: 2rem;
    margin-top: 3rem;

    width: 47.5rem;
    

    display: flex;
    flex-direction: column;
    gap: 3.9rem;

    > div:first-child { 
        display: flex;
        flex-direction: column;
        gap: .5rem;
        color: ${() => theme.COLORS.BLACK};

        h2 {
            font-size: 3rem;
            font-weight: 700;
        }

        p {
            font-size: 1.4rem;
            width: 80%;
        }
    }

    > div:nth-child(2) {
        display: flex;
        flex-direction: column;
        gap: 4.3rem;
    }

    > button {
        align-self: flex-start;
        margin-left: 13rem;
    }
`

export const Contacts = styled.div`
    grid-area: contact;

    width: 43rem;
    height: 40rem;
    padding: 10%;

    margin-top: 5.5rem;
    margin-right: -29.8rem;

    background-color: ${() => theme.COLORS.BLUE_PRIMARY};

    border-radius: 3rem 0 0 3rem;

    display: flex;
    flex-direction: column;
    gap: 4.3rem;

    > strong {
        font-size: 3rem;
        color: ${() => theme.COLORS.WHITE};
    }

    > div.contactForm {
        font-size: 1.7rem;
        color: ${() => theme.COLORS.WHITE};

        display: flex;
        align-items: center;
        gap: 2rem;
    }
`