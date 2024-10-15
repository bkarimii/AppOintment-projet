import { Router } from "express";

import { computeRoutesForOrigins } from "./functions/routeDirectionsAPI.js";
import { statistics } from "./functions/statisticalAnalyse.js";
import { processTravelInfo } from "./functions/statisticalAnalyse.js";
import { generateTimeSlots } from "./functions/timeRangeMaker.js";
import messageRouter from "./messages/messageRouter.js";
import { googleApiKey } from "./utils/config.cjs";

const api = Router();
const apiKey = googleApiKey;

api.use("/message", messageRouter);

api.get("/hi", async (req, res) => {
	res.status(200).json({ text: "Hello world I am your server" });
});

api.post("/compute-route", async (req, res) => {
	const { meetingRange, intervalTime, destination, origins } = req.body;

	// Check if meeting time range is inavalid status will 400
	if (!meetingRange || !meetingRange.startingTime || !meetingRange.endingTime) {
		return res
			.status(400)
			.json({ error: "Meeting range (startingTime, endingTime) is required." });
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
		const startingMeetingTime = req.body.meetingRange.startingTime;
		const endingMeetingTime = req.body.meetingRange.endingTime;
		const intervalTime = req.body.intervalTime;
		// This function creates period of times in an array
		const meetingTimeArray = generateTimeSlots(
			startingMeetingTime,
			endingMeetingTime,
			intervalTime,
		);
		const destination = req.body.destination;
		const arrayOfOrigins = req.body.origins;

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
		const forProcess = processTravelInfo(travelInfo);
		const stats = statistics(forProcess);
		res.status(200).json(stats);
	} catch (error) {
		res.status(500).json({ error: "Error happened: " + error });
	}
});

export default api;
