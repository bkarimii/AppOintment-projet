import { Router } from "express";

import db from "./db.js";
import { prepareDataForReport } from "./functions/reportMaker.js";
import { computeRoutesForOrigins } from "./functions/routeDirectionsAPI.js";
import { statistics } from "./functions/statisticalAnalyse.js";
import { processTravelInfo } from "./functions/statisticalAnalyse.js";
import { generateTimeSlots } from "./functions/timeRangeMaker.js";
import messageRouter from "./messages/messageRouter.js";
import { googleApiKey } from "./utils/config.cjs";

const api = Router();
const apiKey = googleApiKey;

api.use("/message", messageRouter);

api.post("/compute-route", async (req, res) => {
	const body = await fetchBodyMaker(req.body);
	const { meetingRange, intervalTime, destination, origins } = body;

	// Check if meeting time range is inavalid status will 400
	if (!meetingRange || !meetingRange.startingTime || !meetingRange.endingTime) {
		return res.status(400).json({
			error: "Meeting range (startingTime, endingTime) is required.",
		});
	}

	if (!intervalTime || isNaN(intervalTime)) {
		return res.status(400).json({ error: "Valid intervalTime is required." });
	}

	if (!destination || !destination.latitude || !destination.longitude) {
		return res
			.status(400)
			.json({ error: "Destination (latitude, longitude) is required." });
	}

	if (!origins || !Array.isArray(origins) || origins.length === 0) {
		return res.status(400).json({ error: "At least one origin is required." });
	}

	try {
		const startingMeetingTime = body.meetingRange.startingTime;
		const endingMeetingTime = body.meetingRange.endingTime;
		const intervalTime = body.intervalTime;
		// This function creates period of times in an array
		const meetingTimeArray = generateTimeSlots(
			startingMeetingTime,
			endingMeetingTime,
			intervalTime,
		);

		const destination = body.destination;
		const arrayOfOrigins = body.origins;

		const fields =
			"routes.legs.duration,routes.legs.staticDuration,routes.legs.steps.transitDetails.stopDetails.departureTime,routes.legs.steps.transitDetails.stopDetails.arrivalTime";
		const travelMode = "TRANSIT";
		const travelInfo = await computeRoutesForOrigins(
			meetingTimeArray,
			arrayOfOrigins,
			travelMode,
			destination,
			fields,
			apiKey,
		);

		const processedInfo = processTravelInfo(travelInfo);

		const stats = statistics(processedInfo);

		const reportDataArray = prepareDataForReport(processedInfo);

		const totalInformation = [
			stats,
			reportDataArray,
			processedInfo,

			travelInfo,
		];
		res.status(200).json(totalInformation);
	} catch (error) {
		res.status(500).json({ error: "Error happened: " + error });
	}
});

api.get("/station-list", async (req, res) => {
	const stations = await db.query(
		"SELECT station_name, crs_code FROM uk_stations",
	);
	res.status(200).json(stations.rows);
});

async function fetchBodyMaker(body) {
	try {
		const destinationCrs = body.meetingStation;

		const destinationsDBDetail = await db.query(
			"SELECT * FROM uk_stations WHERE crs_code = $1",
			[destinationCrs],
		);

		const destination = {
			latitude: destinationsDBDetail.rows[0]?.latitude,
			longitude: destinationsDBDetail.rows[0]?.longitude,
		};
		if (destinationsDBDetail.rows.length === 0) {
			throw new Error("Destination CRS code not found.");
		}
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
				[originCrs.station],
			);
			if (originDBDetail.rows.length === 0) {
				throw new Error(`Origin CRS code ${originCrs} not found.`);
			}
			const originObject = {
				city: {
					...originCrs,
					stationName: originDBDetail.rows[0]?.station_name,
				},
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
		let intervalTime = body.intervalTime ?? 15;

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
	} catch (error) {
		return { error: error };
	}
}

export default api;
