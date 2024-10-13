import { useEffect, useState } from "react";

function NewMeeting() {
	const [stations, setStations] = useState([]);
	const [meetingStation, setMeetingStation] = useState();
	const [meetingDate, setMeetingDate] = useState();
	const [earliestStartTime, setEarliestStartTime] = useState();
	const [latestStartTime, setLatestStartTime] = useState();
	const [selectedStation, setSelectedStation] = useState("");
	const [attendees, setAttendees] = useState([]);

	useEffect(() => {
		fetch("/api/station-list")
			.then((response) => response.json())
			.then((stationList) => setStations(stationList));
	}, []);

	const addAttendee = () => {
		if (selectedStation) {
			setAttendees([...attendees, selectedStation]);
			setSelectedStation("");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		const formData = {
			meetingStation,
			meetingDate,
			earliestStartTime,
			latestStartTime,
			attendees,
		};

		console.log("Form submitted:", formData);
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<label htmlFor="meeting-station">Meeting Station</label>
				<select
					name="meetingStation"
					id="meeting-station"
					defaultValue={""}
					onChange={(e) => setMeetingStation(e.target.value)}
					required
				>
					<option value="" disabled>
						Select a station
					</option>
					{stations.map((station, index) => (
						<option key={index} value={station.crs_code}>
							{station.station_name}
						</option>
					))}
				</select>

				<label htmlFor="meeting-date">Meeting Date</label>
				<input
					type="date"
					id="meeting-date"
					name="meetingDate"
					required
					onChange={(e) => setMeetingDate(e.target.value)}
				/>

				<label htmlFor="earliest-start-time">Earliest Start Time:</label>
				<input
					type="time"
					id="earliest-start-time"
					name="earliestStartTime"
					required
					onChange={(e) => setEarliestStartTime(e.target.value)}
				/>

				<label htmlFor="latest-start-time">Latest Start Time:</label>
				<input
					type="time"
					id="latest-start-time"
					name="latestStartTime"
					required
					onChange={(e) => setLatestStartTime(e.target.value)}
				/>

				<label htmlFor="attendees-stations">Attendees Stations:</label>
				<select
					name="attendeesStation"
					id="attendees-station"
					value={selectedStation}
					onChange={(e) => setSelectedStation(e.target.value)}
				>
					<option value="" disabled>
						Select a station
					</option>
					{stations.map((station, index) => (
						<option key={index} value={station.crs_code}>
							{station.station_name}
						</option>
					))}
				</select>
				<button type="button" onClick={addAttendee}>
					Add Another Station
				</button>

				<div>
					<h3>Attendees List:</h3>
					{attendees.map((stationCode, index) => (
						<div key={index}>
							{
								stations.find((station) => station.crs_code === stationCode)
									?.station_name
							}
						</div>
					))}
				</div>

				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default NewMeeting;
