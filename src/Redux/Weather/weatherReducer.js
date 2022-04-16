import { RESET_WEATHER, SET_WEATHER } from "./weatherActions";


export const weatherReducer = (state = {}, action) => {
    switch (action.type) {
        case SET_WEATHER:
            return action.weatherData;
        case RESET_WEATHER:
            return {};
    
        default:
            return state;
    }
}