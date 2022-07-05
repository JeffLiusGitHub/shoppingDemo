import { Add, Remove } from '@material-ui/icons';
import Announcement from '../components/Announcement';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import { userRequest } from '../axiosRequest';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addProductQuantity, deductProductQuantity } from '../Redux/CartSlice';
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
	Hr,
	Summary,
	SummaryTitle,
	SummaryItem,
	SummaryItemText,
	SummaryItemPrice,
	Button,
	Container,
} from './CartStyle';
import Snackbar from '../components/Snackbar';

const Cart = () => {
	const quantity = useSelector((state) => state.cart.quantity);
	const navigate = useNavigate();
	const dispatch = useDispatch();
	const KEY = process.env.REACT_APP_STRIPE;
	const cart = useSelector((state) => state.cart);
	const [token, setToken] = useState(null);
	const onToken = (token) => {
		setToken(token);
	};
	const addOnProduct = (id, size, color) => {
		dispatch(addProductQuantity({ id: id, size: size, color: color }));
	};
	const deductOnProduct = (id, size, color) => {
		dispatch(deductProductQuantity({ id: id, size: size, color: color }));
	};
	// useEffect(() => {
	// 	const request = async () => {
	// 		try {
	// 			const req = await userRequest.post('checkout/payment', {
	// 				tokenId: token.id,
	// 				amount: cart.total * 100,
	// 			});
	// 			navigate('/success', {
	// 				stripeData: req.data,
	// 				products: cart,
	// 			});
	// 			token && request();
	// 		} catch (error) {
	// 			console.log(error);
	// 		}
	// 		request();
	// 	};
	// }, [token, cart, navigate]);

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
						<TopButton type="filled">CHECKOUT NOW</TopButton>
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
						<SummaryItem>
							<SummaryItemText>Shipping Discount</SummaryItemText>
							<SummaryItemPrice>$ -5.90</SummaryItemPrice>
						</SummaryItem>
						<SummaryItem type="total">
							<SummaryItemText>Total</SummaryItemText>
							<SummaryItemPrice>$ {cart.total}</SummaryItemPrice>
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
							<Button>CHECKOUT NOW</Button>
						</StripeCheckout>
					</Summary>
				</Bottom>
			</Wrapper>
		</Container>
	);
};

export default Cart;
