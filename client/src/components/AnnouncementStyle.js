import styled from 'styled-components';
import { laptop, tablet } from '../responsive';

export const Container = styled.div`
	min-height: 40px;
	background-color: ${(props) => props.color};
	display: flex;
	justify-content: space-around;
`;
export const IconContainer = styled.div`
	margin-right: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
`;
export const Text = styled.div`
	flex: 1;
	color: black;
	font-weight: 500;
	display: flex;
	justify-content: center;
	text-align: center;
	align-items: center;
	font-size: 18px;
	${laptop({ fontSize: '12px' })};
	${tablet({ fontSize: '10px' })}
`;
