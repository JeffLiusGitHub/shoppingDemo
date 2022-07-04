import { createSlice } from '@reduxjs/toolkit';

const cartSlice = createSlice({
	name: 'cart',
	initialState: {
		products: [],
		quantity: 0,
		total: 0,
	},
	reducers: {
		addProductsToCart: (state, action) => {
			const existingProductIndex = state.products.findIndex(
				(p) =>
					p.size === action.payload.products.size &&
					p.id === action.payload.products.id &&
					p.color === action.payload.products.color
			);
			const existingProduct = state.products[existingProductIndex];
			if (existingProductIndex !== -1) {
				existingProduct.quantity += parseInt(action.payload.products.quantity);
				state.products[existingProductIndex] = existingProduct;
			} else {
				state.products.push(action.payload.products);
			}
			state.total +=
				action.payload.products.price * action.payload.products.quantity;
			state.quantity += action.payload.quantity;
		},

		addProductQuantity: (state, action) => {
			const productIndex = state.products.findIndex(
				(p) =>
					p.id === action.payload.id &&
					p.size === action.payload.size &&
					p.color === action.payload.color
			);
			if (productIndex !== -1) {
				const currentProduct = state.products[productIndex];
				currentProduct.quantity += 1;
				state.products[productIndex] = currentProduct;
				state.total += currentProduct.price;
				state.quantity += 1;
			}
		},
		deductProductQuantity: (state, action) => {
			const productIndex = state.products.findIndex(
				(p) =>
					p.id === action.payload.id &&
					p.size === action.payload.size &&
					p.color === action.payload.color
			);
			if (productIndex !== -1) {
				const currentProduct = state.products[productIndex];
				console.log(currentProduct);
				if (currentProduct.quantity === 1) {
					const newProductArray = state.products.filter(
						(p) =>
							p.id !== action.payload.id ||
							p.size !== action.payload.size ||
							p.color !== action.payload.color
					);
					state.products = newProductArray;
				} else {
					currentProduct.quantity -= 1;
					state.products[productIndex] = currentProduct;
				}
				state.total -= currentProduct.price;
				state.quantity -= 1;
			}
		},
	},
});

export const { addProductsToCart, addProductQuantity, deductProductQuantity } =
	cartSlice.actions;
export default cartSlice.reducer;
