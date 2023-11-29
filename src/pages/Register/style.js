import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: grid;
    grid-template-areas: 
    "header header"
    "form content";
    grid-template-rows: 9.3rem auto;
    grid-template-columns: 1fr 1fr;
    row-gap: 6.6rem;

    height: 100vh;
    width: 100%;
`

export const Form = styled.form`
    grid-area: form;

    display: flex;
    flex-direction: column;
    gap: 3.5rem;

    padding-left: 18rem;
    padding-bottom: 12.7rem;
    padding-right: 2rem;

    overflow-y: auto;
    overflow-x: hidden;
    ::-webkit-scrollbar-thumb {
        background-color: transparent;
    }

    > div:first-child {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        width: fit-content;
        margin-left: .3rem;


        h2 {
            font-size: 3rem;
        }

        p {
            font-size: 1.5rem;

            a {
                color: ${() => theme.COLORS.BLUE_SECONDARY};
            }
        }
    }

    > #input-wrapper {
        display: flex;
        align-items: center;
        gap: 3rem;
    }

    > #checklist {
        display: flex;
        flex-direction: column;
        gap: 1rem;

        div {
            display: flex;
            align-items: center;
            gap: .5rem;

            input {
                appearance: none;
                -webkit-appearance: none;
                -moz-appearance: none;

                border: 1px solid ${() => theme.COLORS.BLUE_SECONDARY};
                width: 1.2rem;
                height: 1.2rem;

                position: relative;

                &:checked {
                    background-color: ${() => theme.COLORS.BLUE_PRIMARY};
                }

            }

            label {
                font-size: 1.2rem;

                a {
                    font-weight: 700;
                    color: ${() => theme.COLORS.BLUE_SECONDARY};
                }
            }
        }
    }

    > #finishForm {
        display: flex;
        align-items: center;
        gap: 4rem;
    }
`

export const Content = styled.div`
    grid-area: content;

    width: 40rem;
    
    margin-left: 10rem;

    display: flex;
    flex-direction: column;
    gap: 4.4rem;

    place-content: center;

    > p {
        text-transform: uppercase;
        font-size: 3.5rem;
        font-weight: 700;
        text-align: center;

        strong {
            color: ${() => theme.COLORS.BLUE_PRIMARY};
        }
    }

    > svg {
        align-self: center;
    }
`