import React, { Component } from 'react';
import '../style/App.css';
import {SWAPI} from '../services/SWAPI';
import AppPlanet from './AppPlanet';
import AppPerson from './AppPerson';

class App extends Component {
  
  planetCount = 1;
  peopleCount = 1;
  state = {planet : {}, person : []};
  
  constructor(props){
    super(props);
    var self = this;
   
    this.swapi = new SWAPI();
    this.swapi.getPlanetsAmount().then((planetCount) => {
        self.planetCount = planetCount;
    });
    this.swapi.getPeopleAmount().then((peopleCount) => {
        self.peopleCount = peopleCount;
    });

    this.nextPlanet = this.nextPlanet.bind(this);
    this.nextPerson = this.nextPerson.bind(this);
  }

  nextPlanet(){
    var self = this;
    var planetId = Math.floor(Math.random() * this.planetCount) + 1;
    this.swapi.getPlanet(planetId).then((planet) => {
      self.setState({planet: planet});
  });
  }

  nextPerson(){
    var self = this;
    var personId = Math.floor(Math.random() * this.peopleCount) + 1;
    this.swapi.getPerson(personId).then((person) => {
      self.setState({person: person});
  });
  }

  render() {
    if(Object.keys(this.state.planet).length > 0)
    {
      return (
        <div className="App">
          <AppPlanet planet={this.state.planet} />
          <button onClick={this.nextPlanet}>Next</button>
        </div>
      );
    }
    else if(Object.keys(this.state.person).length > 0)
    {
      return (
        <div className="App">
          <AppPerson person={this.state.person} />
          <button onClick={this.nextPerson}>Next</button>
        </div>
      );
    }
    else
    {
      return (
        <div className="App">
          <div className="App-Home">
            <button onClick={this.nextPlanet}>Show Planet</button>
            <br />
            <br />
            <button onClick={this.nextPerson}>Show Person</button>
          </div>
        </div>
      );
    }
  }
}

export default App;
