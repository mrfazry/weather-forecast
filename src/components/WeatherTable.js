import React, { Component } from 'react';
import { connect } from 'react-redux';

import TableGroup from './TableGroup';
import Spinner from './Spinner';

import { receiveNoData } from '../actions/weatherActions';

class WeatherTable extends Component {
  constructor() {
    super();
    this.state = {
      city: 'Kota',
      date: ['-', '-', '-', '-', '-'],
      dailyTemp: [0, 0, 0, 0, 0],
      tempDiff: [0, 0, 0, 0, 0],
    };
  }

  componentWillReceiveProps(nextProps) {
    //check if any errors
    if (Object.keys(nextProps.weather.errors).length !== 0) {
      this.props.receiveNoData();
    }

    if (nextProps.weather.weatherData.city !== undefined) {
      const weatherData = nextProps.weather.weatherData;

      const city = weatherData.city.name;

      let date = [];
      let dailyTemp = [];
      let tempDiff = [];

      weatherData.list.map((data, index) => {
        if (index % 8 === 0) {
          date.push(data.dt_txt.slice(0, 10));
          dailyTemp.push(data.main.temp);
          tempDiff.push((data.main.temp_max - data.main.temp_min).toFixed(2));
        }
        return 0;
      });

      this.setState({
        city,
        date,
        dailyTemp,
        tempDiff,
      });
    }
  }

  render() {
    const { loading, nodata } = this.props.weather;

    let display;

    if (loading) {
      display = <Spinner />;
    } else {
      if (nodata) {
        display = <h4 className="text-center">Kota tidak ditemukan</h4>;
      } else {
        display = (
          <TableGroup
            header={[this.state.city, 'Suhu', 'Perbedaan']}
            date={this.state.date}
            dailyTemp={this.state.dailyTemp}
            tempDiff={this.state.tempDiff}
          />
        );
      }
    }

    return (
      <div className="weather-table">
        <div className="form-group" />
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-3">{display}</div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  weather: state.weather,
});

export default connect(
  mapStateToProps,
  { receiveNoData }
)(WeatherTable);
