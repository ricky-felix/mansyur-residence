import React, { Suspense, lazy, useState, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { WhatsAppButton } from "./components/common/WhatsAppButton.jsx";

// Lazy load page components for code splitting
const Home = lazy(() => import("./pages/Home.jsx"));
const ContactUs = lazy(() => import("./pages/Contact_Us.jsx"));
const Residents = lazy(() => import("./pages/Residents.jsx"));
const Gallery = lazy(() => import("./pages/Gallery.jsx"));
const Error404 = lazy(() => import("./pages/Error404.jsx"));

// Loading screen component
function LoadingScreen() {
	return (
		<div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-primary-200 via-primary-300 to-secondary-200">
			<div className="text-center space-y-4">
				<img
					src="./images/Mansyur_Residence_Logo.webp"
					alt="Mansyur Residence Logo"
					className="h-48 md:h-64 lg:h-72 w-auto animate-pulse"
				/>
			</div>
		</div>
	);
}

function App() {
	const [isLoading, setIsLoading] = useState(true);

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 1300);

		return () => clearTimeout(timer);
	}, []);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return (
		<>
			<Suspense fallback={<LoadingScreen />}>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/home" element={<Home />} />

					<Route path="/kontak" element={<ContactUs />} />
					<Route path="/resident" element={<Residents />} />
					<Route path="/gallery" element={<Gallery />} />

					<Route path="/404" element={<Error404 />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</Suspense>
			<WhatsAppButton />
		</>
	);
}

export default App;
