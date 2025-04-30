import React from 'react';
import { BsBasket2Fill } from "react-icons/bs";
import '../styles/Navbar.css'
import {useSelector} from "react-redux";

function Navbar() {
    const {totalQuantity} = useSelector((store) => store.cart);

    return (
        <nav className={"navbar"}>
            <div className={"navbar-container"}>
                <h3 className={"navbar-title"}>Kurs Uygulaması</h3>
                <div className={"navbar-cart"}>
                    <p className={"cart-count"}>{totalQuantity}</p>
                    <BsBasket2Fill className={"cart-icon"}/>
                </div>
            </div>
        </nav>
    );
}

export default Navbar;