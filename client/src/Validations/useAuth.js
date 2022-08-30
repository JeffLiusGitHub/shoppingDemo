import React, { useState } from 'react';
import { userRequest } from '../axiosRequest';
import { useSelector } from 'react-redux';

const useAuth = () => {
	const [isLogin, setIsLogin] = useState(false);
	const { currentUser, JWT } = (state) => state.user;

	const authToken = async () => {
		try {
			const res = await userRequest.post('/auth/auth', {});
			setIsLogin(res.data.auth);

		} catch (error) {
			setIsLogin(false);
			console.log(error);
		}
	};
	return { isLogin, setIsLogin, authToken };
};

export default useAuth;
