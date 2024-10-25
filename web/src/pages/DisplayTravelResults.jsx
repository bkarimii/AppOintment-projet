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
	const [loading, setLoading] = useState(false); // Loading state
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

	// Function to fetch travel data from API

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
									<th>Latest Arrival</th>
									<th>Earliest Departure</th>
								</tr>
							</thead>
							<tbody>
								{processedResultsStorage.map((result, index) => (
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
											<td data-label="Latest Arrival">
												{result.latestArrival.split(".")[0]}
											</td>
											<td data-label="Earliest Departure">
												{result.earliestDeparture.split(".")[0]}
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
