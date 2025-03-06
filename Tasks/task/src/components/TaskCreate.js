import {useContext, useState} from "react";
import TaskContext from "../context/task";

function TaskCreate( { task, isUpdate, onUpdate } ) {

    const { editTaskById, createTask } = useContext(TaskContext);

    const [title, setTitle] = useState(task ? task.title : '');
    const [taskDesc, settaskDesc] = useState(task ? task.taskDesc : '');

    const handleChange = (event) => {
        setTitle(event.target.value);
    }

    const handleTaskChange = (event) => {
        settaskDesc(event.target.value);
    }

    const handleSubmit = (event) => {
        event.preventDefault();
        if (isUpdate) {
            onUpdate(task.id, title, taskDesc)
            //editTaskById(task.id, title, taskDesc);
        } else {
            //onCreate(title, taskDesc);
            createTask(title, taskDesc);
        }

        setTitle('');
        settaskDesc('');
    }

    return (
        <div>
            {isUpdate ?
                <div>
                    <h3>Lütfen Görevi Düzenleyiniz</h3>
                    <form className={'task-form'} onSubmit={handleSubmit}>
                        <label className={'task-label'}>Başlığı Düzenleyin</label>
                        <input value={title} onChange={handleChange} className={'task-input'}/>
                        <label className={'task-label'}>Görevi Düzenleyin</label>
                        <textarea value={taskDesc} onChange={handleTaskChange} className={'task-input'} rows={5}/>
                        <button className={'task-button update-button'} onClick={handleSubmit}>Düzenle</button>
                    </form>
                </div>
                :
                <div className={'task-create'}>
                    <h3>Lütfen Görev Ekleyiniz</h3>
                    <form className={'task-form'} onSubmit={handleSubmit}>
                        <label className={'task-label'}>Başlık</label>
                        <input value={title} onChange={handleChange} className={'task-input'}/>
                        <label className={'task-label'}>Görev Giriniz</label>
                        <textarea value={taskDesc} onChange={handleTaskChange} className={'task-input'} rows={5}/>
                        <button className={'task-button'} onClick={handleSubmit}>Oluştur</button>
                    </form>
                </div>
            }
        </div>

    );
}

export default TaskCreate;