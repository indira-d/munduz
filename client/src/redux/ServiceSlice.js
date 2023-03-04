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
	}


}))

export default serviceSlice.reducer