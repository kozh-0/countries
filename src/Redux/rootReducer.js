import { combineReducers } from "redux";
import { themeReducer } from "./Theme/themeReducer";
import { countriesReducer } from "./Countries/countryReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer
});