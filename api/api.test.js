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

		it("returns an array", async () => {
			const response = await request(app).post("/api/compute-route").send(body);
			expect(response.status).toBe(200);
			expect(response.body).toEqual(
				expect.arrayContaining([
					expect.objectContaining({
						meetingTime: expect.any(String),
						maxTravelTime: expect.any(Number),
						minTravelTime: expect.any(Number),
						averageTravelTime: expect.any(Number),
						earliestArrival: expect.any(String),
						latestArrival: expect.any(String),
						earliestDeparture: expect.any(String),
						latestDeparture: expect.any(String),
						medianArrivalTime: expect.any(String),
						difficultTravels: expect.arrayContaining(),
						tooLongTravel: expect.arrayContaining(),
					}),
				]),
			);
		});
	}, 10000);
});
