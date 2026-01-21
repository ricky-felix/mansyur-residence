"use client";

import React, { Fragment, useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animation variants
const headerVariants = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			duration: 0.7,
			ease: [0.25, 0.1, 0.25, 1],
		},
	},
};

const timelineItemVariants = {
	hidden: { opacity: 0, x: 60 },
	visible: (i) => ({
		opacity: 1,
		x: 0,
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 15,
			delay: i * 0.2,
		},
	}),
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.8 },
	visible: {
		opacity: 1,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

const dotVariants = {
	hidden: { scale: 0 },
	visible: {
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 200,
			damping: 15,
		},
	},
};

export function LokasiStrategis() {
	const headerRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

	const locations = [
		{
			title: "Bandara",
			description: "Kualanamu International Airport berjarak 25 kilometer dari residens",
			image: "https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=400&fit=crop",
			alt: "Modern airport terminal building",
			index: 0,
		},
		{
			title: "Pusat",
			description: "Pusat perbelanjaan dan bisnis utama hanya 3 kilometer dari sini",
			image: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=400&fit=crop",
			alt: "Shopping mall and business district",
			index: 1,
		},
		{
			title: "Rumah",
			description: "Rumah sakit terkemuka dan klinik modern tersedia dalam jarak 2 kilometer",
			image: "https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop",
			alt: "Modern hospital building exterior",
			index: 2,
		},
		{
			title: "Sekolah",
			description: "Institusi pendidikan berkualitas internasional berada 4 kilometer dari lokasi",
			image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop",
			alt: "International school campus",
			index: 3,
		},
		{
			title: "Taman",
			description: "Ruang hijau dan rekreasi publik dapat diakses dalam 1 kilometer",
			image: "https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop",
			alt: "Beautiful city park with greenery",
			index: 4,
		},
	];

	return (
		<section
			id="location"
			className="overflow-hidden px-[5%] py-24 md:py-32 lg:py-40 bg-secondary-200"
		>
			<div className="container mx-auto">
				<motion.div
					ref={headerRef}
					className="mb-16 md:mb-20 lg:mb-24"
					initial="hidden"
					animate={isHeaderInView ? "visible" : "hidden"}
					variants={headerVariants}
				>
					<div className="w-full max-w-2xl">
						<motion.p
							className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-60 md:mb-5"
							initial={{ opacity: 0, x: -20 }}
							animate={isHeaderInView ? { opacity: 0.6, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ duration: 0.5 }}
						>
							Lokasi
						</motion.p>
						<motion.h2
							className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl"
							initial={{ opacity: 0, y: 20 }}
							animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							Jantung kota dengan akses ke semua yang penting
						</motion.h2>
						<motion.p
							className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90"
							initial={{ opacity: 0, y: 20 }}
							animate={isHeaderInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Mansyur Residence berdiri di lokasi strategis Medan, menghubungkan
							anda dengan pusat bisnis, pendidikan, dan hiburan. Setiap tempat
							yang anda butuhkan hanya beberapa menit perjalanan.
						</motion.p>
					</div>
				</motion.div>
				<div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-items-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-items-stretch">
					<div className="relative hidden md:grid md:grid-cols-1 md:items-end md:gap-4">
						<motion.div
							className="flex size-full flex-col items-center md:h-auto md:flex-row"
							initial={{ scaleX: 0 }}
							animate={isHeaderInView ? { scaleX: 1 } : { scaleX: 0 }}
							transition={{ duration: 1, delay: 0.5, ease: "easeInOut" }}
							style={{ transformOrigin: "left" }}
						>
							<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
						</motion.div>
					</div>

					{locations.map((location, idx) => {
						const itemRef = useRef(null);
						const isItemInView = useInView(itemRef, { once: true, margin: "-60px" });
						const isEven = idx % 2 === 1;

						return (
							<motion.div
								key={idx}
								ref={itemRef}
								custom={location.index}
								initial="hidden"
								animate={isItemInView ? "visible" : "hidden"}
								variants={timelineItemVariants}
								className={`relative grid w-full auto-cols-fr ${
									isEven
										? "grid-cols-[0.5fr_max-content_1fr]"
										: "grid-cols-[0.5fr_max-content_1fr]"
								} items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end`}
							>
								<Fragment>
									{isEven ? (
										<>
											<motion.div
												className={`order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none ${
													isEven ? "md:self-end" : ""
												}`}
												initial={{ opacity: 0, x: isEven ? 20 : -20 }}
												animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
												transition={{ delay: location.index * 0.2 + 0.3, duration: 0.5 }}
											>
												<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
													{location.title}
												</h3>
												<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
													{location.description}
												</p>
											</motion.div>
											<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
												<motion.div
													className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]"
													variants={dotVariants}
													whileHover={{
														scale: 1.5,
														boxShadow: "0 0 0 12px white, 0 0 0 14px black",
														transition: { duration: 0.3 },
													}}
												/>
												<motion.div
													className="h-full w-[3px] bg-black md:h-[3px] md:w-full"
													initial={{ scaleY: 0, scaleX: 0 }}
													animate={
														isItemInView
															? { scaleY: 1, scaleX: 1 }
															: { scaleY: 0, scaleX: 0 }
													}
													transition={{
														delay: location.index * 0.2 + 0.2,
														duration: 0.6,
														ease: "easeInOut",
													}}
													style={{
														transformOrigin: "top center",
													}}
												/>
											</div>
											<motion.div
												className="col-end-2 row-end-2 mb-8 self-start overflow-hidden rounded-lg md:col-end-auto md:row-end-auto md:mb-0 md:mr-10 relative group"
												variants={imageVariants}
												whileHover={{
													scale: 1.05,
													boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
													transition: { type: "spring", stiffness: 300, damping: 20 },
												}}
											>
												<motion.img
													src={location.image}
													alt={location.alt}
													className="aspect-square w-full object-cover"
													whileHover={{ scale: 1.1 }}
													transition={{ duration: 0.6, ease: "easeOut" }}
												/>
												<motion.div
													className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
													initial={{ opacity: 0 }}
													whileHover={{ opacity: 1 }}
													transition={{ duration: 0.3 }}
												/>
											</motion.div>
										</>
									) : (
										<>
											<motion.div
												className="mb-8 overflow-hidden rounded-lg md:mb-0 md:mr-10 relative group"
												variants={imageVariants}
												whileHover={{
													scale: 1.05,
													boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.3)",
													transition: { type: "spring", stiffness: 300, damping: 20 },
												}}
											>
												<motion.img
													src={location.image}
													alt={location.alt}
													className="aspect-square w-full object-cover"
													whileHover={{ scale: 1.1 }}
													transition={{ duration: 0.6, ease: "easeOut" }}
												/>
												<motion.div
													className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"
													initial={{ opacity: 0 }}
													whileHover={{ opacity: 1 }}
													transition={{ duration: 0.3 }}
												/>
											</motion.div>
											<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
												<motion.div
													className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]"
													variants={dotVariants}
													whileHover={{
														scale: 1.5,
														boxShadow: "0 0 0 12px white, 0 0 0 14px black",
														transition: { duration: 0.3 },
													}}
												/>
												<motion.div
													className={`h-full w-[3px] bg-black md:h-[3px] md:w-full ${
														idx === locations.length - 1 ? "md:hidden" : ""
													}`}
													initial={{ scaleY: 0, scaleX: 0 }}
													animate={
														isItemInView
															? { scaleY: 1, scaleX: 1 }
															: { scaleY: 0, scaleX: 0 }
													}
													transition={{
														delay: location.index * 0.2 + 0.2,
														duration: 0.6,
														ease: "easeInOut",
													}}
													style={{
														transformOrigin: "top center",
													}}
												/>
											</div>
											<motion.div
												className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none"
												initial={{ opacity: 0, x: isEven ? 20 : -20 }}
												animate={isItemInView ? { opacity: 1, x: 0 } : { opacity: 0, x: isEven ? 20 : -20 }}
												transition={{ delay: location.index * 0.2 + 0.3, duration: 0.5 }}
											>
												<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
													{location.title}
												</h3>
												<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
													{location.description}
												</p>
											</motion.div>
										</>
									)}
								</Fragment>
							</motion.div>
						);
					})}

					<motion.div
						className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white hidden md:block"
						initial={{ opacity: 0, scaleX: 0 }}
						animate={isHeaderInView ? { opacity: 1, scaleX: 1 } : { opacity: 0, scaleX: 0 }}
						transition={{ delay: locations.length * 0.2 + 0.5, duration: 0.6 }}
						style={{ transformOrigin: "left" }}
					/>
				</div>
			</div>
		</section>
	);
}

export default LokasiStrategis;
