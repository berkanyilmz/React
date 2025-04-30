import React from 'react';
import {useSelector, useDispatch} from "react-redux";
import CourseItem from "./CourseItem";
import '../styles/CourseList.css';
import {clearCart} from "../control/cartSlice";

function CourseList() {
    const dispatch = useDispatch();
    const {cartItems, totalQuantity, totalAmount} = useSelector((store) => store.cart);
    return (
        <div className={"course-list"}>
            {
                totalQuantity < 1 ? (
                    <section>
                        <header>
                            <h2>Sepetim</h2>
                            <h4>Sepetinizde hiç ürün yok</h4>
                        </header>
                    </section>
                ) : (
                    <section>
                        <header>
                            <h2>Sepetim</h2>
                        </header>
                        <div>
                            {
                                cartItems.map((item) => {
                                    return <CourseItem {...item}/>

                                })
                            }
                        </div>
                        <footer>
                            <hr/>
                            <div>
                                <h4>Toplam Tutar: {totalAmount} TL</h4>
                                <button onClick={() => dispatch(clearCart())}>Temizle</button>
                            </div>
                        </footer>
                    </section>
                )
            }
        </div>
    );
}

export default CourseList;