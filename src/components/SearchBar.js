import React, { Component } from 'react';
import { connect } from 'react-redux';

import Input from './Input';
import { getWeatherData } from '../actions/weatherActions';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      city: '',
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.getWeatherData(this.state.city);
  }

  render() {
    return (
      <div className="form-group">
        <div className="container">
          <div className="row">
            <div className="col-md-6 mx-auto mt-5">
              <h3 className="text-center">
                Ketik nama kota untuk mendapatkan perkiraan cuaca 5&nbsp;hari ke
                depan
              </h3>
              <form onSubmit={this.handleSubmit}>
                <Input
                  placeholder="contoh: Jakarta, Bandung, Surabaya"
                  name="city"
                  type="text"
                  value={this.state.city}
                  onChange={this.handleChange}
                />
                <input
                  type="submit"
                  value="Cari"
                  className="btn btn-info btn-block mt-4"
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  city: state.city,
  errors: state.errors,
});

export default connect(
  mapStateToProps,
  { getWeatherData }
)(SearchBar);
