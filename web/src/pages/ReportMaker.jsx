import {
	faExclamationTriangle,
	faCopy,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState } from "react";

import "./ReportMaker.css";

export function ReportMaker({ timeOfReport, arrayOfReport }) {
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

	const eachReportObject = arrayOfReport.find(
		(eachTimeSlotObject) => eachTimeSlotObject.meetingTime == timeOfReport,
	);

	function generateReportText(eachReportObject) {
		// Extract necessary details
		const { meetingDate, meetingTime, personalReports } = eachReportObject;

		// Generate the report text for each person's travel details
		const reportText =
			`Meeting on ${meetingDate} at ${meetingTime}\n` +
			`Destination: ${destinationTrainStation}\n` +
			personalReports
				.map(
					(personalInfo) =>
						`Attendee: ${personalInfo.name}, From: ${personalInfo.origin}, ` +
						`Departure: ${personalInfo.departureTime}, ` +
						`Arrival: ${personalInfo.arrivalTime}, ` +
						`Duration: ${personalInfo.approximateTravelTime} minutes`,
				)
				.join("\n");

		// Render the report UI
		// return (
		// 	<div className="report-container">
		// 		{isCopied ? (
		// 			<button
		// 				onClick={() => handleCopyButton(reportText)}
		// 				className="icon-button"
		// 			>
		// 				<FontAwesomeIcon
		// 					icon={faCheck}
		// 					style={{ color: "white", size: "large" }}
		// 				/>
		// 				{"  "}
		// 				Copied!
		// 				{/* "Copied" icon */}
		// 			</button>
		// 		) : (
		// 			<button
		// 				onClick={() => handleCopyButton(reportText)}
		// 				className="icon-button"
		// 			>
		// 				<FontAwesomeIcon icon={faCopy} style={{ color: "white" }} />{" "}
		// 				{/* "Copy" icon */}
		// 			</button>
		// 		)}

		// 		<div className="date-time-report">
		// 			<h3>Meeting Report</h3>
		// 			<h4>
		// 				<strong>Date of Meeting:</strong> {meetingDate}
		// 			</h4>
		// 			<h4>
		// 				<strong>Time of Meeting:</strong> {meetingTime}
		// 			</h4>
		// 		</div>

		// 		{personalReports.map((personalInfo, index) => (
		// 			<div key={index} className="each-person-report">
		// 				<h4>Attendee: {personalInfo.name}</h4>
		// 				<h4>From: {personalInfo.origin}</h4>
		// 				<p>
		// 					<strong>Departure Location:</strong> {personalInfo.origin}
		// 				</p>
		// 				<ul>
		// 					<li>
		// 						<strong>Departure Time:</strong> {personalInfo.departureTime}
		// 					</li>
		// 					<li>
		// 						<strong>Expected Arrival Time:</strong>{" "}
		// 						{personalInfo.arrivalTime}
		// 					</li>
		// 					<li>
		// 						<strong>Approximate Duration:</strong>{" "}
		// 						{personalInfo.approximateTravelTime} minutes
		// 					</li>
		// 				</ul>
		// 			</div>
		// 		))}
		// 	</div>
		// );

		return (
			<div className="report-container">
				{isCopied ? (
					<button
						onClick={() => handleCopyButton(reportText)}
						className="icon-button"
					>
						<FontAwesomeIcon icon={faCheck} style={{ color: "white" }} />
						{"  "}
						Copied!
					</button>
				) : (
					<button
						onClick={() => handleCopyButton(reportText)}
						className="icon-button"
					>
						<FontAwesomeIcon icon={faCopy} style={{ color: "white" }} />
					</button>
				)}

				<div className="date-time-report">
					<h3>Meeting Report</h3>
					<h4>
						<strong>Date of Meeting:</strong> {meetingDate}
					</h4>
					<h4>
						<strong>Time of Meeting:</strong> {meetingTime}
					</h4>
				</div>

				<table className="report-table">
					<thead>
						<tr>
							<th>Attendee</th>
							<th>From</th>
							<th>Departure Time</th>
							<th>Expected Arrival Time</th>
							<th>Duration (minutes)</th>
							<th>Notes</th>
						</tr>
					</thead>
					<tbody>
						{personalReports.map((personalInfo, index) => (
							<tr key={index} className="each-person-report">
								{/* Attendee Name with conditional styling */}
								<td>
									{personalInfo.durationIndays > 0 ||
									personalInfo.approximateTravelTime > 360 ? (
										<strong>
											<FontAwesomeIcon
												icon={faExclamationTriangle}
												style={{ color: "orange", fontSize: "1.5em" }}
												title="Warning: you have a long travel"
											/>
											<i> {personalInfo.name}</i>
										</strong>
									) : (
										personalInfo.name
									)}
								</td>

								{/* From */}
								<td>{personalInfo.origin}</td>

								{/* Departure Time */}
								<td>{personalInfo.departureTime}</td>

								{/* Expected Arrival Time */}
								<td>{personalInfo.arrivalTime}</td>

								{/* Duration */}
								<td>{personalInfo.approximateTravelTime}</td>

								{/* Notes */}
								<td>
									{personalInfo.durationIndays > 0 ||
									personalInfo.approximateTravelTime > 360
										? "This is a long Journey!"
										: ""}
								</td>
							</tr>
						))}
					</tbody>
				</table>
			</div>
		);
	}

	const textOfReport = generateReportText(eachReportObject);

	return (
		<>
			<div>{textOfReport}</div>
		</>
	);
}

// PropTypes for ReportMaker
ReportMaker.propTypes = {
	timeOfReport: PropTypes.string.isRequired,
	arrayOfReport: PropTypes.arrayOf(
		PropTypes.shape({
			meetingDate: PropTypes.string.isRequired,
			meetingTime: PropTypes.string.isRequired,
			personalReports: PropTypes.arrayOf(
				PropTypes.shape({
					name: PropTypes.string.isRequired,
					origin: PropTypes.string.isRequired,
					departureTime: PropTypes.string.isRequired,
					arrivalTime: PropTypes.string.isRequired,
					approximateTravelTime: PropTypes.number.isRequired,
				}),
			).isRequired,
		}),
	).isRequired,
};
