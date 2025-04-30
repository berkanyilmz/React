import React from 'react';
import { FaChevronUp } from "react-icons/fa";
import { FaChevronDown } from "react-icons/fa";
import '../styles/CourseItem.css'
import {useDispatch} from "react-redux";
import {increase, removeItem, decrease} from "../control/cartSlice";

function CourseItem({id, title, price, img, quantity}) {
    const dispatch = useDispatch();
    return (
        <div key={id} className={"course-item"}>
            <img src={img} alt={title} style={{width: '100px', height: '100px'}}/>
            <div>
                <h3>{title}</h3>
                <p>Fiyat: {price} TL</p>
                <p>Miktar: {quantity}</p>
            </div>
            <div className={"quantity-controls"}>
                <button onClick={() => {dispatch(increase(id))}}>
                    <FaChevronUp/>
                </button>
                <p>{quantity}</p>
                <button onClick={() => {dispatch(decrease(id))}}>
                    <FaChevronDown/>
                </button>
            </div>
            <button className={"delete"} onClick={() => {dispatch(removeItem(id))}}>Sil</button>
        </div>
    );
}

export default CourseItem;