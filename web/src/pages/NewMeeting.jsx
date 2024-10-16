import { useEffect, useState } from "react";
import "./NewMeeting.css";

function NewMeeting() {
	const [stations, setStations] = useState([]);
	const [formData, setFormData] = useState(() => {
		const savedData = JSON.parse(localStorage.getItem("newMeetingData"));
		return (
			savedData || {
				meetingStation: "",
				meetingDate: "",
				earliestStartTime: "",
				latestStartTime: "",
				attendees: [{ name: "", station: "" }],
				intervalTime: "15",
			}
		);
	});
	const [meetingStation, setMeetingStation] = useState(formData.meetingStation);
	const [meetingDate, setMeetingDate] = useState(formData.meetingDate);
	const [earliestStartTime, setEarliestStartTime] = useState(
		formData.earliestStartTime,
	);
	const [latestStartTime, setLatestStartTime] = useState(
		formData.latestStartTime,
	);
	const [attendees, setAttendees] = useState(formData.attendees);
	const [intervalTime, setIntervalTime] = useState(formData.intervalTime);

	useEffect(() => {
		fetch("/api/station-list")
			.then((response) => response.json())
			.then((stationList) => setStations(stationList));
	}, []);

	useEffect(() => {
		const updateFormData = () => {
			setFormData({
				meetingStation,
				meetingDate,
				earliestStartTime,
				latestStartTime,
				attendees,
				intervalTime,
			});
		};

		updateFormData();
	}, [
		meetingStation,
		meetingDate,
		earliestStartTime,
		latestStartTime,
		attendees,
		intervalTime,
	]);

	useEffect(() => {
		localStorage.setItem("newMeetingData", JSON.stringify(formData));
	}, [formData]);

	const handleAttendeeChange = (index, field, value) => {
		const updatedAttendees = [...attendees];
		updatedAttendees[index][field] = value;
		setAttendees(updatedAttendees);
	};

	const handleMeetingChange = (field, value) => {
		switch (field) {
			case "meetingStation":
				setMeetingStation(value);
				break;
			case "meetingDate":
				setMeetingDate(value);
				break;
			case "earliestStartTime":
				setEarliestStartTime(value);
				break;
			case "latestStartTime":
				setLatestStartTime(value);
				break;
			case "intervalTime":
				setIntervalTime(value);
				break;

			default:
				break;
		}
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

		fetch("/api/compute-route", {
			method: "POST",
			headers: {
				"Content-Type": "application/json",
			},
			body: JSON.stringify(formData),
		})
			.then((response) => {
				if (!response.ok) {
					throw new Error("Network response was not ok");
				}
				return response.json();
			})
			.then((data) => {
				// next page redirection will appear here
				console.log("Response from API:", data);
			})
			.catch((error) => {
				console.error("There was a problem with the fetch operation:", error);
			});
	};

	return (
		<>
			<form onSubmit={handleSubmit}>
				<div className="form-group">
					<select
						name="meetingStation"
						id="meeting-station"
						value={meetingStation}
						onChange={(e) =>
							handleMeetingChange("meetingStation", e.target.value)
						}
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
						value={meetingDate}
						onChange={(e) => handleMeetingChange("meetingDate", e.target.value)}
					/>
					<label htmlFor="meeting-date">Meeting Date</label>
				</div>

				<div className="form-group">
					<input
						type="time"
						id="earliest-start-time"
						name="earliestStartTime"
						required
						value={earliestStartTime}
						onChange={(e) =>
							handleMeetingChange("earliestStartTime", e.target.value)
						}
					/>
					<label htmlFor="earliest-start-time">Earliest Start Time</label>
				</div>

				<div className="form-group">
					<input
						type="time"
						id="latest-start-time"
						name="latestStartTime"
						required
						value={latestStartTime}
						onChange={(e) =>
							handleMeetingChange("latestStartTime", e.target.value)
						}
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
