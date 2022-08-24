import { configureStore } from '@reduxjs/toolkit';
import {
	persistStore,
	persistReducer,
	FLUSH,
	REHYDRATE,
	PAUSE,
	PERSIST,
	PURGE,
	REGISTER,
} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import cartReducer from './CartSlice';
import userReducer from './UserSlice';
import wishListReducer from './WishListSlice';

// const persistConfig = {
// 	key: 'root',
// 	version: 1,
// 	storage,
// };

// const persistedReducer = persistReducer(persistConfig, userReducer);
export default configureStore({
	reducer: {
		cart: cartReducer,
		user:
			// persistedReducer,
			userReducer,
		wishList: wishListReducer,
	},
	// middleware: (getDefaultMiddleware) =>
	// 	getDefaultMiddleware({
	// 		serializableCheck: {
	// 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
	// 		},
	// 	}),
});

// export let persistor = persistStore(configureStore);
