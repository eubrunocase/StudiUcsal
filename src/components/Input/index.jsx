import { Container } from "./style.js"

// eslint-disable-next-line react/prop-types
export function Input({text, large = false, ...rest}) {
    return(
        <Container $large={large}>
            <strong>{text}</strong>
            <input {...rest} />
        </Container>
    )
}