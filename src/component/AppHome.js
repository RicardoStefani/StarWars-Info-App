import React, { Component } from 'react';
import '../style/App.css';

class AppHome extends Component {
  
  planetCount = 1;
  state = {planet : {}};
  
  constructor(props){
    super(props);

    this.findPlanet = this.findPlanet.bind(this);
  }

  findPlanet(){
    var self = this;
    var planetId = Math.floor(Math.random() * this.planetCount) + 1;
    this.swapi.getPlanet(planetId).then((planet) => {
      self.setState({planet: planet});
  });
  }

  render() {
      return (
        <div className="App-Home">
            <button onClick={this.findPlanet}>Start</button>
        </div>
      );
  }
}

export default AppHome;
