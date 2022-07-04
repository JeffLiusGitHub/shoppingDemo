import { Link } from 'react-router-dom';
import { Container, Image, Info, Title } from './CategoriesItemStyle';
const CategoriesItem = ({ item }) => {
	return (
		<Container>
			<Link to={`/products/${item?.cat}`}>
				<Image src={item?.img}></Image>
				<Info>
					<Title>{item?.title}</Title>
				</Info>
			</Link>
		</Container>
	);
};

export default CategoriesItem;
