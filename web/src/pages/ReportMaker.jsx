/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ReportMaker.css";

export function ReportMaker({ arrayOfReport }) {
	const [inputValueHolder, setInputValueHolder] = useState("");

	const copyReportToClipboard = async (reportText) => {
		try {
			await navigator.clipboard.writeText(reportText);
			alert("Report copied!");
		} catch (error) {
			console.error("Failed to copy: ", error);
		}
	};

	const handleCopyButton = (reportText) => {
		copyReportToClipboard(reportText);
	};

	const searchForAttendees = (attendeeName) => {
		if (attendeeName.length) {
			// Create an array to hold the filtered results
			const filteredAttendee = arrayOfReport.reduce(
				(accumulator, meetingSlotTimeObject) => {
					const attendeeTravelInfo = meetingSlotTimeObject.personalReports;

					// Check if the specified attendee is in the current meeting's reports
					const attendeeFound = attendeeTravelInfo.find(
						(attendee) =>
							attendee.name.toLowerCase() === attendeeName.toLowerCase(),
					);

					// If the attendee is found, push the relevant meeting information to the accumulator
					if (attendeeFound) {
						accumulator.push({
							meetingDate: meetingSlotTimeObject.meetingDate,
							meetingTime: meetingSlotTimeObject.meetingTime,
							personalReports: attendeeFound,
						});
					}

					return accumulator; // Return the accumulator
				},
				[],
			); // Initialize the accumulator as an empty array
			return filteredAttendee; // Return the array of filtered attendees
		}
		if (attendeeName.length == 0) {
			alert("Search box is empty!");
			return "";
		} else {
			alert("No result found for the search!");
		}
	};

	const handleSearchButton = () => {
		const results = searchForAttendees(inputValueHolder);
		if (results.length > 0) {
			// Do something with results, like updating state or displaying them
			console.log(JSON.stringify(results)); // You may want to update your UI with these results
		} else {
			alert("No result found for the search!");
		}
	};

	// This loop returns the report item in the array in browser and HTML format
	const textOfReport = arrayOfReport.map((personTravel, index) => {
		const personalReports = personTravel.personalReports;

		// Create the report text for copying
		const reportText =
			`Meeting on ${personTravel.meetingDate} at ${personTravel.meetingTime}\n` +
			personalReports
				.map(
					(personalInfo) =>
						`Attendee: ${personalInfo.name}, From: ${personalInfo.origin}, Departure: ${personalInfo.departureTime}, Arrival: ${personalInfo.arrivalTime}, Duration: ${personalInfo.approximateTravelTime} minutes`,
				)
				.join("\n");

		return (
			<div key={index} className="report-container">
				<button onClick={() => handleCopyButton(reportText)}>Copy</button>
				<h3>
					Meeting on {personTravel.meetingDate} at {personTravel.meetingTime}
				</h3>
				{personalReports.map((personalInfo, innerIndex) => (
					<div key={innerIndex}>
						<h4>Attendee: {personalInfo.name}</h4>
						<h5>From: {personalInfo.origin}</h5>
						<p>
							It is on <bold>{personTravel.meetingDate}</bold> at{" "}
							{personTravel.meetingTime} in {personalInfo.origin}. Departure
							time is {personalInfo.departureTime} and expected to arrive at{" "}
							{personalInfo.arrivalTime}. It lasts around{" "}
							{personalInfo.approximateTravelTime} minutes.
						</p>
					</div>
				))}
			</div>
		);
	});

	return (
		<>
			<button>Generate Report</button>
			<div>
				<p>Search attendees: </p>
				<input
					value={inputValueHolder}
					onChange={(e) => {
						setInputValueHolder(e.target.value);
					}}
				/>
				<button onClick={handleSearchButton}>Search</button>
			</div>
			<div>{textOfReport}</div>
		</>
	);
}
