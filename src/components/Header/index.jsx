import { Container } from './style.js'
import {Logo} from "../../assets/logo.jsx"

// eslint-disable-next-line react/prop-types
export function Header({whiteTheme = false}) {
    return (
        <Container $whiteTheme={whiteTheme}>
            <div id='title'>
                <Logo />
                <h1>StudiUcsal</h1>
            </div>

            <div id='links'>
                <a href="#">MENU</a>
                <a href="#">CURSOS</a>
                <a href="#">SOBRE NÓS</a>
                <a href="#">CONTATO</a>
            </div>

            <a href="#">CADASTRE-SE</a>
        </Container>
    )
}
