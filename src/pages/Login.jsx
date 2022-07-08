import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/apiCall';
import Announcement from '../components/Announcement';
import { announcement } from '../data';
import {
	Container,
	Wrapper,
	Title,
	Input,
	Button,
	LinkComponent,
	LinkContainer,
} from './LoginStyle';
import { Link } from 'react-router-dom';
import { loginSchema, loginInitialValue } from '../Validations/LoginValidation';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import FormikInput from '../Validations/FormikInput';
const Login = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { isFetching, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const loginHandler = (event) => {
		event.preventDefault();
		login(dispatch, { userName, password });
	};

	const handleSubmit = (values) => {
		alert(JSON.stringify(values));
	};
	return (
		<>
			<Announcement color={'#fff'} text={announcement[1]} />
			<Container>
				<Wrapper>
					<Title>SIGN IN</Title>
					<Formik
						initialValues={loginInitialValue}
						onSubmit={handleSubmit}
						validationSchema={loginSchema}
					>
						{({ errors, touched, dirty, isValid }) => {
							return (
								<Form onSumbit={handleSubmit}>
									<FormikInput
										placeholder="email"
										name="email"
										required={true}
									/>

									<FormikInput
										type="password"
										placeholder="password"
										autoComplete="off"
										name="password"
										required={true}
									/>

									<LinkContainer>
										<LinkComponent>
											DO NOT YOU REMEMBER THE PASSWORD?
										</LinkComponent>

										<Link to={'/register/'} style={{ textDecoration: 'none' }}>
											<LinkComponent>CREATE A NEW ACCOUNT</LinkComponent>
										</Link>
									</LinkContainer>

									<Button type="submit">LOGIN</Button>
								</Form>
							);
						}}
					</Formik>
				</Wrapper>
			</Container>
		</>
	);
};

export default Login;
