import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    margin: 4rem 12rem;

    > button {
        background-color: ${() => theme.COLORS.WHITE};
        border-radius: 36rem;
        padding: .4rem;
        box-sizing: content-box;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${() => theme.COLORS.BLACK};
        }

        &:first-child svg {
            margin-left: -.2rem;
        }

        &:last-child svg {
            margin-right: -.2rem;
        }
    }

    > #listOfComponents {
        display: flex;
        align-items: center;
        gap: 2.8rem;
 
        width: 80rem;
        height: 22.8rem;
        overflow: hidden;
        scroll-behavior: smooth;


        > div.componentBlock {
            display: flex;
            flex-direction: column;
            align-items: center;

            position: relative;

            background-color: ${() => theme.COLORS.WHITE};

            width: 80rem;
            height: 22.8rem;
            padding: 2.5rem 10rem;

            border-radius: 1.3rem;

            > p {
                text-align: center;
                font-weight: 700;

                &:first-child {
                    display: flex;
                    align-items: center;
                    gap: .1rem;

                    font-size: 1.3rem;
    
                    svg {
                        color: #FEE500;
                    }
                }

                &:last-child {
                    color: ${() => theme.COLORS.BLUE_SECONDARY};
                    font-size: 1.5rem;
                    border-bottom: 1px solid ${() => theme.COLORS.BLUE_SECONDARY};
                }

            }
            

            strong {
                margin: 1.4rem 0 1rem 0;
                width: 100%;

                font-size: 3rem;
                color: ${() => theme.COLORS.BLACK};
                text-align: center;

                span {
                    color: ${() => theme.COLORS.BLUE_PRIMARY};
                    border-bottom: 1px solid ${() => theme.COLORS.BLUE_PRIMARY};

                    margin-inline: .2rem;
                }
            }

            img {
                position: absolute;
                bottom: 0;
                right: 0;
            }
        }
    }
`