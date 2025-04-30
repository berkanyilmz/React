import React from 'react';
import './App.css';
import Home from "./components/Home";
import Instructor from "./components/Instructor";
import InstructorList from "./components/InstructorList";
import RequestTag from "./components/RequestTag";
import EventActions from "./components/EventActions";
import LoginCheck from "./components/LoginCheck";

function App() {

    const instructors = {
        firstName: 'berkan',
        lastName: 'YILMAZ',
    }

    const instructorsList = [
        {
            firstName: 'berkan',
            lastName: 'YILMAZ'
        },
        {
            firstName: 'berkan1',
            lastName: 'YILMAZ'
        },
        {
            firstName: 'berkan2',
            lastName: 'YILMAZ'
        }
    ]

    return (
        <div className="App">
            <Home name={'berkan'} age={27} isUser={true}/>
            <Instructor instructorsNameLastName={instructors}/>
            <InstructorList instructorsListName={instructorsList}/>
            <RequestTag status={'loading'}/>
            <EventActions/>
            <LoginCheck/>
        </div>
    );
}

export default App;
