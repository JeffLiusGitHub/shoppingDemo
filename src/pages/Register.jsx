import Announcement from '../components/Announcement';
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

import { userSchema, userInitialValue } from '../Validations/UserValidation';
import { Formik, Form } from 'formik';
import FormikInput from '../Validations/FormikInput';
const Register = () => {
	const handleSubmit = (values) => {
		alert(JSON.stringify(values));
	};

	return (
		<>
			<Announcement color={'#fff'} text={announcement[1]} />
			<Container>
				<Wrapper>
					<Title>CREATE AN ACCOUNT</Title>
					<Formik
						initialValues={userInitialValue}
						onSubmit={handleSubmit}
						validationSchema={userSchema}
					>
						{({ errors, touched, dirty, isValid }) => {
							return (
								<Form onSumbit={handleSubmit}>
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
										<Button type="submit">CREATE</Button>
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
