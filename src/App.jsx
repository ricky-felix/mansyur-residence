import React from "react";
import { Routes, Route } from "react-router-dom";

import Home from "./pages/Home.jsx";
import ContactUs from "./pages/Contact_Us.jsx";
import Residents from "./pages/Residents.jsx";
import Error404 from "./pages/Error404.jsx";
import Gallery from "./pages/Gallery.jsx";
function App() {
	return (
		<>
			<div>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />

					<Route path="/kontak" element={<ContactUs />} />
					<Route path="/resident" element={<Residents />} />
					<Route path="/gallery" element={<Gallery />} />

					<Route path="/404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</div>
		</>
	);
}

export default App;
