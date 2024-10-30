import db from "../db";
export async function fetchBodyMaker(body) {
	try {
		const arrayOfDestination = body.meetingStation;
		const destinations = [];
		const origins = [];
		const arrayOfOriginStationCrs = body.attendees;

		const meetingDate = body.meetingDate;
		const meetingStartPoint = body.earliestStartTime;
		const meetingEndPoint = body.latestStartTime;
		const meetingRange = {
			startingTime: `${meetingDate}T${meetingStartPoint}:00Z`,
			endingTime: `${meetingDate}T${meetingEndPoint}:00Z`,
		};

		for (const eachDestinationCrs of arrayOfDestination) {
			// Find destination station in JSON data
			const destinationsDBDetail = await db.query(
				"SELECT * FROM uk_stations WHERE crs_code = $1",
				[eachDestinationCrs.station],
			);
			if (destinationsDBDetail.rows.length === 0) {
				throw new Error("Destination CRS code not found.");
			}

			const destinationObject = {
				latitude: destinationsDBDetail.lat,
				longitude: destinationsDBDetail.long,
				stationsCrs: eachDestinationCrs.station,
				stationName: destinationsDBDetail.stationName,
			};

			for (const originCrs of arrayOfOriginStationCrs) {
				// Find origin station in JSON data
				const originDBDetail = await db.query(
					"SELECT * FROM uk_stations WHERE crs_code = $1",
					[originCrs.station],
				);
				if (originDBDetail.rows.length === 0) {
					throw new Error(`Origin CRS code ${originCrs} not found.`);
				}

				const originObject = {
					city: {
						...originCrs,
						stationName: originDBDetail.stationName,
					},
					location: {
						latLng: {
							latitude: originDBDetail.lat,
							longitude: originDBDetail.long,
						},
					},
				};
				origins.push(originObject);
			}

			destinations.push(destinationObject);
		}

		const intervalTime = body.intervalTime ?? 20;
		const formattedBody = {
			origins: origins,
			destination: destinations,
			meetingRange: {
				startingTime: meetingRange.startingTime,
				endingTime: meetingRange.endingTime,
			},
			intervalTime: intervalTime,
		};

		return formattedBody;
	} catch (error) {
		return { error: error.message };
	}
}
