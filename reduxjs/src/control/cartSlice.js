import React from 'react';
import {createSlice} from "@reduxjs/toolkit";
import {courseItems} from "../courseItems";

export const initialState = {
    cartItems: courseItems,
    totalAmount: 0,
    totalQuantity: 3,
}

export const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
        clearCart: (state) => {
            state.cartItems = [];
            state.totalAmount = 0;
            state.totalQuantity = 0;
        },
        removeItem: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            const index = state.cartItems.indexOf(cartItem);
            state.cartItems.splice(index, 1);
        },
        increase: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            const index = state.cartItems.indexOf(cartItem);
            state.cartItems[index].quantity += 1;
        },
        decrease: (state, action) => {
            const itemId = action.payload;
            const cartItem = state.cartItems.find((item) => item.id === itemId);
            const index = state.cartItems.indexOf(cartItem);
            if (state.cartItems[index].quantity === 1) {
                state.cartItems.splice(index, 1);
            } else {
                state.cartItems[index].quantity -= 1;
            }
        },
        getTotals: (state) => {
            let {totalAmount, totalQuantity} = state.cartItems.reduce((cartTotal, cartItem) => {
                const {price, quantity} = cartItem;
                const itemTotal = price * quantity;
                cartTotal.totalAmount += itemTotal;
                cartTotal.totalQuantity += quantity;
                return cartTotal;
            }, {
                totalAmount: 0,
                totalQuantity: 0
            });
            state.totalAmount = totalAmount;
            state.totalQuantity = totalQuantity;
        }
    }
});

export const {clearCart, removeItem, increase, decrease, getTotals} = cartSlice.actions;