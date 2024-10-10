export default function getLatLong(stationName) {
	// db query will be here will take the station name and matching return location
	//  for now it only works with following stations (3 example)

	if (stationName === "Birmingham New Street") {
		return [
			{
				location: {
					latLng: {
						latitude: 52.47819419,
						longitude: -1.898360826,
					},
				},
			},
		];
	} else if (stationName === "London Euston") {
		return [
			{
				location: {
					latLng: {
						latitude: 51.52837626,
						longitude: -0.134558479,
					},
				},
			},
		];
	} else if (stationName === "Manchester Piccadilly") {
		return [
			{
				location: {
					latLng: {
						latitude: 53.47671998,
						longitude: -2.228977818,
					},
				},
			},
		];
	}
}
