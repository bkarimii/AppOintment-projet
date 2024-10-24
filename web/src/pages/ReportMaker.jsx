/* eslint-disable react/prop-types */

import { useState } from "react";

import "./ReportMaker.css";

export function ReportMaker({ arrayOfReport }) {
	const [isCopied, setIsCopied] = useState(false);

	// Extract destination from local storage
	const meetingData = localStorage.getItem("newMeetingData");
	const parsedMeetingData = JSON.parse(meetingData);
	const destinationTrainStation = parsedMeetingData.meetingStation;

	const copyReportToClipboard = async (reportText) => {
		try {
			await navigator.clipboard.writeText(reportText);
			// alert("Report copied!");
			setIsCopied(true);
			setTimeout(() => {
				setIsCopied(false);
			}, 4000);
		} catch (error) {
			console.error("Failed to copy: ", error);
		}
	};

	const handleCopyButton = (reportText) => {
		copyReportToClipboard(reportText);
		setTimeout(() => {
			setIsCopied(false);
		});
	};

	function generateReportText(arrayOfReport) {
		return arrayOfReport.map((personTravel, index) => {
			const personalReports = personTravel.personalReports;

			const reportText =
				`Meeting on ${personTravel.meetingDate} at ${personTravel.meetingTime}\n` +
				`Destination: ${destinationTrainStation}\n` + // Add destination to report text
				personalReports
					.map(
						(personalInfo) =>
							`Attendee: ${personalInfo.name}, From: ${personalInfo.origin}, ` +
							`Departure: ${personalInfo.departureTime}, ` +
							`Arrival: ${personalInfo.arrivalTime}, ` +
							`Duration: ${personalInfo.approximateTravelTime} minutes`,
					)
					.join("\n");

			return (
				<div key={index} className="report-container">
					{isCopied ? (
						<button onClick={() => handleCopyButton(reportText)}>Copied</button>
					) : (
						<button onClick={() => handleCopyButton(reportText)}>
							Copy report
						</button>
					)}

					<h3> Meeting Report</h3>
					{personalReports.map((personalInfo, innerIndex) => (
						<div key={innerIndex} className="each-person-report">
							<h4>Attendee: {personalInfo.name}</h4>
							<h4>From: {personalInfo.origin}</h4>
							<p>
								<strong>Date of Meeting:</strong>{" "}
								<strong>{personTravel.meetingDate}</strong>
							</p>
							<p>
								<strong>Time of Meeting:</strong>{" "}
								<strong>{personTravel.meetingTime}</strong>
							</p>
							<p>
								<strong>Departure Location:</strong>{" "}
								<strong>{personalInfo.origin}</strong>
							</p>
							<p>
								<strong>Travel Details:</strong>
							</p>
							<ul>
								<li>
									<strong>Departure Time:</strong> {personalInfo.departureTime}
								</li>
								<li>
									<strong>Expected Arrival Time:</strong>{" "}
									{personalInfo.arrivalTime}
								</li>
								<li>
									<strong>Approximate Duration:</strong>{" "}
									{personalInfo.approximateTravelTime} minutes
								</li>
							</ul>
						</div>
					))}
				</div>
			);
		});
	}

	const textOfReport = generateReportText(arrayOfReport);

	return (
		<>
			<div>{textOfReport}</div>
		</>
	);
}
