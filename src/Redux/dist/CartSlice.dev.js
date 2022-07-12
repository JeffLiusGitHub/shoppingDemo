"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteProduct = exports.deductProductQuantity = exports.addProductQuantity = exports.addProductsToCart = void 0;

var _toolkit = require("@reduxjs/toolkit");

var cartSlice = (0, _toolkit.createSlice)({
  name: 'cart',
  initialState: {
    products: [],
    quantity: 0,
    total: 0
  },
  reducers: {
    addProductsToCart: function addProductsToCart(state, action) {
      var existingProductIndex = state.products.findIndex(function (p) {
        return p.size === action.payload.products.size && p.id === action.payload.products.id && p.color === action.payload.products.color;
      });
      var existingProduct = state.products[existingProductIndex];

      if (existingProductIndex !== -1) {
        existingProduct.quantity += parseInt(action.payload.products.quantity);
        state.products[existingProductIndex] = existingProduct;
      } else {
        state.products.push(action.payload.products);
      }

      state.total += action.payload.products.price * action.payload.products.quantity;
      state.quantity += action.payload.quantity;
    },
    addProductQuantity: function addProductQuantity(state, action) {
      var productIndex = state.products.findIndex(function (p) {
        return p.id === action.payload.id && p.size === action.payload.size && p.color === action.payload.color;
      });

      if (productIndex !== -1) {
        var currentProduct = state.products[productIndex];
        currentProduct.quantity += 1;
        state.products[productIndex] = currentProduct;
        state.total += currentProduct.price;
        state.quantity += 1;
      }
    },
    deductProductQuantity: function deductProductQuantity(state, action) {
      var productIndex = state.products.findIndex(function (p) {
        return p.id === action.payload.id && p.size === action.payload.size && p.color === action.payload.color;
      });

      if (productIndex !== -1) {
        var currentProduct = state.products[productIndex];

        if (currentProduct.quantity === 1) {
          var newProductArray = state.products.filter(function (p) {
            return p.id !== action.payload.id || p.size !== action.payload.size || p.color !== action.payload.color;
          });
          state.products = newProductArray;
        } else {
          currentProduct.quantity -= 1;
          state.products[productIndex] = currentProduct;
        }

        state.total -= currentProduct.price;
        state.quantity -= 1;
      }
    },
    deleteProduct: function deleteProduct(state, action) {
      var productIndex = state.products.findIndex(function (p) {
        return p.id === action.payload.id && p.size === action.payload.size && p.color === action.payload.color;
      });
      var currentProduct = state.products[productIndex];

      if (productIndex !== -1) {
        state.total -= currentProduct.price * currentProduct.quantity;
        state.quantity -= currentProduct.quantity;
        var newProductArray = state.products;
        newProductArray.splice(productIndex, 1);
        state.products = newProductArray;
      }
    }
  }
});
var _cartSlice$actions = cartSlice.actions,
    addProductsToCart = _cartSlice$actions.addProductsToCart,
    addProductQuantity = _cartSlice$actions.addProductQuantity,
    deductProductQuantity = _cartSlice$actions.deductProductQuantity,
    deleteProduct = _cartSlice$actions.deleteProduct;
exports.deleteProduct = deleteProduct;
exports.deductProductQuantity = deductProductQuantity;
exports.addProductQuantity = addProductQuantity;
exports.addProductsToCart = addProductsToCart;
var _default = cartSlice.reducer;
exports["default"] = _default;