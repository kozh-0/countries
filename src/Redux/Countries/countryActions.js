export const SET_COUNTRIES = "@@country/SET_COUNTRIES";
export const SET_LOADING = "@@country/SET_LOADING";
export const SET_ERROR = "@@country/SET_ERROR";

// action синхронные, их обрабатывает редюсер
export const setCountries = (countries) => ({
    type: SET_COUNTRIES,
    countries
})

export const setLoading = {
    type: SET_LOADING
}

export const setError = (error) => ({
    type: SET_ERROR,
    error
})

// thunk - редюсер их не обрабатывает, thunk это middleware между экшоном и редюсером, обрабатывает экшон
export const loadCountries = () => (dispatch, _, {axios, api}) => {
    dispatch(setLoading);

    axios.get(api.ALL_COUNTRIES)
        .then(({data}) => dispatch(setCountries(data)))
        .catch(err => dispatch(setError(err.message)));
}