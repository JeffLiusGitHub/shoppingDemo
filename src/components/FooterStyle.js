import styled from 'styled-components';
import { tablet, laptop } from '../responsive';

export const Container = styled.div`
	display: flex;
	background-color: #232323;
	${tablet({ flexDirection: 'column' })}
	min-height:258px;
`;

export const Left = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	padding: 20px;
`;

export const Logo = styled.h1`
	color: white;
`;

export const Desc = styled.p`
	margin: 20px 0px;
	padding: 0 5px;
	font-size: 18px;
	font-weight: 300;
	color: white;
`;

export const SocialContainer = styled.div`
	display: flex;
`;

export const SocialIcon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	color: white;
	background-color: #${(props) => props.color};
	display: flex;
	align-items: center;
	justify-content: center;
	margin-right: 20px;
`;

export const Center = styled.div`
	flex: 1;
	padding: 20px;
	${laptop({ display: 'none' })}
`;

export const Title = styled.h3`
	margin-bottom: 30px;
	color: white;
`;

export const List = styled.ul`
	color: white;
	margin: 0;
	padding: 0;
	list-style: none;
	display: flex;
	flex-wrap: wrap;
`;

export const ListItem = styled.li`
	width: 50%;
	margin-bottom: 10px;
`;

export const Right = styled.div`
	flex: 1;
	padding: 20px;
	${tablet({ backgroundColor: 'Darkgrey' })}
`;

export const ContactItem = styled.div`
	color: white;
	margin-bottom: 20px;
	display: flex;
	align-items: center;
`;

export const Payment = styled.img`
	width: 50%;
`;
