export class PersonService {
	
	constructor(swapi)
	{
		this._swapi = swapi;
		this._swapi_method = "people";
	}

	getPeopleAmount() {
		return this._swapi.get(this._swapi_method).then((people) => {
			return people.count;
    });
	}
	
	getPerson(personId) {
		return this._swapi.get(this._swapi_method, personId).then((person) => {
			return person;
    });
	 }
}