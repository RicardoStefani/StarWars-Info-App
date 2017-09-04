export class SWAPI {
    
  getPlanetsAmount() {
    return fetch("http://swapi.co/api/planets/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.count;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getPlanet(planetId) {
    return fetch("http://swapi.co/api/planets/"+planetId+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.filmsLength = responseJson.films.length+ " " + ((responseJson.films.length === 1) ? "film": "films");
      return responseJson;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getFilmsAmount() {
    return fetch("http://swapi.co/api/films/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.count;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getFilm(filmId) {
    return fetch("http://swapi.co/api/films/"+filmId+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getPeopleAmount() {
    return fetch("http://swapi.co/api/people/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.count;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getPerson(personId) {
    return fetch("http://swapi.co/api/people/"+personId+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.filmsLength = responseJson.films.length+ " " + ((responseJson.films.length === 1) ? "film": "films");
      return responseJson;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getSpeciesAmount() {
    return fetch("http://swapi.co/api/species/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.count;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getSpecie(specieId) {
    return fetch("http://swapi.co/api/species/"+specieId+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.filmsLength = responseJson.films.length+ " " + ((responseJson.films.length === 1) ? "film": "films");
      return responseJson;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getStarshipAmount() {
    return fetch("http://swapi.co/api/starships/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.count;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getStarship(starshipId) {
    return fetch("http://swapi.co/api/starships/"+starshipId+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      responseJson.filmsLength = responseJson.films.length+ " " + ((responseJson.films.length === 1) ? "film": "films");
      return responseJson;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getVehiclesAmount() {
    return fetch("http://swapi.co/api/vehicles/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson.count;
    })
    .catch((error) => {
      console.warn(error);
    });
  }

  getVehicle(vehicleId) {
    return fetch("http://swapi.co/api/vehicles/"+vehicleId+"/")
    .then((response) => response.json())
    .then((responseJson) => {
      return responseJson;
    })
    .catch((error) => {
      console.warn(error);
    });
  }
}