import React from 'react';
import ReactDOM from 'react-dom';
import App from './component/App';
import './style/index.css';

import {SWAPI} from './infrastructure/SWAPI';

import {PlanetService} from './services/PlanetService';
import {FilmService} from './services/FilmService';
import {PersonService} from './services/PersonService';
import {SpecieService} from './services/SpecieService';
import {StarshipService} from './services/StarshipService';
import {VehicleService} from './services/VehicleService';

let _swapi = new SWAPI();
let _planet_service = new PlanetService(_swapi);
let _film_service = new FilmService(_swapi);
let _person_service = new PersonService(_swapi);
let _specie_service = new SpecieService(_swapi);
let _starship_service = new StarshipService(_swapi);
let _vehicle_service = new VehicleService(_swapi);

ReactDOM.render(
  <App 
    PlanetService={_planet_service}
    FilmService={_film_service}
    PersonService={_person_service}
    SpecieService={_specie_service}
    StarshipService={_starship_service}
    VehicleService={_vehicle_service}
  />,
  document.getElementById('root')
);
