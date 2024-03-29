import styled from 'styled-components';
import { mobile, laptop, tablet } from '../responsive';

export const Container = styled.div`
	width: 100vw;
	height: 100vh;
	background: linear-gradient(
			rgba(255, 255, 255, 0.5),
			rgba(255, 255, 255, 0.5)
		),
		url('https://previews.123rf.com/images/maximleshkovich/maximleshkovich1710/maximleshkovich171000265/88532663-women-modern-fashion-clothes-and-accessories-background-with-frame-for-text-flat-lay-female-casual-s.jpg')
			center;
	background-size: cover;
	display: flex;
	align-items: center;
	justify-content: center;
`;

export const Wrapper = styled.div`
	width: 35%;
	padding: 20px;
	background-color: white;
	border-left: 5px solid #d2d8d8;
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
	flex-direction: column;
`;

export const Input = styled.input`
	flex: 1;
	min-width: 40%;
	margin: 10px 0;
	padding: 10px;
`;

export const ButtonContainer = styled.div`
	margin-top: 10px;
	display: flex;
	justify-content: flex-end;
`;

export const Button = styled.button`
	align-self: flex-end;
	width: 40%;
	border: none;
	padding: 15px 20px;
	background-color: teal;
	color: white;
	cursor: pointer;
	margin-bottom: 10px;
	border-radius: 5px;
	&:disabled {
		border: 1px solid #999999;
		background-color: #cccccc;
		color: #666666;
		cursor: not-allowed;
	}
`;
export const LinkContainer = styled.div`
	display: flex;
	justify-content: space-between;
	align-items: center;
`;

export const LinkComponent = styled.p`
	margin: 5px 0px;
	font-size: 12px;
	text-decoration: underline;
	cursor: pointer;
`;
