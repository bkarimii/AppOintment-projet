import { getLocation } from "./getLocation.js";

export const transformFormData = async (formData) => {
	const origins = [];

	for (const attendee of formData.attendees) {
		const locationResult = await getLocation(attendee.station);

		origins.push({
			name: attendee.name,
			city: locationResult.station_name, // Changed city to station_name
			location: locationResult.location,
		});
	}

	const destinationInfo = await getLocation(formData.meetingStation);

	const destination = destinationInfo.location.latLng;

	const meetingRange = {
		startingTime: `${formData.meetingDate}T${formData.earliestStartTime}:00Z`,
		endingTime: `${formData.meetingDate}T${formData.latestStartTime}:00Z`,
	};

	const intervalTime = formData.intervalTime;

	return {
		origins,
		destination,
		meetingRange,
		intervalTime,
	};
};
