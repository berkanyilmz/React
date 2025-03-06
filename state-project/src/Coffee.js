import CoffeeBookGlasses from './images/coffee_book_glasses_140830_1024x600.jpg';
import CoffeeBookWindows from './images/coffee_book_windowsill_130911_1024x600.jpg';
import Cappccino from './images/coffee_cappuccino_foam_108167_1024x600.jpg';
import CoffeeMug from './images/coffee_mug_chair_124443_1024x600.jpg';
import './Coffee.css';

const coffeeMap = {
    CoffeeBookGlasses:CoffeeBookGlasses,
    CoffeeBookWindows:CoffeeBookWindows,
    Cappccino:Cappccino,
    CoffeeMug:CoffeeMug
}

function Coffee({coffeeName}) {
    return (
        <div className={'coffeeDiv'}>
            <img className={'coffeeImg'} src={coffeeMap[coffeeName]} alt={""}/>
        </div>
    )
}

export default Coffee;