export const SET_WEATHER = "@@details/SET_WEATHER";
export const RESET_WEATHER = "@@details/RESET_WEATHER";

export const resetWeather = {type: RESET_WEATHER};

const setWeather = (weatherData) => ({
    type: SET_WEATHER,
    weatherData
});


// thunk
export const setCapitalWeather = (capitalName) => (dispatch, _, {axios, api}) => {
    axios.get(api.getCapitalWeather(capitalName))
        .then(({data}) => dispatch(setWeather(data)))
        .catch(err => console.log(err))
};
