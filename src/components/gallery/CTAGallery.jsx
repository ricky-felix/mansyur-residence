import { Button } from "@relume_io/relume-ui";

export function CTAGallery(props) {
	const { tagline, heading, description, buttons } = {
		...CTAGalleryDefaults,
		...props,
	};
	return (
		<section
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-300 text-white text-center"
		>
			<div className="container mx-auto max-w-lg text-center">
				<p className="mb-3 font-semibold md:mb-4">{tagline}</p>
				<h1 className="mb-5 text-6xl font-bold md:mb-6 md:text-9xl lg:text-8xl text-center">
					{heading}
				</h1>
				<p className="md:text-md">{description}</p>
				<div className="mt-6 flex items-center justify-center gap-x-4 md:mt-8">
					{buttons.map((button, index) => (
						<Button key={index} {...button}>
							{button.title}
						</Button>
					))}
				</div>
			</div>
		</section>
	);
}

export const CTAGalleryDefaults = {
	tagline: "Galeri",
	heading: "Galeri Mansyur Residence",
	description:
		"Jelajahi setiap sudut apartemen pintar kami yang dirancang dengan detail sempurna. Dari studio elegan hingga unit dua kamar keluarga, saksikan bagaimana kemewahan modern bertemu dengan teknologi canggih.",
	buttons: [
		{
			title: "Lihat Residens",
		},
		{
			title: "Hubungi Kami",
			variant: "secondary",
		},
	],
};

export default CTAGallery;
