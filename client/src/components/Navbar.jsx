import React, { useState } from 'react';
import Avatar from '@mui/material/Avatar';
import { green } from '@mui/material/colors';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logOut } from '../Redux/UserSlice';
import { useDispatch } from 'react-redux';
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
	MenuItems,
	CartIcon,
} from './NavbarStyle';

const Navbar = () => {
	const [anchorEl, setAnchorEl] = useState(null);
	const userName = useSelector((state) => state.user.currentUser);
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.quantity);
	const wishListsQuantity = useSelector((state) => state.wishList.quantity);
	const handleClose = () => {
		setAnchorEl(null);
		localStorage.removeItem('token');
		dispatch(logOut());
	};
	const handleMenu = (event) => {
		setAnchorEl(event.currentTarget);
	};
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
						<MenuItems>REGISTER</MenuItems>
					</Link>

					{!userName ? (
						<Link
							to="/login"
							style={{ textDecoration: 'none', color: 'white' }}
						>
							<MenuItems>SIGNIN</MenuItems>
						</Link>
					) : (
						<div>
							<IconButton
								size="large"
								aria-label="account of current user"
								aria-controls="menu-appbar"
								aria-haspopup="true"
								onClick={handleMenu}
								color="inherit"
							>
								<Avatar
									sx={{ bgcolor: green[500], height: '30px', width: '30px' }}
								>
									{userName[0].toUpperCase()}
								</Avatar>
							</IconButton>
							<Menu
								id="menu-appbar"
								anchorEl={anchorEl}
								anchorOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								keepMounted
								transformOrigin={{
									vertical: 'top',
									horizontal: 'right',
								}}
								open={Boolean(anchorEl)}
								onClose={handleClose}
							>
								<MenuItem onClick={handleClose}>LogOut</MenuItem>
							</Menu>
						</div>
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
