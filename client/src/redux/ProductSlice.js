import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { publicRequest } from '../utils';
import {toast} from 'react-toastify'

const initialState = {
	products: [],
	product: {},
	loading: false
}

export const addProduct = createAsyncThunk(
	'products/addProduct',
	async (params) => {
		console.log('params66', params)
		try {
			const {data} = await publicRequest.post('/products', params)
			toast.success('Товар был добавлен')
			return data
		} catch (error) {
			console.log(error)
			 toast.error('error')
		}
	}
)

export const getAllProducts = createAsyncThunk(
	'products/getAllProducts',
	async() => {
		try {
			const {data} = await publicRequest.get('/products')
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getProduct = createAsyncThunk(
	'products/getProduct',
	async(id) => {
		try {
			const {data} = await publicRequest.get(`/products/${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const updateProduct = createAsyncThunk(
	'products/updateProduct',
	async(data) => {
		try {
			const {result} = await publicRequest.put(`/products/${data.id}`, data.product)
			toast.success('Товар был обновлен')
			return result
		} catch (error) {
			console.log(error)
			toast.error('error')
		}
	}
)

export const deleteProduct = createAsyncThunk(
	'products/deleteProduct',
	async(id) => {
		try {
			const {data} = await publicRequest.delete(`/products/${id}`, id)
			toast.success('Товар был удален')
			return data
		} catch (error) {
			console.log(error)
			toast.error(error)
		}
	}
)

export const productSlice = (createSlice({
	name: 'products',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//ADD PRODUCT
		builder
			.addCase(addProduct.pending, state => {
				state.loading = true
			}) 
			.addCase(addProduct.fulfilled, (state, action) => {
				console.log('action', action)
				state.loading = false
				state.products = [...state.products, action.payload]
			}) 
			.addCase(addProduct.rejected, state => {
				state.loading = false
			}) 
		//GET ALL PRODUCTS

			.addCase(getAllProducts.pending, state => {
				state.loading = true
			}) 
			.addCase(getAllProducts.fulfilled, (state, action) => {
				state.loading = false
				state.products = action.payload
			}) 
			.addCase(getAllProducts.rejected, state => {
				state.loading = false
			}) 

		//DELETE PRODUCT
			.addCase(deleteProduct.pending, state => {
				state.loading = true
			}) 
			.addCase(deleteProduct.fulfilled, (state, action) => {
				state.loading = false
				state.products = state.products.filter(it => it._id !== action.payload)
			}) 
			.addCase(deleteProduct.rejected, state => {
				state.loading = false
			}) 
		
		//GET PRODUCT
		   .addCase(getProduct.pending, state => {
				state.loading = true
			}) 
			.addCase(getProduct.fulfilled, (state, action) => {
				state.loading = false
				state.product = action.payload
			}) 
			.addCase(getProduct.rejected, state => {
				state.loading = false
			}) 
		
		//UPDATE PRODUCT

			.addCase(updateProduct.pending, state => {
				state.loading = true
			}) 
			.addCase(updateProduct.fulfilled, (state, action) => {
				console.log('action', action)
				state.loading = false
				const index = state.products.findIndex(it => it._id === action.payload?._id)
				state.products[index] = action.payload
			}) 
			.addCase(updateProduct.rejected, state => {
				state.loading = false
			}) 
	}
}))

export default productSlice.reducer