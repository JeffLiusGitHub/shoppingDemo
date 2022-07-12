import React from 'react';
import WishListItem from '../components/WishListItem';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
const Container = styled.div`
	display: flex;
	gap: 10px 10px;
	flex-wrap: wrap;
	padding: 20px;
	justify-content: center;
	/* align-items: center; */
	position: relative;
	min-height: 70vh;
	background-color: #f2f2f2;
`;
const NoWishListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 50px;
`;
const NoWishList = (
	<NoWishListContainer>
		<FindInPageIcon style={{ fontSize: '150px',marginBottom:'10px' }} />
		<p>No wish list added</p>
	</NoWishListContainer>
);
const WishList = () => {
	const wishLists = useSelector((state) => state.wishList.wishLists);
	return (
		<Container>
			{wishLists.length !== 0
				? wishLists?.map((w, k) => (
						<WishListItem
							key={k}
							name={w.name}
							price={w.price}
							img={w.img}
							id={w.id}
						></WishListItem>
				  ))
				: NoWishList}
		</Container>
	);
};

export default WishList;
