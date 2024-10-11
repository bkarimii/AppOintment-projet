import { getLocation } from "./getLocation";

describe("getLocation function", () => {
	describe("when existing crs code given", () => {
		it("returns matching long&lat value in appropriate format", async () => {
			const expectedResponse = {
				location: {
					latLng: { latitude: 53.47671998, longitude: -2.228977818 },
				},
			};
			expect(await getLocation("MAN")).toEqual(expectedResponse);
		});
	});
});

// this test is not working because test database is different than production env database
