"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { RxChevronRight } from "react-icons/rx";
import { motion, useInView } from "framer-motion";

export function ResidentsTypes() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="residents"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary-200"
			ref={ref}
		>
			<div className="container mx-auto">
				<div className="rb-12 mb-12 md:mb-18 lg:mb-20">
					<motion.div
						className="mx-auto max-w-lg text-center"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.6, ease: "easeOut" }}
					>
						<p className="mb-3 font-semibold md:mb-4">Unit</p>
						<h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
							Residens
						</h2>
						<p className="md:text-md">
							Pilih unit yang sesuai dengan kebutuhan anda
						</p>
					</motion.div>
				</div>
				<div className="grid grid-cols-1 items-start gap-6 md:grid-cols-2 md:gap-8">
					<motion.div
						className="border border-border-primary group overflow-hidden"
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						whileHover={{ y: -8 }}
					>
						<div className="flex items-center justify-center overflow-hidden">
							<motion.img
								src="https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=800&h=500&fit=crop"
								className="size-full object-cover"
								alt="Modern studio apartment interior with minimalist design"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							/>
						</div>
						<div className="p-6 md:p-8 lg:p-12 bg-secondary-300">
							<p className="mb-2 text-sm font-semibold">Pilihan</p>
							<h3 className="mb-5 text-xl font-bold leading-[1.2] md:mb-6 md:text-2xl lg:text-3xl">
								Studio untuk profesional muda
							</h3>
							<p>
								Ruang efisien dengan teknologi pintar untuk gaya hidup urban
							</p>
							<div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										title="Bandingkan"
										variant="secondary"
										className="px-6 py-3 text-base bg-primary-100 hover:bg-primary-200 text-primary-700 border-primary-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black transition-shadow duration-300 hover:shadow-md"
										aria-label="Bandingkan unit studio dengan unit lainnya"
									>
										Bandingkan
									</Button>
								</motion.div>
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Button
										title="Tur virtual"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
										aria-label="Lihat tur virtual unit studio"
									>
										Tur virtual
									</Button>
								</motion.div>
							</div>
						</div>
					</motion.div>
					<motion.div
						className="border border-border-primary group overflow-hidden"
						initial={{ opacity: 0, y: 40 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
						whileHover={{ y: -8 }}
					>
						<div className="flex items-center justify-center overflow-hidden">
							<motion.img
								src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&h=500&fit=crop"
								className="size-full object-cover"
								alt="Spacious two bedroom apartment with modern furnishings"
								whileHover={{ scale: 1.05 }}
								transition={{ duration: 0.5, ease: "easeOut" }}
							/>
						</div>
						<div className="p-6 md:p-8 lg:p-12 bg-secondary-300">
							<p className="mb-2 text-sm font-semibold">Keluarga</p>
							<h3 className="mb-5 text-xl font-bold leading-[1.2] md:mb-6 md:text-2xl lg:text-3xl">
								Dua kamar untuk keluarga berkembang
							</h3>
							<p>
								Ruang luas dengan semua kenyamanan modern untuk keluarga anda
							</p>
							<div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										title="Tanya sekarang"
										variant="secondary"
										className="px-6 py-3 text-base bg-primary-100 hover:bg-primary-200 text-primary-700 border-primary-300 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black transition-shadow duration-300 hover:shadow-md"
										aria-label="Tanya tentang unit dua kamar"
									>
										Tanya sekarang
									</Button>
								</motion.div>
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Button
										title="Tur virtual"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black"
										aria-label="Lihat tur virtual unit dua kamar"
									>
										Tur virtual
									</Button>
								</motion.div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default ResidentsTypes;
