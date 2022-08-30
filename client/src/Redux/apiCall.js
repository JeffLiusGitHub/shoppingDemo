import { publicRequest } from '../axiosRequest';
import { loginFailure, loginStart, loginSuccess } from './UserSlice';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post('/auth/login', user);
		localStorage.setItem('token', 'Bearer ' + res.data.jwtToken);
		localStorage.setItem('userName', res.data.userName);
		localStorage.setItem('_id', res.data._id);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const register = async (registerData) => {
	try {
		const res = publicRequest.post('/auth/register', registerData);
	} catch (error) {
		console.log(error);
	}
};
