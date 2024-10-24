import axios from "axios";

import { fakeData } from "./fakeData.js";

export async function computeRoutesForOrigins(
	meetingTimeArray,
	arrayOfOrigins,
	travelMode,
	destinationParam,
	fields,
	apiKey,
) {
	const runTheFetch = false;
	if (runTheFetch) {
		const userTravelInfoContainer = [];

		for (const arrivalTime of meetingTimeArray) {
			const arrivalDetail = {
				arrivalTime: arrivalTime,
				details: [],
			};

			for (const originElement of arrayOfOrigins) {
				try {
					const requestBody = {
						origin: {
							location: {
								latLng: originElement.location.latLng,
							},
						},
						destination: {
							location: {
								latLng: {
									latitude: destinationParam.latitude,
									longitude: destinationParam.longitude,
								},
							},
						},
						travelMode,
						arrivalTime, // Use the current arrival time from the loop
					};

					// Send request to Google Routes API
					const response = await axios.post(
						"https://routes.googleapis.com/directions/v2:computeRoutes",
						requestBody,
						{
							headers: {
								"Content-Type": "application/json",
								"X-Goog-Api-Key": apiKey,
								"X-Goog-FieldMask": fields,
							},
						},
					);

					// Ensure routes exist before accessing them
					if (response.data.routes && response.data.routes.length > 0) {
						const route = response.data.routes[0];
						let firstDepartureTime = null;
						let lastArrivalTime = null;
						let duration = null;
						let staticDuration = null;

						for (const leg of route.legs) {
							duration = leg.duration || duration;
							staticDuration = leg.staticDuration || staticDuration;

							for (const step of leg.steps) {
								if (step.transitDetails) {
									if (!firstDepartureTime) {
										firstDepartureTime =
											step.transitDetails.stopDetails.departureTime;
									}
									lastArrivalTime =
										step.transitDetails.stopDetails.arrivalTime ||
										lastArrivalTime;
								}
							}
						}

						// Add route details to the arrivalDetail object after processing all legs
						arrivalDetail.details.push({
							city: originElement.city,
							arrivalTime, // Add current arrival time
							firstDepartureTime,
							lastArrivalTime,
							duration,
							staticDuration,
						});
					} else {
						arrivalDetail.details.push({
							city: originElement.city,
							error: "No routes found",
						});
					}
				} catch (error) {
					arrivalDetail.details.push({
						city: originElement.city,
						error: "Failed to compute the route",
					});
				}
			}
			userTravelInfoContainer.push(arrivalDetail);
		}

		return userTravelInfoContainer;
	} else {
		return fakeData;
	}
}
