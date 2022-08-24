import React, { useEffect, Suspense } from 'react';
import styled from 'styled-components';
import { useState } from 'react';
import productNotFound from '../asset/productNotFound.png';
import Product from './Product';
import Aos from 'aos';
import 'aos/dist/aos.css';
import axios from 'axios';
import { allData } from '../data';

const Container = styled.ul`
	padding: 20px;
	display: flex;
	flex-wrap: wrap;
	justify-content: center;
	align-items: center;
	list-style: none;
`;
const NoProductFound = styled.div`
	width: 70%;
`;
const Products = ({ category, filter, sort }) => {
	const [product, setProduct] = useState([]);
	const [filteredProduct, setFilteredProduct] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const res = await axios.get(
					category
						? `https://iconicshoppingnodejs.herokuapp.com/api/product?category=${category}`
						: 'https://iconicshoppingnodejs.herokuapp.com/api/product'
				);
				// console.log(res)
				setProduct(res.data);
				if (category === 'all') {
					const res = await axios.get(
						'https://iconicshoppingnodejs.herokuapp.com/api/product'
					);
					setProduct(res.data);
				}
			} catch (error) {
				console.log(error.message);
			}
		};
		fetchData();
	}, [category]);

	useEffect(() => {
		Aos.init({ duration: 2000 });
	});

	// useEffect(() => {
	// 	setProduct(allData);
	// }, []);

	useEffect(() => {
		category &&
			setFilteredProduct(
				product?.filter((item) =>
					Object.entries(filter).every(([key, value]) =>
						item[key].includes(value)
					)
				)
			);
	}, [product, filter, category]);

	useEffect(() => {
		if (sort === 'newest') {
			setFilteredProduct((prev) =>
				[...prev].sort((a, b) => a.createdAt - b.createdAt)
			);
		} else if (sort === 'asc') {
			setFilteredProduct((prev) => [...prev].sort((a, b) => a.price - b.price));
		} else {
			setFilteredProduct((prev) => [...prev].sort((a, b) => b.price - a.price));
		}
	}, [sort]);

	const productRender = product
		.slice(0, 6)
		.map((item) => <Product item={item} key={item._id} />);

	return (
		<Container>
			{filteredProduct?.length === 0 && (
				<NoProductFound>
					<img
						src={productNotFound}
						alt="product not found"
						style={{ width: '100%' }}
					/>
				</NoProductFound>
			)}
			{category
				? filteredProduct?.map((item) => <Product item={item} key={item._id} />)
				: productRender}
		</Container>
	);
};

export default Products;
