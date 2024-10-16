import { Router } from "express";

import db from "./db.js";
import messageRouter from "./messages/messageRouter.js";

const api = Router();

api.use("/message", messageRouter);

api.get("/station-list", async (req, res) => {
	const stations = await db.query(
		"SELECT station_name, crs_code FROM uk_stations",
	);
	res.status(200).json(stations.rows);
});

api.post("/compute-route", async (req, res) => {
	const formData = req.body;
	// req.body is given in this format
	//
	// {
	// 	meetingStation: "BTL",
	// 	meetingDate: "0111-11-11",
	// 	earliestStartTime: "11:11",
	// 	latestStartTime: "11:11",
	// 	attendees: [
	// 		{ name: "fikret", station: "AYW" },
	// 		{ name: "behrouz", station: "AAT" },
	// 	],
	// };
	res.send(formData);
});

export default api;
