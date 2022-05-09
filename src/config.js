// Countries
const BASE_URL = 'https://restcountries.com/v2/';

export const ALL_COUNTRIES = BASE_URL + 'all?fields=name,capital,flags,population,region';

export const searchByCountry = (name) => BASE_URL + 'name/' + name;

export const filterByCode = (codes) => BASE_URL + 'alpha?codes=' + codes.join(',');



// Weather
export const getCapitalWeather = (function API_Closure(API_KEY) {
    return function(capital) {
        return `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${capital}?unitGroup=metric&key=${API_KEY}&contentType=json`;
    }
})( process.env.REACT_APP_API_KEY );
