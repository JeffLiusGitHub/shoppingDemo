import { publicRequest } from '../axiosRequest';
import { loginFailure, loginStart, loginSuccess } from './UserSlice';

export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post('/auth/login', user);
		console.log(res);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const register = async (registerData) => {
	try {
		const res = publicRequest.post('/auth/register', registerData);
		console.log(res);
	} catch (error) {
		console.log(error);
	}
};
