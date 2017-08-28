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
}