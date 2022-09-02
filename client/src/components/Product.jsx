import { useState } from 'react';
import ShoppingCartCheckoutOutlinedIcon from '@mui/icons-material/ShoppingCartCheckoutOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';
import { Link } from 'react-router-dom';
import getAverageColor from 'get-average-color';
import { useEffect } from 'react';
import { Info, Container, Circle, Image, Icon, Search } from './ProductStyle';
import { useDispatch, useSelector } from 'react-redux';
import { addToWishList } from '../Redux/WishListSlice';
import { userRequest } from '../axiosRequest';
const Product = ({ item }) => {
	console.log(item);
	const [color, setColor] = useState();
	const dispatch = useDispatch();
	useEffect(() => {
		getAverageColor(item.img).then((rgb) =>
			setColor(`rgba(${rgb.r},${rgb.g},${rgb.b},0.7)`)
		);
	}, [item.img]);
	const { _id } = useSelector((state) => state.user);

	const sendWishListToServer = async () => {
		const productData = {
			userId: _id,
			title: item.title,
			price: item.price,
			_id: item._id,
			img: item.img,
		};
		try {
			const res = await userRequest.post('/wishList', productData);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const addToWishListHandler = () => {
		dispatch(
			addToWishList({
				wishLists: {
					name: item.title,
					price: item.price,
					id: item._id,
					img: item.img,
				},
			})
		);
		sendWishListToServer();
	};

	return (
		<Container data-aos="flip-left">
			{item ? (
				<>
					<Image src={item.img}></Image>
					<Info>
						{/* <Icon>
								<ShoppingCartCheckoutOutlinedIcon />
							</Icon> */}
						<Icon>
							<Search>
								<Link to={`/product/${item._id}`}>
									<SearchOutlinedIcon />
								</Link>
							</Search>
						</Icon>
						<Icon>
							<FavoriteBorderOutlinedIcon onClick={addToWishListHandler} />
						</Icon>
					</Info>
					<Circle color={color} />
				</>
			) : null}
		</Container>
	);
};

export default Product;
