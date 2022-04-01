import { createStore, compose, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import axios from "axios";
import * as api from '../config';

import { rootReducer } from "./rootReducer";

// строка берется из установленного в браузере расширения, если его нет то строка undefined и используется только compose
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


export const store = createStore(rootReducer, composeEnhancer(
    applyMiddleware(thunk.withExtraArgument({
        axios: axios,
        api: api
    }))
))
