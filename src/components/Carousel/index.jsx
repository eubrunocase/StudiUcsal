import { Container } from "./style";
import { IoIosArrowBack, IoIosArrowForward} from "react-icons/io";
import { IoMdStarHalf, IoMdStar  } from "react-icons/io";
import { useRef } from "react";

// eslint-disable-next-line react/prop-types
export function Carousel({arrayImages = []}) {

    let listOfCoursesRef = useRef(null)

    function btnPressPrevious() {
        if (listOfCoursesRef.current) {
            let width = listOfCoursesRef.current.clientWidth;
            listOfCoursesRef.current.scrollLeft = listOfCoursesRef.current.scrollLeft - (width + 30);
        }
    }

    function btnPressNext() {
        if (listOfCoursesRef.current) {
            let width = listOfCoursesRef.current.clientWidth;
            listOfCoursesRef.current.scrollLeft = listOfCoursesRef.current.scrollLeft + (width + 30);
        }
    }

    return (
        <Container>
            <button onClick={btnPressPrevious} className="previousButton">
                <IoIosArrowBack size={40}/>
            </button>

            <div ref={listOfCoursesRef} id="listOfCourses">

                {
                    Array.isArray(arrayImages) && arrayImages.length > 0 ? (
                        arrayImages.map((course, index) => {
                            return(
                                <div className="courseBlock" key={index}>
                                    <img src={course.img} />
    
                                    <strong>{course.title}</strong>
    
                                    <span>{course.author}</span>
    
                                    <div className="starsAndPrice">
                                        <div>
                                            <span>{course.rated}</span>
                                            
                                            <div className="stars">
                                                <IoMdStar size={14}/>
                                                <IoMdStar size={14}/>
                                                <IoMdStar size={14}/>
                                                <IoMdStar size={14}/>
                                                <IoMdStarHalf size={14} />
                                            </div>
                                        </div>
    
                                        <strong> R${course.price}</strong>
                                    </div>
                                </div>
                            )
                        })
                    ) : <p>Nenhum curso disponível</p>
                    
                }

            </div>

            <button onClick={btnPressNext} className="nextButton">
                <IoIosArrowForward size={40}/>
            </button>
        </Container>
    )
}