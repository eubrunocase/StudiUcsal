import styled from "styled-components";
import { theme } from "../../styles/theme";

export const Container = styled.button`
    border-radius: 3rem;
    background-color: ${(props) => props.$whiteTheme ? theme.COLORS.GRAY_PRIMARY : theme.COLORS.BLUE_PRIMARY};
    padding: 1rem 2.3rem;
    color: ${(props) => props.$whiteTheme ? theme.COLORS.GRAY_SECONDARY : theme.COLORS.WHITE};
`