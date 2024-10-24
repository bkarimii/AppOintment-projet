import { render, screen } from "@testing-library/react";

import { ReportMaker } from "./ReportMaker";

// Mock localStorage
beforeEach(() => {
	const mockData = {
		meetingStation: "Central Station",
	};
	localStorage.setItem("newMeetingData", JSON.stringify(mockData));
});

describe("ReportMaker Component", () => {
	const mockArrayOfReport = [
		{
			meetingDate: "2024-10-24",
			meetingTime: "10:00 AM",
			personalReports: [
				{
					name: "Alice",
					origin: "London",
					departureTime: "9:00 AM",
					arrivalTime: "10:00 AM",
					approximateTravelTime: 60,
				},
			],
		},
		{
			meetingDate: "2024-10-25",
			meetingTime: "11:00 AM",
			personalReports: [
				{
					name: "Bob",
					origin: "Manchester",
					departureTime: "10:00 AM",
					arrivalTime: "11:00 AM",
					approximateTravelTime: 60,
				},
			],
		},
	];

	test("contains Copy report button for each report", () => {
		render(<ReportMaker arrayOfReport={mockArrayOfReport} />);
		const copyButtons = screen.getAllByText(/Copy report/i);
		expect(copyButtons.length).toBe(mockArrayOfReport.length); // Should match the number of reports
	});
});
