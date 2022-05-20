import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { ProductReducer } from "./Product.Reducer";
import { userReducer } from "./user.reducer";

export const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    product : ProductReducer
})