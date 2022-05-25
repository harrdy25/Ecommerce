import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { userReducer } from "./user.reducer";
import { ProductReducer } from "./Product.Reducer";


export const rootReducer = combineReducers({
    counter: counterReducer,
    user: userReducer,
    product: ProductReducer

})