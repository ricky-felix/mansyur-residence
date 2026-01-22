"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import {
	BiLogoFacebook,
	BiLogoInstagram,
	BiLogoLinkedinSquare,
	BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

const ConditionalRender = ({ condition, children }) => {
	return condition ? <>{children}</> : null;
};

ConditionalRender.propTypes = {
	condition: PropTypes.bool,
	children: PropTypes.node,
};

const useRelume = () => {
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDropdownOpen, setIsDropdownOpen] = useState(false);
	const toggleMenu = () => setIsMenuOpen((prev) => !prev);
	const toggleDropdown = () => setIsDropdownOpen((prev) => !prev);
	const openDropdown = () => setIsDropdownOpen(true);
	const closeDropdown = () => setIsDropdownOpen(false);
	const animateMenu = isMenuOpen
		? { menu: "open", menu2: "openSecond" }
		: { menu: "close", menu2: "closeSecond" };
	const animateDropdown = isDropdownOpen ? "open" : "close";
	const animateDropdownIcon = isDropdownOpen ? "rotated" : "initial";
	const linkItemsClassName = (isMenuOpen) => {
		return `hidden lg:items-center lg:justify-center lg:overflow-hidden lg:px-0 lg:text-center ${!isMenuOpen ? "lg:flex" : ""}`;
	};

	// Prevent body scroll when menu is open
	useEffect(() => {
		if (isMenuOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isMenuOpen]);

	// Smooth scroll handler with accessibility
	const handleSmoothScroll = (e, targetId) => {
		e.preventDefault();
		const target = document.querySelector(targetId);
		if (target) {
			target.scrollIntoView({ behavior: "smooth", block: "start" });
			// Close menu after navigation on mobile
			if (isMenuOpen) {
				setIsMenuOpen(false);
			}
		}
	};

	return {
		isDropdownOpen,
		toggleMenu,
		toggleDropdown,
		openDropdown,
		closeDropdown,
		animateMenu,
		animateDropdown,
		animateDropdownIcon,
		isMenuOpen,
		linkItemsClassName,
		handleSmoothScroll,
	};
};

export function Navbar() {
	const useActive = useRelume();
	return (
		<section
			id="navbar"
			className="fixed top-0 left-0 right-0 z-[999] flex min-h-16 w-full items-center border-b border-b-white/20 px-[5%] md:min-h-18 transition-all duration-300 glass-morphism shadow-lg shadow-primary-500/10 outline-none"
		>
			<div className="mx-auto flex size-full items-center justify-between">
				<a
					href="/"
					className="transition-all duration-300 hover:scale-105 hover:drop-shadow-lg focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
					aria-label="Mansyur Residence Home"
				>
					<img
						src="./images/Mansyur_Residence_Logo.webp"
						alt="Mansyur Residence Logo"
						className="h-14 md:h-16 w-auto drop-shadow-sm"
					/>
				</a>
				<div className="flex items-center justify-center gap-2 lg:gap-4">
					<button
						className="flex size-12 flex-col items-center justify-center justify-self-end transition-all duration-200 hover:bg-primary-100/50 hover:scale-110 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-md"
						onClick={useActive.toggleMenu}
						aria-label={
							useActive.isMenuOpen
								? "Close navigation menu"
								: "Open navigation menu"
						}
						aria-expanded={useActive.isMenuOpen}
						aria-controls="mobile-menu"
					>
						<span className="relative flex size-6 flex-col items-center justify-center">
							<motion.span
								className="absolute top-[3px] h-0.5 w-full bg-primary-700"
								animate={useActive.animateMenu.menu}
								variants={{
									open: {
										width: 0,
										transition: { duration: 0.1, ease: "easeIn" },
									},
									close: {
										width: "100%",
										transition: { duration: 0.1, delay: 0.3, ease: "linear" },
									},
								}}
							/>
							<motion.span
								className="absolute h-0.5 w-full bg-primary-700"
								animate={useActive.animateMenu.menu}
								variants={{
									open: {
										rotate: 135,
										transition: {
											duration: 0.3,
											delay: 0.1,
											ease: "easeInOut",
										},
									},
									close: {
										rotate: 0,
										transition: { duration: 0.3, ease: "easeInOut" },
									},
									openSecond: {
										rotate: 45,
										transition: {
											duration: 0.3,
											delay: 0.1,
											ease: "easeInOut",
										},
									},
									closeSecond: {
										rotate: 0,
										transition: { duration: 0.3, ease: "easeInOut" },
									},
								}}
							/>
							<motion.span
								className="absolute h-0.5 w-full bg-primary-700"
								animate={useActive.animateMenu.menu2}
								variants={{
									open: {
										rotate: 135,
										transition: {
											duration: 0.3,
											delay: 0.1,
											ease: "easeInOut",
										},
									},
									close: {
										rotate: 0,
										transition: { duration: 0.3, ease: "easeInOut" },
									},
									openSecond: {
										rotate: 45,
										transition: {
											duration: 0.3,
											delay: 0.1,
											ease: "easeInOut",
										},
									},
									closeSecond: {
										rotate: 0,
										transition: { duration: 0.3, ease: "easeInOut" },
									},
								}}
							/>
							<motion.span
								className="absolute bottom-[3px] h-0.5 w-full bg-primary-700"
								animate={useActive.animateMenu.menu}
								variants={{
									open: {
										width: 0,
										transition: { duration: 0.1, ease: "easeIn" },
									},
									close: {
										width: "100%",
										transition: { duration: 0.1, delay: 0.3, ease: "linear" },
									},
								}}
							/>
						</span>
					</button>
				</div>
			</div>
			<AnimatePresence>
				<ConditionalRender condition={useActive.isMenuOpen}>
					<div
						id="mobile-menu"
						className="fixed inset-0 top-16 md:top-[4.5rem] w-full h-[calc(100vh-4rem)] md:h-[calc(100vh-4.5rem)] overflow-hidden bg-gradient-to-br from-primary-200 via-primary-300 to-secondary-200 z-[998]"
						role="navigation"
						aria-label="Main navigation"
					>
						<motion.div
							variants={{
								open: { opacity: 1, y: 0 },
								close: { opacity: 0, y: -20 },
							}}
							animate={useActive.animateMenu.menu}
							initial="close"
							exit="close"
							transition={{ duration: 0.4, ease: "easeInOut" }}
							className="flex h-full flex-col overflow-auto px-[5%] pt-px"
						>
							<div className="grid grid-cols-1 gap-y-12 py-6 md:gap-y-16 md:py-10 lg:my-auto lg:-translate-y-9 lg:grid-cols-[1fr_.75fr] lg:gap-x-20 lg:gap-y-0 lg:py-20">
								<nav
									className="grid grid-cols-2 gap-x-10 gap-y-4"
									aria-label="Primary navigation"
								>
									<motion.a
										href="/"
										className="py-3 text-2xl font-bold leading-[1.2] md:text-3xl lg:text-5xl transition-all duration-300 hover:text-primary-600 hover:translate-x-2 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-500 rounded-sm"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.1 }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Home
									</motion.a>
									<motion.a
										href="/resident"
										className="py-3 text-2xl font-bold leading-[1.2] md:text-4xl lg:text-5xl transition-all duration-300 hover:text-primary-600 hover:translate-x-2 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-500 rounded-sm"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.15 }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Residents
									</motion.a>
									<motion.a
										href="/kontak"
										className="py-3 text-2xl font-bold leading-[1.2] md:text-4xl lg:text-5xl transition-all duration-300 hover:text-primary-600 hover:translate-x-2 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-500 rounded-sm"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.2 }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Kontak
									</motion.a>
									<motion.a
										href="/gallery"
										className="py-3 text-2xl font-bold leading-[1.2] md:text-4xl lg:text-5xl transition-all duration-300 hover:text-primary-600 hover:translate-x-2 hover:drop-shadow-md focus-visible:outline-2 focus-visible:outline-offset-8 focus-visible:outline-primary-500 rounded-sm"
										initial={{ opacity: 0, x: -20 }}
										animate={{ opacity: 1, x: 0 }}
										transition={{ delay: 0.25 }}
										whileHover={{ scale: 1.02 }}
										whileTap={{ scale: 0.98 }}
									>
										Galeri
									</motion.a>
								</nav>
								<div className="my-auto">
									<div className="mt-6 md:mt-8 bg-white/40 backdrop-blur-sm p-6 rounded-lg border border-white/50 shadow-lg">
										<h5 className="mb-3 font-semibold md:text-md tracking-wide text-primary-800">
											Hubungi kami
										</h5>
										<a
											href="tel:+6285358565679"
											className="mb-2 block text-sm underline underline-offset-2 transition-all duration-200 hover:text-primary-600 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
											aria-label="Telepon +62 853 5856 5679"
										>
											+62-853-5856-5679
										</a>
										<a
											href="mailto:info@mansyurresidence.com"
											className="mb-2 block text-sm underline underline-offset-2 transition-all duration-200 hover:text-primary-600 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
											aria-label="Email info@mansyurresidence.com"
										>
											info@mansyurresidence.com
										</a>
										<p className="text-sm leading-relaxed text-primary-900">
											Jl. Dr. Mansyur No.165, Tj. Rejo, Kec. Medan Sunggal, Kota
											Medan, Sumatera Utara 20154, Indonesia
										</p>
										<div className="mt-6 flex items-center gap-4 md:mt-8">
											<a
												href="https://web.facebook.com/p/mansyurresidence-100063528183662/?_rdc=1&_rdr"
												className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
												aria-label="Kunjungi halaman Facebook Mansyur Residence"
												target="_blank"
												rel="noopener noreferrer"
											>
												<BiLogoFacebook className="size-6" aria-hidden="true" />
											</a>
											<a
												href="https://www.instagram.com/mansyur.residence/"
												className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
												aria-label="Kunjungi halaman Instagram Mansyur Residence"
												target="_blank"
												rel="noopener noreferrer"
											>
												<BiLogoInstagram className="size-6" aria-hidden="true" />
											</a>
											{/* <a
												href="#"
												className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
												aria-label="Twitter"
											>
												<FaXTwitter className="size-6" />
											</a> */}
											{/* <a
												href="#"
												className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
												aria-label="LinkedIn"
											>
												<BiLogoLinkedinSquare className="size-6" />
											</a> */}
											{/* <a
												href="#"
												className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
												aria-label="YouTube"
											>
												<BiLogoYoutube className="size-6" />
											</a> */}
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</ConditionalRender>
			</AnimatePresence>
		</section>
	);
}

export default Navbar;
