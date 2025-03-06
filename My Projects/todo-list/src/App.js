import logo from './logo.svg';
import './App.css';
import HeaderAddTask from "./components/HeaderAddTask";
import TaskList from "./components/TaskList";
import {useState} from "react";
import task from "./components/Task";

function App() {

    const [tasks, setTasks] = useState([]);

    const addTask = (taskName) => {
        if (taskName === '') return;
        setTasks([...tasks, taskName]);
    }

  return (
    <div className="App">
      <HeaderAddTask addTask={addTask}/>
        <TaskList tasks={tasks}/>
    </div>
  );
}

export default App;
