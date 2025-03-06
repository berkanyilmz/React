import task from "./Task";
import Task from "./Task";
import {useState} from "react";

function TaskList({tasks}) {

    return (
        <div className={'cardList'}>
                {
                    tasks.map((task, index) => {
                        return <Task key={index} task={task} />
                    })
                }
        </div>
    );
}

export default TaskList;