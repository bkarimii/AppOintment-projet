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

api.get("/compute-route", async (req, res) => {
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

	try {
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
