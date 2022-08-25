import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
	name: 'user',
	initialState: {
		currentUser: null,
		JWT: null,
		isFetching: false,
		error: false,
	},
	reducers: {
		loginStart: (state) => {
			state.isFetching = true;
		},
		loginSuccess: (state, action) => {
			state.isFetching = false;
			state.error = false;
			state.currentUser = action.payload.userName;
			state.JWT = action.payload.jwtToken;
		},
		loginFailure: (state) => {
			state.isFetching = false;
			state.error = true;
		},
		logOut: (state) => {
			state.currentUser = null;
			state.JWT = null;
		},
	},
});

export const { loginStart, loginSuccess, loginFailure, logOut } =
	userSlice.actions;
export default userSlice.reducer;