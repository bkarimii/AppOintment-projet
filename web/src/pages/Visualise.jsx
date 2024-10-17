import { Chart, registerables } from "chart.js";
import PropTypes from "prop-types";
import { useRef, useEffect } from "react";

// Register Chart.js components
Chart.register(...registerables);

function Visualise({ travelData }) {
	function extractDateTime(isoString) {
		const dateObject = new Date(isoString);

		const date = dateObject.toLocaleDateString("en-GB");
		const time = dateObject.toLocaleTimeString("en-GB", {
			hour: "2-digit",
			minute: "2-digit",
		});

		return [date, time];
	}
	// Reference for the canvas element
	const chartRef = useRef(null);
	const chartInstanceRef = useRef(null);

	useEffect(() => {
		if (!travelData || travelData.length === 0) return;

		// Extracting data for the chart
		const labels = travelData.map(
			(result) => extractDateTime(result.meetingTime)[1],
		);
		const minTravelTimes = travelData.map(
			(result) => result.minTravelTimeInHour,
		);
		const maxTravelTimes = travelData.map(
			(result) => result.maxTravelTimeInHour,
		);
		const averageTravelTimes = travelData.map(
			(result) => result.averageTravelTimeInHour,
		);

		// Destroy the previous chart instance if it exists
		if (chartInstanceRef.current) {
			chartInstanceRef.current.destroy();
		}

		// Create a new chart instance
		const ctx = chartRef.current.getContext("2d");
		chartInstanceRef.current = new Chart(ctx, {
			type: "line", // Line chart
			data: {
				labels: labels, // X-axis labels (meeting times)
				datasets: [
					{
						label: "Min",
						data: minTravelTimes,
						borderColor: "rgba(75, 192, 192, 1)",
						backgroundColor: "rgba(75, 192, 192, 0.2)",
						fill: true,
					},
					{
						label: "Max",
						data: maxTravelTimes,
						borderColor: "rgba(255, 99, 132, 1)",
						backgroundColor: "rgba(255, 99, 132, 0.2)",
						fill: true,
					},
					{
						label: "Average",
						data: averageTravelTimes,
						borderColor: "rgba(255, 206, 86, 1)",
						backgroundColor: "rgba(255, 206, 86, 0.2)",
						fill: true,
					},
				],
			},
			options: {
				responsive: true,
				scales: {
					x: {
						type: "category", // X-axis scale type
						title: {
							display: true,
							text: "Meeting Time",
						},
					},
					y: {
						title: {
							display: true,
							text: "Travel Time (minutes)",
						},
					},
				},
				plugins: {
					legend: {
						display: true,
					},
					tooltip: {
						enabled: true,
					},
				},
			},
		});

		// Cleanup function to destroy the chart instance
		return () => {
			if (chartInstanceRef.current) {
				chartInstanceRef.current.destroy();
			}
		};
	}, [travelData]); // Re-run the effect if travelData changes

	// Set width and height for the chart canvas
	return (
		<div style={{ width: "400px", height: "200px", overflow: "hidden" }}>
			<canvas ref={chartRef} />
		</div>
	);
}

// PropTypes validation
Visualise.propTypes = {
	travelData: PropTypes.arrayOf(
		PropTypes.shape({
			meetingTime: PropTypes.string.isRequired,
			minTravelTimeInHour: PropTypes.number.isRequired,
			maxTravelTimeInHour: PropTypes.number.isRequired,
			averageTravelTimeInHour: PropTypes.number.isRequired,
		}),
	).isRequired,
};

export default Visualise;
