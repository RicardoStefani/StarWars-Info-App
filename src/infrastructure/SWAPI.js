export class SWAPI {
	
	constructor()
	{
		this._url = "http://swapi.co/api/";
	}

	get(method, id = "") {
		let url = this._url + method;

		if (id) {
			url += "/" + id;
		}

		return fetch(url)
		.then((response) => response.json())
		.then((responseJson) => {
			return responseJson;
		})
		.catch((error) => {
			console.warn(error);
		});
	}
}