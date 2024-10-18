import { render, screen, fireEvent } from "@testing-library/react";
import jest from "jest-mock";

import DisplayTravelResults from "./DisplayTravelResults";

globalThis.fetch = jest.fn(() =>
	Promise.resolve({
		ok: true,
		json: () =>
			Promise.resolve({
				travelResults: [{ city: "Liverpool", duration: "1 hour" }],
			}),
		clone: function () {
			return this;
		},
	}),
);

describe("DisplayTravelResults Component", () => {
	it("should render the Show Data button initially", () => {
		render(<DisplayTravelResults />);
		const button = screen.getByText("Show Data");
		expect(button).toBeInTheDocument();
	});

	it("should toggle between 'Show Data' and 'Hide Data' on button click", async () => {
		render(<DisplayTravelResults />);

		const button = screen.getByText("Show Data");
		fireEvent.click(button);
		expect(button).toHaveTextContent("Hide Data");

		fireEvent.click(button);
		expect(button).toHaveTextContent("Show Data");
	});
});
