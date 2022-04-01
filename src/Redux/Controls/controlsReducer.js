import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH } from "./controlsAction";

const initialState = {
    search: '',
    region: ''
};

export const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.search
            };
        case SET_REGION:
            return {
                ...state,
                region: action.region
            }
        case CLEAR_CONTROLS:
            return initialState;
    
        default:
            return state;
    }
}