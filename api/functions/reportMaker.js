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

function prepareDataForReport(processedInfo) {
	const report = [];

	for (const meetingObject of processedInfo) {
		// Create an entry for each time slot
		const timeSlotReport = {
			meetingDate: timeExtractor(meetingObject.meetingTime)[0],
			meetingTime: timeExtractor(meetingObject.meetingTime)[1].split(".")[0],
			personalReports: [], // Store individual person reports
		};

		// Iterate over each person's analysis in the meeting
		for (const eachPerson of meetingObject.analys) {
			const personalReport = {
				name: eachPerson.city.name,
				origin: eachPerson.city.station,
				approximateTravelTime: eachPerson.spentTimeInMinutes,
				departureTime: eachPerson.departureTime,
				arrivalTime: eachPerson.arrivalTime,
			};

			// Add each person's report to the time slot report
			timeSlotReport.personalReports.push(personalReport);
		}

		// Add the completed time slot report to the main report array
		report.push(timeSlotReport);
	}

	return report;
}

function overalReport(time, report) {
	const eachTimemeeting = report.find(
		(meeting) => meeting.meetingTime === time,
	);
	if (!eachTimemeeting) {
		return "No meeting found for this time!";
	}
	let reportResult = "";
	const arrayOfReport = [];

	for (let i = 0; i < eachTimemeeting.personalReports.length; i++) {
		const person = eachTimemeeting.personalReports[i];
		const reportText = `${i + 1}: Name: ${person.name}
        Origin: ${person.origin}
        Approximate Duration: ${person.approximateTravelTime} minutes (${Math.round(person.approximateTravelTime / 60)} hours)
        Departure Time: ${person.departureTime}
        Arrival Time: ${person.arrivalTime}\n`;

		reportResult += reportText;
		arrayOfReport.push(reportText);
	}

	return reportResult;
}

export { overalReport, prepareDataForReport };

// const data=[
//   {
//     "meetingTime": "2024-10-19T10:00:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 162,
//         "spentTimeInHour": 2.7,
//         "departureTime": "07:35:00.000",
//         "arrivalTime": "09:41:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 123,
//         "spentTimeInHour": 2.05,
//         "departureTime": "07:57:00.000",
//         "arrivalTime": "09:54:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T10:20:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 148,
//         "spentTimeInHour": 2.467,
//         "departureTime": "07:55:00.000",
//         "arrivalTime": "10:09:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 143,
//         "spentTimeInHour": 2.383,
//         "departureTime": "07:57:00.000",
//         "arrivalTime": "09:54:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T10:40:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 168,
//         "spentTimeInHour": 2.8,
//         "departureTime": "07:55:00.000",
//         "arrivalTime": "10:09:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 130,
//         "spentTimeInHour": 2.167,
//         "departureTime": "08:30:00.000",
//         "arrivalTime": "10:39:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T11:00:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 162,
//         "spentTimeInHour": 2.7,
//         "departureTime": "08:35:00.000",
//         "arrivalTime": "10:41:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 150,
//         "spentTimeInHour": 2.5,
//         "departureTime": "08:30:00.000",
//         "arrivalTime": "10:39:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T11:20:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 148,
//         "spentTimeInHour": 2.467,
//         "departureTime": "08:55:00.000",
//         "arrivalTime": "11:09:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 140,
//         "spentTimeInHour": 2.333,
//         "departureTime": "09:00:00.000",
//         "arrivalTime": "11:09:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T11:40:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 160,
//         "spentTimeInHour": 2.667,
//         "departureTime": "09:03:00.000",
//         "arrivalTime": "11:35:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 160,
//         "spentTimeInHour": 2.667,
//         "departureTime": "09:00:00.000",
//         "arrivalTime": "11:09:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T12:00:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 162,
//         "spentTimeInHour": 2.7,
//         "departureTime": "09:35:00.000",
//         "arrivalTime": "11:41:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 148,
//         "spentTimeInHour": 2.467,
//         "departureTime": "09:32:00.000",
//         "arrivalTime": "11:42:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   },
//   {
//     "meetingTime": "2024-10-19T12:20:00.000Z",
//     "analys": [
//       {
//         "city": {
//           "name": "Fikret",
//           "station": "MAN"
//         },
//         "spentTimeInMinutes": 148,
//         "spentTimeInHour": 2.467,
//         "departureTime": "09:55:00.000",
//         "arrivalTime": "12:09:00.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       },
//       {
//         "city": {
//           "name": "Behrouz",
//           "station": "NRW"
//         },
//         "spentTimeInMinutes": 140,
//         "spentTimeInHour": 2.333,
//         "departureTime": "10:00:00.000",
//         "arrivalTime": "12:09:12.000",
//         "departureDate": "2024-10-19",
//         "arrivalDate": "2024-10-19",
//         "durationInDays": 0
//       }
//     ]
//   }
// ];

// const time= "12:20:00";
// const perparedData=dataForReport(data)
// console.log(overalReport(time, perparedData));
