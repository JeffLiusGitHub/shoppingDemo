import styled from 'styled-components';

export const Info = styled.div`
	opacity: 0;
	position: absolute;
	width: 100%;
	height: 100%;
	top: 0;
	left: 0;
	z-index: 3;
	display: flex;
	align-items: center;
	justify-content: center;
	transition: all 0.5s ease-out;
	background-color: rgba(0, 0, 0, 0.2);
`;
export const Container = styled.li`
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	display: flex;
	justify-content: center;
	align-items: center;
	background-color: #f5fbfd;
	position: relative;
	z-index: 0;
	text-decoration:none;
	transition: background-color.25s ease-out, color 0.25s ease-out;
	&:hover ${Info} {
		opacity: 1;
	}
`;
export const Circle = styled.div`
	width: 250px;
	height: 250px;
	border-radius: 50%;
	background-color: ${(props) => props.color};
	position: absolute;
	content: '';
	z-index: 1;
`;
export const Image = styled.img`
	height: 75%;
	z-index: 2;
`;
export const Icon = styled.div`
	width: 40px;
	height: 40px;
	border-radius: 50%;
	display: flex;
	background-color: white;
	align-items: center;
	margin: 10px;
	stroke: #e9f5f5;
	transition: transform 0.4s cubic-bezier(0.25, 0.46, 0.45, 0.94);
	cursor: pointer;
	&:hover {
		fill: #d01111;
		transform: scale(1.3);
	}
	justify-content: center;
`;
