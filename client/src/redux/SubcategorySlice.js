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

export const deleteSubcategory = createAsyncThunk(
	'subcategory/deleteSubcategory',
	async(id) => {
		try {
			const {data} = await publicRequest.delete(`/subcategories/${id}`, id)
			toast.success('Подкатегория была удалена')
			return data
		} catch (error) {
			console.log(error)
			toast.error(error)
		}
	}
)

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

		 //DELETE SUBCATEGORY
			.addCase(deleteSubcategory.pending, state => {
				state.loading = true
			}) 
			.addCase(deleteSubcategory.fulfilled, (state, action) => {
				state.loading = false
				state.subcategories = state.subcategories.filter(it => it._id !== action.payload)
			}) 
			.addCase(deleteSubcategory.rejected, state => {
				state.loading = false
			}) 
		
	 
		
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