import React, { Component } from "react"
import { connect } from "react-redux"
import { Sparklines, SparklinesLine } from "react-sparklines"
import Chart from "../components/charts"
import GoogleMap from "../components/googlemap"

class CityList extends Component {

  renderWeather(cityData) {

    if (!cityData) {
      return
    }

    const {lat, lon} = cityData.city.coord
    const name = cityData.city.name
    const temp = cityData.list.map((weather=>weather.main.temp))
    const pres = cityData.list.map((weather=>weather.main.pressure))
    const hum = cityData.list.map((weather=>weather.main.humidity))

    return (
      <tr key={name}>
        <td>
          <GoogleMap lat={lat} lon={lon}/>
        </td>
        <td>
          <Chart data={temp} color="blue" units="K"/>
        </td>
        <td>
          <Chart data={pres} color="red" units="hPa"/>
        </td>
        <td>
          <Chart data={hum} color="green" units="%"/>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <table className="table table-hover">
        <thead>
          <tr>
            <th>City</th>
            <th>Temperature (K)</th>
            <th>Pressure (hPa)</th>
            <th>Humidity (%)</th>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    )
  }
}

function mapStateToProps(state) {
  return { weather: state.weather }
}

export default connect(mapStateToProps)(CityList)

