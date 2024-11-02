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

function extractHourAndMinute(timeString) {
	return timeString.split(":").slice(0, 2).join(":");
}

function prepareDataForReport(processedInfo) {
	const reports = [];
	// Loop through each time slot (meeting)
	for (const anySlotTimeMeeting of processedInfo) {
		// Extract attendees' travel info for this meeting slot
		const attendeesTravelInfo = anySlotTimeMeeting.analys;

		// Create a report entry for this meeting time slot
		const timeSlotReport = {
			meetingDate: timeExtractor(anySlotTimeMeeting.meetingTime)[0], // Meeting Date
			meetingTime: extractHourAndMinute(
				timeExtractor(anySlotTimeMeeting.meetingTime)[1].split(".")[0],
			), // Meeting Time
			meetingLocation: anySlotTimeMeeting.destination,
			personalReports: [], // Array to hold individual person reports
		};
		// Iterate over each person's travel details
		attendeesTravelInfo.forEach((eachPerson) => {
			const personalReport = {
				name: eachPerson.city.name,
				origin: eachPerson.city.stationName,
				originCrs: eachPerson.city.station,
				approximateTravelTime: eachPerson.spentTimeInMinutes,
				departureTime: extractHourAndMinute(
					eachPerson.departureTime.split(".")[0],
				),
				arrivalTime: extractHourAndMinute(eachPerson.arrivalTime.split(".")[0]),
				difficultJourney: eachPerson.durationInDays,
			};
			timeSlotReport.personalReports.push(personalReport);
		});

		reports.push(timeSlotReport);
	}

	return reports;
}

export { prepareDataForReport };
