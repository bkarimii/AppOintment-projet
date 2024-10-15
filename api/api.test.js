import request from "supertest";

import app from "./app.js";

describe("/api", () => {
	describe("POST /compute-route", () => {
		const body = {
			origins: [
				{
					city: "Liverpool",
					location: {
						latLng: {
							latitude: 53.40461053,
							longitude: -2.979159936,
						},
					},
				},
			],
			destination: {
				latitude: 52.1945746,
				longitude: 0.137554552,
			},
			meetingRange: {
				startingTime: "2024-10-13T10:00:00Z",
				endingTime: "2024-10-13T13:00:00Z",
			},
			intervalTime: "15",
		};

		it("returns an array of travel stats", async () => {
			const response = await request(app).post("/api/compute-route").send(body);

			expect(response.status).toBe(200);

			// Validate the response body structure
			expect(Array.isArray(response.body)).toBe(true); // Check if response body is an array

			expect(response.body).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						meetingTime: expect.any(String), // "2024-10-13T10:00:00.000Z"
						maxTravelTime: expect.any(Number), //  8.766666666666667
						minTravelTime: expect.any(Number), //  8.766666666666667
						averageTravelTime: expect.any(Number), // 8.766666666666667
						earliestArrival: expect.any(String), // "09:40:00"
						latestArrival: expect.any(String), // "09:40:00"
						earliestDeparture: expect.any(String), // "01:20:00"
						latestDeparture: expect.any(String), // "01:20:00"
						medianArrivalTime: expect.any(String), // "09:40:00"
						difficultTravels: expect.arrayContaining([]), // Should be an array
						tooLongTravel: expect.arrayContaining([]), // Should be an array
					}),
				]),
			);
		});
	}, 20000);
});
