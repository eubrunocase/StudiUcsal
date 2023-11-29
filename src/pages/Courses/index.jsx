import { Carousel } from "../../components/Carousel"
import { coursesCarousel } from "../../utils/coursesCarousel.js";
import { Header } from "../../components/Header"
import { Container, Content } from "./style.js";

export function Courses() {
    return (
        <Container>
            <Header />

            <Content>
                <div className="sectionCourses">
                    <strong>TERMINE AS AULAS DOS SEGUINTES CURSOS:</strong>
                    <Carousel arrayImages={coursesCarousel} />
                </div>

                <div className="sectionCourses">
                    <strong>CURSOS QUE INDICAMOS PARA VOCÊ:</strong>
                    <Carousel arrayImages={coursesCarousel} />
                </div>
            </Content>
        </Container>
    )
}