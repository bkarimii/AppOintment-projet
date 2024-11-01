import axios from "axios";

import { useLiveData } from "../utils/config.cjs";

import sampleOutPutOfFunction from "./staticData/fetchedDataGoogle.js";

export async function computeRoutesForOrigins(
	meetingTimeArray,
	arrayOfOrigins,
	travelMode,
	arrayOfDestination,
	fields,
	apiKey,
) {
	if (useLiveData === "true") {
		try {
			const multiDestinationData = arrayOfDestination.map(
				async (meetingLocation) => {
					const destinationDetails = await Promise.all(
						meetingTimeArray.map(async (arrivalTime) => {
							const arrivalDetail = {
								destination: meetingLocation.stationCrs,
								destinationName: meetingLocation.stationName,
								arrivalTime,
								details: [],
							};

							const originPromises = arrayOfOrigins.map(
								async (originElement) => {
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
														latitude: meetingLocation.latitude,
														longitude: meetingLocation.longitude,
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

										if (
											response.data.routes &&
											response.data.routes.length > 0
										) {
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
										if (error.response && error.response.status === 429) {
											return {
												city: originElement.city,
												error: "Too many requests. Please try again later.",
												status: "429",
												staticOutPut: sampleOutPutOfFunction,
											};
										} else {
											return {
												city: originElement.city,
												error: "Failed to compute the route",
												// A hypothetical status
												status: "2",
												staticOutPut: sampleOutPutOfFunction,
											};
										}
									}
								},
							);

							arrivalDetail.details = await Promise.all(originPromises);
							return arrivalDetail;
						}),
					);
					return destinationDetails;
				},
			);

			const userTravelInfoContainer = await Promise.all(multiDestinationData);
			const flattenedUserTravelInfoContainer = userTravelInfoContainer.flat();
			const data = { status: "1", liveData: flattenedUserTravelInfoContainer };
			return data;
		} catch (error) {
			return {
				error: "Unknown error",
				status: "0",
				staticOutPut: sampleOutPutOfFunction,
			};
		}
	} else {
		return {
			error: "Using static data is active",
			status: "10",
			staticOutPut: sampleOutPutOfFunction,
		};
	}
}
