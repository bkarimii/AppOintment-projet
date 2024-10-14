import { useState } from "react";

import travelData from "../assets/travelDetail.json";

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
	const [processedResultsStorage, setProcessedResultsStorage] = useState([]);
	const [showData, setShowData] = useState(false);
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
	const handleShowResultClicks = () => {
		setShowData((prevShowdata) => !prevShowdata);
		console.log(processedResultsStorage);
		if (showData) {
			fetchTravelData(url);
		}
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
									<th>Earliest Arrival</th>
									<th>Latest Arrival</th>
									<th>Earliest Departure</th>
									<th>Latest Departure</th>
								</tr>
							</thead>
							<tbody>
								{travelData.travelDetail.map((result, index) => {
									return (
										<tr key={index}>
											<td>{extractDateTime(result.meetingTime)[0]}</td>
											<td>{extractDateTime(result.meetingTime)[1]}</td>
											<td>{result.maxTravelTime}</td>
											<td>{result.minTravelTime}</td>
											<td>{result.averageTravelTime}</td>
											<td>{extractDateTime(result.earliestArrival)[1]}</td>
											<td>{extractDateTime(result.latestArrival)[1]}</td>
											<td>{extractDateTime(result.earliestDeparture)[1]}</td>
											<td>{extractDateTime(result.latestDeparture)[1]}</td>
										</tr>
									);
								})}
							</tbody>
						</table>
					</div>
				</div>
			)}
		</>
	);
}

export default DisplayTravelResults;
