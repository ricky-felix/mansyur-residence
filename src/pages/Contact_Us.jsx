import React from "react";

import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

import { CTAContactUs } from "../components/contact-us/CTAContactUs";
import { ContactForm } from "../components/contact-us/ContactForm";

function Contact_Us() {
	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<CTAContactUs />
				<ContactForm />
			</main>
			<Footer />
		</div>
	);
}

export default Contact_Us;
