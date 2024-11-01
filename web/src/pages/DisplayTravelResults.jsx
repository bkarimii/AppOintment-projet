import {
	faExclamationTriangle,
	faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import PropTypes from "prop-types";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";

import { ReportMaker } from "./ReportMaker";
import Visualise from "./Visualise";
import report from "./report.json";
import results from "./results.json";

import "./DisplayComponent.css";

function TableContent({
	sortedResults,
	toggleRowExpansion,
	expandedRow,
	extractDateTime,
	processedReport,
}) {
	return (
		<table role="table">
			<thead>
				<tr>
					<th>Rank</th>
					<th>Meeting Location</th>
					<th>Meeting Time</th>
					<th>Min Travel Time</th>
					<th>Average Travel Time</th>
					<th>Max Travel Time</th>
					<th>Departures</th>
					<th>Arrivals</th>
					<th>Arrival Slack</th>
					<th>Warnings</th>
				</tr>
			</thead>
			<tbody>
				{sortedResults.map((result, index) => (
					<React.Fragment key={index}>
						<tr onClick={() => toggleRowExpansion(index)} role="row">
							<td data-label="Rank"># {index + 1}</td>
							<td data-label="Meeting Location">{result.destination}</td>
							<td data-label="Meeting Time">
								{extractDateTime(result.meetingTime)[1]}
							</td>
							<td data-label="Min Travel Time">
								{result.minTravelTimeInMinute}
							</td>
							<td data-label="Average Travel Time">
								{result.averageTravelTimeInMinute}
							</td>
							<td data-label="Max Travel Time">
								{result.maxTravelTimeInMinute}
							</td>
							<td data-label="Departures">
								{result.earliestDeparture} - {result.latestDeparture}
							</td>
							<td data-label="Arrivals">
								{result.earliestArrival} - {result.latestArrival}
							</td>
							<td data-label="Arrival Slack">{result.arrivalSlack}</td>
							<td data-label="Warnings">
								{result.difficultTravels.length > 0 ||
								result.tooLongTravels.length > 0 ? (
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										id="warning-button"
										title="This meeting includes a long journey. Click the row for more details."
										aria-label="Warning-long journey in this meeting. click the row for more details."
									/>
								) : (
									<FontAwesomeIcon
										icon={faCheckCircle}
										title="All Good"
										id="check-tick-button"
										aria-label="All good in this journey."
									/>
								)}
							</td>
						</tr>
						{expandedRow === index && (
							<tr role="row">
								<td colSpan="10">
									<ReportMaker
										timeOfReport={extractDateTime(result.meetingTime)[1]}
										arrayOfReport={processedReport}
									/>
								</td>
							</tr>
						)}
					</React.Fragment>
				))}
			</tbody>
		</table>
	);
}

TableContent.propTypes = {
	sortedResults: PropTypes.arrayOf(
		PropTypes.shape({
			meetingTime: PropTypes.string.isRequired,
			minTravelTimeInMinute: PropTypes.number.isRequired,
			averageTravelTimeInMinute: PropTypes.number.isRequired,
			maxTravelTimeInMinute: PropTypes.number.isRequired,
			earliestDeparture: PropTypes.string.isRequired,
			latestDeparture: PropTypes.string.isRequired,
			earliestArrival: PropTypes.string.isRequired,
			latestArrival: PropTypes.string.isRequired,
			arrivalSlack: PropTypes.number.isRequired,
			difficultTravels: PropTypes.array.isRequired,
			tooLongTravels: PropTypes.array.isRequired,
		}),
	).isRequired,
	toggleRowExpansion: PropTypes.func.isRequired,
	expandedRow: PropTypes.number,
	extractDateTime: PropTypes.func.isRequired,
	processedReport: PropTypes.array.isRequired,
};

// -------------------------------------------------------------------------------

function DisplayTravelResults() {
	const [processedResultsStorage, setProcessedResultsStorage] = useState(
		results.results,
	);
	const [processedReport, setProcessedReport] = useState(report.report);
	const [expandedRow, setExpandedRow] = useState(null);
	const [loading, setLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState("meeting-time");

	const navigate = useNavigate();
	const url = "/api/compute-route";

	const fetchTravelData = async (URL) => {
		setLoading(true);
		try {
			const bodyData = localStorage.getItem("newMeetingData");

			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: bodyData,
			});

			if (response.ok) {
				const totalInformation = await response.json();
				const result = totalInformation.totalInformation[0];
				const reports = totalInformation.totalInformation[1];
				setProcessedResultsStorage(result);
				setProcessedReport(reports);

				switch (response.status) {
					case 429:
						alert(
							"Google API Quota exceeded - This is a sample meeting generated by the app to show how it works. Please try again later for live data.",
						);
						break;
					case 2:
						alert(
							"Failed to compute the route - This is a sample meeting generated by the app to show how it works. Please try again later for live data.",
						);
						break;
					case 0:
						alert(
							"Unknown error occurred - This is a sample meeting generated by the app to show how it works. Please try again later for live data.",
						);
						break;
				}
			} else {
				if (response.status === 429) {
					alert("Google API Quota exceeded - please try again later");
				}
				console.error("An error occurred!", response.status.error);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false);
		}
	};

	useEffect(() => {
		const falsy = false;
		if (falsy) {
			fetchTravelData(url);
		}
		document.title = "Meeting results";
	}, []);

	const extractDateTime = (isoString) => {
		const dateObject = new Date(isoString);
		const date = dateObject.toLocaleDateString("en-GB", { timeZone: "UTC" });
		const time = dateObject.toLocaleTimeString("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
			hour12: false,
			timeZone: "UTC",
		});
		return [date, time];
	};

	const toggleRowExpansion = (index) => {
		setExpandedRow(expandedRow === index ? null : index);
	};

	const handleGoBackButton = (e) => {
		e.preventDefault();
		navigate("/new-meeting");
	};

	const getSortedResults = () => {
		const results = [...processedResultsStorage];
		switch (selectedOption) {
			case "meeting-time":
				return results.sort(
					(a, b) => new Date(a.meetingTime) - new Date(b.meetingTime),
				);
			case "min":
				return results.sort(
					(a, b) => a.minTravelTimeInMinute - b.minTravelTimeInMinute,
				);
			case "max":
				return results.sort(
					(a, b) => a.maxTravelTimeInMinute - b.maxTravelTimeInMinute,
				);
			case "minSlack":
				return results.sort((a, b) => a.arrivalSlack - b.arrivalSlack);
			default:
				return results;
		}
	};

	const meetingDateToShowInBrowser =
		processedResultsStorage.length > 0
			? extractDateTime(processedResultsStorage[0].meetingTime)[0]
			: "";
	const meetinDayToShow = new Date(
		processedResultsStorage[0].meetingTime,
	).getDay();
	const daysOfWeek = [
		"Sunday",
		"Monday",
		"Tuesday",
		"Wednesday",
		"Thursday",
		"Friday",
		"Saturday",
	];
	return (
		<>
			{loading ? (
				<div className="spinner-container">
					<div className="spinner"></div>
					<p>Data is loading...</p>
				</div>
			) : (
				<>
					<button
						onClick={handleGoBackButton}
						aria-label="Go Back to the form page."
						id="back-button"
					>
						<FontAwesomeIcon icon={faArrowLeft} />
					</button>
					<div id="meeting-date-container">
						<h3 id="meeting-date-in-table-page">
							Meeting Date: &quot; {daysOfWeek[meetinDayToShow]} ,{" "}
							{meetingDateToShowInBrowser} &quot;
						</h3>
					</div>
					<div className="table-container">
						<Tabs
							selectedTabClassName="active-tab"
							onSelect={(index) => {
								const options = [
									"meeting-time",
									"min",
									"max",
									"minSlack",
									"meeting-location",
									"diagram",
								];
								setSelectedOption(options[index]);
							}}
						>
							<TabList className="tabs" role="tablist">
								<Tab className="tab">Meeting Time</Tab>
								<Tab className="tab">Min Travel Time</Tab>
								<Tab className="tab">Max Travel Time</Tab>
								<Tab className="tab">Min Arrival Slack</Tab>
								<Tab className="tab">Group By Location</Tab>
								<Tab className="tab">Diagram</Tab>
							</TabList>

							<TabPanel>
								<TableContent
									sortedResults={getSortedResults()}
									toggleRowExpansion={toggleRowExpansion}
									expandedRow={expandedRow}
									extractDateTime={extractDateTime}
									processedReport={processedReport}
								/>
							</TabPanel>
							<TabPanel>
								<TableContent
									sortedResults={getSortedResults()}
									toggleRowExpansion={toggleRowExpansion}
									expandedRow={expandedRow}
									extractDateTime={extractDateTime}
									processedReport={processedReport}
								/>
							</TabPanel>
							<TabPanel>
								<TableContent
									sortedResults={getSortedResults()}
									toggleRowExpansion={toggleRowExpansion}
									expandedRow={expandedRow}
									extractDateTime={extractDateTime}
									processedReport={processedReport}
								/>
							</TabPanel>
							<TabPanel>
								<TableContent
									sortedResults={getSortedResults()}
									toggleRowExpansion={toggleRowExpansion}
									expandedRow={expandedRow}
									extractDateTime={extractDateTime}
									processedReport={processedReport}
								/>
							</TabPanel>
							<TabPanel>
								<TableContent
									sortedResults={getSortedResults()}
									toggleRowExpansion={toggleRowExpansion}
									expandedRow={expandedRow}
									extractDateTime={extractDateTime}
									processedReport={processedReport}
								/>
							</TabPanel>
							<TabPanel>
								<div id="chart-container">
									<Visualise travelData={processedResultsStorage} />
								</div>
							</TabPanel>
						</Tabs>
					</div>
				</>
			)}
		</>
	);
}

export default DisplayTravelResults;
