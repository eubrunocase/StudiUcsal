import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.div`
    padding: 1.3rem 2.4rem 1.5rem;

    border-radius: 2rem;
    width: ${(props) => props.$large ? "100%" : "28rem"};

    display: flex;
    flex-direction: column;
    gap: .5rem;
    align-items: start;

    background-color: ${() => theme.COLORS.GRAY_PRIMARY};

    position: relative;

    > strong {
        font-weight: 700;
        font-size: 1.2rem;
    }

    > input {
        background: transparent;
        font-size: 1.4rem;

        &placeholder {
            color: ${() => theme.COLORS.GRAY_SECONDARY};
        }
    }

    > button {
        position: absolute;
        right: 3rem;
        bottom: 1rem;

        background: transparent;
    }
`