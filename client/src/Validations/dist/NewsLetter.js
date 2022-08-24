import * as yup from 'yup';

export const newsLetterSchema = yup.object().shape({
	email: yup.string().email('Invalid email').required('email required'),
});

export const newsLetterInitialValue = {
	email: '',
};
