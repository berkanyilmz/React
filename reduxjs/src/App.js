import './App.css';
import Navbar from "./components/Navbar";
import CourseList from "./components/CourseList";
import {useEffect} from "react";
import {getTotals} from "./control/cartSlice";
import {useSelector, useDispatch} from "react-redux";

function App() {
    const {cartItems} = useSelector((store) => store.cart);
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getTotals());
    }, [cartItems]);

    return (
        <div className="App">
            <Navbar/>
            <CourseList/>
        </div>
    );
}

export default App;
