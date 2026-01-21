"use client";

import {
	Button,
	Checkbox,
	Input,
	Label,
	RadioGroup,
	RadioGroupItem,
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
	Textarea,
} from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
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

const itemVariants = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			type: "spring",
			stiffness: 100,
			damping: 15,
		},
	},
};

const cardVariants = {
	hidden: { opacity: 0, x: 30, scale: 0.95 },
	visible: (i) => ({
		opacity: 1,
		x: 0,
		scale: 1,
		transition: {
			type: "spring",
			stiffness: 80,
			damping: 18,
			delay: i * 0.15,
		},
	}),
};

const iconHover = {
	scale: 1.15,
	rotate: [0, -10, 10, 0],
	transition: { duration: 0.4 },
};

export function ContactForm() {
	const headerRef = useRef(null);
	const formRef = useRef(null);
	const contactRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
	const isFormInView = useInView(formRef, { once: true, margin: "-80px" });
	const isContactInView = useInView(contactRef, { once: true, margin: "-80px" });

	const contactInfo = [
		{
			icon: BiEnvelope,
			title: "Email",
			description: "Hubungi kami melalui email",
			link: "mailto:hello@mansyurresidence.id",
			linkText: "hello@mansyurresidence.id",
		},
		{
			icon: BiPhone,
			title: "Telepon",
			description: "Hubungi tim penjualan kami",
			link: "tel:+62618888888",
			linkText: "+62 (61) 8888-8888",
		},
		{
			icon: BiMap,
			title: "Kantor",
			description: "Jl. Mansyur No. 123, Medan 20112",
			link: "#lokasi",
			linkText: "Lihat lokasi",
			isLocation: true,
		},
	];

	return (
		<section
			id="contact-form"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary-100 via-primary-200 to-secondary-100 relative overflow-hidden"
		>
			{/* Decorative background elements */}
			<div className="absolute top-0 right-0 w-96 h-96 bg-primary-300/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-80 h-80 bg-secondary-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

			<div className="container mx-auto relative z-10">
				{/* Header */}
				<motion.div
					ref={headerRef}
					className="mb-16 max-w-2xl md:mb-20"
					initial="hidden"
					animate={isHeaderInView ? "visible" : "hidden"}
					variants={containerVariants}
				>
					<motion.p
						className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-primary-600"
						variants={itemVariants}
					>
						Hubungi Kami
					</motion.p>
					<motion.h2
						className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl text-primary-900"
						variants={itemVariants}
					>
						Mari diskusikan hunian impian anda
					</motion.h2>
					<motion.p
						className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-primary-800/80"
						variants={itemVariants}
					>
						Isi formulir di bawah dan tim kami akan segera menghubungi anda
						untuk memberikan informasi lebih lanjut
					</motion.p>
				</motion.div>

				<div className="grid grid-cols-1 gap-12 lg:grid-cols-[1.2fr_0.8fr] lg:gap-16 xl:gap-20">
					{/* Form Card */}
					<motion.div
						ref={formRef}
						className="bg-white/90 backdrop-blur-sm border border-primary-200/50 rounded-2xl p-8 md:p-10 lg:p-12 shadow-xl"
						initial={{ opacity: 0, y: 40 }}
						animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
						transition={{ type: "spring", stiffness: 80, damping: 20 }}
					>
						<form className="grid grid-cols-1 gap-6">
							{/* Name Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: -20 }}
									animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ delay: 0.1 }}
								>
									<Label htmlFor="firstName" className="mb-2 text-primary-800 font-medium">
										Nama depan
									</Label>
									<Input
										type="text"
										id="firstName"
										className="border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300"
										placeholder="John"
									/>
								</motion.div>
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: 20 }}
									animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
									transition={{ delay: 0.15 }}
								>
									<Label htmlFor="lastName" className="mb-2 text-primary-800 font-medium">
										Nama belakang
									</Label>
									<Input
										type="text"
										id="lastName"
										className="border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300"
										placeholder="Doe"
									/>
								</motion.div>
							</div>

							{/* Contact Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: -20 }}
									animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
									transition={{ delay: 0.2 }}
								>
									<Label htmlFor="email" className="mb-2 text-primary-800 font-medium">
										Email
									</Label>
									<Input
										type="email"
										id="email"
										className="border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300"
										placeholder="john@example.com"
									/>
								</motion.div>
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: 20 }}
									animate={isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
									transition={{ delay: 0.25 }}
								>
									<Label htmlFor="phone" className="mb-2 text-primary-800 font-medium">
										Nomor telepon
									</Label>
									<Input
										type="text"
										id="phone"
										className="border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300"
										placeholder="+62 812 3456 7890"
									/>
								</motion.div>
							</div>

							{/* Unit Type Select */}
							<motion.div
								className="grid w-full items-center"
								initial={{ opacity: 0, y: 20 }}
								animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: 0.3 }}
							>
								<Label className="mb-2 text-primary-800 font-medium">Tipe unit yang diminati</Label>
								<Select>
									<SelectTrigger className="border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white transition-all duration-300 hover:border-primary-300 relative z-20">
										<SelectValue placeholder="Pilih tipe unit" />
									</SelectTrigger>
									<SelectContent className="bg-white border-primary-200 rounded-lg shadow-lg z-50">
										<SelectItem value="studio">Studio (24m²)</SelectItem>
										<SelectItem value="one-bedroom">Satu Kamar (36m²)</SelectItem>
										<SelectItem value="two-bedroom">Dua Kamar (48m²)</SelectItem>
										<SelectItem value="penthouse">Penthouse (72m²)</SelectItem>
									</SelectContent>
								</Select>
							</motion.div>

							{/* Radio Group */}
							<motion.div
								className="grid w-full items-center py-4"
								initial={{ opacity: 0, y: 20 }}
								animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: 0.35 }}
							>
								<Label className="mb-4 text-primary-800 font-medium">Apa kepentingan anda?</Label>
								<RadioGroup className="grid grid-cols-2 sm:grid-cols-3 gap-4">
									{[
										{ value: "hunian", label: "Hunian pribadi" },
										{ value: "investasi", label: "Investasi" },
										{ value: "sewa", label: "Disewakan" },
										{ value: "profesional", label: "Profesional" },
										{ value: "keluarga", label: "Keluarga" },
										{ value: "lainnya", label: "Lainnya" },
									].map((option) => (
										<Label
											key={option.value}
											htmlFor={option.value}
											className="flex items-center space-x-3 p-3 rounded-lg border border-primary-100 bg-white hover:bg-primary-50/50 hover:border-primary-300 transition-all duration-300 cursor-pointer"
										>
											<RadioGroupItem
												value={option.value}
												id={option.value}
												className="text-primary-600"
											/>
											<span className="text-primary-700 text-sm">
												{option.label}
											</span>
										</Label>
									))}
								</RadioGroup>
							</motion.div>

							{/* Message */}
							<motion.div
								className="grid w-full items-center"
								initial={{ opacity: 0, y: 20 }}
								animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: 0.4 }}
							>
								<Label htmlFor="message" className="mb-2 text-primary-800 font-medium">
									Pesan
								</Label>
								<Textarea
									id="message"
									placeholder="Ceritakan kebutuhan anda atau ajukan pertanyaan..."
									className="min-h-[140px] border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300 resize-none"
								/>
							</motion.div>

							{/* Checkbox */}
							<motion.div
								className="flex items-start space-x-3 py-2"
								initial={{ opacity: 0, y: 20 }}
								animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: 0.45 }}
							>
								<Checkbox
									id="terms"
									className="mt-0.5 border-primary-300 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600"
								/>
								<Label htmlFor="terms" className="cursor-pointer text-primary-700 text-sm leading-relaxed">
									Saya setuju untuk dihubungi oleh tim Mansyur Residence dan
									menyetujui <a href="#" className="text-primary-600 underline hover:text-primary-700">kebijakan privasi</a>
								</Label>
							</motion.div>

							{/* Submit Button */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
								transition={{ delay: 0.5 }}
							>
								<motion.div
									whileHover={{ scale: 1.02 }}
									whileTap={{ scale: 0.98 }}
								>
									<Button
										title="Kirim Pesan"
										className="w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25"
									>
										Kirim Pesan
									</Button>
								</motion.div>
							</motion.div>
						</form>
					</motion.div>

					{/* Contact Info Cards */}
					<motion.div
						ref={contactRef}
						className="grid gap-6"
						initial="hidden"
						animate={isContactInView ? "visible" : "hidden"}
						variants={containerVariants}
					>
						{contactInfo.map((info, index) => {
							const IconComponent = info.icon;
							return (
								<motion.div
									key={info.title}
									custom={index}
									variants={cardVariants}
									className="bg-white/80 backdrop-blur-sm border border-primary-200/50 rounded-xl p-6 md:p-8 shadow-md group"
									whileHover={{
										y: -5,
										boxShadow: "0 20px 40px -12px rgba(26, 77, 182, 0.15)",
										borderColor: "rgba(26, 77, 182, 0.3)",
										transition: { type: "spring", stiffness: 300, damping: 20 },
									}}
								>
									<motion.div
										className="mb-4 p-3 bg-gradient-to-br from-primary-100 to-secondary-100 rounded-lg w-fit"
										whileHover={iconHover}
									>
										<IconComponent className="size-7 text-primary-700" />
									</motion.div>
									<h3 className="mb-2 text-lg font-bold leading-[1.3] tracking-[-0.01em] text-primary-900">
										{info.title}
									</h3>
									<p className="mb-3 text-primary-700/80 text-sm leading-relaxed">
										{info.description}
									</p>
									{info.isLocation ? (
										<motion.div whileHover={{ x: 5 }} transition={{ duration: 0.2 }}>
											<Button
												title={info.linkText}
												variant="link"
												size="link"
												iconRight={<RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />}
												className="text-primary-600 hover:text-primary-700 font-semibold p-0"
											>
												{info.linkText}
											</Button>
										</motion.div>
									) : (
										<a
											href={info.link}
											className="text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-300 hover:underline"
										>
											{info.linkText}
										</a>
									)}
								</motion.div>
							);
						})}

						{/* Additional CTA Card */}
						<motion.div
							custom={3}
							variants={cardVariants}
							className="bg-gradient-to-br from-primary-700 to-primary-800 rounded-xl p-6 md:p-8 shadow-lg relative overflow-hidden"
							whileHover={{
								scale: 1.02,
								transition: { type: "spring", stiffness: 300, damping: 20 },
							}}
						>
							{/* Decorative element */}
							<div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -translate-y-1/2 translate-x-1/2" />
							<div className="absolute bottom-0 left-0 w-24 h-24 bg-secondary-500/10 rounded-full translate-y-1/2 -translate-x-1/2" />

							<div className="relative z-10">
								<h3 className="mb-3 text-xl font-bold text-white">
									Jadwalkan Kunjungan
								</h3>
								<p className="mb-5 text-primary-100/90 text-sm leading-relaxed">
									Kunjungi showroom kami dan rasakan langsung
									kemewahan Mansyur Residence
								</p>
								<motion.div
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Button
										title="Booking Sekarang"
										className="bg-secondary-500 hover:bg-secondary-600 text-primary-900 font-semibold px-6 py-3 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg"
									>
										Booking Sekarang
									</Button>
								</motion.div>
							</div>
						</motion.div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default ContactForm;
