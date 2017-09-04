export class SpecieService {
	
	constructor(swapi)
	{
		this._swapi = swapi;
		this._swapi_method = "species";
	}

	getSpeciesAmount() {
		return this._swapi.get(this._swapi_method).then((species) => {
			return species.count;
    });
	}
	
	getSpecie(specieId) {
		return this._swapi.get(this._swapi_method, specieId).then((specie) => {
			return specie;
    });
	 }
}