import React from 'react';
import styled from 'styled-components';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { useDispatch } from 'react-redux';
import { deleteFromWishList } from '../Redux/WishListSlice';
import { Link } from 'react-router-dom';
export const Container = styled.li`
	display: flex;
	flex-direction: column;
	flex: 1;
	margin: 5px;
	min-width: 280px;
	height: 350px;
	justify-content: center;
	align-items: center;
	background-color: #efedd6;
	position: relative;
	border-radius: 5px;
	text-decoration:none;
`;
export const InfoContainer = styled.div`
	height: 20%;
	width: 100%;
`;
export const NameContainer = styled.div`
	position: absolute;
	top: 15px;
	left: 15px;
`;
export const Pricetag = styled.div`
	color: #fff;
	position: absolute;
	font-weight: 500;
	font-size: 18px;
	right: -10px;
	top: 10px;
	height: 48px;
	line-height: 48px;
	padding: 0 15px;
	background-color: #e25e5e;
	-webkit-box-shadow: 14px 15px 33px -11px rgba(0, 0, 0, 0.59);
	box-shadow: 14px 15px 33px -11px rgba(0, 0, 0, 0.59);
	&:after {
		position: absolute;
		content: '';
		left: -12px;
		width: 0px;
		height: 0px;
		border-top: 24px solid #e25e5e;
		border-bottom: 24px solid #e25e5e;
		border-left: 12px solid transparent;
		z-index: 10;
	}
`;

export const Image = styled.img`
	margin: 10% 0;
	height: 70%;
	z-index: 2;
`;

export const MainTitle = styled.h1`
	font-size: 20px;
`;

const Button = styled.div`
	padding: 8px;
	font-size: 15px;
	position: absolute;
	left: 10px;
	bottom: 10px;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover,
	&:focus {
		box-shadow: rgba(129, 216, 208, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}
`;
export const DeleteContainer = styled.div`
	position: absolute;
	bottom: 10px;
	right: 10px;
	display: flex;
	padding: 8px;
	font-size: 15px;
	position: absolute;
	border-radius: 5px;
	display: flex;
	justify-content: center;
	align-items: center;
	cursor: pointer;
	&:hover,
	&:focus {
		box-shadow: rgba(129, 216, 208, 0.3) 0px 19px 38px,
			rgba(0, 0, 0, 0.22) 0px 15px 12px;
	}
`;

const WishListItem = ({ img, name, price, id }) => {
	const dispatch = useDispatch();

	const DeleteFavouriteHandler = (id) => {
		dispatch(deleteFromWishList(id));
	};
	return (
		<Container>
			<Image src={img} alt={`${name} pic`}></Image>
			<NameContainer>
				<MainTitle>{name}</MainTitle>
			</NameContainer>
			<Pricetag>${price}</Pricetag>

			<Link
				to={`/product/${id}`}
				style={{ textDecoration: 'none', color: 'black' }}
			>
				<Button>
					<MoreHorizIcon />
					More Details
				</Button>
			</Link>

			<DeleteContainer onClick={() => DeleteFavouriteHandler(id)}>
				<LoyaltyIcon />
				Delete
			</DeleteContainer>
		</Container>
	);
};

export default WishListItem;
