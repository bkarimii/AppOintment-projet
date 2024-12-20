function timeExtractor(dateTimeString) {
	// This function extracts time and date and returns it in an array
	// Input format should be like this: "2024-10-13T06:20:00Z"
	const dt = new Date(dateTimeString);

	if (!isNaN(dt.getTime())) {
		// Check if the date is valid
		const date = dt.toISOString().split("T")[0];
		const time = dt.toISOString().split("T")[1].split("Z")[0];

		return [date, time];
	} else {
		return "IncorrectFormat";
	}
}

// convert time to minutes for mathmatical operation
function timeToMinutes(time) {
	const [hours, minutes, seconds] = time.split(":").map(Number);
	return hours * 60 + minutes + seconds / 60;
}

function extractHourAndMinute(timeString) {
	return timeString.split(":").slice(0, 2).join(":");
}

function processTravelInfo(array) {
	const bigArray = [];

	// Iterate through the array param
	for (const item of array) {
		const analys = [];
		for (const detail of item.details) {
			// The difference between meeeting time and arrival time [waiting time in the train station]
			const finalWaitSeconds = Math.floor(
				(new Date(item.arrivalTime) - new Date(detail.lastArrivalTime)) / 1000,
			);
			const tripDuration = Number(detail.duration.split("s")[0]);
			// console.log(tripDuration,'Trip duration that caused the error========================')
			// Total of the time spent on this journey , travel time+ waiting time
			const totalSpentTimeInMinutes = Math.floor(
				(tripDuration + finalWaitSeconds) / 60,
			);
			const totalSpentTimeInHours =
				Math.round((totalSpentTimeInMinutes / 60) * 1000) / 1000;

			// A quick check if a traveler has to depart a day before for furthur consideration
			const durationInDays =
				new Date(timeExtractor(detail.lastArrivalTime)[0]) -
				new Date(timeExtractor(detail.firstDepartureTime)[0]);

			//adding each user trip information as Object to the analyse array
			analys.push({
				city: detail.city,
				spentTimeInMinutes: totalSpentTimeInMinutes,
				spentTimeInHour: totalSpentTimeInHours,
				departureTime: timeExtractor(detail.firstDepartureTime)[1],
				arrivalTime: timeExtractor(detail.lastArrivalTime)[1],
				departureDate: timeExtractor(detail.firstDepartureTime)[0],
				arrivalDate: timeExtractor(detail.lastArrivalTime)[0],
				durationInDays: durationInDays,
			});
		}
		bigArray.push({
			meetingTime: item.arrivalTime,
			destination: item.destinationName,
			analys,
		});
	}

	return bigArray;
}

// This function does the statistical analysis on the user travel information we get back from processTravelInfo
function statistics(allMeetingTimes) {
	// Array to hold travels longer than 8 hours
	const travelStatsByMeeting = []; // Array to hold statistics grouped by meeting time

	for (const eachMeetingTime of allMeetingTimes) {
		let [
			maxTravelTime,
			minTravelTime,
			totalTravelTime,
			earliestArrival,
			latestArrival,
			earliestDeparture,
			latestDeparture,
		] = [0, Infinity, 0, "23:59:59", "00:00:00", "23:59:59", "00:00:00"];
		const difficultTravels = []; // Array to hold users info who needs to travel a day before
		const tooLongTravels = [];

		const arrivalTimesInMinutes = [];
		let countOfTraveler = 0;

		for (const journey of eachMeetingTime.analys) {
			totalTravelTime += journey.spentTimeInMinutes;
			countOfTraveler++;

			// Track difficult travels (arriving a day earlier)
			if (journey.durationInDays > 0) {
				difficultTravels.push({
					meetingTime: eachMeetingTime.meetingTime,
					element: journey,
				});
			}

			// Track too long travels (longer than 6 hours)
			if (journey.durationInDays === 0 && journey.spentTimeInHour > 6) {
				tooLongTravels.push({
					meetingTime: eachMeetingTime.meetingTime,
					element: journey,
				});
			}

			// Finding the max and min travel times
			if (journey.spentTimeInMinutes > maxTravelTime) {
				maxTravelTime = journey.spentTimeInMinutes;
			}

			if (journey.spentTimeInMinutes < minTravelTime) {
				minTravelTime = journey.spentTimeInMinutes;
			}

			// Earliest and latest arrival times
			if (journey.arrivalTime < earliestArrival) {
				earliestArrival = journey.arrivalTime;
			}
			if (journey.arrivalTime > latestArrival) {
				latestArrival = journey.arrivalTime;
			}

			// Earliest and latest departure times
			if (journey.departureTime < earliestDeparture) {
				earliestDeparture = journey.departureTime;
			}
			if (journey.departureTime > latestDeparture) {
				latestDeparture = journey.departureTime;
			}

			// Add arrival times in minutes for median calculation
			arrivalTimesInMinutes.push(timeToMinutes(journey.arrivalTime));
		}

		// Calculate average travel time in minutes
		const averageTravelTime = Number(
			(totalTravelTime / countOfTraveler).toFixed(),
		);

		// Calculate difference between meeting time and latest arrival
		const arrivalSlack = calculateSlack(
			eachMeetingTime.meetingTime,
			latestArrival,
		);
		// Calculate difference between meeting time and earliest departure
		const departureSlack = calculateSlack(
			eachMeetingTime.meetingTime,
			earliestDeparture,
		);

		// Calculate median arrival time
		const medianTravelTime = calculateMedian(arrivalTimesInMinutes);

		// Push statistics for the current meeting time
		travelStatsByMeeting.push({
			meetingTime: eachMeetingTime.meetingTime,
			destination: eachMeetingTime.destination,
			maxTravelTimeInHour: (maxTravelTime / 60).toFixed(2), // Convert to hours and round to 2 decimals
			minTravelTimeInHour: (minTravelTime / 60).toFixed(2), // Convert to hours and round to 2 decimals
			averageTravelTimeInHour: (averageTravelTime / 60).toFixed(2), // Convert to hours and round to 2 decimals
			maxTravelTimeInMinute: maxTravelTime,
			minTravelTimeInMinute: minTravelTime,
			averageTravelTimeInMinute: averageTravelTime,
			earliestArrival: extractHourAndMinute(earliestArrival),
			latestArrival: extractHourAndMinute(latestArrival),
			earliestDeparture: extractHourAndMinute(earliestDeparture),
			latestDeparture: extractHourAndMinute(latestDeparture),
			medianArrivalTime: extractHourAndMinute(minutesToTime(medianTravelTime)), // Assuming minutesToTime correctly converts minutes to time format
			difficultTravels,
			tooLongTravels,
			arrivalSlack,
			departureSlack,
		});
	}

	return travelStatsByMeeting;
}

// Calculate the difference between meeting time and any other arrival or deoarture time,
function calculateSlack(meetingTime, arriveOrDepartTime) {
	// Convert meeting time to a Date object
	const meetingDate = new Date(meetingTime);

	// Create a new Date object for latest arrival using the same date as meetingDate
	const arriveOrDepartDate = new Date(meetingDate);

	// Split latestArrival into hours and minutes
	const [hours, minutes] = arriveOrDepartTime.split(":");

	// Set the hours and minutes for latest arrival
	arriveOrDepartDate.setUTCHours(hours, minutes, 0, 0); // Set seconds and milliseconds to 0

	// Calculate the time difference in milliseconds
	const arrivalSlackInMillis = meetingDate - arriveOrDepartDate;

	// Convert milliseconds to minutes
	const arrivalSlackInMinutes = Math.abs(
		Math.floor(arrivalSlackInMillis / 60000),
	);

	return arrivalSlackInMinutes;
}

// Helper function to calculate median
function calculateMedian(arr) {
	if (arr.length === 0) return 0;
	const sorted = arr.slice().sort((a, b) => a - b);
	const mid = Math.floor(sorted.length / 2);
	return sorted.length % 2 !== 0
		? sorted[mid]
		: (sorted[mid - 1] + sorted[mid]) / 2;
}

function minutesToTime(minutes) {
	const hours = Math.floor(minutes / 60);
	const mins = Math.floor(minutes % 60);
	const secs = Math.round((minutes % 1) * 60);
	return `${String(hours).padStart(2, "0")}:${String(mins).padStart(
		2,
		"0",
	)}:${String(secs).padStart(2, "0")}`;
}

export { statistics, processTravelInfo };
