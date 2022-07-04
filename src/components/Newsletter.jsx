import SendIcon from '@mui/icons-material/Send';
import CustomizedSnackbars from './Snackbar';
import * as Yup from 'yup';
import { useState } from 'react';
import { Formik, Form } from 'formik';
import {
	Container,
	Title,
	Description,
	InputContainer,
	Input,
	Button,
} from './NewsLetterStyle';
//validation on progress

const Newsletter = () => {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	const initialValues = { email: '' };
	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

	const emailSchema = Yup.object().shape({
		email: Yup.string()
			.required('This is a mandatory field')
			.email('Enter a valid email'),
	});

	const handleClick = (e) => {
		e.preventDefault();
		setOpen(true);
	};

	const handleClose = (event, reason) => {
		if (reason === 'clickaway') {
			return;
		}

		setOpen(false);
	};
	return (
		<Container>
			<Title>Newsletter</Title>
			<Description>Get timely updates from your favorite products.</Description>
			<Formik
				initialValues={{ email: '' }}
				validationSchema={emailSchema}
				onSubmit={handleClick}
			>
				<InputContainer>
					<Input
						placeholder="Your email"
						onChange={handleChangeEmail}
						type="email"
					/>
					<Button>
						<SendIcon type="submit" onClick={handleClick} />
					</Button>
				</InputContainer>
			</Formik>
			<CustomizedSnackbars
				open={open}
				handleClose={handleClose}
				email={email}
			/>
		</Container>
	);
};

export default Newsletter;
