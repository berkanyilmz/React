import logo from './logo.svg';
import './App.css';
import { useState, useEffect } from 'react';

function App() {

    const [b, setB] = useState(0);
    const [c, setC] = useState(0);

    useEffect(() => {

    })

  return (
    <div className="App">
      <div className={'firstDiv'}>
        <button onClick={() => setB(b+1)}>b++</button>
        <div>b : {b}</div>
      </div>
        <div>
            <button onClick={() => setC(c+1)}>c++</button>
            <div>c : {c}</div>
        </div>
    </div>
  );
}

export default App;
