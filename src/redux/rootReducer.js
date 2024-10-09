import { combineReducers } from "@reduxjs/toolkit";
import authReducer from "./auth/authSlice";
import counterReducer from "./counter/counterSlice";
import productsReducer from "./products/productSlice";

const rootReducer=combineReducers({
    auth:authReducer,
    counter:counterReducer,
    product:productsReducer,
})
export default rootReducer;