/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { useState } from "react";
import "./ReportMaker.css";

export function ReportMaker({ arrayOfReport }) {
	const [inputValueHolder, setInputValueHolder] = useState("");
	const [searchForAttendee, setSearchForAttendee] = useState(false);
	const [showGeneralReport, setShowGeneralReport] = useState(true);

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

	const functionToSearchForAttendee = (attendeeName) => {
		if (attendeeName.length) {
			const filteredAttendee = arrayOfReport.reduce(
				(accumulator, meetingSlotTimeObject) => {
					const attendeeTravelInfo = meetingSlotTimeObject.personalReports;

					const attendeeFound = attendeeTravelInfo.find(
						(attendee) =>
							attendee.name.toLowerCase() === attendeeName.toLowerCase(),
					);

					if (attendeeFound) {
						accumulator.push({
							meetingDate: meetingSlotTimeObject.meetingDate,
							meetingTime: meetingSlotTimeObject.meetingTime,
							personalReports: attendeeFound,
						});
					}

					return accumulator;
				},
				[],
			);
			return filteredAttendee;
		}
		return [];
	};

	const handleSearchButton = () => {
		if (inputValueHolder.trim().length === 0) {
			// If input is empty, show general report
			alert("Search box is empty! Showing general report.");
			setSearchForAttendee(false);
			setShowGeneralReport(true);
		} else {
			const results = functionToSearchForAttendee(inputValueHolder);
			setSearchForAttendee(true);
			setShowGeneralReport(false);
			if (results.length > 0) {
				console.log(JSON.stringify(results));
			} else {
				alert("No result found for the search!");
				setSearchForAttendee(false);
				setShowGeneralReport(true);
			}
		}
	};

	// Function to clear input box and reset to general report
	const handleClearInput = () => {
		setInputValueHolder(""); // Clear the input box
		setSearchForAttendee(false); // Stop showing search results
		setShowGeneralReport(true); // Show general report
	};

	function generateReportText(arrayOfReport) {
		return arrayOfReport.map((personTravel, index) => {
			const personalReports = personTravel.personalReports;

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
								It is on <b>{personTravel.meetingDate}</b> at{" "}
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
	}

	const textOfReport = generateReportText(arrayOfReport);

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
				<button onClick={handleClearInput}>Clear</button> {/* Clear button */}
			</div>
			{/* Conditionally display search results or general report */}
			<div>
				{searchForAttendee
					? functionToSearchForAttendee(inputValueHolder).map(
							(result, index) => (
								<div key={index}>
									<h3>
										Meeting on {result.meetingDate} at {result.meetingTime}
									</h3>
									<div>
										<h4>Attendee: {result.personalReports.name}</h4>
										<h5>From: {result.personalReports.origin}</h5>
										<p>
											Departure: {result.personalReports.departureTime},
											Arrival:
											{result.personalReports.arrivalTime}, Duration:{" "}
											{result.personalReports.approximateTravelTime} minutes
										</p>
									</div>
								</div>
							),
						)
					: textOfReport}
			</div>
		</>
	);
}
