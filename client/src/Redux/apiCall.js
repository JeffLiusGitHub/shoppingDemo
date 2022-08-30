import { publicRequest } from '../axiosRequest';
import { loginFailure, loginStart, loginSuccess } from './UserSlice';
import useAuth from '../Validations/useAuth';
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post('/auth/login', user);
		dispatch(loginSuccess(res.data));
		// setTimeout(localStorage.setItem('data', JSON.stringify(res.data)), 0);

		// localStorage.setItem('token', 'Bearer ' + res.data.jwtToken);
		// localStorage.setItem('userName', res.data.userName);
		// localStorage.setItem('_id', res.data._id);
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
