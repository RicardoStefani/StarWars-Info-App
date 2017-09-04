import React, { Component } from 'react';
import '../style/App.css';

class AppFilm extends Component {
  
  render() {
      return (    
        <div className="App-Planet">
          <h1 className="App-Title">
            {this.props.title}
          </h1>
          <h2>{this.props.film.title}</h2>
          <div className="App-body">
            <p>
              <b>Episode:</b> {this.props.film.episode_id}
            </p>
            <p>
              <b>Director:</b> {this.props.film.director}
            </p>
            <p>
              <b>Producer:</b> {this.props.film.producer}
            </p>
            <p>
              <b>Release:</b> {this.props.film.release_date}
            </p>
            <p>
              <b>Opening:</b> {this.props.film.opening_crawl}
            </p>
          </div>
        </div>
      );
  }
}

export default AppFilm;
