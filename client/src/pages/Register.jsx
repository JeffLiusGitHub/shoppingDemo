import Announcement from '../components/Announcement';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import { announcement } from '../data';
import {
	Container,
	Wrapper,
	Title,
	// Form,
	Input,
	Agreement,
	Button,
	ButtonContainer,
} from './RegisterStyle';
import { Link } from 'react-router-dom';
import { LinkComponent, LinkContainer } from './LoginStyle';
import axios from 'axios';
// import { register as registerApi } from '../Redux/apiCall';
import { publicRequest } from '../axiosRequest';

import { userSchema, userInitialValue } from '../Validations/UserValidation';
import { Formik, Form } from 'formik';
import FormikInput from '../Validations/FormikInput';
import { useState } from 'react';
const Register = () => {
	const [success, setSuccess] = useState();
	const handleSubmit = async (values, event) => {
		event.preventDefault();
		// console.log(values);
		// alert(JSON.stringify(values));
		const response = await publicRequest.post('auth/register', values);
		if (response.status === 201) {
			console.log('true');
			setSuccess(true);
		}
		// console.log(response.status);
	};

	return (
		<>
			<Announcement color={'#fff'} text={announcement[1]} />
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Formik
						initialValues={userInitialValue}
						validationSchema={userSchema}
					>
						{({ errors, touched, dirty, isValid, values }) => {
							// console.log({ errors, touched, dirty, isValid });
							// console.log(values);
							return (
								<Form onSubmit={(event) => handleSubmit(values, event)}>
									<FormikInput
										type="text"
										required={true}
										placeholder="username"
										name="userName"
										input={Input}
									/>

									<FormikInput
										placeholder="email"
										name="email"
										required={true}
										input={Input}
									/>

									<FormikInput
										type="password"
										placeholder="password"
										autoComplete="off"
										name="password"
										required={true}
										input={Input}
									/>

									<FormikInput
										type="password"
										placeholder="confirm password"
										autoComplete="off"
										name="confirmPassword"
										required={true}
										input={Input}
									/>

									<Agreement>
										By creating an account, I consent to the processing of my
										personal data in accordance with the <b>PRIVACY POLICY</b>
									</Agreement>
									<LinkContainer>
										<Link to={'/login/'} style={{ textDecoration: 'none' }}>
											<LinkComponent>ALREADY HAVE AN ACCOUNT?</LinkComponent>
										</Link>
									</LinkContainer>
									<ButtonContainer>
										<Button
											type="submit"
											disabled={!dirty || !isValid}
											onClick={handleSubmit}
										>
											{success ? 'SUCCESS !' : 'CREATE'}
										</Button>
									</ButtonContainer>
								</Form>
							);
						}}
					</Formik>
				</Wrapper>
			</Container>
		</>
	);
};

export default Register;
