import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    display: flex;
    align-items: center;
    gap: 2rem;

    > button {
        background-color: ${() => theme.COLORS.BLACK};
        border-radius: 36rem;
        padding: .4rem;
        box-sizing: content-box;

        display: flex;
        align-items: center;
        justify-content: center;

        svg {
            color: ${() => theme.COLORS.WHITE};
        }

        &:first-child svg {
            margin-left: -.2rem;
        }

        &:last-child svg {
            margin-right: -.2rem;
        }
    }

    > #listOfCourses {
        display: flex;
        align-items: center;
        gap: 2.8rem;

        width: 103.8rem;
        overflow: hidden;
        scroll-behavior: smooth;

        .courseBlock {
            display: flex;
            flex-direction: column;
            gap: .4rem;

            > strong {
                font-size: 1.4rem;
            } 

            > span {
                font-size: 1.1rem;
            }

            .starsAndPrice {
                display: flex;
                align-items: center;
                gap: .8rem;

                margin-top: -.2rem;

                > div:first-child {
                   display: flex;
                   align-items: center;
                   gap: .4rem;

                   > span {
                    font-size: 1.4rem;
                    padding-bottom: .3rem;
                   }

                   > .stars {
                        display: flex;
                        align-items: center;

                       svg {
                        color: ${() => theme.COLORS.BLUE_PRIMARY};
                       }
                   }

                }

                > strong:last-child {
                   
                    font-size: 1.4rem;
                }
            }
        }
    }
`