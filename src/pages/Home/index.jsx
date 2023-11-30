import { BigCarousel } from "../../components/BigCarousel/index.jsx";
import { Header } from "../../components/Header";
import { Container, Content } from "./style.js";
import floatingCharacter from "../../assets/FLOATING_CHARACTER.png"
import { Carousel } from "../../components/Carousel/index.jsx";
import { coursesCarousel } from "../../utils/coursesCarousel.js";

export function Home() {

  return (
    <Container>
      <div>
        <Header whiteTheme={true} />

        <BigCarousel />
      </div>

      <Content>
        <div>
          <div>
            <strong>Desenvolva as suas habilidades</strong>
          </div>

          <img src={floatingCharacter} alt="" />

          <div>
            <strong>Aprenda com os melhores da internet</strong>
          </div>
        </div>

        <div className="sectionCourses">
          <strong>CURSOS EM DESTAQUE NO <span>STUDIUCSAL</span>:</strong>
          <Carousel arrayImages={coursesCarousel} />
        </div>
      </Content>
    </Container>
  )
}

