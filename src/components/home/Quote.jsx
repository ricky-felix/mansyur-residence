"use client";

import React from "react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const wordVariants = {
	hidden: { opacity: 0, y: 20 },
	visible: (i) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: i * 0.03,
			duration: 0.4,
			ease: [0.25, 0.1, 0.25, 1],
		},
	}),
};

export function Quote() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	const quoteText = "Rumah yang beradaptasi dengan ritme hidup anda, bukan sebaliknya. Setiap sistem bekerja dalam harmoni sempurna untuk menciptakan kenyamanan yang belum pernah anda rasakan sebelumnya.";
	const words = quoteText.split(" ");

	return (
		<section
			id="quote"
			className="overflow-hidden px-[5%] py-16 md:py-24 lg:py-32"
			ref={ref}
		>
			<div className="container mx-auto">
				<motion.p
					className="mb-4 font-semibold text-sm uppercase tracking-widest md:mb-6"
					initial={{ opacity: 0, x: -20 }}
					animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
					transition={{ duration: 0.5, ease: "easeOut" }}
				>
					Teknologi
				</motion.p>
				<blockquote className="text-2xl font-medium leading-snug md:text-3xl lg:text-4xl xl:text-5xl">
					<motion.span
						className="inline-block mr-1"
						initial={{ opacity: 0, scale: 1.5 }}
						animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.5 }}
						transition={{ duration: 0.3 }}
					>
						&ldquo;
					</motion.span>
					{words.map((word, i) => (
						<motion.span
							key={i}
							custom={i}
							initial="hidden"
							animate={isInView ? "visible" : "hidden"}
							variants={wordVariants}
							className="inline-block mr-[0.3em]"
						>
							{word}
						</motion.span>
					))}
					<motion.span
						className="inline-block"
						initial={{ opacity: 0, scale: 1.5 }}
						animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 1.5 }}
						transition={{ duration: 0.3, delay: words.length * 0.03 + 0.2 }}
					>
						&rdquo;
					</motion.span>
				</blockquote>
			</div>
		</section>
	);
}

export default Quote;
