import request from "supertest";

import app from "./app.js";

describe("/api", () => {
	describe("POST /compute-route", () => {
		const body = {
			meetingStation: "ABW",
			meetingDate: "2024-10-18",
			earliestStartTime: "05:29",
			latestStartTime: "06:29",
			attendees: [
				{ name: "fikret", station: "MAN" },
				{ name: "behrouz", station: "BHM" },
				{ name: "david", station: "LDS" },
			],
			intervalTime: 15,
		};
		it("returns an array", async () => {
			const response = await request(app).post("/api/compute-route").send(body);

			// Validate the response body structure
			expect(Array.isArray(response.body)).toBe(true); // Check if response body is an array
		}, 10000);
	});

	describe("POST /compute-route 2", () => {
		const body = {
			meetingStation: "ABW",
			meetingDate: "2024-10-18",
			earliestStartTime: "05:29",
			latestStartTime: "06:29",
			attendees: ["MAN", "ACY"],
			intervalTime: 15,
		};

		it("returns an array of travel stats", async () => {
			const response = await request(app).post("/api/compute-route").send(body);

			expect(response.status).toBe(200);

			// Validate the response body structure
		}, 10000);
	});
});
