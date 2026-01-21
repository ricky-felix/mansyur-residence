export function GalleryImages(props) {
	const { heading, description, images } = {
		...GalleryDefaults,
		...props,
	};
	return (
		<section
			id="gallery"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-secondary-200"
		>
			<div className="container mx-auto">
				<div className="mb-12 text-center md:mb-18 lg:mb-20">
					<h2 className="mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
						{heading}
					</h2>
					<p className="md:text-md">{description}</p>
				</div>
				<div className="grid grid-cols-2 items-start justify-center gap-6 md:gap-8 lg:grid-cols-4">
					{images.map((image, index) => (
						<a key={index} href={image.url}>
							<img
								src={image.src}
								alt={image.alt}
								className="size-full object-cover"
							/>
						</a>
					))}
				</div>
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
