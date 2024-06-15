import { PayloadAction, createSlice } from '@reduxjs/toolkit'
import { Profile, ProfileSchema } from '../types/profile'
import { fetchProfileData } from '../services/fetchProfileData/fetchProfileData'
import { updateProfileData } from '../services/updateProfileData/updateProfileData'

const initialState: ProfileSchema = {
	isLoading: false,
	readonly: true,
	error: undefined,
	data: undefined,
	form: undefined
}

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadOnly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload
		},
		updateProfileData: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.form,
				...action.payload
			}
		},
		cancelEdit: (state) => {
			state.readonly = true
			state.validateErrors = undefined
			state.form = state.data
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state, action) => {
				state.error = undefined
				state.isLoading = true
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.error = action.payload
			})
			.addCase(updateProfileData.pending, (state, action) => {
				state.isLoading = true
				state.validateErrors = action.payload
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false
				state.data = action.payload
				state.form = action.payload
				state.readonly = true
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false
				state.validateErrors = action.payload
			})
	},
})

export const { actions: profileActions } = profileSlice
export const { reducer: profileReducer } = profileSlice
