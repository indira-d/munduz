import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { publicRequest } from '../utils';
import {toast} from 'react-toastify'

const initialState = {
	orders: [],
    order: {},
	loading: false
}

export const addOrder = createAsyncThunk(
	'orders/addOrder',
	async (params) => {
		try {
			const {data} = await publicRequest.post('/orders', params)
			toast.success('Заказ был добавлен')
			return data
		} catch (error) {
			console.log(error)
			 toast.error('error')
		}
	}
)

export const getAllOrders = createAsyncThunk(
	'orders/getAllOrders',
	async() => {
		try {
			const {data} = await publicRequest.get('/orders')
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getOrder = createAsyncThunk(
    'orders/getOrder',
    async(id) => {
        try {
            const {data} = await publicRequest.get(`/orders/${id}`)
            return data
        } catch (error) {
            console.log(error)
        }
    }
)

export const updateOrder = createAsyncThunk(
	'orders/updateOrder',
	async(updatedOrder) => {
		console.log('updatedOrder', updatedOrder)
		try {
			const {data} = await publicRequest.put(`/orders/${updatedOrder.id}`, updatedOrder.product)
			toast.success('Заказ был обновлен')

			console.log('data', data)
			return data

		} catch (error) {
			console.log(error)
			toast.error('error')
		}
	}
)

export const deleteOrder = createAsyncThunk(
	'orders/deleteOrder',
	async(id) => {
		try {
			const {data} = await publicRequest.delete(`/orders/${id}`, id)
			toast.success(`Заказ был удален`)
			return data
		} catch (error) {
			console.log(error)
			toast.error(error)
		}
	}
)

export const orderSlice = (createSlice({
	name: 'orders',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//ADD ORDER
		builder
            .addCase(addOrder.pending, state => {
				state.loading = true
			}) 
			.addCase(addOrder.fulfilled, (state, action) => {
                console.log('action', action)
				state.loading = false
				state.orders = [...state.orders, action.payload]
			}) 
			.addCase(addOrder.rejected, state => {
				state.loading = false
			}) 
		//GET ALL ORDERS

			.addCase(getAllOrders.pending, state => {
				state.loading = true
			}) 
			.addCase(getAllOrders.fulfilled, (state, action) => {
				state.loading = false
				state.orders = action.payload
			}) 
			.addCase(getAllOrders.rejected, state => {
				state.loading = false
			})

        //GET ONE ORDER

            .addCase(getOrder.pending, state => {
                state.loading = true
            })
            .addCase(getOrder.fulfilled, (state, action) => {
                state.loading = false
                state.order = action.payload
            })
            .addCase(getOrder.rejected, state => {
                state.loading = false
            })

            //DELETE ORDER

			.addCase(deleteOrder.pending, state => {
				state.loading = true
			}) 
			.addCase(deleteOrder.fulfilled, (state, action) => {
                console.log('action', action)
				state.loading = false
				state.orders = state.orders.filter(it => it._id !== action.payload)
			}) 
			.addCase(deleteOrder.rejected, state => {
				state.loading = false
			})

		
		//UPDATE ORDER

			.addCase(updateOrder.pending, state => {
				state.loading = true
			})
			.addCase(updateOrder.fulfilled, (state, action) => {
                console.log('action', action)
				state.loading = false
                const index = state.orders.findIndex(it => it._id === action.payload._id)
				state.orders[index] = action.payload
			})
			.addCase(updateOrder.rejected, state => {
				state.loading = false
			})
	}
}))

export default orderSlice.reducer