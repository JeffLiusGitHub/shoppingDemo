import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.li`
	flex: 1;
	margin: 3px;
	height: 70vh;
	position: relative;
`;
export const Image = styled.img`
	width: 100%;
	height: 100%;
	object-fit: cover;
	${mobile({ height: '20vh' })}
`;
export const Info = styled.div`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;
export const Title = styled.h1`
	color: white;
	margin-bottom: 20px;
	position: absolute;
	bottom: 18px;
	left: 18px;
`;
