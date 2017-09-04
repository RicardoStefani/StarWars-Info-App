import React, { Component } from 'react';
import '../style/App.css';

class AppVehicle extends Component {
  
  render() {
      return (    
        <div className="App-Planet">
          <h1 className="App-Title">
            {this.props.title}
          </h1>
          <h2>{this.props.vehicle.name}</h2>
          <div className="App-body">
            <p>
              <b>Model:</b> {this.props.vehicle.model}
            </p>
            <p>
              <b>Manufacturer:</b> {this.props.vehicle.manufacturer}
            </p>
            <p>
              <b>Cost:</b> {this.props.vehicle.cost_in_credits}
            </p>
            <p>
              <b>Class:</b> {this.props.vehicle.vehicle_class}
            </p>
            <p>
              <b>Length:</b> {this.props.vehicle.length}
            </p>
            <p>
              <b>Max Speed:</b> {this.props.vehicle.max_atmosphering_speed}
            </p>
            <p>
              <b>Crew:</b> {this.props.vehicle.crew}
            </p>
            <p>
              <b>Passengers:</b> {this.props.vehicle.passengers}
            </p>
            <p>
              <b>Cargo Capacity:</b> {this.props.vehicle.cargo_capacity}
            </p>
          </div>
        </div>
      );
  }
}

export default AppVehicle;
