export class VehicleService {
	
	constructor(swapi)
	{
		this._swapi = swapi;
		this._swapi_method = "vehicles";
	}

	getVehiclesAmount() {
		return this._swapi.get(this._swapi_method).then((vehicles) => {
			return vehicles.count;
    });
	}
	
	getVehicle(vehicleId) {
		return this._swapi.get(this._swapi_method, vehicleId).then((vehicle) => {
			return vehicle;
    });
	 }
}