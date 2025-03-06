import Course from "./Course";
import {useState} from "react";
import {FaChevronLeft, FaChevronRight} from "react-icons/fa"

function Courses({courses, removeCourse}) {

    const [index, setIndex] = useState(0);
    const {content, title, price} = courses[index]

    const prevCourse = () => {
        setIndex((index) => {
            let newIndex = index - 1;
            if (newIndex < 0) {
                newIndex = courses.length - 1;
            }
            return newIndex;
        })
    }

    const nextCourse = () => {
        setIndex((index) => {
            let newIndex = index + 1;
            if (newIndex > courses.length - 1) {
                newIndex = 0;
            }
            return newIndex;
        })
    }

    const getRandomCourse = () => {
        let randomIndex = Math.floor(Math.random() * courses.length);
        setIndex(randomIndex);
    }

    return (
        <div className={"courseMainDiv"}>
            <div className={'courseTitleAndButton'}>
                <h2>Kurslarım</h2>
                <button className={'cardDeleteBtn'} onClick={getRandomCourse}>Rastgele Kurs Ata</button>
            </div>
            <div className={'cardDiv'}>
                <button className={'prevNext'} onClick={prevCourse}>
                    <FaChevronLeft/>
                </button>
                <div className={'card'}>
                    <div className={"cardTitlePrice"}>
                        <h2 className={"cardTitle"}>{title}</h2>
                        <h4 className={"cardPrice"}>{price} TL</h4>
                    </div>
                    <p>{content}</p>
                </div>
                <button className={'prevNext'} onClick={nextCourse}>
                    <FaChevronRight/>
                </button>
                {/*
                    courses.map(
                        (course) => {
                            return (
                                <Course key={course.id} {...course} removeOneCourse={removeCourse}/> // => Obje içerisindeki bütün özelliklere erişilebilir
                            )
                        }
                    )
                */
                }
            </div>
        </div>
    );
}

export default Courses;