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
	${tablet({ width: '50%' })};
	${laptop({ width: '75%' })};
	${mobile({ width: '90%' })}
`;

export const Title = styled.h1`
	font-size: 24px;
	font-weight: 300;
`;

export const Form = styled.form`
	display: flex;
	flex-wrap: wrap;
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 20px 10px 0px 0px;
	padding: 10px;
`;

export const Agreement = styled.span`
	font-size: 12px;
	margin: 20px 0px;
`;

export const Button = styled.button`
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
`;
