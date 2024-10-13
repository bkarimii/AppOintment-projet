import db from "../../db.js";

export const getLocation = async (crsCode) => {
	const result = await db.query(
		"SELECT latitude, longitude FROM uk_stations WHERE crs_code = $1",
		[crsCode],
	);

	const location = {
		location: {
			latLng: { ...result.rows[0] },
		},
	};

	const success = result.rowCount != 0;

	const message = success
		? `${crsCode} station exists in the list`
		: `${crsCode} station exists in the list`;

	return { success: success, location: { ...location }, message: message };

	// return result.rowCount != 0
	// 	? location
	// 	: { message: `no matching crs code with ${crsCode}` };
};
