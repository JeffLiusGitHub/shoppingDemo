import styled from 'styled-components';
import { mobile, tablet, laptop } from '../responsive';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url('https://img.freepik.com/free-photo/beach-fashion-concept-flat-lay-girls-accessories-clothes-with-green-leaves-pink-background-fl_248570-2596.jpg')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 40%;
	padding: 20px;
	background-color: white;
	border-left: 5px solid #779361;
	${tablet({ width: '50%' })};
	${laptop({ width: '75%' })};
	${mobile({ width: '90%' })}
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
	margin-bottom: 5px;
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

export const Input = styled.input`
	min-width: 40%;
	/* margin: 10px 10px 0px 0px; */
	margin-bottom: 5px;
	padding: 10px;
	border-radius: 1px;
	border: 2px solid lightgrey;
	font-size: 15px;
	:focus {
		outline-width: 0;
		border-radius: 1px;
		border: 2px solid grey !important;
		background-color: #e7f0fe;
		color: grey;
	}
`;
export const ErrorMessageContainer = styled.div`
	display: flex;
	justify-content: start;
	align-items: center;
	margin: 5px 0;
	color: red;
`;

export const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

export const ButtonContainer = styled.div`
	display: flex;
	/* align-items:flex-end; */
	justify-content: flex-end;
`;

export const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	border-radius: 5px;
	cursor: pointer;
`;
