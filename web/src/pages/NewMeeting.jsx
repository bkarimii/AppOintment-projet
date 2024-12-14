/* eslint-disable no-unused-vars */
import { faQuestionCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { isArray } from "chart.js/helpers";
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "./NewMeeting.css";
import { useNavigate } from "react-router-dom";

function NewMeeting() {
	//This variable handle the inputbox value to search stations
	const [searchedStation, setSearchedStation] = useState("");
	const [filteredStations, setFilteredStations] = useState([]); // Matched stations
	// const [addedStations, setAddedStations] = useState([]);

	// ====================================================================
	const [stations, setStations] = useState([]);
	const [helpIconToggle, setHelpIconToggle] = useState(false);
	const [formData, setFormData] = useState(() => {
		const savedData = JSON.parse(localStorage.getItem("newMeetingData"));
		if (savedData && !isArray(savedData.meetingStation)) {
			savedData.meetingStation = [{ station: savedData.meetingStation }];
		}
		return (
			savedData || {
				addedStations: [{ station: "" }],
				copyMeetingStation: [{ station: "" }],
				meetingStation: [{ station: "" }],
				meetingDate: "",
				earliestStartTime: "",
				latestStartTime: "",
				attendees: [{ name: "", station: "" }],
				intervalTime: 20,
			}
		);
	});
	const [addedStations, setAddedStations] = useState(formData.addedStations);

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
	const navigate = useNavigate();

	useEffect(() => {
		fetch("/api/station-list")
			.then((response) => response.json())
			.then((stationList) => setStations(stationList));
	}, []);

	useEffect(() => {
		const updateFormData = () => {
			setFormData({
				addedStations,
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
		addedStations,
		meetingStation,
		meetingDate,
		earliestStartTime,
		latestStartTime,
		attendees,
		intervalTime,
	]);

	useEffect(() => {
		document.title = "ThisAppointment";
		localStorage.setItem("newMeetingData", JSON.stringify(formData));
		console.log(formData, "This is form data ------------<");
	}, [formData]);

	const handleMeetingStationChange = (index, field, value) => {
		const updatedMeetingStation = [...meetingStation];
		updatedMeetingStation[index][field] = value;
		setMeetingStation(updatedMeetingStation);
	};

	const addMeetingStation = () => {
		setMeetingStation([...meetingStation, { station: "" }]);
	};

	const deleteMeetingStation = (index) => {
		const updatedMeetingStation = meetingStation.filter((_, i) => i !== index);
		setMeetingStation(updatedMeetingStation);
	};

	const handleMeetingChange = (field, value) => {
		switch (field) {
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

	const handleAttendeeChange = (index, field, value) => {
		const updatedAttendees = [...attendees];
		updatedAttendees[index][field] = value;
		setAttendees(updatedAttendees);
	};

	const addAttendee = () => {
		setAttendees([...attendees, { name: "", station: "" }]);
	};

	const deleteAttendee = (index) => (e) => {
		e.preventDefault();
		const updatedAttendees = attendees.filter((_, i) => i !== index);
		setAttendees(updatedAttendees);
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		navigate("/meeting-analysis");
	};

	const handleHelpButton = () => {
		setHelpIconToggle(!helpIconToggle);
	};

	// =======================New Implementation==============================

	const handleSearch = (event) => {
		const value = event.target.value.toLowerCase();
		setSearchedStation(value);

		// Filter stations that match the input
		if (value) {
			const matches = stations.filter((station) =>
				station.station_name.toLowerCase().includes(value),
			);
			setFilteredStations(matches);
		} else {
			setFilteredStations([]); // Clear suggestions if input is empty
		}
	};

	const handleSelect = (station_name) => {
		setSearchedStation(station_name); // Populate the selected station in the input box
		setFilteredStations([]); // Clear the dropdown after selection
	};

	// Add selected station to the list
	const handleAddButtonClick = (e) => {
		e.preventDefault();
		if (searchedStation) {
			const selectedStation = stations.find(
				(station) => station.station_name === searchedStation,
			);

			if (
				selectedStation &&
				!addedStations.some(
					(station) => station.station_name === selectedStation.station_name,
				)
			) {
				setAddedStations([...addedStations, selectedStation]);
				setSearchedStation(""); // Clear input box after adding
			}
		}
	};

	// This function handles deleting stations for the ones added by input box
	const deleteMeetingStationCopy = (index) => {
		const updatedMeetingStation = addedStations.filter((_, i) => i !== index);
		setAddedStations(updatedMeetingStation);
	};

	// =====================================================

	return (
		<>
			<div id="page-container">
				<h1 id="form-page-title">THIS APP OINTMENT</h1>
				<div id="form-page">
					<form onSubmit={handleSubmit}>
						<h2 className="form-header">Plan your meeting details</h2>
						<div className="form-group">
							<label id="list-heading" htmlFor="stn-list">
								Meeting Station List
							</label>
							<div id="station-list">
								{/* ====================I am adding a text box to search stations========================= */}

								<div id="station-list-new-code">
									<div id="input-box-container">
										<label htmlFor="meetingStations">Stations: </label>
										<input
											type="text"
											name="meetingStations"
											value={searchedStation}
											onChange={handleSearch}
											placeholder="Search for a station"
										/>
										<button onClick={handleAddButtonClick}>Add</button>

										{/* Suggestions dropdown */}
										{filteredStations.length > 0 && (
											<div id="suggestions">
												{filteredStations.map((station, index) => (
													<div
														key={index}
														role="button"
														tabIndex={0}
														onClick={() => handleSelect(station.station_name)}
														onKeyDown={(e) => {
															if (e.key === "Enter") {
																handleSelect(station.station_name);
															}
														}}
													>
														{station.station_name} ({station.crs_code})
													</div>
												))}
											</div>
										)}
									</div>
								</div>
								{/* Display added stations */}
								{addedStations.length > 0 && (
									<div id="added-stations">
										<h3>Added Stations:</h3>
										<ul id="ul-added-station">
											{addedStations.map((station, index) => (
												<li key={index} className="li-added-stations">
													{station.station_name} ({station.crs_code})
													<button
														className="delete-button"
														onClick={() => deleteMeetingStationCopy(index)}
														style={{ display: "flex", alignItems: "center" }}
														name="delete-station-inputbox"
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
																fill="black"
																rx="4"
															/>
															<rect
																x="12"
																y="16"
																width="40"
																height="5"
																fill="black"
																rx="2"
															/>
															<rect
																x="24"
																y="11"
																width="16"
																height="6"
																fill="black"
																rx="2"
															/>
															<rect
																x="22"
																y="27"
																width="4"
																height="24"
																fill="white"
															/>
															<rect
																x="30"
																y="27"
																width="4"
																height="24"
																fill="white"
															/>
															<rect
																x="38"
																y="27"
																width="4"
																height="24"
																fill="white"
															/>
														</svg>
													</button>
												</li>
											))}
										</ul>
									</div>
								)}

								{/* ============================================= */}
							</div>
						</div>

						<div className="form-group">
							<input
								type="date"
								id="meeting-date"
								name="meetingDate"
								required
								value={meetingDate}
								min={new Date().toISOString().split("T")[0]}
								onChange={(e) =>
									handleMeetingChange("meetingDate", e.target.value)
								}
								aria-required="true"
							/>
							<label htmlFor="meeting-date">Meeting Date</label>
						</div>

						<div className="time-group">
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
									aria-required="true"
								/>
								<label htmlFor="earliest-start-time">Earliest Start Time</label>
							</div>

							<p>to</p>

							<div className="form-group">
								<input
									type="time"
									id="latest-start-time"
									name="latestStartTime"
									required
									value={latestStartTime}
									min={earliestStartTime}
									onChange={(e) =>
										handleMeetingChange("latestStartTime", e.target.value)
									}
									aria-required="true"
								/>
								<label htmlFor="latest-start-time">Latest Start Time</label>
							</div>
						</div>
						<h3 className="form-header">Who is coming?</h3>

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
														handleAttendeeChange(
															index,
															"station",
															e.target.value,
														)
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
												<label htmlFor={"attendees-station" + index}>
													Station
												</label>
											</div>
											<button
												className="delete-button"
												onClick={deleteAttendee(index)}
												aria-label={`Remove ${attendee.name} from attendee list`}
												name="delete-attendee"
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
														fill="black"
														rx="2"
													/>

													<rect
														x="24"
														y="11"
														width="16"
														height="6"
														fill="inherit"
														rx="2"
													/>

													<rect
														x="22"
														y="27"
														width="4"
														height="24"
														fill="white"
													/>
													<rect
														x="30"
														y="27"
														width="4"
														height="24"
														fill="white"
													/>
													<rect
														x="38"
														y="27"
														width="4"
														height="24"
														fill="white"
													/>
												</svg>
											</button>
										</li>
									))}
								</ul>

								<button
									id="add-attendee-button"
									type="button"
									onClick={addAttendee}
									aria-label="Add attendee"
									name="add-attendee"
								>
									<span style={{ fontSize: "18px", marginRight: "5px" }}>
										+
									</span>{" "}
									Add Attendee
								</button>
							</div>
						</div>

						<button
							type="submit"
							aria-label="Submit meeting details"
							name="submit"
						>
							Submit
						</button>
					</form>
					<div id="help-button-content-parent">
						<div id="help-button-and-title">
							<h2>Need help?</h2>
							<FontAwesomeIcon
								icon={faQuestionCircle}
								onClick={handleHelpButton}
								id="help-fa-icon"
								aria-expanded={helpIconToggle}
								aria-controls="help-content"
								name="help-button"
								aria-label="help-button"
								role="button"
							/>
						</div>

						{helpIconToggle && (
							<div id="help-content" aria-labelledby="help-title">
								<h3 id="help-title">How to Fill the Form</h3>
								<p>
									<strong>Meeting Station:</strong> Choose the station where the
									meeting will take place from the dropdown menu. If the
									stations is not listed, please check back later.
								</p>
								<p>
									<strong>Meeting Date:</strong> Select the date of the meeting
									using the date picker or import manually.
								</p>
								<p>
									<strong>Earliest Start Time:</strong> Specify the earliest
									time you can start the meeting.
								</p>
								<p>
									<strong>Latest Start Time:</strong> Indicate the latest time
									you can start the meeting.
								</p>
								<h4>Attendee List:</h4>
								<p>
									Enter the names and select the stations for each attendee:
								</p>
								<ul>
									<li>
										<strong>Name:</strong> Enter the full name of the attendee.
									</li>
									<li>
										<strong>Station:</strong> Select the station from the
										dropdown menu that corresponds to the attendee&lsquo;s
										location.
									</li>
								</ul>
								<p>
									To add more attendees, click the &ldquo;Add Attendee&quot;
									button. If you need to remove an attendee, click the delete
									button next to their information.
								</p>
								<p>
									Once all fields are filled out, click the &quot;Submit&quot;
									button to finalize your meeting details.
								</p>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

// Define propTypes for validation
NewMeeting.propTypes = {
	onFormSubmit: PropTypes.func,
};
export default NewMeeting;
