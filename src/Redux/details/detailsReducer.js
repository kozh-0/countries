import { SET_COUNTRY, SET_ERROR, SET_LOADING } from "./detailsActions";


const initialState = {
    currentCountry: null,
    status: 'idle',
    error: null
}

export const detailsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_LOADING:
            return {
                ...state,
                error: null,
                status: 'loading'
            }
            
        case SET_ERROR:
            return {
                ...state,
                error: action.err,
                status: 'rejected'
            }
        case SET_COUNTRY:
            return {
                ...state,
                error: null,
                status: 'received',
                currentCountry: action.country
            }
            
    
        default:
            return state;
    }
}