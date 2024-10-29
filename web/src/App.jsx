import { Route, Routes } from "react-router-dom";

import "./App.css";
import About from "./pages/About.jsx";
import DisplayTravelResults from "./pages/DisplayTravelResults.jsx";
import Home from "./pages/Home.jsx";
import NewMeeting from "./pages/NewMeeting.jsx";

function App() {
	return (
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/new-meeting" element={<NewMeeting />} />
			<Route path="/meeting-analysis" element={<DisplayTravelResults />} />
			<Route path="/nested/about/path" element={<About />} />
		</Routes>
	);
}

export default App;
