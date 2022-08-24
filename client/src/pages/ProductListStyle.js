import styled from 'styled-components';
import { mobile } from '../responsive';

export const Container = styled.div``;

export const Title = styled.h1`
	margin: 20px;
`;

export const FilterContainer = styled.div`
	display: flex;
	justify-content: space-between;
	flex-wrap: wrap;
`;

export const Filter = styled.div`
	margin: 20px;
	${mobile({ width: '0px 20px', display: 'flex', flexDirection: 'column' })}
`;

export const FilterText = styled.span`
	font-size: 20px;
	font-weight: 600;
	margin-right: 20px;
	${mobile({ marginRight: '0px' })}
`;

export const Select = styled.select`
	padding: 10px;
	margin-right: 20px;
	border-color: #2d6f34b3;
	border-radius: 4px;
	border-width: 1.4px;
	background-color: #00b3120e;

	font-weight: 700;
	-webkit-box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
	box-shadow: 0px 10px 25px rgba(0, 0, 0, 0.3);
	${mobile({ margin: '10px 0px' })}
`;
export const Option = styled.option`
	opacity: 0;
	-webkit-box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.66);
	box-shadow: 5px 5px 11px 5px rgba(0, 0, 0, 0.66);
	background-color: brown;
	position: absolute;
	z-index: 10;
`;
