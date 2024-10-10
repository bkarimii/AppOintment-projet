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

	return result.rowCount != 0
		? location
		: { message: `no matching crs code with ${crsCode}` };
};
