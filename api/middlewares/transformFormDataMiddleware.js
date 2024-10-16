import { transformFormData } from "../functions/getLocation/transformFormData.js";

export const transformFormDataMiddleware = async (req, res, next) => {
	try {
		const formData = req.body;
		const transformedData = await transformFormData(formData);
		req.body = transformedData;
		next();
	} catch (error) {
		res.status(500).json({ error: "Internal Server Error" });
	}
};
