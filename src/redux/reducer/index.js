import { combineReducers } from "redux";
import { counterReducer } from "./counter.reducer";
import { authUserReducer } from "./user.reducer";
import { ProductReducer } from "./Product.Reducer";


export const rootReducer = combineReducers({
    counter: counterReducer,
    auth: authUserReducer,
    product: ProductReducer

})