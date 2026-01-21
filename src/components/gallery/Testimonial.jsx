"use client";

import React from "react";
import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { useScroll, useTransform, motion, useInView } from "framer-motion";
import { useRef } from "react";
import { BiSolidStar } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function Testimonial(props) {
	const { heading, description, buttons, leftTestimonials, rightTestimonials } =
		{
			...TestimonialDefaults,
			...props,
		};

	const sectionRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: sectionRef,
		offset: ["start end", "end start"],
	});

	const isMobile = useMediaQuery("(max-width: 767px)");

	const leftCards = isMobile
		? useTransform(scrollYProgress, [0, 1], ["20vh", "-70vh"])
		: useTransform(scrollYProgress, [0, 1], ["-10rem", "5rem"]);
	const rightCards = isMobile
		? useTransform(scrollYProgress, [0, 1], ["20vh", "-70vh"])
		: useTransform(scrollYProgress, [0, 1], ["10rem", "-5rem"]);

	return (
		<section
			id="testimonials"
			ref={sectionRef}
			className="overflow-hidden px-[5%] py-12 md:py-16 lg:py-20"
		>
			<div className="container mx-auto grid min-h-svh auto-cols-fr grid-cols-1 overflow-hidden border border-border-primary lg:h-[90vh] lg:min-h-[auto] lg:grid-cols-[0.75fr_1fr] lg:overflow-visible">
				<div className="flex flex-col justify-center p-8 md:p-12">
					<div>
						<h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
							{heading}
						</h2>
						<p className="md:text-md">{description}</p>
					</div>
					<div className="mt-6 flex flex-wrap items-center gap-4 md:mt-8">
						{buttons.map((button, index) => (
							<Button key={index} {...button}>
								{button.title}
							</Button>
						))}
					</div>
				</div>
				<div className="grid h-screen auto-cols-fr grid-cols-1 content-center items-center gap-4 overflow-hidden border-t border-border-primary px-4 md:h-[70vh] md:grid-cols-2 md:px-8 lg:h-auto lg:border-none lg:pl-0 lg:pr-12">
					<motion.div
						className="grid size-full columns-2 auto-cols-fr grid-cols-1 gap-4 self-center"
						style={{ y: leftCards }}
					>
						<div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-x-6 gap-y-4">
							{leftTestimonials.map((leftTestimonial, index) => (
								<div key={index} className="relative w-full">
									<TestimonialCard testimonial={leftTestimonial} index={index} />
								</div>
							))}
						</div>
					</motion.div>
					<motion.div
						className="grid size-full auto-cols-fr grid-cols-1 gap-4"
						style={{ y: rightCards }}
					>
						<div className="grid size-full auto-cols-fr grid-cols-1 content-center gap-4">
							{rightTestimonials.map((rightTestimonial, index) => (
								<div key={index} className="relative w-full">
									<TestimonialCard testimonial={rightTestimonial} index={index} />
								</div>
							))}
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

const TestimonialCard = ({ testimonial, index }) => {
	const cardRef = React.useRef(null);
	const isInView = useInView(cardRef, { once: true, margin: "-50px" });

	return (
		<motion.div
			ref={cardRef}
			className="flex w-full flex-col items-start justify-between border border-border-primary p-6 md:p-8 relative overflow-hidden bg-white"
			initial={{ opacity: 0, y: 30, scale: 0.95 }}
			animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 30, scale: 0.95 }}
			transition={{
				type: "spring",
				stiffness: 100,
				damping: 15,
				delay: index * 0.1,
			}}
			whileHover={{
				y: -4,
				boxShadow: "0 20px 40px -12px rgba(0, 0, 0, 0.2)",
				borderColor: "rgba(0, 0, 0, 0.2)",
				transition: { type: "spring", stiffness: 300, damping: 20 },
			}}
		>
			{/* Background gradient on hover */}
			<motion.div
				className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 -z-10"
				initial={{ opacity: 0 }}
				whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
			/>

			<div className="rb-5 mb-5 md:mb-6">
				<motion.div
					className="rb-6 mb-6 flex"
					initial={{ opacity: 0, x: -10 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
					transition={{ delay: index * 0.1 + 0.2, duration: 0.4 }}
				>
					{Array(testimonial.numberOfStars)
						.fill(null)
						.map((_, starIndex) => (
							<motion.div
								key={starIndex}
								initial={{ opacity: 0, scale: 0 }}
								animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0 }}
								transition={{
									type: "spring",
									stiffness: 200,
									damping: 15,
									delay: index * 0.1 + 0.3 + starIndex * 0.05,
								}}
								whileHover={{
									scale: 1.2,
									rotate: 15,
									transition: { duration: 0.2 },
								}}
							>
								<BiSolidStar className="mr-1 size-6 text-amber-400" />
							</motion.div>
						))}
				</motion.div>
				<motion.blockquote
					className="md:text-md leading-relaxed"
					initial={{ opacity: 0 }}
					animate={isInView ? { opacity: 1 } : { opacity: 0 }}
					transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
				>
					{testimonial.quote}
				</motion.blockquote>
			</div>
			<motion.div
				className="flex w-full flex-col items-start text-left md:w-fit md:flex-row md:items-center"
				initial={{ opacity: 0, y: 10 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 10 }}
				transition={{ delay: index * 0.1 + 0.5, duration: 0.4 }}
			>
				<motion.img
					src={testimonial.avatar.src}
					alt={testimonial.avatar.alt}
					className="mb-4 size-12 min-h-12 min-w-12 rounded-full object-cover md:mb-0 md:mr-4 border-2 border-primary-200"
					whileHover={{
						scale: 1.1,
						borderColor: "rgba(0, 0, 0, 0.3)",
						transition: { duration: 0.3 },
					}}
				/>
				<div>
					<p className="font-semibold">{testimonial.name}</p>
					<p className="text-sm opacity-70">
						<span>{testimonial.position}</span>,{" "}
						<span>{testimonial.companyName}</span>
					</p>
				</div>
			</motion.div>

			{/* Decorative corner accent */}
			<motion.div
				className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5"
				initial={{ scale: 0, rotate: 0 }}
				animate={isInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
				transition={{ delay: index * 0.1 + 0.6, duration: 0.5 }}
				style={{ transformOrigin: "top right" }}
			/>
		</motion.div>
	);
};

export const TestimonialDefaults = {
	heading: "Customer testimonials",
	description:
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique.",
	buttons: [
		{ title: "Button", variant: "secondary", className: "px-6 py-3 text-base bg-primary-100 hover:bg-primary-200 text-primary-700 border-primary-300 transition-all duration-300 hover:shadow-lg" },
		{
			title: "Button",
			variant: "link",
			size: "link",
			iconRight: <RxChevronRight />,
			className: "text-primary-600 hover:text-primary-700",
		},
	],
	leftTestimonials: [
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 1",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 2",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 3",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 4",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 5",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
	],
	rightTestimonials: [
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 6",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 7",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 8",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 9",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
		{
			quote:
				'"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare."',
			avatar: {
				src: "https://d22po4pjz3o32e.cloudfront.net/placeholder-image.svg",
				alt: "Testimonial avatar 10",
			},
			name: "Name Surname",
			position: "Position",
			companyName: "Company name",
			numberOfStars: 5,
		},
	],
};

export default Testimonial;
