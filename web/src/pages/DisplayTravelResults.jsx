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

import "./DisplayComponent.css";

function TableContent({
	sortedResults,
	toggleRowExpansion,
	expandedRow,
	extractDateTime,
	processedReport,
}) {
	return (
		<table>
			<thead>
				<tr>
					<th>Rank</th>
					<th>Meeting Date</th>
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
						<tr onClick={() => toggleRowExpansion(index)}>
							<td data-label="Rank"># {index + 1}</td>
							<td data-label="Meeting Date">
								{extractDateTime(result.meetingTime)[0]}
							</td>
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
								{result.earliestDeparture} : {result.latestDeparture}
							</td>
							<td data-label="Arrivals">
								{result.earliestArrival} : {result.latestArrival}
							</td>
							<td data-label="Arrival Slack">{result.arrivalSlack}</td>
							<td data-label="Warnings">
								{result.difficultTravels.length > 0 ||
								result.tooLongTravels.length > 0 ? (
									<FontAwesomeIcon
										icon={faExclamationTriangle}
										style={{ color: "orange", fontSize: "1.5em" }}
										title="Warning"
									/>
								) : (
									<FontAwesomeIcon
										icon={faCheckCircle}
										style={{ color: "green", fontSize: "1.5em" }}
										title="All Good"
									/>
								)}
							</td>
						</tr>
						{expandedRow === index && (
							<tr>
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

function DisplayTravelResults() {
	const [processedResultsStorage, setProcessedResultsStorage] = useState([]);
	const [processedReport, setProcessedReport] = useState([]);
	const [expandedRow, setExpandedRow] = useState(null);
	const [loading, setLoading] = useState(false);
	const [selectedOption, setSelectedOption] = useState("default");

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
				const result = totalInformation[0];
				const reports = totalInformation[1];
				setProcessedResultsStorage(result);
				setProcessedReport(reports);
			} else {
				if (response.status === 429) {
					alert(
						"The app has reached its request limitation! Please try again later!",
					);
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
		fetchTravelData(url);
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
						aria-label="Go Back"
						style={{ display: "flex", alignItems: "center" }}
						id="back-button"
					>
						<FontAwesomeIcon
							icon={faArrowLeft}
							style={{ marginRight: "8px" }}
						/>
					</button>
					<div className="table-container">
						<Tabs
							selectedTabClassName="active-tab"
							onSelect={(index) => {
								const options = ["default", "min", "max", "minSlack"];
								setSelectedOption(options[index]);
							}}
						>
							<TabList className="tabs">
								<Tab className="tab">Default</Tab>
								<Tab className="tab">Min Travel Time</Tab>
								<Tab className="tab">Max Travel Time</Tab>
								<Tab className="tab">Min Slack</Tab>
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
						</Tabs>
					</div>
					<div>
						<Visualise travelData={processedResultsStorage} />
					</div>
				</>
			)}
		</>
	);
}

export default DisplayTravelResults;
