import styled from 'styled-components';
import { mobile, tablet } from '../responsive';

export const Wrapper = styled.div`
	padding: 20px;

	${mobile({ padding: '10px' })}
`;

export const Title = styled.h1`
	font-weight: 300;
	text-align: center;
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 20px;
`;

export const TopButton = styled.button`
	padding: 10px;
	font-weight: 600;
	cursor: pointer;
	border: ${(props) => props.type === 'filled' && 'none'};
	background-color: ${(props) =>
		props.type === 'filled' ? 'black' : 'transparent'};
	color: ${(props) => props.type === 'filled' && 'white'};
	${mobile({ fontSize: '10px' })}
	
`;

export const TopTexts = styled.div`
	${tablet({ display: 'none' })}
`;
export const TopText = styled.span`
	text-decoration: underline;
	margin: 0px 10px;
`;

export const Bottom = styled.div`
	display: flex;
	justify-content: space-between;
	${tablet({ flexDirection: 'column' })}
`;

export const Info = styled.div`
	flex: 3;
	flex-wrap: wrap;
`;

export const Product = styled.div`
	display: flex;
	position: relative;
	justify-content: space-evenly;
	:before {
		content: ' ';
		border-bottom-style: dotted;
		border-color: lightgray;
		border-width: 1px;
		align-items: center;
		justify-content: center;
		width: 90%;
		position: absolute;
		left: 0;
		bottom: 0;
	}

	${tablet({ flexDirection: 'column' })}
`;

export const ProductDetail = styled.div`
	flex: 2;
	display: flex;
	flex-wrap: wrap;
`;

export const Image = styled.img`
	width: 200px;
`;

export const Details = styled.div`
	padding: 20px;
	display: flex;
	flex-direction: column;
	justify-content: space-around;
`;

export const ProductName = styled.span``;

export const ProductId = styled.span``;

export const ProductColor = styled.div`
	width: 20px;
	height: 20px;
	border-radius: 50%;
	border: 1px solid rgba(0, 0, 0, 0.2);
	background-color: ${(props) => props.color};
`;

export const ProductSize = styled.span``;

export const PriceDetail = styled.div`
	flex: 1;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

export const ProductAmountContainer = styled.div`
	display: flex;
	align-items: center;
	margin-bottom: 20px;
`;

export const ProductAmount = styled.div`
	font-size: 24px;
	margin: 5px;
	${mobile({ margin: '5px 15px' })}
`;

export const ProductPrice = styled.div`
	font-size: 30px;
	font-weight: 200;
	${mobile({ marginBottom: '20px' })}
`;
export const ProductButton = styled.button``;

export const DeleteContainer = styled.div`
	display: flex;
	margin-bottom: 5px;
	cursor: pointer;
`;
export const DeleteContent = styled.p``;

export const Hr = styled.hr`
	background-color: #eee;
	border: none;
	height: 1px;
`;

export const Summary = styled.div`
	flex: 1;
	border: 0.5px solid lightgray;
	border-radius: 10px;
	padding: 20px;
	height: 50vh;
	min-height: 400px;
`;

export const SummaryTitle = styled.h1`
	font-weight: 200;
`;

export const SummaryItem = styled.div`
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	font-weight: ${(props) => props.type === 'total' && '500'};
	font-size: ${(props) => props.type === 'total' && '24px'};
`;

export const SummaryItemText = styled.span``;

export const SummaryItemPrice = styled.span``;

export const Button = styled.button`
	width: 100%;
	padding: 10px;
	background-color: black;
	color: white;
	font-weight: 600;

	:disabled,
[disabled]{
  border: 1px solid #999999;
  background-color: #cccccc;
  color: #666666;
}
`;

export const Container = styled.div`
	display: grid;
	grid-template-rows: auto auto 1fr auto;
	min-height: 100vh;
`;
