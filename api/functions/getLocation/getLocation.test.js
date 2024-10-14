import { getLocation } from "./getLocation";

describe("getLocation function", () => {
	describe("when existing crs code given", () => {
		it("returns matching long&lat value in appropriate format", async () => {
			const expectedResponse = {
				location: {
					latLng: { latitude: 53.47671998, longitude: -2.228977818 },
				},
			};
			const responseLocation = await getLocation("MAN");

			expect(responseLocation.location.latLng.latitude).toBeCloseTo(
				expectedResponse.location.latLng.latitude,
			);
			expect(responseLocation.location.latLng.longitude).toBeCloseTo(
				expectedResponse.location.latLng.longitude,
			);
		});
	});
});
