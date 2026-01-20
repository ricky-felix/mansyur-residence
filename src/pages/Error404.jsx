"use client";

import React, { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { BiError } from "react-icons/bi";
import { Button } from "@relume_io/relume-ui";

import { Navbar } from "../components/common/Navbar";
import { Footer } from "../components/common/Footer";

function Error404() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<div className="min-h-screen flex flex-col">
			<Navbar />
			<main className="flex-grow">
				<section
					id="error-404"
					className="px-[5%] flex-grow flex items-center justify-center"
					ref={ref}
					aria-labelledby="error-404-heading"
				>
					<div className="container max-w-lg text-center">
						<motion.div
							className="mb-6 flex justify-center"
							initial={{ opacity: 0, scale: 0.5 }}
							animate={
								isInView
									? { opacity: 1, scale: 1 }
									: { opacity: 0, scale: 0.5 }
							}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							<BiError className="text-6xl md:text-7xl lg:text-8xl text-primary-500" />
						</motion.div>
						<motion.p
							className="mb-3 font-semibold md:mb-4 uppercase tracking-[0.2em] text-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, ease: "easeOut" }}
						>
							Error 404
						</motion.p>
						<motion.h1
							id="error-404-heading"
							className="mb-5 text-5xl font-bold md:mb-6 md:text-6xl lg:text-7xl tracking-tight leading-[1.1]"
							initial={{ opacity: 0, y: 30 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
							transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
						>
							Halaman Tidak Ditemukan
						</motion.h1>
						<motion.p
							className="text-base md:text-lg leading-relaxed opacity-90"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
						>
							Sepertinya jalan ini tidak membawa ke mana. Kembali ke beranda
							atau jelajahi residens kami.
						</motion.p>
						<motion.div
							className="mt-8 flex items-center justify-center gap-x-4 md:mt-10 flex-wrap gap-y-4"
							initial={{ opacity: 0, y: 20 }}
							animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.5, delay: 0.3, ease: "easeOut" }}
						>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Link to="/">
									<Button
										title="Beranda"
										className="transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
										aria-label="Kembali ke halaman beranda"
									>
										Beranda
									</Button>
								</Link>
							</motion.div>
							<motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
								<Link to="/residents">
									<Button
										title="Residents"
										variant="secondary"
										className="transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
										aria-label="Jelajahi halaman residents"
									>
										Residents
									</Button>
								</Link>
							</motion.div>
						</motion.div>
					</div>
				</section>
			</main>
			<Footer />
		</div>
	);
}

export default Error404;
