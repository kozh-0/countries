import { debounce } from "lodash";

export const SET_SEARCH = '@@controls/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS';



export const setSearch = (search) => ({
    type: SET_SEARCH,
    search
});
export const setRegion = (region) => ({
    type: SET_REGION,
    region
});
export const clearControls = {
    type: CLEAR_CONTROLS,
};


export const inputDebounceMiddleware = (store) => (next) => (action) => {
    // в рот ебал, не работает
    if (action.type === SET_SEARCH) {
        // (debounce(() => console.log('asdas'),300))()
        debounce(() => store.dispatch(setSearch(action.search)), 500)
    }
    next(action)
}