import { publicRequest } from '../axiosRequest';
import { loginFailure, loginStart, loginSuccess } from './UserSlice';
import { userRequest } from '../axiosRequest';
export const login = async (dispatch, user) => {
	dispatch(loginStart());
	try {
		const res = await publicRequest.post('/auth/login', user);
		dispatch(loginSuccess(res.data));
	} catch (error) {
		dispatch(loginFailure());
	}
};

export const register = async (registerData) => {
	try {
		const res = publicRequest.post('/auth/register', registerData);
		return res;
	} catch (error) {
		console.log(error);
	}
};

export const fetchWishList = async (_id) => {
	try {
		const res = await userRequest.get(`/wishList/${_id}`, {});
		return res.data;
	} catch (error) {
		console.log(error);
	}
};
