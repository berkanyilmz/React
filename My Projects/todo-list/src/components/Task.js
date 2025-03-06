function Task( {task} ) {
    return (
            <li className={'card'}>
                <span>{task}</span>
                <input type={'checkbox'}/>
            </li>
    );
}

export default Task;