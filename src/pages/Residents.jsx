import React from "react";

import { Navbar } from "../components/common/Navbar.jsx";
import { Footer } from "../components/common/Footer";

import { CTAResidents } from "../components/residents/CTAResidents.jsx";
import { Comparison } from "../components/residents/Comparison";
import { Pricing } from "../components/residents/Pricing.jsx";

function Residents() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<CTAResidents />
				<Comparison />
				<Pricing />
			</main>
			<Footer />
		</div>
	);
}

export default Residents;
