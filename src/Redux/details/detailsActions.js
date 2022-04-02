export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";
export const CLEAR_DETAILS = "@@details/CLEAR_DETAILS";
export const SET_NEIGHBOURS = "@@details/SET_NEIGHBOURS";

export const setLoading = {
    type: SET_LOADING
};
export const clearDetails = {
    type: CLEAR_DETAILS
};
export const setError = (err) => ({
    type: SET_ERROR,
    err
});
const setCountry = (country) => ({
    type: SET_COUNTRY,
    country
});
const setNeighbours = (countries) => ({
    type: SET_NEIGHBOURS,
    countries
});


export const loadCountryByName = (name) => (dispatch, _, {axios, api}) => {
    dispatch(setLoading);

    axios.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err)))
};
export const loadNeighboursByBorder = (borders) => (dispatch, _, {axios, api}) => {

    axios.get(api.filterByCode(borders))
        .then(({data}) => dispatch(setNeighbours(data.map(c => c.name))))
        .catch(err => dispatch(setError(err)))
        .catch(console.error);
};