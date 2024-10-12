import { Router } from "express";

import { computeRoutesForOrigins } from "./functions/routeDirectionsAPI.js";
import { statistics } from "./functions/statisticalAnalyse.js";
import { processTravelInfo } from "./functions/statisticalAnalyse.js";
import messageRouter from "./messages/messageRouter.js";
import { googleApiKey } from "./utils/config.cjs";

const api = Router();
const apiKey = googleApiKey;

api.use("/message", messageRouter);

const arrayOfOrigins = [
	{
		city: "Sheffield",
		location: {
			latLng: {
				latitude: 53.37823538, // Sheffield latitude
				longitude: -1.462104529, // Sheffield longitude
			},
		},
	},
	{
		city: "Manchester",
		location: {
			latLng: {
				latitude: 53.47671998, // Manchester Piccadilly latitude
				longitude: -2.228977818, // Manchester Piccadilly longitude
			},
		},
	},
	{
		city: "Norwich",
		location: {
			latLng: {
				latitude: 52.62717818, // Norwich latitude
				longitude: 1.306828331, // Norwich longitude
			},
		},
	},
	{
		city: "Liverpool",
		location: {
			latLng: {
				latitude: 53.40461053, // Liverpool Central latitude
				longitude: -2.979159936, // Liverpool Central longitude
			},
		},
	},
	{
		city: "Newcastle",
		location: {
			latLng: {
				latitude: 54.96822056, // Newcastle latitude
				longitude: -1.617285496, // Newcastle Central longitude
			},
		},
	},
	{
		city: "Cardiff",
		location: {
			latLng: {
				latitude: 51.47602662, // Cardiff central latitude
				longitude: -3.179311548, // Cardiff central longitude
			},
		},
	},
	{
		city: "Oxford",
		location: {
			latLng: {
				latitude: 51.80355007, // Oxford Parkway latitude
				longitude: -1.274979798, // Oxford Parkway longitude
			},
		},
	},
];
const meetingTimeArray = [
	"2024-10-13T10:00:00Z",
	"2024-10-13T10:15:00Z",
	//   "2024-10-13T10:30:00Z",
	//   "2024-10-13T10:45:00Z",
	//   "2024-10-13T11:00:00Z",
];

api.get("/hi", async (req, res) => {
	res.status(200).json({ text: "Hello world I am your server" });
});

api.get("/compute-route", async (req, res) => {
	const destination = {
		latitude: 52.1945746, // Cambridge latitude
		longitude: 0.137554552,
	};

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
		// console.log(travelInfo);
		const forProcess = processTravelInfo(travelInfo);
		// console.log(forProcess,"<---process")
		const stats = statistics(forProcess);
		res.status(200).json(stats);
	} catch (error) {
		res.status(500).json({ error: "Error happened: " + error });
	}
});

export default api;
