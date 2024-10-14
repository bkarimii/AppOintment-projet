import { useState } from "react";

function DisplayTravelResults() {
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

	const [showData, setShowData] = useState(false);
	const [processedResultsStorage, setProcessedResultsStorage] = useState([]);
	const url = "/api/compute-route";

	const travelProcessedData = async (URL) => {
		const response = await fetch(URL, {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(data),
		});
		if (response.ok) {
			const result = await response.json();
			setProcessedResultsStorage([...result]);
		} else console.error("An error happened!");
	};
	const handleShowResultClicks = () => {
		setShowData((prevShowdata) => !prevShowdata);
		if (!showData) {
			travelProcessedData(url);
		}
	};

	return (
		<>
			<button onClick={handleShowResultClicks}>
				{showData ? "Hide Data" : "Show Data"}
			</button>
			<div>
				{showData && (
					<div>
						<table>
							<thead>
								<tr>
									<th>Meeting Time</th>
									<th>Max Travel Time</th>
									<th>Min Travel Time</th>
									<th>Average Travel Time</th>
									<th>Earliest Arrival</th>
									<th>Latest Arrival</th>
									<th>Earliest Departure</th>
									<th>Latest Departure</th>
									<th>Median Arrival Time</th>
								</tr>
							</thead>
							<tbody>
								{processedResultsStorage.map((result, index) => {
									<tr key={index}>
										<td>{result.meetingTime}</td>
										<td>{result.maxTravelTime}</td>
										<td>{result.minTravelTime}</td>
										<td>{result.averageTravelTime}</td>
										<td>{result.earliestArrival}</td>
										<td>{result.latestArrival}</td>
										<td>{result.earliestDeparture}</td>
										<td>{result.latestDeparture}</td>
										<td>{result.medianArrivalTime}</td>
									</tr>;
								})}
							</tbody>
						</table>
					</div>
				)}
			</div>
		</>
	);
}

export default DisplayTravelResults;
