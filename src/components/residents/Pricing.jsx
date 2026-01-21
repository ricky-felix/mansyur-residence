"use client";

import {
	Button,
	Tabs,
	TabsContent,
	TabsList,
	TabsTrigger,
} from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { BiCheck } from "react-icons/bi";
import { motion, useInView } from "framer-motion";

// Pricing card component with animations
const PricingCard = ({
	title,
	price,
	features,
	buttonText,
	delay = 0,
	isInView,
}) => (
	<motion.div
		className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm relative overflow-hidden"
		initial={{ opacity: 0, y: 30 }}
		animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
		transition={{ duration: 0.6, delay, ease: "easeOut" }}
		whileHover={{
			y: -6,
			boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.25)",
			borderColor: "rgba(0, 0, 0, 0.3)",
			transition: { type: "spring", stiffness: 300, damping: 20 },
		}}
	>
		{/* Background gradient on hover */}
		<motion.div
			className="absolute inset-0 bg-gradient-to-br from-primary-50/0 to-primary-100/0 -z-10"
			initial={{ opacity: 0 }}
			whileHover={{ opacity: 1, transition: { duration: 0.3 } }}
		/>

		<div>
			<motion.div
				className="mb-8 text-center md:mb-10"
				initial={{ opacity: 0, y: 20 }}
				animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
				transition={{ duration: 0.5, delay: delay + 0.1 }}
			>
				<h6 className="mb-4 text-xl font-bold leading-[1.3] tracking-[-0.01em] md:text-2xl">
					{title}
				</h6>
				<motion.h1
					className="my-4 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-4xl lg:text-5xl"
					whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
				>
					{price}
				</motion.h1>
			</motion.div>
			<div className="mb-10 grid grid-cols-1 gap-5 py-2">
				{features.map((feature, idx) => (
					<motion.div
						key={idx}
						className="flex self-start gap-4"
						initial={{ opacity: 0, x: -20 }}
						animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
						transition={{ duration: 0.4, delay: delay + 0.2 + idx * 0.1 }}
					>
						<motion.div
							className="flex-none self-start"
							whileHover={{ scale: 1.2, rotate: 360 }}
							transition={{ duration: 0.4 }}
						>
							<BiCheck className="size-7 text-green-600" />
						</motion.div>
						<p className="text-base leading-[1.6] tracking-[-0.01em]">
							{feature}
						</p>
					</motion.div>
				))}
			</div>
		</div>
		<div>
			<motion.a
				href="/kontak"
				whileHover={{ scale: 1.02 }}
				whileTap={{ scale: 0.98 }}
			>
				<Button
					title={buttonText}
					className="w-full px-6 py-4 text-base bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
					aria-label={buttonText}
				>
					{buttonText}
				</Button>
			</motion.a>
		</div>

		{/* Decorative corner accent */}
		<motion.div
			className="absolute top-0 right-0 w-20 h-20 bg-primary-500/5"
			initial={{ scale: 0, rotate: 0 }}
			animate={isInView ? { scale: 1, rotate: 45 } : { scale: 0, rotate: 0 }}
			transition={{ delay: delay + 0.6, duration: 0.5 }}
			style={{ transformOrigin: "top right" }}
		/>
	</motion.div>
);

export function Pricing() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="pricing"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-secondary-200"
			ref={ref}
			aria-labelledby="pricing-heading"
		>
			<div className="container mx-auto max-w-6xl">
				<div className="mx-auto mb-12 max-w-2xl text-center md:mb-16 lg:mb-20">
					<motion.p
						className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-60 md:mb-5"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 0.6, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5, ease: "easeOut" }}
					>
						Investasi
					</motion.p>
					<motion.h2
						id="pricing-heading"
						className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl"
						initial={{ opacity: 0, y: 30 }}
						animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
						transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
					>
						Paket kepemilikan
					</motion.h2>
					<motion.p
						className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90"
						initial={{ opacity: 0, y: 20 }}
						animate={isInView ? { opacity: 0.9, y: 0 } : { opacity: 0, y: 20 }}
						transition={{ duration: 0.5, delay: 0.2, ease: "easeOut" }}
					>
						Pilih skema pembayaran yang sesuai dengan kemampuan finansial Anda
					</motion.p>
				</div>
				<motion.div
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
				>
					<Tabs defaultValue="studio">
						<TabsList className="mx-auto mb-16 w-fit">
							<TabsTrigger value="studio">Studio (24 M²)</TabsTrigger>
							<TabsTrigger value="family">Family Room (48 M²)</TabsTrigger>
						</TabsList>
						<TabsContent
							value="studio"
							className="grid grid-cols-1 gap-10 data-[state=active]:animate-tabs md:grid-cols-2"
						>
							<PricingCard
								title="Studio - Cash"
								price="Rp 529.729.730"
								features={[
									"Luas 24 M²",
									"Harga Jual: Rp 588.000.000",
									"Diskon: Rp 58.270.270",
									"Cash 3x: Rp 174.909.910/bulan",
									"Cash 8x: Rp 67.843.468/bulan",
									"Cash 12x: Rp 51.083.333/bulan",
								]}
								buttonText="Hubungi kami"
								delay={0.4}
								isInView={isInView}
							/>
							<PricingCard
								title="Studio - KPA"
								price="Rp 3,5 juta/bulan"
								features={[
									"Booking Fee: Rp 5.000.000",
									"Down Payment: Rp 55.000.000",
									"Plafon KPA: Rp 538.000.000",
									"Cicilan 10 Tahun: Rp 5 juta/bulan",
									"Cicilan 15 Tahun: Rp 4 juta/bulan",
									"Cicilan 20 Tahun: Rp 3,5 juta/bulan",
								]}
								buttonText="Ajukan sekarang"
								delay={0.5}
								isInView={isInView}
							/>
						</TabsContent>
						<TabsContent
							value="family"
							className="grid grid-cols-1 gap-10 data-[state=active]:animate-tabs md:grid-cols-2"
						>
							<PricingCard
								title="Family Room - Cash"
								price="Rp 980.180.180"
								features={[
									"Luas 48 M²",
									"Harga Jual: Rp 1.088.000.000",
									"Diskon: Rp 107.819.820",
									"Cash 3x: Rp 326.726.727/bulan",
									"Cash 8x: Rp 124.774.775/bulan",
									"Cash 12x: Rp 93.166.667/bulan",
								]}
								buttonText="Hubungi kami"
								delay={0.4}
								isInView={isInView}
							/>
							<PricingCard
								title="Family Room - KPA"
								price="Rp 5,5 juta/bulan"
								features={[
									"Booking Fee: Rp 5.000.000",
									"Down Payment: Rp 115.000.000",
									"Plafon KPA: Rp 988.000.000",
									"Cicilan 10 Tahun: Rp 9 juta/bulan",
									"Cicilan 15 Tahun: Rp 7 juta/bulan",
									"Cicilan 20 Tahun: Rp 5,5 juta/bulan",
								]}
								buttonText="Ajukan sekarang"
								delay={0.5}
								isInView={isInView}
							/>
						</TabsContent>
					</Tabs>
				</motion.div>
			</div>
		</section>
	);
}

export default Pricing;
