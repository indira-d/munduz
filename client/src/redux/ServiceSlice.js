import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
import { publicRequest } from '../utils';
import {toast} from 'react-toastify'

const initialState = {
	services: [],
	service: {},
	loading: false
}

export const addService = createAsyncThunk(
	'services/addService',
	async (params) => {
		try {
			const {data} = await publicRequest.post('/services', params)
			toast.success('Услуга была добавлена')
			return data
		} catch (error) {
			console.log(error)
			toast.error('error')
		}
	}
)

export const getAllServices = createAsyncThunk(
	'services/getAllServices',
	async() => {
		try {
			const {data} = await publicRequest.get('/services')
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const getService = createAsyncThunk(
	'services/getService',
	async(id) => {
		try {
			const {data} = await publicRequest.get(`/services/${id}`)
			return data
		} catch (error) {
			console.log(error)
		}
	}
)

export const updateService = createAsyncThunk(
	'services/updateService',
	async(data) => {
		try {
			const {result} = await publicRequest.put(`/services/${data.id}`, data.service)
			toast.success('Услуга была обновлена')
			return result
		} catch (error) {
			console.log(error)
			toast.error('error')
		}
	}
)

export const deleteService = createAsyncThunk(
	'services/deleteService',
	async(id) => {
		try {
			const {data} = await publicRequest.delete(`/services/${id}`, id)
			toast.success('Услуга был удален')
			return data
		} catch (error) {
			console.log(error)
			toast.error(error)
		}
	}
)


export const serviceSlice = (createSlice({
	name: 'services',
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
		
			.addCase(addService.pending, state => {
				state.loading = true
			})
			.addCase(addService.fulfilled, (state, action) => {
				state.loading = false
				state.services = [...state.services, action.payload]
			})
			.addCase(addService.rejected, state => {
				state.loading = false
			})


			.addCase(getAllServices.pending, state => {
				state.loading = true
			})
			.addCase(getAllServices.fulfilled, (state, action) => {
				state.loading = false
				state.services = action.payload
			})
			.addCase(getAllServices.rejected, state => {
				state.loading = false
			})


		   .addCase(getService.pending, state => {
				state.loading = true
			}) 
			.addCase(getService.fulfilled, (state, action) => {
				state.loading = false
				state.service = action.payload
			}) 
			.addCase(getService.rejected, state => {
				state.loading = false
			}) 
			

			.addCase(updateService.pending, state => {
				state.loading = true
			}) 
			.addCase(updateService.fulfilled, (state, action) => {
				console.log('action', action)
				state.loading = false
				const index = state.services.findIndex(it => it._id === action.payload?._id)
				state.services[index] = action.payload
			}) 
			.addCase(updateService.rejected, state => {
				state.loading = false
			}) 


			.addCase(deleteService.pending, state => {
				state.loading = true
			}) 
			.addCase(deleteService.fulfilled, (state, action) => {
				state.loading = false
				state.services = state.services.filter(it => it._id !== action.payload)
			}) 
			.addCase(deleteService.rejected, state => {
				state.loading = false
			}) 
	}

}))

export default serviceSlice.reducer