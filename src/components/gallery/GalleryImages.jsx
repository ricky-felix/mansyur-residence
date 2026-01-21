"use client";

import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

// Animation variants
const containerVariants = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			staggerChildren: 0.1,
			delayChildren: 0.2,
		},
	},
};

const imageVariants = {
	hidden: { opacity: 0, scale: 0.8, y: 40 },
	visible: {
		opacity: 1,
		scale: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
			mass: 0.8,
		},
	},
};

export function GalleryImages(props) {
	const { heading, description, images } = {
		...GalleryDefaults,
		...props,
	};

	const headerRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
	const galleryRef = useRef(null);
	const isGalleryInView = useInView(galleryRef, { once: true, margin: "-60px" });

	return (
		<section
			id="gallery"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary-200"
		>
			<div className="container mx-auto">
				<motion.div
					ref={headerRef}
					className="mb-12 text-center md:mb-18 lg:mb-20"
				>
					<motion.h2
						className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl"
						initial={{ opacity: 0, y: 30 }}
						animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
					>
						{heading}
					</motion.h2>
					<motion.p
						className="md:text-md"
						initial={{ opacity: 0, y: 20 }}
						animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
					>
						{description}
					</motion.p>
				</motion.div>
				<motion.div
					ref={galleryRef}
					className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4"
					variants={containerVariants}
					initial="hidden"
					animate={isGalleryInView ? "visible" : "hidden"}
				>
					{images.map((image, index) => (
						<motion.a
							key={index}
							href={image.url}
							variants={imageVariants}
							className="group relative overflow-hidden rounded-sm block"
							whileHover={{
								scale: 1.05,
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							{/* Image overlay on hover */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0"
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>

							{/* Zoom effect on image */}
							<motion.div className="overflow-hidden">
								<motion.img
									src={image.src}
									alt={image.alt}
									className="size-full object-cover"
									whileHover={{ scale: 1.15 }}
									transition={{ duration: 0.6, ease: "easeOut" }}
								/>
							</motion.div>

							{/* Animated border on hover */}
							<motion.div
								className="absolute inset-0 border-2 border-transparent z-20 pointer-events-none"
								whileHover={{
									borderColor: "rgba(255, 255, 255, 0.5)",
									transition: { duration: 0.3 },
								}}
							/>

							{/* View icon that appears on hover */}
							<motion.div
								className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center"
								initial={{ scale: 0, opacity: 0 }}
								whileHover={{ scale: 1, opacity: 1 }}
								transition={{ type: "spring", stiffness: 300, damping: 20 }}
							>
								<svg
									className="w-6 h-6 text-black"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
									/>
								</svg>
							</motion.div>

							{/* Shimmer effect on load */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent z-5"
								initial={{ x: "-100%" }}
								animate={isGalleryInView ? { x: "200%" } : { x: "-100%" }}
								transition={{
									delay: index * 0.1 + 0.5,
									duration: 1,
									ease: "easeInOut",
								}}
							/>
						</motion.a>
					))}
				</motion.div>
			</div>
		</section>
	);
}

export const GalleryDefaults = {
	heading: "Galery Visual",
	description: "Lihat interior, eksterior, dan fasilitas dalam detail",
	images: [
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&h=600&fit=crop",
			alt: "Modern apartment building exterior with glass facade",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=600&h=600&fit=crop",
			alt: "Luxury living room with modern furniture",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&h=600&fit=crop",
			alt: "Spacious bedroom with elegant interior design",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1560185893-a55cbc8c57e8?w=600&h=600&fit=crop",
			alt: "Contemporary kitchen with premium appliances",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=600&fit=crop",
			alt: "Rooftop infinity pool with city views",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=600&fit=crop",
			alt: "State-of-the-art fitness center",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
			alt: "Elegant bathroom with marble finishes",
		},
		{
			url: "#",
			src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
			alt: "Private balcony with panoramic views",
		},
	],
};

export default GalleryImages;
