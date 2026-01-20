import React from "react";

import { Navbar } from "../components/common/Navbar.jsx";
import { Footer } from "../components/common/Footer";

import { Hero } from "../components/home/Hero.jsx";
import { Stats } from "../components/home/Stats.jsx";
import { Quote } from "../components/home/Quote";
import { Features } from "../components/home/Features";
import { ResidentsTypes } from "../components/home/ResidentsTypes.jsx";
import { Amenities } from "../components/home/Amenities";
import { LokasiStrategis } from "../components/home/LokasiStrategis.jsx";
import { KontakMaps } from "../components/home/KontakMaps.jsx";

function Home() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<Hero />
				<Stats />
				<Quote />
				<Features />
				<ResidentsTypes />
				<Amenities />
				<LokasiStrategis />
				<KontakMaps />
			</main>
			<Footer />
		</div>
	);
}

export default Home;
