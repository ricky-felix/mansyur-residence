"use client";

import React, { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";

// Image loading hook for managing individual image states
const useImageLoader = () => {
	const [loadedImages, setLoadedImages] = useState(new Set());

	const handleImageLoad = (index) => {
		setLoadedImages((prev) => new Set(prev).add(index));
	};

	const isImageLoaded = (index) => loadedImages.has(index);

	return { handleImageLoad, isImageLoaded };
};

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
	const [lightboxImageLoaded, setLightboxImageLoaded] = useState(false);
	const { handleImageLoad, isImageLoaded } = useImageLoader();

	// Reset lightbox image loaded state when image changes
	const handleImageClick = (image) => {
		setSelectedImage(image);
		setLightboxImageLoaded(false);
	};

	// Handle keyboard navigation in lightbox
	React.useEffect(() => {
		const handleKeyDown = (e) => {
			if (selectedImage) {
				if (e.key === 'Escape') {
					setSelectedImage(null);
				}
			}
		};

		if (selectedImage) {
			document.addEventListener('keydown', handleKeyDown);
			// Prevent body scroll when lightbox is open
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [selectedImage]);

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
			aria-labelledby="gallery-heading"
		>
			<div className="container mx-auto">
				<motion.div
					ref={headerRef}
					className="mb-12 text-center md:mb-18 lg:mb-20"
				>
					<motion.h2
						id="gallery-heading"
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
						<motion.button
							key={index}
							onClick={() => handleImageClick(image)}
							onKeyDown={(e) => {
								if (e.key === 'Enter' || e.key === ' ') {
									e.preventDefault();
									handleImageClick(image);
								}
							}}
							variants={imageVariants}
							className="group relative overflow-hidden rounded-sm cursor-pointer focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-600 focus-visible:ring-2 focus-visible:ring-primary-600"
							whileHover={{
								scale: 1.05,
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
							aria-label={`Lihat gambar penuh: ${image.alt}`}
						>
							{/* Skeleton placeholder with shimmer effect */}
							{!isImageLoaded(index) && (
								<div className="absolute inset-0 bg-gray-200 animate-pulse z-0">
									<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/40 to-transparent animate-shimmer" />
								</div>
							)}

							{/* Image overlay on hover */}
							<motion.div
								className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0"
								whileHover={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
							/>

							{/* Zoom effect on image */}
							<motion.div className="overflow-hidden relative">
								<motion.img
									src={image.src}
									alt={image.alt}
									className={`size-full object-cover transition-opacity duration-500 ${
										isImageLoaded(index) ? "opacity-100" : "opacity-0"
									}`}
									loading="lazy"
									decoding="async"
									onLoad={() => handleImageLoad(index)}
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
						</motion.button>
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
						role="dialog"
						aria-modal="true"
						aria-labelledby="lightbox-image-title"
					>
						<motion.div
							className="relative max-w-5xl max-h-[90vh] w-full"
							initial={{ scale: 0.8, opacity: 0 }}
							animate={{ scale: 1, opacity: 1 }}
							exit={{ scale: 0.8, opacity: 0 }}
							transition={{ type: "spring", stiffness: 300, damping: 25 }}
							onClick={(e) => e.stopPropagation()}
						>
							{/* Loading spinner for lightbox */}
							{!lightboxImageLoaded && (
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="w-12 h-12 border-4 border-white/20 border-t-white rounded-full animate-spin" />
								</div>
							)}

							<motion.img
								id="lightbox-image-title"
								src={selectedImage.src}
								alt={selectedImage.alt}
								className={`w-full h-full object-contain rounded-lg transition-opacity duration-500 ${
									lightboxImageLoaded ? "opacity-100" : "opacity-0"
								}`}
								loading="eager"
								decoding="async"
								onLoad={() => setLightboxImageLoaded(true)}
							/>
							<button
								onClick={() => setSelectedImage(null)}
								className="absolute top-4 right-4 w-10 h-10 bg-white/10 hover:bg-white/20 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white rounded-full flex items-center justify-center transition-colors"
								aria-label={`Tutup tampilan gambar: ${selectedImage.alt}`}
							>
								<svg
									className="w-6 h-6 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24"
									aria-hidden="true"
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
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-08.webp",
			alt: "Elegant bathroom with marble finishes",
		},
		{
			url: "#",
			src: "./images/gallery/Mansyur-Residence-40.webp",
			alt: "Private balcony with panoramic views",
		},
	],
};

export default GalleryImages;
