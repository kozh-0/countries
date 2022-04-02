export const SET_LOADING = "@@details/SET_LOADING";
export const SET_ERROR = "@@details/SET_ERROR";
export const SET_COUNTRY = "@@details/SET_COUNTRY";

export const setLoading = {
    type: SET_LOADING
};
export const setError = (err) => ({
    type: SET_ERROR,
    err
});
export const setCountry = (country) => ({
    type: SET_COUNTRY,
    country
});


export const loadCountryByName = (name) => (dispatch, _, {axios, api}) => {
    dispatch(setLoading);


    /* axios(`https://restcountries.com/v2/name/${name}`)
        // .then(({data}) => console.log(data[0]))
        .then(({data}) => setCountry(data[0])) */


    axios.get(api.searchByCountry(name))
        .then(({data}) => dispatch(setCountry(data[0])))
        .catch(err => dispatch(setError(err)))
};