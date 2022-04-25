import { CLEAR_CONTROLS, SET_REGION, SET_SEARCH, SET_PAGE } from "./controlsAction";

const initialState = {
    search: '',
    region: '',
    page: 1
};

export const controlsReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_SEARCH:
            return {
                ...state,
                search: action.search,
                page: 1
            };
        case SET_REGION:
            return {
                ...state,
                region: action.region,
                page: 1
            };
        case SET_PAGE:
            return {
                ...state,
                page: action.page
            };
        case CLEAR_CONTROLS:
            return initialState;
    
        default:
            return state;
    }
}