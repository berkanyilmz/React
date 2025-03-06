import './App.css';
import {useReducer} from "react";

const initialValue = 0;

const reducer = (state, action) => {
    switch (action) {
        case "ARTTIR":
          return state + 1;
        case "AZALT":
          return state - 1;
        case "SIFIRLA":
          return 0;
        default:
          return state;
    }
}

function App() {

  const [count, dispatch] = useReducer(reducer, initialValue);

  return (
    <div className="App">
      <div>{count}</div>
      <button onClick={() => dispatch('ARTTIR')}>Arttır</button>
      <button onClick={() => dispatch('AZALT')}>Azalt</button>
      <button onClick={() => dispatch('SIFIRLA')}>Sıfırla</button>
    </div>
  );
}

export default App;
