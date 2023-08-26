import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {Profile, ProfileSchema} from '../types/profile';
import {fetchProfileData} from '../services/fetchProfileData/fetchProfileData';
import {updateProfileData} from '../../modal/services/updateProfileData/updateProfileData';

const initialState: ProfileSchema = {
	readonly: true,
	isLoading: false,
	error: undefined,
	data: undefined,
	validateError: undefined,
};

export const profileSlice = createSlice({
	name: 'profile',
	initialState,
	reducers: {
		setReadonly: (state, action: PayloadAction<boolean>) => {
			state.readonly = action.payload;
		},
		canceledEdit: (state) => {
			state.form = state.data;
			state.readonly = true;
			state.validateError = undefined;
		},
		updateProfileData: (state, action: PayloadAction<Profile>) => {
			state.form = {
				...state.data,
				...action.payload
			};
		}
	},
	extraReducers: (builder) => {
		builder
			.addCase(fetchProfileData.pending, (state) => {
				state.isLoading = true;
				state.validateError = undefined;
			})
			.addCase(fetchProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
				console.log(state.form);
			})
			.addCase(fetchProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload;
			})
			.addCase(updateProfileData.pending, (state) => {
				state.isLoading = true;
				state.validateError = undefined;
			})
			.addCase(updateProfileData.fulfilled, (state, action: PayloadAction<Profile>) => {
				state.isLoading = false;
				state.data = action.payload;
				state.form = action.payload;
				state.readonly = true;
				console.log(state.form);
			})
			.addCase(updateProfileData.rejected, (state, action) => {
				state.isLoading = false;
				state.validateError = action.payload;
			});
	}
});

export const { actions: profileActions } = profileSlice;
export const { reducer: profileReducer } = profileSlice;

