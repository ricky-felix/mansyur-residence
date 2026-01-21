"use client";

import { Button } from "@relume_io/relume-ui";
import { motion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

const useRelume = () => {
	const transformRef = useRef(null);

	const { scrollY, scrollYProgress } = useScroll({ target: transformRef });
	const animatedScrollYProgress = useSpring(scrollYProgress, {
		stiffness: 300,
		damping: 30,
	});
	const width = useTransform(animatedScrollYProgress, [0, 1], ["50%", "100%"]);

	const halfViewportHeight =
		typeof window !== "undefined" ? window.innerHeight * 0.5 : 100;
	const fadeOut = useTransform(scrollY, [0, halfViewportHeight], [1, 0]);
	const scaleDown = useTransform(scrollY, [0, halfViewportHeight], [1, 0.95]);

	const yFirst = useTransform(
		animatedScrollYProgress,
		[0.3, 1],
		["90%", "100%"],
	);
	const height = useTransform(
		animatedScrollYProgress,
		[0.3, 1],
		["80vh", "100vh"],
	);
	const y = useTransform(animatedScrollYProgress, [0, 1], ["0vh", "-10vh"]);

	return {
		transformRef,
		width,
		fadeOut,
		scaleDown,
		yFirst,
		height,
		y,
	};
};

export function Hero() {
	const useActive = useRelume();
	return (
		<section
			ref={useActive.transformRef}
			id="hero"
			className="relative flex h-[300vh] flex-col items-center bg-gradient-to-br from-primary-200 via-primary-300 to-secondary-200 text-primary-900 mt-16 md:mt-18"
			aria-label="Hero section"
		>
			<div className="px-[5%]">
				<div className="sticky top-0 z-0 mx-auto flex min-h-[80vh] max-w-2xl items-center justify-center py-20 text-center md:py-28 lg:py-32">
					<motion.div
						style={{ opacity: useActive.fadeOut, scale: useActive.scaleDown }}
						className="space-y-6 md:space-y-8"
					>
						<motion.h1
							className="text-4xl font-bold leading-[1.1] tracking-tight md:text-7xl lg:text-8xl bg-gradient-to-r from-primary-800 via-primary-600 to-primary-700 bg-clip-text text-transparent drop-shadow-sm"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, ease: "easeOut" }}
						>
							Mansyur Residence Medan
						</motion.h1>
						<motion.p
							className="text-base md:text-lg leading-relaxed max-w-xl mx-auto text-primary-800/90"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
						>
							Apartemen pintar pertama di Medan yang menggabungkan teknologi
							canggih dengan desain modern. Hidup dengan cara yang belum pernah
							ada sebelumnya.
						</motion.p>
						<motion.div
							className="mt-8 flex items-center justify-center gap-x-4 md:mt-10 flex-wrap gap-y-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
						>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									title="Lihat Residens"
									className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white transition-all duration-300 hover:shadow-xl hover:shadow-primary-500/30 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500"
									aria-label="Lihat unit residens yang tersedia"
								>
									Lihat Residens
								</Button>
							</motion.div>
							<motion.div
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<Button
									title="Unduh Brosur"
									variant="secondary"
									className="px-8 py-4 text-base font-semibold bg-white/80 hover:bg-white text-primary-700 border-2 border-primary-300 hover:border-primary-400 transition-all duration-300 hover:shadow-lg hover:shadow-primary-300/20 hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 backdrop-blur-sm"
									aria-label="Unduh brosur informasi Mansyur Residence"
								>
									Unduh Brosur
								</Button>
							</motion.div>
						</motion.div>
					</motion.div>
				</div>
			</div>
			<motion.div
				style={{
					width: useActive.width,
					height: useActive.height,
					y: useActive.y,
				}}
				className="sticky top-[10vh] z-10 mb-[-10vh] flex flex-col justify-start overflow-hidden rounded-none md:rounded-2xl shadow-2xl shadow-primary-900/30 ring-1 ring-primary-200/50"
				initial={{ opacity: 0, scale: 0.95 }}
				animate={{ opacity: 1, scale: 1 }}
				transition={{ duration: 0.8, delay: 0.6, ease: "easeOut" }}
			>
				<div className="absolute inset-0 bg-gradient-to-t from-primary-900/40 via-transparent to-transparent z-10 pointer-events-none" />
				<motion.img
					src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=1920&h=1080&fit=crop"
					alt="Luxury modern apartment building with stunning architecture"
					className="size-full object-cover"
					whileHover={{ scale: 1.02 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				/>
			</motion.div>
			<div className="absolute inset-0 -z-10 mt-[100vh]" />
		</section>
	);
}

export default Hero;
