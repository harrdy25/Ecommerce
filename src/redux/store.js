import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'

const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const configStore = () => {
    const store = createStore(persistedReducer, applyMiddleware(thunk));
    let persistor = persistStore(store)
    return { store, persistor }
}
