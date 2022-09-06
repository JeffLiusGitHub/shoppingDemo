import styled from 'styled-components';
import { laptop, mobile } from '../responsive';
export const Container = styled.div`
	background-color: #e4e4e4dc;
	position: relative;
`;
export const FabContainer = styled.div`
	position: fixed;
	right: 5vw;
	top: 70vh;
	z-index: 100;
`;

export const Wrapper = styled.div`
	padding: 50px;
	display: flex;
	${laptop({ padding: '10px', flexDirection: 'column' })}
`;

export const ImgContainer = styled.div`
	flex: 1;
`;

export const Image = styled.div`
	width: 90%;
	object-fit: cover;
	${mobile({ height: '40vh', width: '100%' })}
`;

export const InfoContainer = styled.div`
	flex-direction: column;
	flex: 1;
	padding: 0px 50px;
	${mobile({ padding: '10px' })}
`;

export const Title = styled.h1`
	font-weight: 400;
	font-size: 80px;
	${laptop({ fontSize: '40px' })}
	${mobile({ fontSize: '30px' })}
`;

export const Desc = styled.p`
	font-size: 30px;
	width: 80%;
	margin: 20px 0px;
	text-align: left;
	${laptop({ width: '100%', fontSize: '25px' })}
	${mobile({ width: '100%', fontSize: '20px' })}
`;

export const Discount = styled.div`
	color: #349c5f;
	font-weight: 900;
	margin-bottom: 10px;
	:after {
		content: '';
		display: inline-block;
		border: 4px solid #42abc8;
		border-width: 0 1px 1px 0;
		border-radius: 0 15%;
		height: 0.5em;
		margin: 0 4px;
		-webkit-transform: rotate(-45deg) translateY(-0.1em);
		transform: rotate(-45deg) translateY(-0.1em);
		width: 0.5em;
	}
`;
export const Price = styled.span`
	font-weight: 300;
	font-size: 55px;
	${laptop({ fontSize:'45px' })}
`;

export const FilterContainer = styled.div`
	width: 70%;
	margin: 30px 0px;
	display: flex;
	justify-content: space-between;
	${laptop({ width: '100%' })}
`;

export const Filter = styled.div`
	display: flex;
	align-items: flex-start;
`;

export const FilterTitle = styled.span`
	font-size: 20px;
	font-weight: 200;
`;
export const ColorContainer = styled.div`
	display: flex;
	flex-direction: column;
`;
export const ColorFilter = styled.ul`
	display: flex;
	margin-top: 20px;
	list-style: none;
	padding: 0;
`;
export const ColorDisplayValue = styled.span`
	font-weight: 500;
`;

export const FilterColor = styled.li`
	width: 20px;
	height: 20px;

	box-sizing: border-box;
	border-radius: 50%;
	border: 1px solid rgba(0, 0, 0, 0.4);
	background-color: ${(props) => props.color};
	margin: 0px 5px;
	cursor: pointer;
	:active {
		border: 3px solid green;
		transition: transform 500ms cubic-bezier(0.355, 0.51, 0.235, 0.925) 0s;
		transform: scale(0.9);
	}
`;

export const FilterSize = styled.select`
	margin-left: 10px;
	padding: 5px;
`;

export const FilterSizeOption = styled.option``;
export const ErrorContainer = styled.div`
	width: 70%;
	margin: 30px 0px;
	${mobile({ width: '100%' })}
`;
export const Error = styled.div`
	color: green;
	font-weight: 300;
	font-size: 20px;
`;
export const AddContainer = styled.div`
	width: 70%;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${laptop({ width: '100%' })}
`;

export const AmountContainer = styled.div`
	display: flex;
	align-items: center;
	font-weight: 700;
`;

export const Amount = styled.span`
	width: 30px;
	height: 30px;
	border-radius: 10px;
	border: 1px solid teal;
	display: flex;
	align-items: center;
	justify-content: center;
	margin: 0px 5px;

`;

export const Button = styled.button`
	padding: 15px;
	border: 2px solid teal;
	background-color: white;
	cursor: pointer;
	font-size: 18px;
	font-weight: 500;
	&:hover {
		background-color: #f8f4f4;
	}
`;

export const ShippingInfoContainer = styled.div`
	margin-top: 20px;
	width: 70%;
	${laptop({ width: '100%' })}
`;
