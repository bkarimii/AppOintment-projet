import { useEffect, useState } from "react";
import "./NewMeeting.css";

function NewMeeting() {
	const [stations, setStations] = useState([]);
	const [meetingStation, setMeetingStation] = useState();
	const [meetingDate, setMeetingDate] = useState();
	const [earliestStartTime, setEarliestStartTime] = useState();
	const [latestStartTime, setLatestStartTime] = useState();
	const [attendees, setAttendees] = useState([{ name: "", station: "" }]);

	useEffect(() => {
		fetch("/api/station-list")
			.then((response) => response.json())
			.then((stationList) => setStations(stationList));
	}, []);

	const handleAttendeeChange = (index, field, value) => {
		const updatedAttendees = [...attendees];
		updatedAttendees[index][field] = value;
		setAttendees(updatedAttendees);
	};

	const addAttendee = () => {
		setAttendees([...attendees, { name: "", station: "" }]);
	};

	const deleteAttendee = (index) => {
		const updatedAttendees = attendees.filter((_, i) => i !== index);
		setAttendees(updatedAttendees);
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
				<div className="form-group">
					<select
						name="meetingStation"
						id="meeting-station"
						defaultValue=""
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
					<label htmlFor="meeting-station">Meeting Station</label>
				</div>

				<div className="form-group">
					<input
						type="date"
						id="meeting-date"
						name="meetingDate"
						required
						placeholder=" "
						onChange={(e) => setMeetingDate(e.target.value)}
					/>
					<label htmlFor="meeting-date">Meeting Date</label>
				</div>

				<div className="form-group">
					<input
						type="time"
						id="earliest-start-time"
						name="earliestStartTime"
						required
						placeholder=" "
						onChange={(e) => setEarliestStartTime(e.target.value)}
					/>
					<label htmlFor="earliest-start-time">Earliest Start Time</label>
				</div>

				<div className="form-group">
					<input
						type="time"
						id="latest-start-time"
						name="latestStartTime"
						required
						placeholder=" "
						onChange={(e) => setLatestStartTime(e.target.value)}
					/>
					<label htmlFor="latest-start-time">Latest Start Time</label>
				</div>
				<div className="form-group">
					<label id="list-heading" htmlFor="att-list">
						Attendee List
					</label>
					<div id="attendees-list">
						<ul id="att-list">
							{attendees.map((attendee, index) => (
								<li className="attendee-li" key={index}>
									<div className="form-group attendee-name-group">
										<input
											type="text"
											id={"attendee-name" + index}
											placeholder=" "
											value={attendees[index].name}
											onChange={(e) =>
												handleAttendeeChange(index, "name", e.target.value)
											}
											required
										/>
										<label htmlFor={"attendee-name" + index}>Name</label>
									</div>
									<div className="form-group attendee-station-group">
										<select
											name="attendeesStation"
											id={"attendees-station" + index}
											defaultValue=""
											value={attendees[index].station}
											onChange={(e) =>
												handleAttendeeChange(index, "station", e.target.value)
											}
											required
										>
											<option value="" disabled>
												Select a station
											</option>
											{stations.map((station, idx) => (
												<option key={idx} value={station.crs_code}>
													{station.station_name}
												</option>
											))}
										</select>
										<label htmlFor={"attendees-station" + index}>Station</label>
									</div>
									<button
										className="delete-button"
										onClick={() => deleteAttendee(index)}
										style={{ display: "flex", alignItems: "center" }}
									>
										<svg
											xmlns="http://www.w3.org/2000/svg"
											width="30"
											height="30"
											viewBox="0 0 64 64"
										>
											<rect
												x="16"
												y="22"
												width="32"
												height="34"
												fill="red"
												rx="4"
											/>

											<rect
												x="12"
												y="16"
												width="40"
												height="5"
												fill="red"
												rx="2"
											/>

											<rect
												x="24"
												y="11"
												width="16"
												height="6"
												fill="red"
												rx="2"
											/>

											<rect x="22" y="27" width="4" height="24" fill="white" />
											<rect x="30" y="27" width="4" height="24" fill="white" />
											<rect x="38" y="27" width="4" height="24" fill="white" />
										</svg>
									</button>
								</li>
							))}
						</ul>

						<button
							id="add-attendee-button"
							type="button"
							onClick={addAttendee}
						>
							Add Attendee
						</button>
					</div>
				</div>

				<button type="submit">Submit</button>
			</form>
		</>
	);
}

export default NewMeeting;
