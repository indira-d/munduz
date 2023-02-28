import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { publicRequest } from '../utils';
import {toast} from 'react-toastify'

const initialState = {
	subcategories: [],
	loading: false
}

export const addSubcategory = createAsyncThunk(
	'subcategories/addSubcategory',
	async ({categoryId, subcategory}) => {
		try {
			const {data} = await publicRequest.post('/subcategories', {categoryId, subcategory})
			toast.success('Подкатегория была добавлена')
			console.log('data22', data)
			return data
		} catch (error) {
			console.log(error)
			 toast.error('error')
		}
	}
)

export const getAllSubcategories = createAsyncThunk(
	'subcategories/getAllSubcategories',
	async() => {
		try {
			const {data} = await publicRequest.get('/subcategories')
			return data
		} catch (error) {
			console.log(error)
		}
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

// export const deleteProduct = createAsyncThunk(
// 	'products/deleteProduct',
// 	async(id) => {
// 		try {
// 			const {data} = await publicRequest.delete(`/products/${id}`, id)
// 			toast.success('Товар был удален')
// 			return data
// 		} catch (error) {
// 			console.log(error)
// 			toast.error(error)
// 		}
// 	}
// )

export const subcategorySlice = (createSlice({
	name: 'subcategories',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		//ADD SUBCATEGORY
		builder
			.addCase(addSubcategory.pending, state => {
				state.loading = true
			}) 
			.addCase(addSubcategory.fulfilled, (state, action) => {
				state.loading = false
				state.subcategories = [...state.subcategories, action.payload]
			}) 
			.addCase(addSubcategory.rejected, state => {
				state.loading = false
			}) 
		//GET ALL SUBCATEGORIES

			.addCase(getAllSubcategories.pending, state => {
				state.loading = true
			}) 
			.addCase(getAllSubcategories.fulfilled, (state, action) => {
				state.loading = false
				state.subcategories = action.payload
			}) 
			.addCase(getAllSubcategories.rejected, state => {
				state.loading = false
			}) 

		// //DELETE PRODUCT
		// 	.addCase(deleteProduct.pending, state => {
		// 		state.loading = true
		// 	}) 
		// 	.addCase(deleteProduct.fulfilled, (state, action) => {
		// 		state.loading = false
		// 		state.products = state.products.filter(it => it._id !== action.payload)
		// 	}) 
		// 	.addCase(deleteProduct.rejected, state => {
		// 		state.loading = false
		// 	}) 
		
	 
		
	// 	//UPDATE PRODUCT

	// 		.addCase(updateProduct.pending, state => {
	// 			state.loading = true
	// 		}) 
	// 		.addCase(updateProduct.fulfilled, (state, action) => {

	// 			console.log('action', action)
	// 			state.loading = false
	// 			const index = state.products.findIndex(it => it._id === action.payload._id)
	// 			console.log()
	// 			state.products[index] = action.payload
	// 		}) 
	// 		.addCase(updateProduct.rejected, state => {
	// 			state.loading = false
	// 		}) 
	// }
		}
}))

export default subcategorySlice.reducer