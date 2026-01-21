"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import {
	HiOutlineSparkles,
	HiOutlineBriefcase,
	HiOutlineTruck,
	HiOutlineEye,
} from "react-icons/hi";
import { motion, useInView } from "framer-motion";

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.15,
			delayChildren: 0.2,
		},
	},
};

const itemVariants = {
	hidden: { opacity: 0, y: 40, scale: 0.95 },
	visible: {
		opacity: 1,
		y: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
			mass: 0.8,
		},
	},
};

const iconVariants = {
	hover: {
		scale: 1.15,
		rotate: [0, -10, 10, -10, 0],
		transition: {
			duration: 0.5,
			ease: "easeInOut",
		},
	},
};

export function Amenities() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	return (
		<section
			id="amenities"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-gradient-to-b from-white to-primary-50"
		>
			<div className="container mx-auto">
				<div className="mx-auto mb-16 w-full max-w-2xl text-center md:mb-20 lg:mb-24">
					<motion.p
						className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600 md:mb-5"
						initial={{ opacity: 0, y: -20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						Fasilitas
					</motion.p>
					<motion.h1
						className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl text-primary-900"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{
							duration: 0.7,
							delay: 0.1,
							ease: [0.25, 0.1, 0.25, 1],
						}}
					>
						Amenities kelas dunia
					</motion.h1>
					<motion.p
						className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						Nikmati berbagai fasilitas premium yang dirancang untuk kenyamanan
						maksimal
					</motion.p>
				</div>
				<motion.div
					ref={ref}
					className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3"
					variants={containerVariants}
					initial="hidden"
					animate={isInView ? "visible" : "hidden"}
				>
					<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10">
						<motion.div
							className="flex flex-col border border-primary-200/50 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
							variants={itemVariants}
							whileHover={{
								y: -8,
								boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
								borderColor: "rgba(26, 77, 182, 0.3)",
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<motion.div
									className="mb-6 md:mb-7 p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg w-fit"
									variants={iconVariants}
									whileHover="hover"
								>
									<HiOutlineEye
										className="size-14 text-primary-700"
										aria-hidden="true"
									/>
								</motion.div>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900">
									Lounge di langit
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80">
									Pemandangan kota Medan yang spektakuler dari ketinggian
								</p>
								<div className="mt-6 md:mt-7">
									<motion.a
										href="/gallery"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											title="Jelajahi"
											variant="link"
											size="link"
											iconRight={
												<RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
											}
											className="text-primary-600 hover:text-primary-700 font-semibold group"
										>
											Jelajahi
										</Button>
									</motion.a>
								</div>
							</div>
						</motion.div>
						<motion.div
							className="flex flex-col border border-primary-200/50 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
							variants={itemVariants}
							whileHover={{
								y: -8,
								boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
								borderColor: "rgba(26, 77, 182, 0.3)",
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<motion.p
									className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary-600"
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.3, duration: 0.4 }}
								>
									Unggulan
								</motion.p>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900">
									Kolam renang
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80">
									Berenang dengan latar belakang cakrawala kota yang menawan
								</p>
								<div className="mt-6 md:mt-7">
									<motion.a
										href="/gallery"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											title="Lihat"
											variant="link"
											size="link"
											iconRight={<RxChevronRight />}
											className="text-primary-600 hover:text-primary-700"
										>
											Lihat
										</Button>
									</motion.a>
								</div>
							</div>
							<div className="flex flex-col items-center justify-center self-start overflow-hidden w-[400px] h-[400px]">
								<motion.img
									src="./images/home/Kolam_Renang.webp"
									alt="Luxury infinity pool with city skyline view"
									className="w-full h-full object-cover"
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								/>
							</div>
						</motion.div>
					</div>
					<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10">
						<motion.div
							className="flex flex-col border border-primary-200/50 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
							variants={itemVariants}
							whileHover={{
								y: -8,
								boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
								borderColor: "rgba(26, 77, 182, 0.3)",
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<motion.p
									className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary-600"
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.4, duration: 0.4 }}
								>
									Teknologi
								</motion.p>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900">
									Pusat kebugaran modern
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80">
									Peralatan terkini untuk gaya hidup sehat dan aktif anda
								</p>
								<div className="mt-6 md:mt-7">
									<motion.a
										href="/gallery"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											title="Lihat"
											variant="link"
											size="link"
											iconRight={<RxChevronRight />}
											className="text-primary-600 hover:text-primary-700"
										>
											Lihat
										</Button>
									</motion.a>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center self-start overflow-hidden">
								<motion.img
									src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
									alt="Modern fitness center with state-of-the-art equipment"
									className="w-full"
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								/>
							</div>
						</motion.div>
						<motion.div
							className="flex flex-col border border-primary-200/50 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
							variants={itemVariants}
							whileHover={{
								y: -8,
								boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
								borderColor: "rgba(26, 77, 182, 0.3)",
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<motion.div
									className="mb-6 md:mb-7 p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg w-fit"
									variants={iconVariants}
									whileHover="hover"
								>
									<HiOutlineBriefcase
										className="size-14 text-primary-700"
										aria-hidden="true"
									/>
								</motion.div>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900">
									Ruang kerja bersama
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80">
									Lingkungan produktif untuk profesional dan entrepreneur
								</p>
								<div className="mt-6 md:mt-7">
									<motion.a
										href="/gallery"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											title="Lihat"
											variant="link"
											size="link"
											iconRight={<RxChevronRight />}
											className="text-primary-600 hover:text-primary-700"
										>
											Lihat
										</Button>
									</motion.a>
								</div>
							</div>
						</motion.div>
					</div>
					<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10">
						<motion.div
							className="flex flex-col border border-primary-200/50 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
							variants={itemVariants}
							whileHover={{
								y: -8,
								boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
								borderColor: "rgba(26, 77, 182, 0.3)",
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<motion.div
									className="mb-6 md:mb-7 p-4 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg w-fit"
									variants={iconVariants}
									whileHover="hover"
								>
									<HiOutlineTruck
										className="size-14 text-primary-700"
										aria-hidden="true"
									/>
								</motion.div>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900">
									Parkir pintar otomatis
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80">
									Sistem parkir canggih dengan teknologi terdepan untuk
									kemudahan anda
								</p>
								<div className="mt-6 md:mt-7">
									<motion.a
										href="/gallery"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											title="Lihat"
											variant="link"
											size="link"
											iconRight={<RxChevronRight />}
											className="text-primary-600 hover:text-primary-700"
										>
											Lihat
										</Button>
									</motion.a>
								</div>
							</div>
						</motion.div>
						<motion.div
							className="flex flex-col border border-primary-200/50 rounded-xl overflow-hidden bg-white/80 backdrop-blur-sm shadow-md"
							variants={itemVariants}
							whileHover={{
								y: -8,
								boxShadow: "0 25px 50px -12px rgba(26, 77, 182, 0.15)",
								borderColor: "rgba(26, 77, 182, 0.3)",
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<motion.p
									className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] text-secondary-600"
									initial={{ opacity: 0, x: -10 }}
									whileInView={{ opacity: 1, x: 0 }}
									transition={{ delay: 0.5, duration: 0.4 }}
								>
									Inovasi
								</motion.p>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em] text-primary-900">
									Fitur pintar untuk kehidupan modern
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80">
									Rumah yang mendengarkan dan merespons kebutuhan anda
								</p>
								<div className="mt-6 md:mt-7">
									<motion.a
										href="/gallery"
										whileHover={{ x: 5 }}
										transition={{ duration: 0.2 }}
									>
										<Button
											title="Lihat"
											variant="link"
											size="link"
											iconRight={<RxChevronRight />}
											className="text-primary-600 hover:text-primary-700"
										>
											Lihat
										</Button>
									</motion.a>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center self-start overflow-hidden">
								<motion.img
									src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop"
									alt="Smart home technology control panel"
									className="w-full"
									whileHover={{ scale: 1.1 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								/>
							</div>
						</motion.div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}

export default Amenities;
