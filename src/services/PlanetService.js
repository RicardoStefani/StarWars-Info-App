export class PlanetService {
	
	constructor(swapi)
	{
		this._swapi = swapi;
		this._swapi_method = "planets";
	}

	getPlanetsAmount() {
		return this._swapi.get(this._swapi_method).then((planet) => {
			return planet.count;
    });
	}
	
	getPlanet(planetId) {
		return this._swapi.get(this._swapi_method, planetId).then((planet) => {
			return planet;
    });
	 }
}