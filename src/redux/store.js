import { applyMiddleware, createStore } from "redux";
import { rootReducer } from "./reducer";
import thunk from 'redux-thunk'
import { persistStore, persistReducer } from 'redux-persist'
import AsyncStorage from '@react-native-community/async-storage'
import createSagaMiddleware from 'redux-saga'
import rootSaga from "./sagas/rootSaga";


const persistConfig = {
    key: 'root',
    storage: AsyncStorage,
    whitelist: ['counter'],
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

const saga = createSagaMiddleware()

const middleWares = [saga, thunk]


export const configStore = () => {
    const store = createStore(persistedReducer, applyMiddleware(...middleWares));
    let persistor = persistStore(store)

    saga.run(rootSaga)

    return { store, persistor }
}
