"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _toolkit = require("@reduxjs/toolkit");

var _reduxPersist = require("redux-persist");

var _storage = _interopRequireDefault(require("redux-persist/lib/storage"));

var _CartSlice = _interopRequireDefault(require("./CartSlice"));

var _UserSlice = _interopRequireDefault(require("./UserSlice"));

var _WishListSlice = _interopRequireDefault(require("./WishListSlice"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// const persistConfig = {
// 	key: 'root',
// 	version: 1,
// 	storage,
// };
// const persistedReducer = persistReducer(persistConfig, userReducer);
var _default = (0, _toolkit.configureStore)({
  reducer: {
    cart: _CartSlice["default"],
    user: // persistedReducer,
    _UserSlice["default"],
    wishList: _WishListSlice["default"]
  } // middleware: (getDefaultMiddleware) =>
  // 	getDefaultMiddleware({
  // 		serializableCheck: {
  // 			ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
  // 		},
  // 	}),

}); // export let persistor = persistStore(configureStore);


exports["default"] = _default;