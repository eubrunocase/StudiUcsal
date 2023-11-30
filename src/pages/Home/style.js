import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    flex-direction: column;

    height: 100vh;
    width: 100%;

    > div:first-child {
        display: flex;
        flex-direction: column;

        background-color: ${() => theme.COLORS.BLUE_PRIMARY};
        padding-bottom: 4.8rem;

        > div:last-child {
        align-self: center;
    }
    }
`

export const Content = styled.div`
    display: flex;
    flex-direction: column; 
    align-items: start;
    gap: 3rem;

    padding: 0 9rem 7rem 9rem;

    > div:first-child {
        display: flex;
        gap: 1rem;
        justify-content: center;
        box-sizing: border-box;

        margin-left: 5rem;

        div {
            height: 7rem;
            width: 40rem;

            margin-top: .4rem;
            border-bottom: 3px solid ${() => theme.COLORS.BLACK};

            display: flex;

            &:first-child {
                justify-content: end;

                strong {
                    width: 20rem;
                }
            }

            &:last-child {
                justify-content: start;
                
                strong {
                    width: 25rem;
                }
            }

            strong {
                font-size: 2.5rem;
                margin-bottom: 1rem;
            }
        }

        img {
            margin-top: -8.4rem;
        }
    }

    > .sectionCourses {
        display: flex;
        flex-direction: column;
        gap: 1.4rem;

        strong:first-child {
            font-size: 2.5rem;
            color: ${() => theme.COLORS.BLACK};
            margin-left: 6.4rem;

            span {
                color: ${() => theme.COLORS.BLUE_SECONDARY};
            }
        }
    }
`