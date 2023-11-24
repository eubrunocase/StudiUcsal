import { Container } from "./style.js"

// eslint-disable-next-line react/prop-types
export function Button ({text, whiteTheme = null}) {
    return (
        <Container $whiteTheme={whiteTheme}>
            {text}
        </Container>
    )
}