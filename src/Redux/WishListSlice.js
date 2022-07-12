import { createSlice } from '@reduxjs/toolkit';

const wishListSlice = createSlice({
	name: 'wishList',
	initialState: {
		wishLists: [],
		quantity: 0,
	},
	reducers: {
		addToWishList: (state, action) => {
			const existingwishListIndex = state.wishLists.findIndex(
				(w) => w.id === action.payload.wishLists.id
			);
			if (existingwishListIndex !== -1) {
				return;
			} else {
				state.wishLists.push(action.payload.wishLists);
				state.quantity += 1;
			}
		},

		deleteFromWishList: (state, action) => {
			const wishListsIndex = state.wishLists.findIndex(
				(w) => w.id === action.payload
			);
			if (wishListsIndex !== -1) {
				const newWishListArray = state.wishLists;
				newWishListArray.splice(wishListsIndex, 1);
				state.wishLists = newWishListArray;
				state.quantity -= 1;
			}
		},
	},
});

export const { addToWishList, deleteFromWishList } = wishListSlice.actions;
export default wishListSlice.reducer;
