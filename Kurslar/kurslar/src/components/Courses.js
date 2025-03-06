import Course from "./Course";

function Courses({courses, removeCourse}) {
    return (
        <div className={"courseMainDiv"}>
            <div>
                <h2>Kurslarım</h2>
            </div>
            <div className={'cardDiv'}>
                {
                    courses.map(
                        (course) => {
                            return (
                                <Course key={course.id} {...course} removeOneCourse={removeCourse}/> // => Obje içerisindeki bütün özelliklere erişilebilir
                            )
                        }
                    )
                }
            </div>
        </div>
    );
}

export default Courses;