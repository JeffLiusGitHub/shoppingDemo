import { useDispatch, useSelector } from 'react-redux';
import Announcement from '../components/Announcement';
import { announcement } from '../data';
import {
	Container,
	Wrapper,
	Title,
	Input,
	Button,
	ButtonContainer,
	LinkComponent,
	LinkContainer,
} from './LoginStyle';
import { Link } from 'react-router-dom';
import { loginSchema, loginInitialValue } from '../Validations/LoginValidation';
import { Formik, Form } from 'formik';
import FormikInput from '../Validations/FormikInput';
import { login } from '../Redux/apiCall';
const Login = () => {
	const { isFetching, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();


	const handleSubmit = async (values) => {
		login(dispatch, values);
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
								<Form>
									<FormikInput
										placeholder="user name"
										name="userName"
										input={Input}
										required={true}
									/>

									<FormikInput
										type="password"
										placeholder="password"
										autoComplete="off"
										name="password"
										input={Input}
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
									<ButtonContainer>
										<Button type="submit" disabled={isFetching}>
											LOGIN
										</Button>
									</ButtonContainer>
									{error&&<p style={{color:'red'}}>Something went wrong..</p>}
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
