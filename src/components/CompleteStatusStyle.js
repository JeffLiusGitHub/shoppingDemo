import styled from 'styled-components';
import { mobile, tablet } from '../responsive';

export const OutContainer = styled.div`
	height: 30%;
	min-height: 300px;
	padding: 20px;
	display: flex;
	flex-direction: column;
`;
export const Title = styled.h1`
	font-size: 30px;
	${tablet({ fontSize: '25px' })};
	${mobile({ fontSize: '20px' })};
`;
export const InnerContainer = styled.div`
	display: flex;
	margin-top: 30px;
`;
export const ImageContainer = styled.div`
	flex: 1;
	width: 40px;
	height: 40px;
	align-items: center;
	justify-content: center;
`;
export const Details = styled.div`
	flex: 2;
	display: flex;
	margin: 20px 0 0 40px;
	flex-direction: column;
	width: 10px;
	align-items: left;
	justify-content: center;
`;
export const ProductName = styled.p`
	font-size: 30px;
	font-weight: 600;
	${tablet({ fontSize: '25px' })};
	${mobile({ fontSize: '20px' })};
`;
export const ProductPrice = styled.p`
	font-size: 20px;
`;
export const ProductQty = styled.p`
	font-size: 18px;
	font-weight: 400;
`;
