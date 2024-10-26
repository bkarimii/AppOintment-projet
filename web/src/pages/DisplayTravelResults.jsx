import {
	faExclamationTriangle,
	faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { ReportMaker } from "./ReportMaker";
import Visualise from "./Visualise";

import "./DisplayComponent.css";

function DisplayTravelResults() {
	const [processedResultsStorage, setProcessedResultsStorage] = useState([]);
	const [processedReport, setProcessedReport] = useState([]);
	const [expandedRow, setExpandedRow] = useState(null);
	const [loading, setLoading] = useState(false); // Loading page state
	const [selectedOption, setSelectedOption] = useState("default");

	const navigate = useNavigate();
	const url = "/api/compute-route";

	const fetchTravelData = async (URL) => {
		setLoading(true); // Set loading to true when starting to fetch data
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
				console.error("An error happened!", response.status.error);
			}
		} catch (error) {
			console.error(error);
		} finally {
			setLoading(false); // Set loading to false when done
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

	// Handle sorting when radio button changes
	const handleOptionChange = (e) => {
		setSelectedOption(e.target.value);
	};

	// Sort based on selectedOption
	const sortedResults = [...processedResultsStorage].sort((a, b) => {
		switch (selectedOption) {
			case "min":
				return a.minTravelTimeInMinute - b.minTravelTimeInMinute;
			case "max":
				return b.maxTravelTimeInMinute - a.maxTravelTimeInMinute;
			case "minSlack":
				return a.arrivalSlack - b.arrivalSlack;
			default:
				return 0; // Default, no sorting
		}
	});

	const toggleRowExpansion = (index) => {
		setExpandedRow(expandedRow === index ? null : index); // Toggle the expanded row
	};

	const handleGoBackButton = (e) => {
		e.preventDefault();
		navigate("/new-meeting");
	};

	return (
		<>
			<button onClick={handleGoBackButton}>Go Back</button>
			<div className="radio-buttons-container">
				<legend>Rank the table by:</legend>
				<div>
					<input
						type="radio"
						id="minSlack"
						name="ranking"
						value="default"
						checked={selectedOption === "default"}
						onChange={handleOptionChange}
					/>
					<label htmlFor="minslack">Default</label>
				</div>

				<div>
					<input
						type="radio"
						id="min"
						name="ranking"
						value="min"
						checked={selectedOption === "min"}
						onChange={handleOptionChange}
					/>
					<label htmlFor="min">Min Trave Time</label>
				</div>

				<div>
					<input
						type="radio"
						id="max"
						name="ranking"
						value="max"
						checked={selectedOption === "max"}
						onChange={handleOptionChange}
					/>
					<label htmlFor="max">Max Travel Time</label>
				</div>
				<div>
					<input
						type="radio"
						id="minSlack"
						name="ranking"
						value="minSlack"
						checked={selectedOption === "minSlack"}
						onChange={handleOptionChange}
					/>
					<label htmlFor="minslack">Min Slack Travel Time</label>
					<p>Table Ranked by {}</p>
				</div>
				{console.log(selectedOption)}
			</div>

			<div>
				{loading ? (
					<p>
						<strong>Loading data, please wait...</strong>
					</p>
				) : (
					<div>
						<table>
							<thead>
								<tr>
									<th>Meeting Date</th>
									<th>Meeting Time</th>
									<th>Min Travel Time</th>
									<th>Average Travel Time</th>
									<th>Max Travel Time</th>
									<th>Arrivals</th>
									<th>Arrival Slack</th>
									<th>Departures</th>
									<th>Warnings</th>
								</tr>
							</thead>
							<tbody>
								{sortedResults.map((result, index) => (
									<React.Fragment key={index}>
										<tr
											key={`main-row-${index}`}
											onClick={() => toggleRowExpansion(index)}
										>
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
											<td data-label="Arrivals">
												{result.earliestArrival} : {result.latestArrival}
											</td>
											<td data-label="Arrival Slack">{result.arrivalSlack}</td>
											<td data-label="Departure">
												{result.earliestDeparture} : {result.latestDeparture}
											</td>
											<td data-label="Warnings">
												{result.difficultTravels.length > 0 ||
												result.tooLongTravels.length > 0 ? (
													<FontAwesomeIcon
														icon={faExclamationTriangle}
														style={{ color: "orange", fontSize: "1.5em" }}
														title="Warning"
														data-tip="Warning: you have long travel"
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
											<tr key={`expanded-row-${index}`}>
												<td colSpan="9">
													<div className="container">
														<div className="report">
															<ReportMaker
																timeOfReport={
																	extractDateTime(result.meetingTime)[1]
																}
																arrayOfReport={processedReport}
															/>
														</div>
													</div>
												</td>
											</tr>
										)}
									</React.Fragment>
								))}
							</tbody>
						</table>
					</div>
				)}
			</div>

			<div>
				<Visualise travelData={processedResultsStorage} />
			</div>
		</>
	);
}

export default DisplayTravelResults;
