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
import React, { useRef, useState } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { motion, useInView } from "framer-motion";

// Toast notification component
const Toast = ({ message, type, onClose }) => {
	const bgColor =
		type === "success"
			? "bg-green-500"
			: type === "error"
			? "bg-red-500"
			: "bg-blue-500";

	return (
		<motion.div
			initial={{ opacity: 0, y: -50, x: "-50%" }}
			animate={{ opacity: 1, y: 0, x: "-50%" }}
			exit={{ opacity: 0, y: -50, x: "-50%" }}
			className={`fixed top-8 left-1/2 transform -translate-x-1/2 ${bgColor} text-white px-6 py-4 rounded-lg shadow-2xl z-[9999] min-w-[320px] max-w-md`}
		>
			<div className="flex items-center justify-between gap-4">
				<p className="text-sm font-medium">{message}</p>
				<button
					onClick={onClose}
					className="text-white hover:text-gray-200 transition-colors"
					aria-label="Close notification"
				>
					<svg
						className="w-5 h-5"
						fill="none"
						strokeLinecap="round"
						strokeLinejoin="round"
						strokeWidth="2"
						viewBox="0 0 24 24"
						stroke="currentColor"
					>
						<path d="M6 18L18 6M6 6l12 12"></path>
					</svg>
				</button>
			</div>
		</motion.div>
	);
};

// Loading spinner component
const LoadingSpinner = () => (
	<svg
		className="animate-spin h-5 w-5 text-white"
		xmlns="http://www.w3.org/2000/svg"
		fill="none"
		viewBox="0 0 24 24"
	>
		<circle
			className="opacity-25"
			cx="12"
			cy="12"
			r="10"
			stroke="currentColor"
			strokeWidth="4"
		></circle>
		<path
			className="opacity-75"
			fill="currentColor"
			d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
		></path>
	</svg>
);

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

// Validation functions
const validateEmail = (email) => {
	const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
	return emailRegex.test(email);
};

const validatePhone = (phone) => {
	// Indonesian phone number format: +62 or 0 followed by 8-13 digits
	const phoneRegex = /^(\+62|62|0)[0-9]{8,13}$/;
	const cleanPhone = phone.replace(/[\s-]/g, "");
	return phoneRegex.test(cleanPhone);
};

const validateRequired = (value) => {
	return value && value.trim().length > 0;
};

export function ContactForm() {
	const headerRef = useRef(null);
	const formRef = useRef(null);
	const contactRef = useRef(null);
	const isHeaderInView = useInView(headerRef, { once: true, margin: "-80px" });
	const isFormInView = useInView(formRef, { once: true, margin: "-80px" });
	const isContactInView = useInView(contactRef, {
		once: true,
		margin: "-80px",
	});

	// Form state
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		email: "",
		phone: "",
		unitType: "",
		interest: "",
		message: "",
		terms: false,
	});

	// Error state
	const [errors, setErrors] = useState({});

	// UI state
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [toast, setToast] = useState(null);

	// Handle input changes
	const handleChange = (field, value) => {
		setFormData((prev) => ({
			...prev,
			[field]: value,
		}));

		// Clear error when user starts typing
		if (errors[field]) {
			setErrors((prev) => ({
				...prev,
				[field]: "",
			}));
		}
	};

	// Validate form
	const validateForm = () => {
		const newErrors = {};

		// First name validation
		if (!validateRequired(formData.firstName)) {
			newErrors.firstName = "Nama depan wajib diisi";
		}

		// Last name validation
		if (!validateRequired(formData.lastName)) {
			newErrors.lastName = "Nama belakang wajib diisi";
		}

		// Email validation
		if (!validateRequired(formData.email)) {
			newErrors.email = "Email wajib diisi";
		} else if (!validateEmail(formData.email)) {
			newErrors.email = "Format email tidak valid";
		}

		// Phone validation
		if (!validateRequired(formData.phone)) {
			newErrors.phone = "Nomor telepon wajib diisi";
		} else if (!validatePhone(formData.phone)) {
			newErrors.phone = "Format nomor telepon tidak valid (contoh: +62812345678)";
		}

		// Unit type validation
		if (!validateRequired(formData.unitType)) {
			newErrors.unitType = "Pilih tipe unit yang diminati";
		}

		// Interest validation
		if (!validateRequired(formData.interest)) {
			newErrors.interest = "Pilih salah satu kepentingan";
		}

		// Message validation
		if (!validateRequired(formData.message)) {
			newErrors.message = "Pesan wajib diisi";
		} else if (formData.message.trim().length < 10) {
			newErrors.message = "Pesan minimal 10 karakter";
		}

		// Terms validation
		if (!formData.terms) {
			newErrors.terms = "Anda harus menyetujui kebijakan privasi";
		}

		setErrors(newErrors);
		return Object.keys(newErrors).length === 0;
	};

	// Handle form submission
	const handleSubmit = async (e) => {
		e.preventDefault();

		// Validate form
		if (!validateForm()) {
			setToast({
				type: "error",
				message: "Mohon lengkapi semua field dengan benar",
			});
			return;
		}

		setIsSubmitting(true);

		try {
			// OPTION 1: Using Web3Forms (Free service)
			// Sign up at https://web3forms.com to get your access key
			const WEB3FORMS_ACCESS_KEY = "YOUR_WEB3FORMS_ACCESS_KEY_HERE";

			const response = await fetch("https://api.web3forms.com/submit", {
				method: "POST",
				headers: {
					"Content-Type": "application/json",
					Accept: "application/json",
				},
				body: JSON.stringify({
					access_key: WEB3FORMS_ACCESS_KEY,
					subject: "Formulir Kontak Baru - Mansyur Residence",
					from_name: `${formData.firstName} ${formData.lastName}`,
					email: formData.email,
					phone: formData.phone,
					unitType: formData.unitType,
					interest: formData.interest,
					message: formData.message,
					// Additional metadata
					"Tipe Unit": formData.unitType,
					"Kepentingan": formData.interest,
				}),
			});

			const result = await response.json();

			if (result.success) {
				setToast({
					type: "success",
					message: "Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.",
				});

				// Reset form
				setFormData({
					firstName: "",
					lastName: "",
					email: "",
					phone: "",
					unitType: "",
					interest: "",
					message: "",
					terms: false,
				});
			} else {
				throw new Error(result.message || "Gagal mengirim pesan");
			}
		} catch (error) {
			console.error("Form submission error:", error);
			setToast({
				type: "error",
				message: "Terjadi kesalahan. Silakan coba lagi nanti.",
			});
		} finally {
			setIsSubmitting(false);
		}

		// OPTION 2: Using your own backend API
		/*
		try {
			const response = await fetch('/api/contact', {
				method: 'POST',
				headers: {
					'Content-Type': 'application/json',
				},
				body: JSON.stringify(formData),
			});

			if (!response.ok) {
				throw new Error('Failed to submit form');
			}

			const result = await response.json();

			setToast({
				type: 'success',
				message: 'Pesan berhasil dikirim! Tim kami akan segera menghubungi Anda.',
			});

			// Reset form
			setFormData({
				firstName: '',
				lastName: '',
				email: '',
				phone: '',
				unitType: '',
				interest: '',
				message: '',
				terms: false,
			});
		} catch (error) {
			console.error('Form submission error:', error);
			setToast({
				type: 'error',
				message: 'Terjadi kesalahan. Silakan coba lagi nanti.',
			});
		} finally {
			setIsSubmitting(false);
		}
		*/
	};

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
			link: "tel:+6285358565679",
			linkText: "+62-853-5856-5679",
		},
		{
			icon: BiMap,
			title: "Kantor",
			description:
				"Jl. Dr. Mansyur No.165, Tj. Rejo, Kec. Medan Sunggal, Kota Medan, Sumatera Utara 20154, Indonesia",
			link: "https://maps.google.com/?q=Jl.+Dr.+Mansyur+No.165,+Tj.+Rejo,+Kec.+Medan+Sunggal,+Kota+Medan,+Sumatera+Utara+20154,+Indonesia",
			linkText: "Lihat lokasi",
			isLocation: true,
		},
	];

	return (
		<section
			id="contact-form"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-gradient-to-br from-primary-100 via-primary-200 to-secondary-100 relative overflow-hidden"
		>
			{/* Toast notification */}
			{toast && (
				<Toast
					message={toast.message}
					type={toast.type}
					onClose={() => setToast(null)}
				/>
			)}

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
						animate={
							isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }
						}
						transition={{ type: "spring", stiffness: 80, damping: 20 }}
					>
						<form onSubmit={handleSubmit} className="grid grid-cols-1 gap-6">
							{/* Name Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: -20 }}
									animate={
										isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
									}
									transition={{ delay: 0.1 }}
								>
									<Label
										htmlFor="firstName"
										className="mb-2 text-primary-800 font-medium"
									>
										Nama depan <span className="text-red-500">*</span>
									</Label>
									<Input
										type="text"
										id="firstName"
										value={formData.firstName}
										onChange={(e) => handleChange("firstName", e.target.value)}
										className={`border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300 ${
											errors.firstName ? "border-red-500 focus:border-red-500" : ""
										}`}
										placeholder="John"
										disabled={isSubmitting}
										aria-invalid={!!errors.firstName}
										aria-describedby={errors.firstName ? "firstName-error" : undefined}
									/>
									{errors.firstName && (
										<p id="firstName-error" className="mt-1 text-sm text-red-600">
											{errors.firstName}
										</p>
									)}
								</motion.div>
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: 20 }}
									animate={
										isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
									}
									transition={{ delay: 0.15 }}
								>
									<Label
										htmlFor="lastName"
										className="mb-2 text-primary-800 font-medium"
									>
										Nama belakang <span className="text-red-500">*</span>
									</Label>
									<Input
										type="text"
										id="lastName"
										value={formData.lastName}
										onChange={(e) => handleChange("lastName", e.target.value)}
										className={`border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300 ${
											errors.lastName ? "border-red-500 focus:border-red-500" : ""
										}`}
										placeholder="Doe"
										disabled={isSubmitting}
										aria-invalid={!!errors.lastName}
										aria-describedby={errors.lastName ? "lastName-error" : undefined}
									/>
									{errors.lastName && (
										<p id="lastName-error" className="mt-1 text-sm text-red-600">
											{errors.lastName}
										</p>
									)}
								</motion.div>
							</div>

							{/* Contact Fields */}
							<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: -20 }}
									animate={
										isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }
									}
									transition={{ delay: 0.2 }}
								>
									<Label
										htmlFor="email"
										className="mb-2 text-primary-800 font-medium"
									>
										Email <span className="text-red-500">*</span>
									</Label>
									<Input
										type="email"
										id="email"
										value={formData.email}
										onChange={(e) => handleChange("email", e.target.value)}
										className={`border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300 ${
											errors.email ? "border-red-500 focus:border-red-500" : ""
										}`}
										placeholder="john@example.com"
										disabled={isSubmitting}
										aria-invalid={!!errors.email}
										aria-describedby={errors.email ? "email-error" : undefined}
									/>
									{errors.email && (
										<p id="email-error" className="mt-1 text-sm text-red-600">
											{errors.email}
										</p>
									)}
								</motion.div>
								<motion.div
									className="grid w-full items-center"
									initial={{ opacity: 0, x: 20 }}
									animate={
										isFormInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }
									}
									transition={{ delay: 0.25 }}
								>
									<Label
										htmlFor="phone"
										className="mb-2 text-primary-800 font-medium"
									>
										Nomor telepon <span className="text-red-500">*</span>
									</Label>
									<Input
										type="text"
										id="phone"
										value={formData.phone}
										onChange={(e) => handleChange("phone", e.target.value)}
										className={`border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300 ${
											errors.phone ? "border-red-500 focus:border-red-500" : ""
										}`}
										placeholder="+62 812 3456 7890"
										disabled={isSubmitting}
										aria-invalid={!!errors.phone}
										aria-describedby={errors.phone ? "phone-error" : undefined}
									/>
									{errors.phone && (
										<p id="phone-error" className="mt-1 text-sm text-red-600">
											{errors.phone}
										</p>
									)}
								</motion.div>
							</div>

							{/* Unit Type Select */}
							<motion.div
								className="grid w-full items-center"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ delay: 0.3 }}
							>
								<Label className="mb-2 text-primary-800 font-medium">
									Tipe unit yang diminati <span className="text-red-500">*</span>
								</Label>
								<Select
									value={formData.unitType}
									onValueChange={(value) => handleChange("unitType", value)}
									disabled={isSubmitting}
								>
									<SelectTrigger
										className={`border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white transition-all duration-300 hover:border-primary-300 relative z-20 ${
											errors.unitType ? "border-red-500" : ""
										}`}
										aria-invalid={!!errors.unitType}
										aria-describedby={errors.unitType ? "unitType-error" : undefined}
									>
										<SelectValue placeholder="Pilih tipe unit" />
									</SelectTrigger>
									<SelectContent className="bg-white border-primary-200 rounded-lg shadow-lg z-50">
										<SelectItem value="studio">Studio (24m²)</SelectItem>
										<SelectItem value="one-bedroom">
											Satu Kamar (36m²)
										</SelectItem>
										<SelectItem value="two-bedroom">
											Dua Kamar (48m²)
										</SelectItem>
										<SelectItem value="penthouse">Penthouse (72m²)</SelectItem>
									</SelectContent>
								</Select>
								{errors.unitType && (
									<p id="unitType-error" className="mt-1 text-sm text-red-600">
										{errors.unitType}
									</p>
								)}
							</motion.div>

							{/* Radio Group */}
							<motion.div
								className="grid w-full items-center py-4"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ delay: 0.35 }}
							>
								<Label className="mb-4 text-primary-800 font-medium">
									Apa kepentingan anda? <span className="text-red-500">*</span>
								</Label>
								<RadioGroup
									value={formData.interest}
									onValueChange={(value) => handleChange("interest", value)}
									className="grid grid-cols-2 sm:grid-cols-3 gap-4"
									disabled={isSubmitting}
								>
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
											className={`flex items-center space-x-3 p-3 rounded-lg border border-primary-100 bg-white hover:bg-primary-50/50 hover:border-primary-300 transition-all duration-300 cursor-pointer ${
												formData.interest === option.value
													? "border-primary-500 bg-primary-50/70"
													: ""
											} ${isSubmitting ? "opacity-50 cursor-not-allowed" : ""}`}
										>
											<RadioGroupItem
												value={option.value}
												id={option.value}
												className="text-primary-600"
												disabled={isSubmitting}
											/>
											<span className="text-primary-700 text-sm">
												{option.label}
											</span>
										</Label>
									))}
								</RadioGroup>
								{errors.interest && (
									<p id="interest-error" className="mt-2 text-sm text-red-600">
										{errors.interest}
									</p>
								)}
							</motion.div>

							{/* Message */}
							<motion.div
								className="grid w-full items-center"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ delay: 0.4 }}
							>
								<Label
									htmlFor="message"
									className="mb-2 text-primary-800 font-medium"
								>
									Pesan <span className="text-red-500">*</span>
								</Label>
								<Textarea
									id="message"
									value={formData.message}
									onChange={(e) => handleChange("message", e.target.value)}
									placeholder="Ceritakan kebutuhan anda atau ajukan pertanyaan..."
									className={`min-h-[140px] border-primary-200 focus:border-primary-500 focus:ring-primary-500/20 rounded-lg py-3 px-4 bg-white/50 transition-all duration-300 hover:border-primary-300 resize-none ${
										errors.message ? "border-red-500 focus:border-red-500" : ""
									}`}
									disabled={isSubmitting}
									aria-invalid={!!errors.message}
									aria-describedby={errors.message ? "message-error" : undefined}
								/>
								{errors.message && (
									<p id="message-error" className="mt-1 text-sm text-red-600">
										{errors.message}
									</p>
								)}
							</motion.div>

							{/* Checkbox */}
							<motion.div
								className="flex items-start space-x-3 py-2"
								initial={{ opacity: 0, y: 20 }}
								animate={
									isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ delay: 0.45 }}
							>
								<Checkbox
									id="terms"
									checked={formData.terms}
									onCheckedChange={(checked) => handleChange("terms", checked)}
									className={`mt-0.5 border-primary-300 data-[state=checked]:bg-primary-600 data-[state=checked]:border-primary-600 ${
										errors.terms ? "border-red-500" : ""
									}`}
									disabled={isSubmitting}
									aria-invalid={!!errors.terms}
									aria-describedby={errors.terms ? "terms-error" : undefined}
								/>
								<div className="flex-1">
									<Label
										htmlFor="terms"
										className="cursor-pointer text-primary-700 text-sm leading-relaxed"
									>
										Saya setuju untuk dihubungi oleh tim Mansyur Residence dan
										menyetujui{" "}
										<a
											href="#"
											className="text-primary-600 underline hover:text-primary-700"
										>
											kebijakan privasi
										</a>{" "}
										<span className="text-red-500">*</span>
									</Label>
									{errors.terms && (
										<p id="terms-error" className="mt-1 text-sm text-red-600">
											{errors.terms}
										</p>
									)}
								</div>
							</motion.div>

							{/* Submit Button */}
							<motion.div
								initial={{ opacity: 0, y: 20 }}
								animate={
									isFormInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
								}
								transition={{ delay: 0.5 }}
							>
								<motion.div
									whileHover={!isSubmitting ? { scale: 1.02 } : {}}
									whileTap={!isSubmitting ? { scale: 0.98 } : {}}
								>
									<Button
										type="submit"
										title={isSubmitting ? "Mengirim..." : "Kirim Pesan"}
										disabled={isSubmitting}
										className={`w-full sm:w-auto px-8 py-4 text-base font-semibold bg-gradient-to-r from-primary-600 to-primary-700 hover:from-primary-700 hover:to-primary-800 text-white rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-primary-500/25 ${
											isSubmitting
												? "opacity-70 cursor-not-allowed"
												: ""
										} flex items-center justify-center gap-3`}
									>
										{isSubmitting ? (
											<>
												<LoadingSpinner />
												<span>Mengirim...</span>
											</>
										) : (
											"Kirim Pesan"
										)}
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
										<motion.a
											href={info.link}
											target="_blank"
											rel="noopener noreferrer"
											whileHover={{ x: 5 }}
											transition={{ duration: 0.2 }}
										>
											<Button
												title={info.linkText}
												variant="link"
												size="link"
												iconRight={
													<RxChevronRight className="transition-transform duration-300 group-hover:translate-x-1" />
												}
												className="text-primary-600 hover:text-primary-700 font-semibold p-0"
											>
												{info.linkText}
											</Button>
										</motion.a>
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
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default ContactForm;
