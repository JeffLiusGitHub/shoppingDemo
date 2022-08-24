"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = exports.deleteFromWishList = exports.addToWishList = void 0;

var _toolkit = require("@reduxjs/toolkit");

var wishListSlice = (0, _toolkit.createSlice)({
  name: 'wishList',
  initialState: {
    wishLists: [],
    quantity: 0
  },
  reducers: {
    addToWishList: function addToWishList(state, action) {
      var existingwishListIndex = state.wishLists.findIndex(function (w) {
        return w.id === action.payload.wishLists.id;
      });

      if (existingwishListIndex !== -1) {
        return;
      } else {
        state.wishLists.push(action.payload.wishLists);
        state.quantity += 1;
      }
    },
    deleteFromWishList: function deleteFromWishList(state, action) {
      var wishListsIndex = state.wishLists.findIndex(function (w) {
        return w.id === action.payload;
      });

      if (wishListsIndex !== -1) {
        var newWishListArray = state.wishLists;
        newWishListArray.splice(wishListsIndex, 1);
        state.wishLists = newWishListArray;
        state.quantity -= 1;
      }
    }
  }
});
var _wishListSlice$action = wishListSlice.actions,
    addToWishList = _wishListSlice$action.addToWishList,
    deleteFromWishList = _wishListSlice$action.deleteFromWishList;
exports.deleteFromWishList = deleteFromWishList;
exports.addToWishList = addToWishList;
var _default = wishListSlice.reducer;
exports["default"] = _default;