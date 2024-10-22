/* eslint-disable react/prop-types */
import "./ReportMaker.css";

export function ReportMaker({ arrayOfReport }) {
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
			<div>{textOfReport}</div>
		</>
	);
}
