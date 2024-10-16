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

function processTravelInfo(array) {
	const meetingTime = "2024-10-13T10:00:00Z";
	const analys = [];
	const bigArray = [];

	// Iterate through the array param
	for (const item of array) {
		for (const detail of item.details) {
			// The difference between meeeting time and arrival time [waiting time in the train station]
			const finalWaitSeconds = Math.floor(
				(new Date(meetingTime) - new Date(detail.lastArrivalTime)) / 1000,
			);
			const tripDuration = Number(detail.duration.split("s")[0]);
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
		bigArray.push({ meetingTime: item.arrivalTime, analys });
	}

	return bigArray;
}

// This function does the statistical analysis on the user travel information we get back from processTravelInfo
function statistics(arrayOfProcessedInfo) {
	const difficultTravels = []; // Array to hold users info who needs to travel a day before
	const tooLongTravel = []; // Array to hold travels longer than 8 hours
	const travelStatsByMeeting = []; // Array to hold statistics grouped by meeting time

	for (const itemOfProcessedInfo of arrayOfProcessedInfo) {
		let [
			maxTravelTime,
			minTravelTime,
			totalTravelTime,
			earliestArrival,
			latestArrival,
			earliestDeparture,
			latestDeparture,
		] = [0, Infinity, 0, "23:59:59", "00:00:00", "23:59:59", "00:00:00"];

		const arrivalTimesInMinutes = [];
		let countOfTraveler = 0;

		for (const element of itemOfProcessedInfo.analys) {
			totalTravelTime += element.spentTimeInMinutes;
			countOfTraveler++;

			// Track difficult travels (arriving a day earlier)
			if (element.durationInDays > 0) {
				difficultTravels.push({
					meetingTime: itemOfProcessedInfo.meetingTime,
					element,
				});
			}

			// Track too long travels (longer than 10 hours)
			if (element.durationInDays === 0 && element.spentTimeInHour > 10) {
				tooLongTravel.push({
					meetingTime: itemOfProcessedInfo.meetingTime,
					element,
				});
			}

			// Finding the max and min travel times
			if (element.spentTimeInMinutes > maxTravelTime) {
				maxTravelTime = element.spentTimeInMinutes;
			}
			if (element.spentTimeInMinutes < minTravelTime) {
				minTravelTime = element.spentTimeInMinutes;
			}

			// Earliest and latest arrival times
			if (element.arrivalTime < earliestArrival) {
				earliestArrival = element.arrivalTime;
			}
			if (element.arrivalTime > latestArrival) {
				latestArrival = element.arrivalTime;
			}

			// Earliest and latest departure times
			if (element.departureTime < earliestDeparture) {
				earliestDeparture = element.departureTime;
			}
			if (element.departureTime > latestDeparture) {
				latestDeparture = element.departureTime;
			}

			// Add arrival times in minutes for median calculation
			arrivalTimesInMinutes.push(timeToMinutes(element.arrivalTime));
		}

		// Calculate average travel time in minutes
		const averageTravelTime = totalTravelTime / countOfTraveler;

		// Calculate median arrival time
		const medianTravelTime = calculateMedian(arrivalTimesInMinutes);

		// Push statistics for the current meeting time
		travelStatsByMeeting.push({
			meetingTime: itemOfProcessedInfo.meetingTime,
			maxTravelTimeInHour: (maxTravelTime / 60).toFixed(2), // Convert to hours and round to 2 decimals
			minTravelTimeInHour: (minTravelTime / 60).toFixed(2), // Convert to hours and round to 2 decimals
			averageTravelTimeInHour: (averageTravelTime / 60).toFixed(2), // Convert to hours and round to 2 decimals
			earliestArrival,
			latestArrival,
			earliestDeparture,
			latestDeparture,
			medianArrivalTime: minutesToTime(medianTravelTime), // Assuming minutesToTime correctly converts minutes to time format
			difficultTravels,
			tooLongTravel,
		});
	}

	return travelStatsByMeeting;
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
