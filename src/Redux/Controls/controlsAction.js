export const SET_SEARCH = '@@controls/SET_SEARCH';
export const SET_REGION = '@@controls/SET_REGION';
export const SET_PAGE = '@@controls/SET_PAGE';
export const CLEAR_CONTROLS = '@@controls/CLEAR_CONTROLS';

export const setPage = (page) => ({
    type: SET_PAGE,
    page
})

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
