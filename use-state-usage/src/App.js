import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [value, setValue] = useState(0);
  return (
    <div className="App">
      <button onClick={() => {
          setValue(value+1);
      }}>Arttır</button>
        <div>
            {value}
        </div>
    </div>
  );
}

export default App;
