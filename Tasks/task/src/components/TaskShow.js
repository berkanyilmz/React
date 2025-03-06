import {useContext, useState} from "react";
import TaskCreate from "./TaskCreate";
import TaskContext from "../context/task";

function TaskShow( {task} ) {

    const { editTaskById, deleteTaskById } = useContext(TaskContext);

    const [show, setShow] = useState(false);
    
    const handleDeleteClick = () => {
        // onDelete(task.id);
        deleteTaskById(task.id)
    }

    const handleEditClick = () => {
        setShow(!show);
    }

    const handleSubmit = (id, updatedTitle, updatedTaskDesc) => {
        setShow(false);
        //onUpdate(id, updatedTitle, updatedTaskDesc)
        editTaskById(id, updatedTitle, updatedTaskDesc)
    }

    return <div className={'task-show'}>
        {
            show ?
                <TaskCreate task={task} isUpdate={true} onUpdate={handleSubmit}/>
                : <div>
                    <h3 className={'task-title'}>Göreviniz</h3>
                    <p>{ task.title }</p>
                    <h3 className={'task-title'}>Yapılacaklar</h3>
                    <p> { task.taskDesc } </p>
                    <div>
                        <button className={'task-delete'} onClick={handleDeleteClick}>Sil</button>
                        <button className={'task-update'} onClick={handleEditClick}>Güncelle</button>
                    </div>
                </div>
        }


    </div>
}

export default TaskShow;