import React, { Suspense, useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { userRequest } from '../axiosRequest';
import { useQuery } from 'react-query';
import FindInPageIcon from '@mui/icons-material/FindInPage';
import { fetchWishList } from '../Redux/apiCall';
import CircularProgress from '@mui/material/CircularProgress';
import SyncProblemIcon from '@mui/icons-material/SyncProblem';
const WishListItem = React.lazy(() => import('../components/WishListItem'));

const Container = styled.ul`
	display: flex;
	gap: 10px 10px;
	flex-wrap: wrap;
	padding: 20px;
	justify-content: center;
	position: relative;
	min-height: 70vh;
	list-style: none;
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
	// const [results, setResults] = useState([]);
	// let results = []
	// const { _id } = useSelector((state) => state.user);

	// const {
	// 	isLoading,
	// 	error,
	// 	data: results,
	// 	refetch,
	// } = useQuery('fetchWishList', () => fetchWishList(_id));

	// const {isLoading,error,data}=useQuery{'fetchWishList',()=>fetchWishList(_id)};

	// useEffect(() => {
	// 	(async () => {
	// 		const result = await fetchWishList(_id);
	// 		setResults(result);
	// 	})();
	// }, [_id, setResults]);
	// console.log(results);
	return (
		<Container>
			{/* {isLoading && <CircularProgress color="success" />}
			{error && <SyncProblemIcon />} */}
			{wishLists?.length !== 0
				? wishLists?.map((result, k) => (
						<Suspense key={k} fallback={<CircularProgress color="success" />}>
							<WishListItem
								name={result?.name}
								price={result?.price}
								img={result?.img}
								id={result?.id}
								// refetch={refetch}
							></WishListItem>
						</Suspense>
				  ))
				: NoWishList}
		</Container>
	);
};

export default WishList;
