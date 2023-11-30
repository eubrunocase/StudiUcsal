import { Container } from './style.js'
import {Logo} from "../../assets/logo.jsx"
import { Link } from 'react-router-dom'

// eslint-disable-next-line react/prop-types
export function Header({whiteTheme = false}) {
    return (
        <Container $whiteTheme={whiteTheme}>
            <div id='title'>
                <Logo />
                <h1>StudiUcsal</h1>
            </div>

            <div id='links'>
                <Link to={"/"}>MENU</Link>
                <Link to={"/courses"}>CURSOS</Link>
                <Link to={"/aboutus"}>SOBRE NÓS</Link>
                <Link to={"/contact"}>CONTATO</Link>
            </div>

            <Link to={"/register"}>CADASTRE-SE</Link>
        </Container>
    )
}
