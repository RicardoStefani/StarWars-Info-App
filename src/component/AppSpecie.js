import React, { Component } from 'react';
import '../style/App.css';

class AppSpecie extends Component {
  
  render() {
      return (    
        <div className="App-Planet">
          <h1 className="App-Title">
            {this.props.title}
          </h1>
          <h2>{this.props.specie.name}</h2>
          <div className="App-body">
            <p>
              <b>Classification:</b> {this.props.specie.classification}
            </p>
            <p>
              <b>Designation:</b> {this.props.specie.designation}
            </p>
            <p>
              <b>Average Height:</b> {this.props.specie.average_height}
            </p>
            <p>
              <b>Skin Colors:</b> {this.props.specie.skin_colors}
            </p>
            <p>
              <b>Hair Colors:</b> {this.props.specie.hair_colors}
            </p>
            <p>
              <b>Eye Colors:</b> {this.props.specie.eye_colors}
            </p>
            <p>
              <b>Average Lifespan:</b> {this.props.specie.average_lifespan}
            </p>
            <p>
              <b>Language:</b> {this.props.specie.language}
            </p>
          </div>
        </div>
      );
  }
}

export default AppSpecie;
