import React, { Component } from 'react';
import '../style/App.css';

class AppStarship extends Component {
  
  render() {
      return (
        <div className="App-Planet">
          <h1 className="App-Title">
            {this.props.title}
          </h1>
          <h2>{this.props.starship.name}</h2>
          <div className="App-body">
            <p>
              <b>Model:</b> {this.props.starship.model}
            </p>
            <p>
              <b>Manufacturer:</b> {this.props.starship.manufacturer}
            </p>
            <p>
              <b>Cost:</b> {this.props.starship.cost_in_credits}
            </p>
            <p>
              <b>Length:</b> {this.props.starship.length}
            </p>
            <p>
              <b>Class:</b> {this.props.starship.starship_class}
            </p>
            <p>
              Featured in {this.props.starship.filmsLength}
            </p>
          </div>
        </div>
      );
  }
}

export default AppStarship;
