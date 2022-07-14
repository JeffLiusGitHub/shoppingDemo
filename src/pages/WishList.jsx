import React, { Suspense } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import FindInPageIcon from '@mui/icons-material/FindInPage';
const WishListItem = React.lazy(() => import('../components/WishListItem'));

const Container = styled.ul`
	display: flex;
	gap: 10px 10px;
	flex-wrap: wrap;
	padding: 20px;
	justify-content: center;
	position: relative;
	min-height: 70vh;
	list-style:none;
	background-color: #f2f2f2;
`;
const NoWishListContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	font-size: 30px;
	text-align: center;
`;
const NoWishList = (
	<NoWishListContainer>
		<FindInPageIcon style={{ fontSize: '50px', marginBottom: '10px' }} />
		<p>No wish list added</p>
	</NoWishListContainer>
);
const WishList = () => {
	const wishLists = useSelector((state) => state.wishList.wishLists);
	return (
		<Container>
			{wishLists.length !== 0
				? wishLists?.map((w, k) => (
						<Suspense fallback={<div>Loading...</div>}>
							<WishListItem
								key={k}
								name={w.name}
								price={w.price}
								img={w.img}
								id={w.id}
							></WishListItem>
						</Suspense>
				  ))
				: NoWishList}
		</Container>
	);
};

export default WishList;
