import { Route, Routes } from "react-router-dom";

import "./pages/DisplayComponent.css";
import DisplayTravelResults from "./pages/DisplayTravelResults.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<DisplayTravelResults />} />
		</Routes>
	);
}

export default App;
