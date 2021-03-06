import styled from 'styled-components';
import { laptop } from '../responsive';
import { categories } from '../data';
import CategoriesItem from './CategoriesItem';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Container = styled.ul`
	display: flex;
	padding: 20px;
	justify-content: space-between;
	position: relative;
	list-style-type:none;
	padding:0;
	margin:0;
	${laptop({ padding: '0px', flexDirection: 'column' })}
`;

const Categories = () => {
	useEffect(() => {
		Aos.init({ duration: 2000 });
	}, []);
	return (
		<Container data-aos="fade-up">
			{categories?.map((item) => (
				<CategoriesItem item={item} key={item?.id} />
			))}
		</Container>
	);
};

export default Categories;
