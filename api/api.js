import { Router } from "express";

import db from "./db.js";
import messageRouter from "./messages/messageRouter.js";
// import { getLocation } from "./functions/getLocation/getLocation.js";

const api = Router();

api.use("/message", messageRouter);

api.get("/station-list", async (req, res) => {
	const stations = await db.query(
		"SELECT station_name, crs_code FROM uk_stations",
	);
	res.status(200).json(stations.rows);
});

export default api;
