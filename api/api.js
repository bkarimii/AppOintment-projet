import { Router } from "express";

import messageRouter from "./messages/messageRouter.js";
// import { getLocation } from "./functions/getLocation/getLocation.js";

const api = Router();

api.use("/message", messageRouter);

// api.get("/test", async (req, res) => {
// 	res.send(await getLocation("MAN"));
// });

export default api;
