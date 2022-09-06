import SendIcon from '@mui/icons-material/Send';
import CustomizedSnackbars from './Snackbar';
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

import {
	newsLetterInitialValue,
	newsLetterSchema,
} from '../Validations/dist/NewsLetter';


const Newsletter = () => {
	const [open, setOpen] = useState(false);
	const [email, setEmail] = useState('');

	const handleChangeEmail = (e) => {
		setEmail(e.target.value);
	};

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
				initialValues={newsLetterInitialValue}
				validationSchema={newsLetterSchema}
				handleSubmit={handleClick}
			>
				{({ errors, touched, dirty, isValid }) => {
					return (
						<Form onSubmit={handleClick}>
							<InputContainer>
								<Input
									placeholder="email"
									onChange={handleChangeEmail}
									type="email"
									input={Input}
									name="email"
								/>
								<Button>
									<SendIcon type="submit" onClick={handleClick} />
								</Button>
							</InputContainer>
						</Form>
					);
				}}
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
