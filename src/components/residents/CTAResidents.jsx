"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

export function CTAResidents() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="cta-residents"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-primary-300 text-white"
			ref={ref}
			aria-labelledby="cta-residents-heading"
		>
			<div className="container mx-auto max-w-lg text-center">
				<motion.p
					className="mb-3 font-semibold md:mb-4 uppercase tracking-[0.2em] text-sm"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Pilihan
				</motion.p>
				<motion.h1
					id="cta-residents-heading"
					className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl tracking-tight leading-[1.1]"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
				>
					Tipe residens anda
				</motion.h1>
				<motion.p
					className="text-base md:text-lg leading-relaxed opacity-90"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
				>
					Dua pilihan unit dirancang untuk gaya hidup modern dan cerdas di Medan
				</motion.p>
				<motion.div
					className="mt-8 flex items-center justify-center gap-x-4 md:mt-10 flex-wrap gap-y-4"
					initial={{ opacity: 0, y: 20 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
					transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
				>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							title="Studio"
							className="bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
							aria-label="Lihat unit tipe Studio"
						>
							Studio
						</Button>
					</motion.div>
					<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
						<Button
							title="2 Kamar"
							variant="secondary"
							className="bg-primary-100 hover:bg-primary-200 text-primary-700 border-primary-300 transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
							aria-label="Lihat unit tipe 2 Kamar"
						>
							2 Kamar
						</Button>
					</motion.div>
				</motion.div>
			</div>
		</section>
	);
}

export default CTAResidents;
