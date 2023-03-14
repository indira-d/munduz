import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { publicRequest } from '../utils';
import {toast} from 'react-toastify'


const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        cart: [],
        quantity: 0,
        total:0
    },
    reducers: {
        addToCart: (state, action) => {
            console.log('action', action)
            state.quantity += 1;
            state.cart = [...state.cart, action.payload];
            state.total = state.total + (action.payload?.product?.price * action.payload.quantity);
        },
		 removeFromCart: (state, action) => {
         
            state.cart = state.cart.filter(el => el.product._id !== action.payload);
			state.quantity -=1;
            state.total = state.total - (action.payload?.product?.price * action.payload?.quantity);
        },
        updateCartQuantity: (state, action) => {
            const index = state.cart.findIndex(it => it.product._id === action.payload.id)
            state.cart[index].quantity += action.payload.quantity
        },
		resetCart: (state) => {
			// state.cart = []
		}

    }
})


export const {addToCart, removeFromCart, resetCart, updateCartQuantity} = cartSlice.actions
export default cartSlice.reducer