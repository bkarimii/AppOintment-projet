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
		const meetingTimePromises = meetingTimeArray.map(async (arrivalTime) => {
			const arrivalDetail = {
				arrivalTime: arrivalTime,
				details: [],
			};

			const originPromises = arrayOfOrigins.map(async (originElement) => {
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
						arrivalTime,
					};

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

						return {
							city: originElement.city,
							arrivalTime,
							firstDepartureTime,
							lastArrivalTime,
							duration,
							staticDuration,
						};
					} else {
						return {
							city: originElement.city,
							error: "No routes found",
						};
					}
				} catch (error) {
					return {
						city: originElement.city,
						error: "Failed to compute the route",
					};
				}
			});

			const details = await Promise.all(originPromises);
			arrivalDetail.details.push(...details);
			return arrivalDetail;
		});

		const userTravelInfoContainer = await Promise.all(meetingTimePromises);
		return userTravelInfoContainer;
	} else {
		return fakeData;
	}
}
