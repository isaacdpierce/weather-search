// it is decided that this will be a container. It will need to communicate with Redux through connect
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Chart from '../components/chart';


class WeatherList extends Component {
  //render a single city or row in the UI in below function
  renderWeather(cityData) {
    const name = cityData.city.name;
    const temps = cityData.list.map((weather) => weather.main.temp);
    const pressures = cityData.list.map((weather) => weather.main.pressure);
    const humidities = cityData.list.map((weather) => weather.main.humidity);
    

    return (
      <tr key={name}>
        <td>{name}</td> 
        {/* need to create more data rows for humidity, etc which involves duplicating markup 
        *** IF duplicating markup it is best practice to create a separate reusable Component -> see chart.js*/}
        <td><Chart data={temps} color="yellow" /></td>
        <td><Chart data={pressures} color="blue" /></td>
        <td><Chart data={humidities} color="green" /></td>

      </tr>
    );
  } // city.name comes directly from the api data.

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature</th>
            <th>Pressure</th>
            <th>Humidity</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

// below function connects WeatherList to Redux state -> allows WeatherList access to this.props.weather. -> an array from the api ajax request 
function mapStateToProps({ weather }) {
  return { weather }; // **Same as** -> weather: weather
  //REMEMBER - here I use state.weather because I assigned WeatherReducer to the weather: key in reducers.index.js
}

export default connect(mapStateToProps)(WeatherList);