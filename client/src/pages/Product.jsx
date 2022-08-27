import { Add, Remove } from '@material-ui/icons';
import Newsletter from '../components/Newsletter';
import { useLocation } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { publicRequest } from '../axiosRequest';
import { addProductsToCart } from '../Redux/CartSlice';
import { useDispatch } from 'react-redux';
import { allData } from '../data';
import CustomAccordion from '../components/CustomAccordion';
import { shippingInfo } from '../data';
import ShareIcon from '@mui/icons-material/Share';
import Fab from '@mui/material/Fab';
import {
	FabContainer,
	Container,
	Wrapper,
	ImgContainer,
	Image,
	InfoContainer,
	Title,
	Desc,
	Discount,
	Price,
	FilterContainer,
	Filter,
	ColorContainer,
	ColorDisplayValue,
	FilterTitle,
	FilterColor,
	ColorFilter,
	FilterSize,
	FilterSizeOption,
	ErrorContainer,
	Error,
	AddContainer,
	AmountContainer,
	Amount,
	Button,
	ShippingInfoContainer,
} from './ProductStyle';
import CustomDrawer from '../components/CustomDrawer';
import CompleteStatus from '../components/CompleteStatus';
import CustomBackDrop from '../components/CustomBackDrop';
import QRcodeComponent from '../components/QRcodeComponent';
const Product = () => {
	const location = useLocation();
	const id = location.pathname.split('/')[2];
	const [productDetails, setProductDetails] = useState();
	const [quantity, setQuantity] = useState(1);
	const [color, setColor] = useState(null);
	const [size, setSize] = useState(null);
	const [click, setClick] = useState(false);
	const [open, setOpen] = useState(false);
	const [backdropOpen, setBackdropOpen] = useState(false);
	const dispatch = useDispatch();
	useEffect(() => {
		const getProductDetails = async () => {
			try {
				if (id) {
					const res = await publicRequest.get('product/find/' + id);
					setProductDetails(res.data);
					console.log(res);
				} else {
					// <Redirect to=''></Redirect>
				}
			} catch (error) {}
			if (id) {
				const detailProduct = allData.filter((data) => data._id === id);
				setProductDetails(detailProduct[0]);
			}
		};
		getProductDetails();
	}, [id]);
	const handleToggle = () => {
		setBackdropOpen(!backdropOpen);
	};
	const addToCartHandler = () => {
		setClick(true);

		if (color && size !== null) {
			dispatch(
				addProductsToCart({
					products: {
						name: productDetails.title,
						color: color,
						size: size,
						price: productDetails.price,
						id: productDetails._id,
						quantity: quantity,
						img: productDetails.img,
					},
					quantity,
				})
			);
			setOpen(true);
		}
	};

	return (
		<>
			<FabContainer>
				<Fab
					variant="extended"
					size="large"
					color="primary"
					onClick={handleToggle}
				>
					<ShareIcon sx={{ mr: 1 }} />
					share
				</Fab>
			</FabContainer>
			<CustomBackDrop
				setBackdropOpen={setBackdropOpen}
				backdropOpen={backdropOpen}
				handleToggle={handleToggle}
			>
				<QRcodeComponent id={id} />
			</CustomBackDrop>
			<Container>
				<CustomDrawer open={open} setOpen={setOpen}>
					<CompleteStatus
						img={productDetails?.img}
						name={productDetails?.title}
						price={productDetails?.price}
						quantity={quantity}
					/>
				</CustomDrawer>
				{productDetails && (
					<Wrapper>
						<ImgContainer>
							{productDetails.img && <Image src={productDetails.img} />}
						</ImgContainer>
						<InfoContainer>
							<Title>{productDetails.title}</Title>
							<Desc>
								{productDetails.description}
								-Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
								venenatis, dolor in finibus malesuada, lectus ipsum porta nunc,
								at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex,
								eget tristique tortor pretium ut. Curabitur elit justo,
								consequat id condimentum ac, volutpat ornare.
							</Desc>
							<Discount>50% OFF AT CHECKOUT </Discount>
							<Price>$ {productDetails.price}</Price>
							<FilterContainer>
								<Filter>
									<ColorContainer>
										<FilterTitle>
											Color: <ColorDisplayValue>{color}</ColorDisplayValue>
										</FilterTitle>
										<ColorFilter>
											{productDetails.color?.map((color) => (
												<FilterColor
													defaultValue={'color'}
													color={color}
													key={color}
													onClick={() => setColor(color)}
												/>
											))}
										</ColorFilter>
									</ColorContainer>
								</Filter>
								<Filter>
									<FilterTitle>Size</FilterTitle>
									<FilterSize
										name="pick up a size"
										defaultValue="Pick up a size"
										onChange={(event) => setSize(event.target.value)}
									>
										<FilterSizeOption disabled>Pick up a Size</FilterSizeOption>
										{productDetails.size?.map((size) => (
											<FilterSizeOption key={size}>{size}</FilterSizeOption>
										))}
									</FilterSize>
								</Filter>
							</FilterContainer>
							<ErrorContainer>
								{click && !color ? (
									<Error>Please confirm the color</Error>
								) : null}
								{click && !size ? <Error>Please confirm the size</Error> : null}
							</ErrorContainer>
							<AddContainer>
								<AmountContainer>
									{quantity > 1 ? (
										<Remove onClick={() => setQuantity(quantity - 1)} />
									) : (
										<Remove />
									)}
									<Amount>{quantity}</Amount>
									<Add onClick={() => setQuantity(quantity + 1)} />
								</AmountContainer>
								<Button onClick={addToCartHandler}>ADD TO CART</Button>
							</AddContainer>
							<ShippingInfoContainer>
								<CustomAccordion shippingInfo={shippingInfo} />
							</ShippingInfoContainer>
						</InfoContainer>
					</Wrapper>
				)}
				<Newsletter />
			</Container>
		</>
	);
};

export default Product;
