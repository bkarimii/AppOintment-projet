import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import DisplayDetailOfResults from "./DisplayTravelDetails";
import Visualise from "./Visualise";
import "./DisplayComponent.css";
// import results from "./results.json";

function DisplayTravelResults() {
	const [processedResultsStorage, setProcessedResultsStorage] = useState([]);
	const [expandedRow, setExpandedRow] = useState(null);
	const navigate = useNavigate();
	const url = "/api/compute-route";

	useEffect(() => {
		fetchTravelData(url);
	}, []);

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
			const bodyData = localStorage.getItem("newMeetingData");
			console.log(bodyData);
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
				setProcessedResultsStorage(result);
			} else {
				console.error("An error happened!", response.status.error);
			}
		} catch (error) {
			console.error(error);
		}
	};

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

			<div>
				<Visualise travelData={processedResultsStorage} />
			</div>
		</>
	);
}

export default DisplayTravelResults;
