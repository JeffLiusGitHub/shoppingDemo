import { Add, Remove } from '@material-ui/icons';
import Announcement from '../components/Announcement';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../axiosRequest';
import { useDispatch } from 'react-redux';
import {
	addProductQuantity,
	deductProductQuantity,
	deleteProduct,
} from '../Redux/CartSlice';
import { announcement } from '../data';
import {
	Wrapper,
	Title,
	Top,
	TopButton,
	TopTexts,
	TopText,
	Bottom,
	Info,
	Product,
	ProductDetail,
	Image,
	Details,
	ProductName,
	ProductId,
	ProductColor,
	ProductSize,
	PriceDetail,
	ProductAmountContainer,
	ProductAmount,
	ProductPrice,
	ProductButton,
	DeleteContainer,
	Hr,
	Summary,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
	Button,
	Container,
	DeleteContent,
} from './CartStyle';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

const Cart = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const { _id, isLogin } = useSelector((state) => state.user);

	// console.log({ JWT });
	const dispatch = useDispatch();
	const KEY = process.env.REACT_APP_STRIPE;
	const {
		cart,
		cart: { products: reduxProducts },
	} = useSelector((state) => state);
	const [token, setToken] = useState(null);
	const [coupon, setCoupon] = useState('');
	const [isValidCoupon, setIsValidCoupon] = useState(false);
	const [error, setError] = useState();
	console.log(...reduxProducts);
	// const [isLogin, setIsLogin] = useState(false);
	const onToken = (token) => {
		setToken(token);
	};
	const addOnProduct = (id, size, color) => {
		dispatch(addProductQuantity({ id: id, size: size, color: color }));
	};
	const deductOnProduct = (id, size, color) => {
		dispatch(deductProductQuantity({ id: id, size: size, color: color }));
	};
	const deleteCurrentProduct = (id, size, color) => {
		dispatch(deleteProduct({ id: id, size: size, color: color }));
	};
	const handleCoupon = (e) => {
		e.preventDefault();
		if (coupon.trim().toUpperCase() === 'FRESH12') {
			if (cart.total > 99) {
				setIsValidCoupon(true);
			} else setError('Coupon can only use when you purchase over 99$');
		} else setError('invalid Coupon');
	};

	const sendCartToServer = async (products) => {
		let cartData = {
			userId: _id,
			products,
		};

		try {
			const res = await userRequest.post(`/carts/${_id}`, cartData);
			console.log(res);
		} catch (error) {
			console.log(error);
		}
	};

	const checkoutHandler = () => {
		try {
			reduxProducts.map((products) => {
				return sendCartToServer(products);
			});
			alert('please check admin account to see your order');
		} catch (err) {
			alert(err);
		}
	};

	return (
		<Container>
			<Announcement color={'#FFC9A0'} text={announcement[2]} />
			<Wrapper>
				<Title>YOUR BAG</Title>
				<Top>
					<Link to="/products/all">
						<TopButton>CONTINUE SHOPPING</TopButton>
					</Link>
					<TopTexts>
						<TopText>Shopping Bag({quantity})</TopText>
						<TopText>Your Wishlist (0)</TopText>
					</TopTexts>
					<StripeCheckout
						name="ICONIC"
						image="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
						billingAddress
						shippingAddress
						description={`Your total is $${cart.total}`}
						amount={cart.total * 100}
						token={onToken}
						stripeKey={KEY}
					>
						<TopButton type="filled" disabled={!isLogin}>
							{isLogin ? 'CHECKOUT NOW' : 'LOGIN BEFORE CHECKOUT'}
						</TopButton>
					</StripeCheckout>
				</Top>
				<Bottom>
					<Info>
						{cart?.products.map((p) => (
							<Product key={p.id}>
								<Link
									to={`/product/${p.id}`}
									style={{ textDecoration: 'none', color: 'black', flex: 2 }}
								>
									<ProductDetail>
										<Image src={p.img} />
										<Details>
											<ProductName>
												<b>Product:</b> {p.name}
											</ProductName>
											<ProductId>
												<b>ID:</b> {p.id}
											</ProductId>
											<ProductColor color={p.color} />
											<ProductSize>
												<b>Size:</b> {p.size}
											</ProductSize>
										</Details>
									</ProductDetail>
								</Link>
								<PriceDetail>
									{' '}
									<DeleteContainer
										onClick={() => deleteCurrentProduct(p.id, p.size, p.color)}
									>
										<DeleteContent>remove</DeleteContent>
										<DeleteOutlineIcon />
									</DeleteContainer>
									<ProductAmountContainer>
										<ProductButton
											onClick={() => addOnProduct(p.id, p.size, p.color)}
										>
											<Add />
										</ProductButton>
										<ProductAmount>{p.quantity}</ProductAmount>
										<ProductButton
											onClick={() => deductOnProduct(p.id, p.size, p.color)}
										>
											<Remove />
										</ProductButton>
									</ProductAmountContainer>
									<ProductPrice>$ {p.quantity * p.price}</ProductPrice>
								</PriceDetail>{' '}
								<Hr />
							</Product>
						))}
					</Info>
					<Summary>
						<SummaryTitle>ORDER SUMMARY</SummaryTitle>
						<SummaryItem>
							<SummaryItemText>Subtotal</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem>
							<SummaryItemText>Estimated Shipping</SummaryItemText>
							<SummaryItemPrice>$ 5.90</SummaryItemPrice>
						</SummaryItem>
						{isValidCoupon && (
							<SummaryItem>
								<SummaryItemText>Shipping Discount</SummaryItemText>
								<SummaryItemPrice>$ -5.90</SummaryItemPrice>
							</SummaryItem>
						)}
						<form>
							<label>
								Coupon:
								<input
									type="text"
									name="coupon"
									value={coupon}
									onChange={(e) => setCoupon(e.target.value)}
								></input>
							</label>
							<button onClick={handleCoupon}>submit</button>
							{!isValidCoupon && <p style={{ color: 'red' }}>{error}</p>}
						</form>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							{isValidCoupon ? (
								<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
							) : (
								<SummaryItemPrice>
									$ {parseInt(cart.total) + 5.9}
								</SummaryItemPrice>
							)}
						</SummaryItem>
						<StripeCheckout
							name="ICONIC"
							image="https://www.kindpng.com/picc/m/22-223941_transparent-avatar-png-male-avatar-icon-transparent-png.png"
							billingAddress
							shippingAddress
							description={`Your total is $${cart.total}`}
							amount={cart.total * 100}
							token={onToken}
							stripeKey={KEY}
						>
							<Button disabled={!isLogin} onClick={checkoutHandler}>
								{isLogin ? 'CHECKOUT NOW' : 'LOGIN BEFORE CHECKOUT'}
							</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Cart;
