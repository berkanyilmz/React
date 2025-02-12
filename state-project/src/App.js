import './App.css';
import Coffee from "./Coffee";
import {useState} from "react";

function getRandomImage() {
  const coffeeArray = ['CoffeeBookGlasses', 'CoffeeBookWindows', 'Cappccino', 'CoffeeMug'];
  return coffeeArray[Math.floor(Math.random()*coffeeArray.length)];
}

function App() {
  const[coffees, setCoffees] = useState([]);

  const handleClick = () => {
    setCoffees([...coffees, getRandomImage()]);
  }

  const coffeeList = coffees.map((coffee, index) => {
    return <Coffee key={index} coffeeName={coffee} />
  })

  return (
    <div className="App">
      <button className={'appButton'} onClick={handleClick}>Gorüntü Ekle</button>
      <div className={'coffeeList'}>
        {coffeeList}
      </div>
    </div>
  );
}

export default App;
