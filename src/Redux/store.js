import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';
import wishListReducer from './WishListSlice';
export default configureStore({
	reducer: {
		cart: cartReducer,
		user: userReducer,
		wishList: wishListReducer,
	},
});
