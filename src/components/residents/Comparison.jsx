"use client";

import React, { useRef } from "react";
import { BiCheck, BiX } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

export function Comparison() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="comparison"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-primary-200"
			ref={ref}
			aria-labelledby="comparison-heading"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="mx-auto mb-16 max-w-2xl text-center md:mb-20 lg:mb-24">
					<motion.p
						className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-60 md:mb-5"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						Perbandingan
					</motion.p>
					<motion.h2
						id="comparison-heading"
						className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
					>
						Studio versus dua kamar tidur
					</motion.h2>
					<motion.p
						className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
					>
						Temukan perbedaan utama antara kedua tipe unit kami
					</motion.p>
				</div>
				<div className="grid grid-cols-1 gap-10 md:grid-cols-2">
					<motion.div
						className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
						whileHover={{ y: -8 }}
						role="article"
						aria-label="Unit Studio"
					>
						<div>
							<div className="flex flex-col items-center text-center">
								<div className="mb-6 flex max-w-[20rem] flex-col items-center md:mb-7">
									<img
										src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=400&h=400&fit=crop"
										alt="Modern studio apartment interior with cozy minimalist design"
										className="aspect-square w-full object-cover rounded-sm"
									/>
								</div>
								<h3 className="mb-3 text-xl font-bold leading-[1.2] tracking-[-0.02em] md:text-2xl">
									Studio
								</h3>
								<p className="mb-8 text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90 md:mb-9">
									Mulai dari Rp 500 juta
								</p>
							</div>
							<div className="grid grid-cols-1">
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Luas unit
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										25-35 m²
									</h6>
								</div>
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Kamar tidur
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										1
									</h6>
								</div>
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Kamar mandi
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										1
									</h6>
								</div>
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Balkon
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										Tersedia
									</h6>
								</div>
							</div>
							<div className="mt-8 grid grid-cols-1 gap-y-5 py-2 md:mt-9">
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiCheck className="size-7" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Sistem keamanan pintar
									</p>
								</div>
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiCheck className="size-7" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Kontrol suara terintegrasi
									</p>
								</div>
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiX className="size-7 opacity-40" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em] opacity-50">
										Manajemen energi otomatis
									</p>
								</div>
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiX className="size-7 opacity-40" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em] opacity-50">
										Akses aplikasi mobile
									</p>
								</div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1"
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ duration: 0.6, delay: 0.45, ease: "easeOut" }}
						whileHover={{ y: -8 }}
						role="article"
						aria-label="Unit Dua Kamar Tidur"
					>
						<div>
							<div className="flex flex-col items-center text-center">
								<div className="mb-6 flex max-w-[20rem] flex-col items-center md:mb-7">
									<img
										src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=400&h=400&fit=crop"
										alt="Spacious two-bedroom apartment interior with family-friendly design"
										className="aspect-square w-full object-cover rounded-sm"
									/>
								</div>
								<h3 className="mb-3 text-xl font-bold leading-[1.2] tracking-[-0.02em] md:text-2xl">
									Dua kamar tidur
								</h3>
								<p className="mb-8 text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90 md:mb-9">
									Mulai dari Rp 850 juta
								</p>
							</div>
							<div className="grid grid-cols-1">
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Luas unit
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										55-75 m²
									</h6>
								</div>
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Kamar tidur
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										2
									</h6>
								</div>
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Kamar mandi
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										2
									</h6>
								</div>
								<div className="flex justify-between gap-6 border-b-2 border-border-primary py-5 first:border-t-2">
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Balkon
									</p>
									<h6 className="text-lg font-bold leading-[1.3] tracking-[-0.01em] md:text-xl">
										Luas
									</h6>
								</div>
							</div>
							<div className="mt-8 grid grid-cols-1 gap-y-5 py-2 md:mt-9">
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiCheck className="size-7" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Sistem keamanan pintar
									</p>
								</div>
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiCheck className="size-7" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Kontrol suara terintegrasi
									</p>
								</div>
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiCheck className="size-7" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Manajemen energi otomatis
									</p>
								</div>
								<div className="flex self-start gap-4">
									<div className="flex-none self-start">
										<BiCheck className="size-7" />
									</div>
									<p className="text-base leading-[1.6] tracking-[-0.01em]">
										Akses aplikasi mobile
									</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default Comparison;
