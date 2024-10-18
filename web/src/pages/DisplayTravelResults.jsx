import { useState } from "react";

import DisplayDetailOfResults from "./DisplayTravelDetails";
import NewMeeting from "./NewMeeting";
import Visualise from "./Visualise";
// import results from "./results.json";

function DisplayTravelResults() {
	const zero = 0; //Helper var, will be removed

	const [bodyHolder, setBodyHolder] = useState(null);

	const [processedResultsStorage, setProcessedResultsStorage] = useState([]);
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
		try {
			const bodyData = localStorage.getItem("meetingData");
			console.log(bodyData, "<----BodyData");
			const response = await fetch(URL, {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
				},
				body: bodyData,
			});
			if (response.ok) {
				const result = await response.json();
				setProcessedResultsStorage(result);
			} else {
				console.error("An error happened!", response.status.error);
			}
		} catch (error) {
			console.error(error);
		}
	};
	// Handle clicks on Show Data button
	const handleShowResultClicks = () => {
		setShowData((prevShowdata) => !prevShowdata);
		if (zero === 0) {
			fetchTravelData(url);
		}
	};

	const toggleRowExpansion = (index) => {
		setExpandedRow(expandedRow === index ? null : index); // Toggle the expanded row
	};
	const handleDiagramButton = () => {
		setShowDiagram((prevShowdiagram) => !prevShowdiagram);
	};

	const handleFormSubmit = (formData) => {
		setBodyHolder(formData);
		localStorage.setItem("meetingData", JSON.stringify(bodyHolder));
	};

	const handleFetchButton = () => {
		fetchTravelData(url);
	};
	return (
		<>
			<button onClick={handleFetchButton}>Fetch Data</button>
			<NewMeeting onFormSubmit={handleFormSubmit} />
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
