"use client";

import React, { useRef, useEffect, useState } from "react";
import {
	motion,
	useInView,
	useSpring,
	useMotionValue,
	useTransform,
} from "framer-motion";

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

// Count-up animation hook
function useCountUp(target, duration = 2000) {
	const [count, setCount] = useState(0);
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-80px" });

	useEffect(() => {
		if (!isInView) return;

		let startTime;
		let animationFrame;

		const animate = (currentTime) => {
			if (!startTime) startTime = currentTime;
			const progress = Math.min((currentTime - startTime) / duration, 1);

			// Easing function for smooth acceleration/deceleration
			const easeOutQuart = 1 - Math.pow(1 - progress, 4);
			setCount(Math.floor(easeOutQuart * target));

			if (progress < 1) {
				animationFrame = requestAnimationFrame(animate);
			} else {
				setCount(target);
			}
		};

		animationFrame = requestAnimationFrame(animate);

		return () => {
			if (animationFrame) {
				cancelAnimationFrame(animationFrame);
			}
		};
	}, [isInView, target, duration]);

	return { count, ref };
}

// Individual stat component with count-up
function StatCard({ stat, index }) {
	const { count, ref } = useCountUp(parseInt(stat.number), 2000);
	const cardRef = useRef(null);
	const isInView = useInView(cardRef, { once: true, margin: "-80px" });

	return (
		<motion.div
			ref={cardRef}
			custom={index}
			initial="hidden"
			animate={isInView ? "visible" : "hidden"}
			variants={statVariants}
			className="group border-2 border-border-primary p-12 md:p-14 lg:p-16 text-center rounded-sm cursor-default relative overflow-hidden"
			whileHover={{
				y: -8,
				boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
				borderColor: "rgba(0, 0, 0, 0.3)",
				transition: { type: "spring", stiffness: 300, damping: 20 },
			}}
		>
			{/* Animated background gradient on hover */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-primary-100/0 to-primary-200/0 -z-10"
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1, transition: { duration: 0.4 } }}
			/>

			<motion.div ref={ref}>
				<motion.p
					className="mb-5 text-4xl font-bold leading-[1] md:text-5xl lg:text-6xl tracking-[-0.03em]"
					initial={{ scale: 0.8 }}
					animate={isInView ? { scale: 1 } : { scale: 0.8 }}
					transition={{
						type: "spring",
						stiffness: 200,
						damping: 15,
						delay: index * 0.1 + 0.3,
					}}
				>
					<motion.span
						className="inline-block"
						whileHover={{
							scale: 1.1,
							transition: { type: "spring", stiffness: 400, damping: 10 },
						}}
					>
						{count}
					</motion.span>
				</motion.p>
				<motion.h3
					className="text-sm font-semibold leading-[1.3] tracking-wide uppercase"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
				>
					{stat.label}
				</motion.h3>
			</motion.div>

			{/* Decorative animated corner */}
			<motion.div
				className="absolute top-0 right-0 w-16 h-16 bg-primary-500/5"
				initial={{ scale: 0, rotate: 0 }}
				whileHover={{ scale: 1, rotate: 45 }}
				transition={{ duration: 0.3 }}
				style={{ transformOrigin: "top right" }}
			/>
		</motion.div>
	);
}

export function Stats() {
	const headerRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });

	const stats = [
		{ number: "100", label: "% Tower 1 (Ruby) sold out", index: 0 },
		{ number: "26", label: "Lantai modern", index: 1 },
		{ number: "10", label: "Tahun beroperasi", index: 2 },
	];

	return (
		<section id="stats" className="px-[5%] py-24 md:py-32 lg:py-40">
			<div className="container mx-auto">
				<motion.div
					ref={headerRef}
					className="mb-20 grid grid-cols-1 gap-y-10 md:mb-24 md:grid-cols-2 md:gap-x-20 lg:mb-28 lg:gap-x-28 items-center"
				>
					<motion.div
						initial={{ opacity: 0, x: -40 }}
						animate={
							isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -40 }
						}
						transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
					>
						<h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl">
							Smart living redefined
						</h2>
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 40 }}
						animate={
							isHeaderInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 40 }
						}
						transition={{
							duration: 0.7,
							delay: 0.2,
							ease: [0.25, 0.1, 0.25, 1],
						}}
					>
						<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-opacity-90">
							Mansyur Residence menggabungkan desain arsitektur kontemporer
							dengan sistem otomasi rumah pintar. Setiap detail dipikirkan untuk
							memberikan pengalaman tinggal yang tak tertandingi di Medan.
						</p>
					</motion.div>
				</motion.div>
				<div className="grid grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3">
					{stats.map((stat) => (
						<StatCard key={stat.label} stat={stat} index={stat.index} />
					))}
				</div>
			</div>
		</section>
	);
}

export default Stats;
