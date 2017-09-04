import React, { Component } from 'react';
import '../style/App.css';

class AppPlanet extends Component {
  
  render() {
      return (
        <div className="App-Planet">
          <h1 className="App-Title">
            {this.props.title}
          </h1>
          <h2>{this.props.planet.name}</h2>
          <div className="App-body">
            <p>
              <b>Population:</b> {this.props.planet.population}
            </p>
            <p>
              <b>Climate:</b> {this.props.planet.climate}
            </p>
            <p>
              <b>Terrain:</b> {this.props.planet.terrain}
            </p>
            <p>
              Featured in {this.props.planet.filmsLength}
            </p>
          </div>
        </div>
      );
  }
}

export default AppPlanet;
