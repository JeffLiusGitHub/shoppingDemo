import * as yup from 'yup';

export const loginSchema = yup.object().shape({
	userName: yup.string().required('user name required'),
	password: yup
		.string()
		.min(8, 'password must be at least 8 characters')
		.max(16, 'password cannot be more than 16 characters')
		.required('password required'),
});

export const loginInitialValue = {
	userName: '',
	password: '',
};
