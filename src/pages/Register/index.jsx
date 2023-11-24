import { Container, Form, Contact} from "./style.js"
import { Header } from "../../components/Header"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"
import { TiPhoneOutline } from "react-icons/ti";
import { MdOutlineMail } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";

export function Register() {
    return(
        <Container>
            <Header />

            <Form>
                <div>
                    <h2>Entre em contato!</h2>
                    <p>
                        Sinta-se livre para entrar em contato sempre que precisar! 
                        Responderemos assim que possivel.
                    </p>
                </div>

                <div>
                    <Input text="Nome" placeholder="Nome"/>
                    <Input text="E-mail" placeholder="exemplo@gmail.com"/>
                    <Input text="Mensagem" placeholder="Insira sua mensagem aqui"/>
                </div>

                <Button text="Enviar"/>
            </Form>

            <Contact>
                <strong>CONTATO</strong>

                <div className="contactForm">
                    <TiPhoneOutline size={26}/>
                    <span>71 9 9999-9999</span>
                </div>

                <div className="contactForm">
                    <FaInstagram size={26}/>
                    <span>StudiUcsal@gamail.com</span>
                </div>

                <div className="contactForm">
                    <MdOutlineMail size={26}/>
                    <span>@StudiUcsal</span>
                </div>

                <div className="contactForm">
                    <CiLocationOn size={26}/>
                    <span>R. Cap. Melo, 651 - Stella Maris, Salvador</span>
                </div>
            </Contact>
        </Container>
    )
}