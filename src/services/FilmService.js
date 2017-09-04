export class FilmService {
	
	constructor(swapi)
	{
		this._swapi = swapi;
		this._swapi_method = "films";
	}

	getFilmsAmount() {
		return this._swapi.get(this._swapi_method).then((film) => {
			return film.count;
    });
	}
	
	getFilm(filmId) {
		return this._swapi.get(this._swapi_method, filmId).then((film) => {
			return film;
    });
	 }
}