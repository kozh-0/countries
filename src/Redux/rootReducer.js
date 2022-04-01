import { combineReducers } from "redux";
import { themeReducer } from "./Theme/themeReducer";
import { countriesReducer } from "./Countries/countryReducer";
import { controlsReducer } from "./Controls/controlsReducer";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReducer,
    controls: controlsReducer
});