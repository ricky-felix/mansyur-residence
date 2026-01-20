import React from "react";

import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

import { CTAGallery } from "../components/gallery/CTAGallery";
import { GalleryImages } from "../components/gallery/GalleryImages";
import { Testimonial } from "../components/gallery/Testimonial";

function Contact_Us() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<CTAGallery />
				<GalleryImages />
				<Testimonial />
			</main>
			<Footer />
		</div>
	);
}

export default Contact_Us;
