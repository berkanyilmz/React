import {useState} from "react";

function HeaderAddTask ({addTask}) {

    const [taskName, setTaskName] = useState('');

    const submitHandler = (event) => {
        event.preventDefault();
        addTask(taskName);
        setTaskName('');
    }

    const changeHandler = (event) => {
        setTaskName(event.target.value);
    }

    return (
        <div className={'HeaderAdd'}>
            <form onSubmit={submitHandler}>
                <label>Görev Ekleyiniz</label>
                <input type={'text'} onChange={changeHandler}/>
                <button type={'submit'}>Görev Ekle</button>
            </form>
        </div>
    )
}

export default HeaderAddTask;