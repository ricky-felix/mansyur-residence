"use client";

import React from "react";
import { motion } from "framer-motion";

const statVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.1,
			duration: 0.5,
			ease: "easeOut",
		},
	}),
};

export function Stats() {
	return (
		<section id="relume" className="px-[5%] py-24 md:py-32 lg:py-40">
			<div className="container mx-auto">
				<div className="mb-20 grid grid-cols-1 gap-y-10 md:mb-24 md:grid-cols-2 md:gap-x-20 lg:mb-28 lg:gap-x-28 items-center">
					<div>
						<h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl">
							Smart living redefined
						</h2>
					</div>
					<div>
						<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-opacity-90">
							Mansyur Residence menggabungkan desain arsitektur kontemporer
							dengan sistem otomasi rumah pintar. Setiap detail dipikirkan untuk
							memberikan pengalaman tinggal yang tak tertandingi di Medan.
						</p>
					</div>
				</div>
				<div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3">
					{[
						{ number: "288", label: "Unit tersedia", index: 0 },
						{ number: "28", label: "Lantai modern", index: 1 },
						{ number: "2025", label: "Selesai tahun depan", index: 2 },
					].map((stat) => (
						<motion.div
							key={stat.label}
							custom={stat.index}
							initial="hidden"
							whileInView="visible"
							viewport={{ once: true, margin: "-100px" }}
							variants={statVariants}
							className="group border-2 border-border-primary p-12 md:p-14 lg:p-16 text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 cursor-default rounded-sm"
						>
							<p className="mb-5 text-4xl font-bold leading-[1] md:text-5xl lg:text-6xl transition-transform duration-300 group-hover:scale-105 tracking-[-0.03em]">
								{stat.number}
							</p>
							<h3 className="text-sm font-semibold leading-[1.3] tracking-wide uppercase">
								{stat.label}
							</h3>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}

export default Stats;
