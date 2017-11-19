import React, { Component } from "react"

import SearchBar from "../containers/searchbar"
import CityList from "../containers/citylist"

export default class App extends Component {
  render() {
    return (
      <div>
        <SearchBar />
        <CityList />
      </div>
    );
  }
}
