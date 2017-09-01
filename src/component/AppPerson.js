import React, { Component } from 'react';
import '../style/App.css';

class AppPerson extends Component {
  
  render() {
      return (
        <div className="App-Planet">
          <h2>{this.props.person.name}</h2>
          <div className="App-body">
            <p>
              <b>Gender:</b> {this.props.person.gender}
            </p>
            <p>
              <b>Birth Year:</b> {this.props.person.birth_year}
            </p>
            <p>
              <b>Eyes Color:</b> {this.props.person.eye_color}
            </p>
            <p>
              <b>Skin Color:</b> {this.props.person.skin_color}
            </p>
            <p>
              <b>Hair Color:</b> {this.props.person.hair_color}
            </p>
            <p>
              <b>Mass:</b> {this.props.person.mass}
            </p>
            <p>
              <b>Height:</b> {this.props.person.height}
            </p>
            <p>
              Featured in {this.props.person.filmsLength}
            </p>
          </div>
        </div>
      );
  }
}

export default AppPerson;
