import React from 'react';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import {
	NavContainer,
	Wrapper,
	Left,
	Center,
	Right,
	Language,
	SearchContainer,
	Input,
	Logo,
	MenuItem,
	CartIcon,
} from './NavbarStyle';

const Navbar = () => {
	const userName = useSelector((state) => state.user.currentUser);
	console.log(userName);
	const cartQuantity = useSelector((state) => state.cart.quantity);
	const wishListsQuantity = useSelector((state) => state.wishList.quantity);

	return (
		<NavContainer>
			<Wrapper>
				<Left>
					<Language>EN</Language>
					<SearchContainer>
						<Input placeholder="more feature in the future" />
						<SearchIcon style={{ color: 'gray', fontSize: '16px' }} />
					</SearchContainer>
				</Left>
				<Center>
					<Link to="/" style={{ textDecoration: 'none' }}>
						<Logo>ICONIC</Logo>
					</Link>
				</Center>
				<Right>
					<Link
						to="/register"
						style={{ textDecoration: 'none', color: 'white' }}
					>
						<MenuItem>REGISTER</MenuItem>
					</Link>

					{!userName ? (
						<Link
							to="/login"
							style={{ textDecoration: 'none', color: 'white' }}
						>
							<MenuItem>SIGNIN</MenuItem>
						</Link>
					) : (
						<Avatar sx={{ bgcolor: green[500], height: '30px', width: '30px' }}>
							{userName[0].toUpperCase()}
						</Avatar>
					)}

					<CartIcon>
						<Link
							to="/wishlist"
							style={{ margin: '1rem', textDecoration: 'none', color: 'white' }}
						>
							<Badge badgeContent={wishListsQuantity} color="error">
								<FavoriteBorderIcon
									sx={{ fontSize: { lg: 'large', md: 'medium', xs: 'small' } }}
								/>
							</Badge>
						</Link>
					</CartIcon>

					<CartIcon>
						<Link
							to="/cart"
							style={{ margin: '1rem', textDecoration: 'none', color: 'white' }}
						>
							<Badge badgeContent={cartQuantity} color="error">
								<ShoppingCartOutlinedIcon
									sx={{ fontSize: { lg: 'large', md: 'medium', xs: 'small' } }}
								/>
							</Badge>
						</Link>
					</CartIcon>
				</Right>
			</Wrapper>
		</NavContainer>
	);
};

export default Navbar;
