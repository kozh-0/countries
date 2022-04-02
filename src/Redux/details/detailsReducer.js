import { CLEAR_DETAILS, SET_COUNTRY, SET_ERROR, SET_LOADING, SET_NEIGHBOURS } from "./detailsActions";


const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null,
    neighbours: []
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_COUNTRY:
            return {
                ...state,
                error: null,
                status: 'received',
                currentCountry: action.country
            };

        case SET_NEIGHBOURS:
            return {
                ...state,
                neighbours: action.countries
            };

        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            };

        case CLEAR_DETAILS:
            return initialState;
            
        case SET_ERROR:
            return {
                ...state,
                error: action.err,
                status: 'rejected'
            };
            
    
        default:
            return state;
    }
}