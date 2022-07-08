import * as yup from 'yup';

export const userSchema = yup.object().shape({
	userName: yup.string().required('user name required'),
	email: yup.string().email('Invalid email').required('email required'),
	password: yup
		.string()
		.min(8, 'password must be at least 8 characters')
		.max(16, 'password cannot be more than 16 characters')
		.required('password required'),
	confirmPassword: yup
		.string()
		.min(8)
		.max(16)
		.required('please confirm the password')
		.when('password', {
			is: (val) => (val && val.length > 0 ? true : false),
			then: yup
				.string()
				.oneOf([yup.ref('password')], 'Both password need to be the same'),
		}),
});

export const userInitialValue = {
	userName: '',
	email: '',
	password: '',
	confirmPassword: '',
};
