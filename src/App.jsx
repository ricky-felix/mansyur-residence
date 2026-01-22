import { Suspense, lazy, useState, useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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

// Check if this is the initial page load on homepage
function shouldShowLoading() {
	if (sessionStorage.getItem("siteLoaded")) {
		return false;
	}
	return true;
}

function markSiteAsLoaded() {
	sessionStorage.setItem("siteLoaded", "true");
}

// Home wrapper with loading screen (only shows on initial site load to homepage)
function HomeWithLoading() {
	const [isLoading, setIsLoading] = useState(shouldShowLoading);

	useEffect(() => {
		if (isLoading) {
			const timer = setTimeout(() => {
				markSiteAsLoaded();
				setIsLoading(false);
			}, 1300);

			return () => clearTimeout(timer);
		}
	}, [isLoading]);

	if (isLoading) {
		return <LoadingScreen />;
	}

	return <Home />;
}

function App() {
	const { pathname } = useLocation();
	const initialPathRef = useRef(pathname);

	// If first load is NOT on home page, mark site as loaded
	useEffect(() => {
		const initialPath = initialPathRef.current;
		if (initialPath !== "/" && initialPath !== "/home") {
			markSiteAsLoaded();
		}
	}, []);

	return (
		<>
			<Suspense fallback={null}>
				<Routes>
					<Route path="/" element={<HomeWithLoading />} />
					<Route path="/home" element={<HomeWithLoading />} />

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
