import axios from 'axios';

import {
  GET_ERRORS,
  GET_WEATHER_DATA,
  LOAD_WEATHER_DATA,
  RECEIVE_NO_DATA,
} from './types';

//get weather data using axios
export const getWeatherData = city => dispatch => {
  dispatch(setWeatherDataLoading());

  axios
    .get(
      `http://api.openweathermap.org/data/2.5/forecast?q=${city},id&mode=json&units=metric&cnt=40&appid=271da6b323b05ebaf2b4aaa0f3378f89`
    )
    .then(res => {
      dispatch({
        type: GET_WEATHER_DATA,
        payload: res.data,
      });
    })
    .catch(err => {
      dispatch({
        type: GET_ERRORS,
        payload: err.response.data,
      });
    });
};

//receive no data
export const receiveNoData = () => {
  return {
    type: RECEIVE_NO_DATA,
  };
};

//loading the data
export const setWeatherDataLoading = () => {
  return {
    type: LOAD_WEATHER_DATA,
  };
};
