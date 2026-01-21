"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

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

	const [selectedImage, setSelectedImage] = useState(null);

	const headerRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
	const galleryRef = useRef(null);
	const isGalleryInView = useInView(galleryRef, {
		once: true,
		margin: "-60px",
	});

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
						animate={
							isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }
						}
						transition={{ duration: 0.7, ease: [0.25, 0.1, 0.25, 1] }}
					>
						{heading}
					</motion.h2>
					<motion.p
						className="md:text-md"
						initial={{ opacity: 0, y: 20 }}
						animate={
							isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
						}
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
						<motion.div
							key={index}
							onClick={() => setSelectedImage(image)}
							variants={imageVariants}
							className="group relative overflow-hidden rounded-sm block cursor-pointer"
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
						</motion.div>
					))}
				</motion.div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{selectedImage && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						onClick={() => setSelectedImage(null)}
					>
						<motion.div
							className="relative max-w-5xl max-h-[90vh] w-full"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
							onClick={(e) => e.stopPropagation()}
						>
							<motion.img
								src={selectedImage.src}
								alt={selectedImage.alt}
								className="w-full h-full object-contain rounded-lg"
							/>
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 rounded-full flex items-center justify-center transition-colors"
								aria-label="Close lightbox"
							>
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							</button>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}

export const GalleryDefaults = {
	heading: "Galery Visual",
	description: "Lihat interior, eksterior, dan fasilitas dalam detail",
	images: [
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-10.webp",
			alt: "Modern apartment building exterior with glass facade",
		},
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-37.webp",
			alt: "Luxury living room with modern furniture",
		},
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-30.webp",
			alt: "Spacious bedroom with elegant interior design",
		},
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-28.webp",
			alt: "Contemporary kitchen with premium appliances",
		},
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-26.webp",
			alt: "Rooftop infinity pool with city views",
		},
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-15.webp",
			alt: "State-of-the-art fitness center",
		},
		// {
		// 	url: "#",
		// 	src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=600&h=600&fit=crop",
		// 	alt: "Elegant bathroom with marble finishes",
		// },
		// {
		// 	url: "#",
		// 	src: "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=600&h=600&fit=crop",
		// 	alt: "Private balcony with panoramic views",
		// },
	],
};

export default GalleryImages;
