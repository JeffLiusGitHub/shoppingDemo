import { useState } from 'react';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import getAverageColor from 'get-average-color';
import { useEffect } from 'react';
import { Info, Container, Circle, Image, Icon } from './ProductStyle';

const Product = ({ item }) => {
	const [color, setColor] = useState();
	useEffect(() => {
		getAverageColor(item.img).then((rgb) =>
			setColor(`rgba(${rgb.r},${rgb.g},${rgb.b},0.7)`)
		);
	}, [item.img]);

	return (
		<Container data-aos="flip-left">
			{
				item ? (
					<>
						<Image src={item.img}></Image>
						<Info>
							<Icon>
								<ShoppingCartCheckoutOutlinedIcon />
							</Icon>
							<Icon>
								<Link to={`/product/${item._id}`}>
									<SearchOutlinedIcon />
								</Link>
							</Icon>
							<Icon>
								<FavoriteBorderOutlinedIcon />
							</Icon>
						</Info>
						<Circle color={color} />
					</>
				) : null

			}
		</Container>
	);
};

export default Product;
