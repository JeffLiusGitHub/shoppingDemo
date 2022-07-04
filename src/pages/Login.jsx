import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../Redux/apiCall';
import Announcement from '../components/Announcement';
import { announcement } from '../data';
import {
	Container,
	Wrapper,
	Title,
	Form,
	Input,
	Button,
	Link,
} from './LoginStyle';

const Login = () => {
	const [userName, setUsername] = useState('');
	const [password, setPassword] = useState('');
	const { isFetching, error } = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const loginHandler = (event) => {
		event.preventDefault();
		login(dispatch, { userName, password });
	};
	return (
		<>
			<Announcement color={'#fff'} text={announcement[1]} />
			<Container>
				<Wrapper>
					<Title>SIGN IN</Title>
					<Form>
						<Input
							placeholder="username"
							onChange={(event) => setUsername(event.target.value)}
						/>
						<Input
							placeholder="password"
							type="password"
							autocomplete="on"
							onChange={(event) => setPassword(event.target.value)}
						/>
						{isFetching && <p>please wait</p>}
						{error && <p style={{ color: 'red' }}>something went wrong</p>}
						<Button onClick={loginHandler} disabled={isFetching}>
							LOGIN
						</Button>
						<Link>DO NOT YOU REMEMBER THE PASSWORD?</Link>
						<Link>CREATE A NEW ACCOUNT</Link>
					</Form>
				</Wrapper>
			</Container>
		</>
	);
};

export default Login;
