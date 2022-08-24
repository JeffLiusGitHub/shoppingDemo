import styled from 'styled-components';
import { mobile, tablet } from '../responsive';

export const NavContainer = styled.div`
	height: 60px;
	${tablet({ height: '50px' })};
	background-color: black;
	color: white;
	position: sticky;
	top:0px;
	z-index:1000;
`;
export const Wrapper = styled.div`
	padding: 10px 20px;
	display: flex;
	align-items: center;
	justify-content: space-between;
	${mobile({ padding: '10px 0px' })}
`;
export const Left = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	${mobile({ display: 'none' })};
`;
export const Center = styled.div`
	flex: 1;
	text-align: center;
`;
export const Right = styled.div`
	flex: 1;
	display: flex;
	align-items: center;
	justify-content: flex-end;
	${mobile({ flex: 2 })};
`;
export const Language = styled.span`
	font-size: 14px;
	cursor: pointer;
	margin-right: 5px;
	${tablet({ display: 'none' })}
`;
export const SearchContainer = styled.div`
	border: 0.5px solid lightgray;
	display: flex;
	align-items: center;
	padding: 5px;
	${tablet({ display: 'none' })}
`;
export const Input = styled.input`
	border: none;
	background-color: black;
	${mobile({ width: '50px' })}
`;
export const Logo = styled.h1`
	font-weight: bold;
	color: white;
	text-decoration: none !important;
	${tablet({ fontSize: '20px' })}
	:visited {
		color: white !important;
		text-decoration: none !important;
	}
`;
export const MenuItems = styled.div`
	font-size: 14px;
	cursor: pointer;
	margin: 15px;
	${tablet({ fontSize: '10px', margin: '10px' })};
	${mobile({ fontSize: '9px', fontWeight: '900', margin: '6px' })}
`;
export const CartIcon = styled.div`
	transition: all 0.2s ease-out;
	:hover {
		transform: scale(1.1);
	}
	${mobile({ fontSize: '3px' })}
`;
