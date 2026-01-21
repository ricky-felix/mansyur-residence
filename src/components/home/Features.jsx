"use client";

import React, { useRef } from "react";
import { HiOutlineSparkles, HiOutlineLightningBolt, HiOutlineShieldCheck, HiOutlineWifi } from "react-icons/hi";
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

const featureVariants = {
	hidden: { opacity: 0, x: 60, scale: 0.9 },
	visible: (i) => ({
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 20,
			delay: i * 0.15,
		},
	}),
};

const iconPulse = {
	scale: [1, 1.1, 1],
	rotate: [0, 5, -5, 0],
	transition: {
		duration: 0.5,
		ease: "easeInOut",
	},
};

export function Features() {
	const headerRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

	const features = [
		{
			title: "Otomasi cerdas",
			description:
				"Pencahayaan, suhu, dan sistem keamanan merespons kehadiran anda secara otomatis. Tidak perlu lagi memikirkan detail kecil yang menghabiskan waktu.",
			topOffset: "30%",
			icon: HiOutlineSparkles,
			index: 0,
		},
		{
			title: "Efisiensi energi",
			description:
				"Manajemen daya pintar mengurangi konsumsi listrik hingga empat puluh persen. Tagihan lebih rendah sambil menjaga planet tetap sehat.",
			topOffset: "32%",
			icon: HiOutlineLightningBolt,
			index: 1,
		},
		{
			title: "Perlindungan maksimal",
			description:
				"Pantau akses masuk dan keluar secara real-time dengan teknologi IoT terdepan. Keamanan keluarga anda adalah prioritas utama kami.",
			topOffset: "34%",
			icon: HiOutlineShieldCheck,
			index: 2,
		},
		{
			title: "Konektivitas sempurna",
			description:
				"WiFi berkecepatan tinggi dan integrasi aplikasi memastikan anda selalu terhubung. Kelola apartemen dari mana saja, kapan saja.",
			topOffset: "36%",
			icon: HiOutlineWifi,
			index: 3,
		},
	];

	return (
		<section
			id="features"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary-100 via-primary-200 to-secondary-100"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 items-start gap-y-20 md:grid-flow-row md:grid-cols-2 md:gap-x-20 lg:gap-x-28">
					<motion.div
						ref={headerRef}
						className="static md:sticky md:top-[25%] space-y-8"
						initial="hidden"
						animate={isHeaderInView ? "visible" : "hidden"}
						variants={headerVariants}
					>
						<motion.p
							className="text-sm font-semibold uppercase tracking-[0.2em] text-primary-600"
							initial={{ opacity: 0, x: -20 }}
							animate={isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
							transition={{ duration: 0.5 }}
						>
							Fitur
						</motion.p>
						<motion.h2
							className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl text-primary-900"
							initial={{ opacity: 0, y: 20 }}
							animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.1 }}
						>
							Apartemen yang beradaptasi dengan kehidupan anda
						</motion.h2>
						<motion.p
							className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80"
							initial={{ opacity: 0, y: 20 }}
							animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
							transition={{ duration: 0.6, delay: 0.2 }}
						>
							Mansyur Residence bukan sekadar tempat tinggal. Ini adalah rumah
							yang memahami apa yang anda butuhkan, kapan anda membutuhkannya.
							Teknologi bekerja di latar belakang, membuat hidup lebih mudah dan
							lebih aman.
						</motion.p>
					</motion.div>
					<div className="space-y-8 md:space-y-10">
						{features.map((feature) => {
							const IconComponent = feature.icon;
							const featureRef = useRef(null);
							const isFeatureInView = useInView(featureRef, {
								once: true,
								margin: "-60px",
							});

							return (
								<motion.div
									key={feature.title}
									ref={featureRef}
									custom={feature.index}
									initial="hidden"
									animate={isFeatureInView ? "visible" : "hidden"}
									variants={featureVariants}
									className="group sticky border border-primary-300/50 bg-white/90 backdrop-blur-sm p-10 md:p-12 rounded-2xl relative overflow-hidden shadow-md"
									style={{ top: feature.topOffset }}
									whileHover={{
										y: -8,
										boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
										borderColor: "rgba(26, 77, 182, 0.3)",
										transition: { type: "spring", stiffness: 300, damping: 20 },
									}}
								>
									{/* Animated background gradient on hover */}
									<motion.div
										className="absolute inset-0 bg-gradient-to-br from-primary-100/0 to-secondary-100/0 -z-10"
										initial={{ opacity: 0 }}
										whileHover={{ opacity: 1, transition: { duration: 0.4 } }}
									/>

									{/* Animated glow effect behind icon */}
									<motion.div
										className="absolute top-10 left-10 w-20 h-20 bg-primary-400/20 rounded-full blur-xl -z-10"
										initial={{ scale: 0, opacity: 0 }}
										animate={isFeatureInView ? { scale: 1, opacity: 1 } : { scale: 0, opacity: 0 }}
										transition={{ delay: feature.index * 0.15 + 0.3, duration: 0.6 }}
									/>

									<motion.div
										className="mb-6 md:mb-7 inline-block p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-xl"
										whileHover={iconPulse}
									>
										<IconComponent
											className="size-14 md:size-16 text-primary-700"
											aria-hidden="true"
										/>
									</motion.div>
									<motion.h3
										className="mb-5 text-xl font-bold md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900"
										initial={{ opacity: 0, x: 20 }}
										animate={isFeatureInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
										transition={{ delay: feature.index * 0.15 + 0.2, duration: 0.5 }}
									>
										{feature.title}
									</motion.h3>
									<motion.p
										className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80"
										initial={{ opacity: 0 }}
										animate={isFeatureInView ? { opacity: 1 } : { opacity: 0 }}
										transition={{ delay: feature.index * 0.15 + 0.3, duration: 0.5 }}
									>
										{feature.description}
									</motion.p>

									{/* Decorative corner element */}
									<motion.div
										className="absolute bottom-0 right-0 w-24 h-24 border-l-2 border-t-2 border-secondary-300/30 rounded-tl-3xl"
										initial={{ scale: 0, rotate: 0 }}
										animate={isFeatureInView ? { scale: 1, rotate: 0 } : { scale: 0, rotate: 0 }}
										transition={{ delay: feature.index * 0.15 + 0.4, duration: 0.5 }}
										style={{ transformOrigin: "bottom right" }}
									/>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
