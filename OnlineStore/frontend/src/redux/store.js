import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import { cartReducer } from "./reducers/cartReducers";
import {
	getProductReducer,
	getProductDetailsReducer,
} from "./reducers/productReducers";

const reducer = combineReducers({
	cart: cartReducer,
	getProducts: getProductReducer,
	getProductDetails: getProductDetailsReducer,
});

const middleWare = [thunk];

const cartFromLocalStorage = localStorage.getItem("cart")
	? JSON.parse(localStorage.getItem("cart"))
	: [];

const INITIAL_STATE = {
	cart: {
		cartItems: cartFromLocalStorage,
	},
};

const store = createStore(
	reducer,
	INITIAL_STATE,
	composeWithDevTools(applyMiddleware(...middleWare))
);

export default store;
