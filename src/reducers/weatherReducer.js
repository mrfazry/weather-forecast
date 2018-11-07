import {
  GET_ERRORS,
  GET_WEATHER_DATA,
  LOAD_WEATHER_DATA,
  RECEIVE_NO_DATA,
} from '../actions/types';

const initialState = {
  loading: false,
  nodata: false,
  weatherData: {},
  errors: {},
};

export default function(state = initialState, action) {
  switch (action.type) {
    case GET_WEATHER_DATA:
      return {
        ...state,
        weatherData: action.payload,
        loading: false,
        nodata: false,
        errors: {},
      };

    case GET_ERRORS:
      return {
        ...state,
        errors: action.payload,
      };

    case LOAD_WEATHER_DATA:
      return {
        ...state,
        loading: true,
      };

    case RECEIVE_NO_DATA:
      return {
        ...state,
        loading: false,
        nodata: true,
        errors: {},
      };

    default:
      return state;
  }
}
