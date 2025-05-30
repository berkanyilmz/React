import './App.css';
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import {useEffect, useContext} from "react";
import TaskContext from "./context/task";

function App() {

    const {fetchTask} = useContext(TaskContext);

  useEffect(() => {
      fetchTask();
  }, [])



  return (
      <div className="App">
        <TaskCreate/>
        <h1>Görevler</h1>
        <TaskList/>
      </div>
  );
}

export default App;
