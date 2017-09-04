export class StarshipService {
	
	constructor(swapi)
	{
		this._swapi = swapi;
		this._swapi_method = "starships";
	}

	getStarshipAmount() {
		return this._swapi.get(this._swapi_method).then((starships) => {
			return starships.count;
    });
	}
	
	getStarship(starshipId) {
		return this._swapi.get(this._swapi_method, starshipId).then((starship) => {
			return starship;
    });
	 }
}