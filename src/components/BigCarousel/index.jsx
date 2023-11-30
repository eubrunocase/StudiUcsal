import { Container } from "./style.js"
import { useRef } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { MdKeyboardDoubleArrowRight } from "react-icons/md"
import bolinhasImagem from "../../assets/BOLINHAS_BANNER.svg"

// eslint-disable-next-line react/prop-types
export function BigCarousel() {

    let listOfComponentsRef = useRef(null)

    function btnPressPrev() {
        if (listOfComponentsRef.current) {
            let width = listOfComponentsRef.current.clientWidth;
            listOfComponentsRef.current.scrollLeft = listOfComponentsRef.current.scrollLeft - width;
        }
    }

    function btnPressNe() {
        if (listOfComponentsRef.current) {
            let width = listOfComponentsRef.current.clientWidth;
            listOfComponentsRef.current.scrollLeft = listOfComponentsRef.current.scrollLeft + width;
        }
    }

    return (
        <Container>
            <button onClick={btnPressPrev} className="previousButton">
                <IoIosArrowBack size={40}/>
            </button>

            <div ref={listOfComponentsRef} id="listOfComponents">

                <div className="componentBlock">
                    <p>
                        <MdKeyboardDoubleArrowRight size={13} /> 
                        A melhor plataforma de cursos online
                    </p>

                    <strong>
                        A PLATAFORMA DE APRENDIZADO ONLINE 
                        <span> MAIS COMPLETA</span> MAIS COMPLETA DO MERCADO
                    </strong>

                    <img src={bolinhasImagem}/>

                    <p>Encontre o curso ideal para você</p>

                </div>

            </div>

            <button onClick={btnPressNe} className="nextButton">
                <IoIosArrowForward size={40}/>
            </button>
        </Container>
    )
}