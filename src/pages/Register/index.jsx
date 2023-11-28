import { Container, Content, Form} from "./style.js"
import { Header } from "../../components/Header/index.jsx"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { FaBookBookmark } from "react-icons/fa6";

export function Register() {
    return(
        <Container>
            <Header />

            <Form>
                <div>
                    <h2>Crie uma conta!</h2>
                    <p>Já é membor? faça o <a href="#">Login</a></p>
                </div>

                <div id="input-wrapper">
                    <Input text="Primeiro Nome" placeholder="Nome"/>
                    <Input text="Sobrenome" placeholder="Nome"/>
                </div>

                <Input large={true} text="E-mail" placeholder="Exemplo@gmail.com" />

                <Input text="Senha" placeholder="Insira sua senha" eyeButton={true}/>

                <Input text="Data de nascimento" type="date"/>

                <div id="checklist">
                    <div>
                        <input type="checkbox" id="receiveEmail"/>
                        <label htmlFor="receiveEmail">Deseja receber atualizações pelo e-mail?</label>
                    </div>

                    <div>
                        <input type="checkbox" id="receiveEmail" required/>
                        <label htmlFor="receiveEmail">Li e estou de acordo com os <a href="#">Termos de Uso e Politica de Privacidade. </a></label>
                    </div>
                </div>

                <div id="finishForm">
                    <Button type="button" whiteTheme={true} text="Voltar"/>
                    <Button text="Criar conta" />
                </div>
            </Form>

            <Content>
                <p>
                    A plataforma de aprendizado online <strong>MAIS COMPLETA</strong> do mercado
                </p>
                <FaBookBookmark size={60}/>
            </Content>
        </Container>
    )
}