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
					<Tabs defaultValue="monthly">
						<TabsList className="mx-auto mb-16 w-fit">
							<TabsTrigger value="monthly">Tunai</TabsTrigger>
							<TabsTrigger value="yearly">Cicilan</TabsTrigger>
						</TabsList>
						<TabsContent
							value="monthly"
							className="grid grid-cols-1 gap-10 data-[state=active]:animate-tabs md:grid-cols-2"
						>
							<div className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
								<div>
									<div className="mb-8 text-center md:mb-10">
										<h6 className="mb-4 text-xl font-bold leading-[1.3] tracking-[-0.01em] md:text-2xl">
											Studio langsung
										</h6>
										<h1 className="my-4 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-4xl lg:text-5xl">
											Rp500jt
										</h1>
									</div>
									<div className="mb-10 grid grid-cols-1 gap-5 py-2">
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Luas 25-35 meter persegi
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Sistem keamanan pintar terintegrasi
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Kontrol suara dan aplikasi mobile
											</p>
										</div>
									</div>
								</div>
								<div>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											title="Hubungi kami"
											className="w-full text-base py-6 bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
											aria-label="Hubungi kami untuk informasi lebih lanjut"
										>
											Hubungi kami
										</Button>
									</motion.div>
								</div>
							</div>
							<div className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
								<div>
									<div className="mb-8 text-center md:mb-10">
										<h6 className="mb-4 text-xl font-bold leading-[1.3] tracking-[-0.01em] md:text-2xl">
											Studio cicilan
										</h6>
										<h1 className="my-4 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-4xl lg:text-5xl">
											Rp25jt
										</h1>
									</div>
									<div className="mb-10 grid grid-cols-1 gap-5 py-2">
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Cicilan 20 tahun tersedia
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Bunga kompetitif dengan bank partner
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Proses persetujuan cepat dan mudah
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Dukungan tim finansial profesional
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Fleksibilitas pembayaran sesuai kebutuhan
											</p>
										</div>
									</div>
								</div>
								<div>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											title="Ajukan sekarang"
											className="w-full text-base py-6 bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
											aria-label="Ajukan permohonan sekarang"
										>
											Ajukan sekarang
										</Button>
									</motion.div>
								</div>
							</div>
						</TabsContent>
						<TabsContent
							value="yearly"
							className="grid grid-cols-1 gap-10 data-[state=active]:animate-tabs md:grid-cols-2"
						>
							<div className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
								<div>
									<div className="mb-8 text-center md:mb-10">
										<h6 className="mb-4 text-xl font-bold leading-[1.3] tracking-[-0.01em] md:text-2xl">
											Dua kamar tunai
										</h6>
										<h1 className="my-4 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-4xl lg:text-5xl">
											Rp850jt
										</h1>
										<p className="mt-4 text-base font-medium leading-[1.6] tracking-[-0.01em]">
											Hemat dengan pembayaran penuh
										</p>
									</div>
									<div className="mb-10 grid grid-cols-1 gap-5 py-2">
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Luas 55-75 meter persegi
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Dua kamar mandi lengkap
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Balkon luas dengan pemandangan kota
											</p>
										</div>
									</div>
								</div>
								<div>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											title="Hubungi kami"
											className="w-full text-base py-6 bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
											aria-label="Hubungi kami untuk informasi lebih lanjut"
										>
											Hubungi kami
										</Button>
									</motion.div>
								</div>
							</div>
							<div className="flex h-full flex-col justify-between border-2 border-border-primary px-8 py-10 md:p-10 rounded-sm transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
								<div>
									<div className="mb-8 text-center md:mb-10">
										<h6 className="mb-4 text-xl font-bold leading-[1.3] tracking-[-0.01em] md:text-2xl">
											Dua kamar cicilan
										</h6>
										<h1 className="my-4 text-3xl font-bold leading-[1] tracking-[-0.03em] md:text-4xl lg:text-5xl">
											Rp42jt
										</h1>
										<p className="mt-4 text-base font-medium leading-[1.6] tracking-[-0.01em]">
											Cicilan 20 tahun tersedia
										</p>
									</div>
									<div className="mb-10 grid grid-cols-1 gap-5 py-2">
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Bunga kompetitif dengan bank partner
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Proses persetujuan cepat dan mudah
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Dukungan tim finansial profesional
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Fleksibilitas pembayaran sesuai kebutuhan
											</p>
										</div>
										<div className="flex self-start gap-4">
											<div className="flex-none self-start">
												<BiCheck className="size-7" />
											</div>
											<p className="text-base leading-[1.6] tracking-[-0.01em]">
												Bonus asuransi properti tahun pertama
											</p>
										</div>
									</div>
								</div>
								<div>
									<motion.div
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										<Button
											title="Ajukan sekarang"
											className="w-full text-base py-6 bg-primary-500 hover:bg-primary-600 text-white transition-all duration-300 hover:shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-300"
											aria-label="Ajukan permohonan sekarang"
										>
											Ajukan sekarang
										</Button>
									</motion.div>
								</div>
							</div>
						</TabsContent>
					</Tabs>
				</motion.div>
			</div>
		</section>
	);
}

export default Pricing;
