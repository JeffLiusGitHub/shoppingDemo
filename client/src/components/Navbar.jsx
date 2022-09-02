import React, { useEffect, useState } from 'react';
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
import { logOut } from '../Redux/UserSlice';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWishList } from '../Redux/apiCall';
import InventoryIcon from '@mui/icons-material/Inventory';

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
	const {
		currentUser: userName,
		_id,
		isAdmin,
	} = useSelector((state) => state.user);
	const dispatch = useDispatch();
	const cartQuantity = useSelector((state) => state.cart.quantity);
	// const wishListsQuantity = useSelector((state) => state.wishList.quantity);
	// const [wishListsQuantity, setWishListsQuantity] = useState();
	const wishListsQuantity = useSelector((state) => state.wishList.quantity);
	const handleClose = () => {
		setAnchorEl(null);
		dispatch(logOut());
	};
	// useEffect(() => {
	// 	(async () => {
	// 		const result = await fetchWishList(_id);
	// 		setWishListsQuantity(result?.length);
	// 	})();
	// }, [_id]);

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
									sx={{
										bgcolor: green[500],
										height: { xs: '15px', sm: '25px', md: '30px' },
										width: { xs: '15px', sm: '25px', md: '30px' },
										fontSize: { xs: '12px', sm: '22px', md: '27px' },
									}}
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

					{isAdmin ? (
						<CartIcon>
							<Link
								to="/admintable"
								style={{
									margin: '1rem',
									textDecoration: 'none',
									color: 'white',
								}}
							>
								<InventoryIcon
									sx={{
										fontSize: { lg: 'large', md: 'medium', xs: 'small' },
									}}
								/>
							</Link>
						</CartIcon>
					) : (
						<CartIcon>
							<Link
								to="/cart"
								style={{
									margin: '1rem',
									textDecoration: 'none',
									color: 'white',
								}}
							>
								<Badge badgeContent={cartQuantity} color="error">
									<ShoppingCartOutlinedIcon
										sx={{
											fontSize: { lg: 'large', md: 'medium', xs: 'small' },
										}}
									/>
								</Badge>
							</Link>
						</CartIcon>
					)}
				</Right>
			</Wrapper>
		</NavContainer>
	);
};

export default Navbar;
