import { Router } from "express";

import db from "./db.js";
import messageRouter from "./messages/messageRouter.js";
import { transformFormDataMiddleware } from "./middlewares/transformFormDataMiddleware.js";

const api = Router();

api.use("/message", messageRouter);

api.get("/station-list", async (req, res) => {
	const stations = await db.query(
		"SELECT station_name, crs_code FROM uk_stations",
	);
	res.status(200).json(stations.rows);
});

api.post("/compute-route", transformFormDataMiddleware, async (req, res) => {
	// const { meetingRange, intervalTime, destination, origins } = req.body;

	// behrouz this req.body is in the format you said as shown above

	res.send(req.body);
});

export default api;
