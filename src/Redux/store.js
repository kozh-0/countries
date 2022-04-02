import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import axios from "axios";
import * as api from '../config';
import { rootReducer } from "./rootReducer";



const persistConfig = {
    key: 'root',
    storage,
    whitelist: ['theme'],
    blacklist: []
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

// строка берется из установленного в браузере расширения, если его нет то строка undefined и используется только compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(persistedReducer, composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({
        axios: axios,
        api: api
    }))
))

export const persistor = persistStore(store)
