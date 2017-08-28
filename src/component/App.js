import React, { Component } from 'react';
import '../style/App.css';
import {SWAPI} from '../services/SWAPI';

class App extends Component {
  
  planetCount = 1;
  state = {planet : {}};
  
  constructor(props){
    super(props);
    var self = this;
   
    this.swapi = new SWAPI();
    this.swapi.getPlanetsAmount().then((planetCount) => {
        self.planetCount = planetCount;
    });

    this.nextPlanet = this.nextPlanet.bind(this);
  }

  nextPlanet(){
    var self = this;
    var planetId = Math.floor(Math.random() * this.planetCount) + 1;
    this.swapi.getPlanet(planetId).then((planet) => {
      self.setState({planet: planet});
  });
  }

  render() {
    if(Object.keys(this.state.planet).length > 0)
    {
      return (
        <div className="App">
          <div className="App-header">
          </div>
          <div>
            <h2>{this.state.planet.name}</h2>
            <div className="App-body">
              <p>
                <b>Population:</b> {this.state.planet.population}
              </p>
              <p>
                <b>Climate:</b> {this.state.planet.climate}
              </p>
              <p>
                <b>Terrain:</b> {this.state.planet.terrain}
              </p>
              <p>
                Featured in {this.state.planet.filmsLength}
              </p>
            </div>
          </div>
          <button onClick={this.nextPlanet}>Next</button>
        </div>
      );
    }
    else{
      return (
        <div className="App">
          <div className="App-header">
          </div>
          <div className="App-Home">
            <button onClick={this.nextPlanet}>Start</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
