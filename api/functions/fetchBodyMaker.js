import db from "../db";
export async function fetchBodyMaker(body) {
	const destinationCrs = body.meetingStation;

	const destinationsDBDetail = await db.query(
		"SELECT * FROM uk_stations WHERE crs_code = $1",
		[destinationCrs],
	);
	// eslint-disable-next-line no-console
	console.log(destinationsDBDetail, "<-----destinations all row");

	const destination = {
		latitude: destinationsDBDetail.rows[0]?.latitude,
		longitude: destinationsDBDetail.rows[0]?.longitude,
	};

	const meetingDate = body.meetingDate;
	const meetingStartPoint = body.earliestStartTime;
	const meetingEndPoint = body.latestStartTime;
	const meetingRange = {
		startingTime: `${meetingDate}T${meetingStartPoint}:00Z`,
		endingTime: `${meetingDate}T${meetingEndPoint}:00Z`,
	};

	const origins = [];
	const arrayOfOriginStationCrs = body.attendees;

	for (const originCrs of arrayOfOriginStationCrs) {
		// Parameterized queries for each origin station
		const originDBDetail = await db.query(
			"SELECT * FROM uk_stations WHERE crs_code = $1",
			[originCrs],
		);
		const originObject = {
			city: originCrs,
			location: {
				latLng: {
					latitude: originDBDetail.rows[0]?.latitude,
					longitude: originDBDetail.rows[0]?.longitude,
				},
			},
		};
		origins.push(originObject);
	}

	// Default interval time to 15 if not provided
	let intervalTime = body.intervalTime ?? 20;

	const formattedBody = {
		origins: origins,
		destination: {
			latitude: destination.latitude,
			longitude: destination.longitude,
		},
		meetingRange: {
			startingTime: meetingRange.startingTime,
			endingTime: meetingRange.endingTime,
		},
		intervalTime: intervalTime,
	};

	return formattedBody;
}
