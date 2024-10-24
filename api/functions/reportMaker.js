/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
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

function prepareDataForReport(suggestedMeetingTime, processedInfo) {
	const reports = [];
	// Loop through each time slot (meeting)
	for (const anySlotTimeMeeting of processedInfo) {
		// Check if the current meeting time matches the suggested time
		if (
			suggestedMeetingTime ===
			timeExtractor(anySlotTimeMeeting.meetingTime)[1].split(".")[0]
		) {
			// Extract attendees' travel info for this meeting slot
			const attendeesTravelInfo = anySlotTimeMeeting.analys;

			// Create a report entry for this meeting time slot
			const timeSlotReport = {
				meetingDate: timeExtractor(anySlotTimeMeeting.meetingTime)[0], // Meeting Date
				meetingTime: timeExtractor(anySlotTimeMeeting.meetingTime)[1].split(
					".",
				)[0], // Meeting Time
				personalReports: [], // Array to hold individual person reports
			};

			// Iterate over each person's travel details
			attendeesTravelInfo.forEach((eachPerson) => {
				const personalReport = {
					name: eachPerson.city.name,
					origin: eachPerson.city.station,
					approximateTravelTime: eachPerson.spentTimeInMinutes,
					departureTime: eachPerson.departureTime.split(".")[0],
					arrivalTime: eachPerson.arrivalTime.split(".")[0],
				};
				timeSlotReport.personalReports.push(personalReport);
			});

			reports.push(timeSlotReport);
		}
	}

	return reports;
}

// function overalReport(time, report) {
// 	const eachTimemeeting = report.find(
// 		(meeting) => meeting.meetingTime === time,
// 	);
// 	if (!eachTimemeeting) {
// 		return "No meeting found for this time!";
// 	}
// 	let reportResult = "";
// 	const arrayOfReport = [];

// 	for (let i = 0; i < eachTimemeeting.personalReports.length; i++) {
// 		const person = eachTimemeeting.personalReports[i];
// 		const reportText = `${i + 1}: Name: ${person.name}
//         Origin: ${person.origin}
//         Approximate Duration: ${person.approximateTravelTime} minutes (${Math.round(person.approximateTravelTime / 60)} hours)
//         Departure Time: ${person.departureTime}
//         Arrival Time: ${person.arrivalTime}\n`;

// 		reportResult += reportText;
// 		arrayOfReport.push(reportText);
// 	}

// 	return arrayOfReport
// }

export { prepareDataForReport };

const testData = [
	{
		meetingTime: "2024-10-22T10:00:00.000Z",
		analys: [
			{
				city: {
					name: "Fikret",
					station: "MAN",
				},
				spentTimeInMinutes: 162,
				spentTimeInHour: 2.7,
				departureTime: "07:35:00.000",
				arrivalTime: "09:41:00.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
			{
				city: {
					name: "Behrouz",
					station: "NRW",
				},
				spentTimeInMinutes: 150,
				spentTimeInHour: 2.5,
				departureTime: "07:30:00.000",
				arrivalTime: "09:45:12.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
		],
	},
	{
		meetingTime: "2024-10-22T10:20:00.000Z",
		analys: [
			{
				city: {
					name: "Fikret",
					station: "MAN",
				},
				spentTimeInMinutes: 158,
				spentTimeInHour: 2.633,
				departureTime: "07:44:00.000",
				arrivalTime: "10:12:00.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
			{
				city: {
					name: "Behrouz",
					station: "NRW",
				},
				spentTimeInMinutes: 140,
				spentTimeInHour: 2.333,
				departureTime: "08:00:00.000",
				arrivalTime: "10:09:12.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
		],
	},
	{
		meetingTime: "2024-10-22T10:40:00.000Z",
		analys: [
			{
				city: {
					name: "Fikret",
					station: "MAN",
				},
				spentTimeInMinutes: 148,
				spentTimeInHour: 2.467,
				departureTime: "08:15:00.000",
				arrivalTime: "10:35:00.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
			{
				city: {
					name: "Behrouz",
					station: "NRW",
				},
				spentTimeInMinutes: 160,
				spentTimeInHour: 2.667,
				departureTime: "08:00:00.000",
				arrivalTime: "10:09:12.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
		],
	},
	{
		meetingTime: "2024-10-22T11:00:00.000Z",
		analys: [
			{
				city: {
					name: "Fikret",
					station: "MAN",
				},
				spentTimeInMinutes: 168,
				spentTimeInHour: 2.8,
				departureTime: "08:15:00.000",
				arrivalTime: "10:35:00.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
			{
				city: {
					name: "Behrouz",
					station: "NRW",
				},
				spentTimeInMinutes: 148,
				spentTimeInHour: 2.467,
				departureTime: "08:32:00.000",
				arrivalTime: "10:42:12.000",
				departureDate: "2024-10-22",
				arrivalDate: "2024-10-22",
				durationInDays: 0,
			},
		],
	},
];

// console.log(JSON.stringify(prepareDataForReport("10:20:00", testData)));
