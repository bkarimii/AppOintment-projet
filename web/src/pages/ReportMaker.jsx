/* eslint-disable no-unused-vars */
import {
	faExclamationTriangle,
	faCopy,
	faCheck,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import { useState, useEffect } from "react";

export function ReportMaker({ timeOfReport, arrayOfReport }) {
	const [isCopied, setIsCopied] = useState(false);
	const [reportDestination, setReportDestination] = useState(
		"Unknown Destination",
	);

	useEffect(() => {
		const meetingData = localStorage.getItem("newMeetingData");
		setReportDestination(
			meetingData
				? JSON.parse(meetingData).meetingStation
				: "Unknown Destination",
		);
	}, []);

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

		return (
			<div className="report-container">
				<table className="report-table">
					<thead>
						<tr>
							<th>
								<>
									{isCopied ? (
										<button
											onClick={() => handleCopyButton(reportText)}
											className="icon-button"
											title="Copied"
										>
											<FontAwesomeIcon icon={faCheck} />
										</button>
									) : (
										<button
											onClick={() => handleCopyButton(reportText)}
											className="icon-button"
										>
											<FontAwesomeIcon icon={faCopy} title="Copy" />
										</button>
									)}
								</>
								Attendee
							</th>
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
								<td>{personalInfo.origin}</td>
								<td>{personalInfo.departureTime}</td>
								<td>{personalInfo.arrivalTime}</td>
								<td>{personalInfo.approximateTravelTime}</td>
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
