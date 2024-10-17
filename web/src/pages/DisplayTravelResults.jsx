import { useState } from "react";

import DisplayDetailOfResults from "./DisplayTravelDetails";
import Visualise from "./Visualise";
import results from "./results.json";

function DisplayTravelResults() {
	const zero = 0; //Helper var, will be removed
	const data = {
		origins: [
			{
				city: "Liverpool",
				location: {
					latLng: {
						latitude: 53.40461053,
						longitude: -2.979159936,
					},
				},
			},
		],
		destination: {
			latitude: 52.1945746,
			longitude: 0.137554552,
		},
		meetingRange: {
			startingTime: "2024-10-13T10:00:00Z",
			endingTime: "2024-10-13T13:00:00Z",
		},
		intervalTime: "15",
	};
	const [processedResultsStorage, setProcessedResultsStorage] = useState(
		results.results,
	);
	const [showData, setShowData] = useState(false);
	const [expandedRow, setExpandedRow] = useState(null);
	const [showDiagram, setShowDiagram] = useState(false);
	const url = "/api/compute-route";

	function extractDateTime(isoString) {
		const dateObject = new Date(isoString);

		const date = dateObject.toLocaleDateString("en-GB");
		const time = dateObject.toLocaleTimeString("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
		});

		return [date, time];
	}

	const fetchTravelData = async (URL) => {
		const response = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			const result = await response.json();
			setProcessedResultsStorage(result);
		} else console.error("An error happened!");
	};
	// Handle clicks on Show Data button
	const handleShowResultClicks = () => {
		setShowData((prevShowdata) => !prevShowdata);
		if (zero === 1) {
			fetchTravelData(url);
		}
	};

	const toggleRowExpansion = (index) => {
		setExpandedRow(expandedRow === index ? null : index); // Toggle the expanded row
	};
	const handleDiagramButton = () => {
		setShowDiagram((prevShowdiagram) => !prevShowdiagram);
	};

	return (
		<>
			<button onClick={handleShowResultClicks}>
				{showData ? "Hide Data" : "Show Data"}
			</button>
			{showData && (
				<div>
					<div>
						<table>
							<thead>
								<tr>
									<th>Meeting Date</th>
									<th>Meeting Time</th>
									<th>Max Travel Time</th>
									<th>Min Travel Time</th>
									<th>Average Travel Time</th>
									<th>Latest Arrival</th>
									<th>Earliest Departure</th>
								</tr>
							</thead>
							<tbody>
								{processedResultsStorage.map((result, index) => {
									return (
										<>
											<tr key={index} onClick={() => toggleRowExpansion(index)}>
												<td data-label="Meeting Date">
													{extractDateTime(result.meetingTime)[0]}
												</td>
												<td data-label="Meeting Time">
													{extractDateTime(result.meetingTime)[1]}
												</td>
												<td data-label="Max Travel Time">
													{result.maxTravelTimeInHour}
												</td>
												<td data-label="Min Travel Time">
													{result.minTravelTimeInHour}
												</td>
												<td data-label="Average Travel Time">
													{result.averageTravelTimeInHour}
												</td>
												<td data-label="Latest Arrival">
													{result.latestArrival}
												</td>
												<td data-label="Earliest Departure">
													{result.earliestDeparture}
												</td>
											</tr>
											{/* Render the TravelDetails component when the row is expanded */}
											{expandedRow === index && (
												<tr key={-index}>
													<td colSpan="9">
														<DisplayDetailOfResults details={result} />
													</td>
												</tr>
											)}
										</>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}
			<div>
				<button onClick={handleDiagramButton}>
					{showDiagram ? "Hide Diagram" : "Show Diagram"}
				</button>
				{showDiagram && <Visualise travelData={processedResultsStorage} />}
			</div>
		</>
	);
}

export default DisplayTravelResults;
