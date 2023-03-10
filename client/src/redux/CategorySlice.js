import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { publicRequest } from '../utils';
import {toast} from 'react-toastify'

const initialState = {
	categories: [],
	loading: false
}

export const addCategory = createAsyncThunk(
	'categories/addCategory',
	async (params) => {
		console.log('params', params)
		try {
			const {data} = await publicRequest.post('/categories', params)
			toast.success('Категория была добавлена')
			return data
		} catch (error) {
			console.log(error)
			 toast.error('error')
		}
	}
)

export const getAllCategories = createAsyncThunk(
	'categories/getAllCategories',
	async() => {
		try {
			const {data} = await publicRequest.get('/categories')
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getCategoryWithSubcategories = createAsyncThunk(
	'categories/getCategory',
	async(id) => {
		try {
			const {data} = await publicRequest.get(`/products/${id}`, id)
			return data
		} catch (error) {}
	}
)

// export const updateProduct = createAsyncThunk(
// 	'products/updateProduct',
// 	async(updatedProduct) => {
	
// 		try {
				
// 			const {data} = await publicRequest.put(`/products/${updatedProduct._id}`, updatedProduct)
// 			toast.success('Товар был обновлен')
// 			console.log('updatedData', data)
// 			return data

// 		} catch (error) {
// 			console.log(error)
// 			toast.error('error')
// 		}
// 	}
// )

export const deleteCategory = createAsyncThunk(
	'categories/deleteCategory',
	async(id) => {
		try {
			const {data} = await publicRequest.delete(`/categories/${id}`, id)
			toast.success(`Категория была удалена`)
			return data
		} catch (error) {
			console.log(error)
			toast.error(error)
		}
	}
)

export const categorySlice = (createSlice({
	name: 'categories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//ADD CATEGORY
		builder
			.addCase(addCategory.pending, state => {
				state.loading = true
			}) 
			.addCase(addCategory.fulfilled, (state, action) => {
				state.loading = false
				state.categories = [...state.categories, action.payload]
			}) 
			.addCase(addCategory.rejected, state => {
				state.loading = false
			}) 
		//GET ALL CATEGORIES

			.addCase(getAllCategories.pending, state => {
				state.loading = true
			}) 
			.addCase(getAllCategories.fulfilled, (state, action) => {
				state.loading = false
				state.categories = action.payload
			}) 
			.addCase(getAllCategories.rejected, state => {
				state.loading = false
			}) 

		//DELETE CATEGORIES
			.addCase(deleteCategory.pending, state => {
				state.loading = true
			}) 
			.addCase(deleteCategory.fulfilled, (state, action) => {
				state.loading = false
				state.categories = state.categories.filter(it => it._id !== action.payload)
			}) 
			.addCase(deleteCategory.rejected, state => {
				state.loading = false
			}) 
		
	 
		
		//UPDATE PRODUCT

			// .addCase(updateProduct.pending, state => {
			// 	state.loading = true
			// }) 
			// .addCase(updateProduct.fulfilled, (state, action) => {

			// 	console.log('action', action)
			// 	state.loading = false
			// 	const index = state.products.findIndex(it => it._id === action.payload._id)
			// 	console.log()
			// 	state.products[index] = action.payload
			// }) 
			// .addCase(updateProduct.rejected, state => {
			// 	state.loading = false
			// }) 
	}
}))

export default categorySlice.reducer