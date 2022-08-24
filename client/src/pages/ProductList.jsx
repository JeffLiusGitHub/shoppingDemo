import Newsletter from '../components/Newsletter';
import CircularProgress from '@mui/material/CircularProgress';
import { useLocation } from 'react-router-dom';
import React, { Suspense, useState } from 'react';
import {
	Container,
	Title,
	FilterContainer,
	Filter,
	FilterText,
	Select,
	Option,
} from './ProductListStyle';
const Products = React.lazy(() => import('../components/Products'));
const colorList = ['White', 'Black', 'Red', 'Blue', 'Yellow', 'Green'];
const sizeList = ['XS', 'S', 'M', 'L', 'XL'];

const ProductList = () => {
	const location = useLocation();
	const category = location.pathname.split('/')[2];
	const [filter, setFilter] = useState({});
	const [sort, setSort] = useState('Newest');
	const filterChangeHandler = (event) => {
		setFilter({ ...filter, [event.target.name]: event.target.value });
	};

	return (
		<Container>
			<Title>{category.toUpperCase()}</Title>
			<FilterContainer>
				<Filter>
					<FilterText>Filter Products:</FilterText>
					<Select
						name="color"
						defaultValue="Color"
						onChange={filterChangeHandler}
					>
						<Option disabled>Color</Option>
						{colorList?.map((color) => (
							<Option color={color} key={color}>
								{color}
							</Option>
						))}
					</Select>
					<Select
						name="size"
						defaultValue="Size"
						onChange={filterChangeHandler}
					>
						<Option disabled>Size</Option>
						{sizeList?.map((size) => (
							<Option key={size}>{size}</Option>
						))}
					</Select>
				</Filter>
				<Filter>
					<FilterText>Sort Products:</FilterText>
					<Select onChange={(event) => setSort(event.target.value)}>
						<Option value="Newest">Newest</Option>
						<Option value="asc">Price (asc)</Option>
						<Option value="desc">Price (desc)</Option>
					</Select>
				</Filter>
			</FilterContainer>
			<Suspense fallback={<CircularProgress color="success" />}>
				<Products category={category} filter={filter} sort={sort} />
			</Suspense>

			<Newsletter />
		</Container>
	);
};

export default ProductList;
