import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import './App.css';

import SearchBar from './components/SearchBar';
import WeatherTable from './components/WeatherTable';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="weather-app">
          <SearchBar />
          <WeatherTable />
        </div>
      </Provider>
    );
  }
}

export default App;
