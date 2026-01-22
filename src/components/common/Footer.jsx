"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import {
	BiLogoFacebookCircle,
	BiLogoInstagram,
	BiLogoLinkedinSquare,
	BiLogoYoutube,
} from "react-icons/bi";
import { FaXTwitter } from "react-icons/fa6";

export function Footer() {
	return (
		<footer
			id="footer"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-gradient-to-br from-primary-800 via-primary-700 to-primary-900 text-white relative overflow-hidden"
		>
			<div className="absolute inset-0 bg-gradient-to-t from-primary-900/50 to-transparent pointer-events-none" />
			<div className="container mx-auto relative z-10">
				<div className="lg:flex lg:items-start lg:justify-between lg:gap-16">
					<div className="max-w-2xl">
						<h1 className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl drop-shadow-md">
							Mulai hidup pintar hari ini
						</h1>
						<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] text-white/90">
							Bergabunglah dengan komunitas penghuni Mansyur Residence yang
							terus berkembang
						</p>
					</div>
					<div className="mt-8 flex flex-wrap gap-5 md:mt-10 lg:mt-0 lg:flex-nowrap">
						<a href="/kontak">
							<Button
								title="Jadwalkan"
								className="px-8 py-4 text-base font-semibold bg-gradient-to-r from-secondary-500 to-secondary-600 hover:from-secondary-600 hover:to-secondary-700 text-primary-900 transition-all duration-300 hover:shadow-xl hover:shadow-secondary-500/30 hover:-translate-y-0.5"
							>
								Jadwalkan
							</Button>
						</a>
						<a
							href="/documents/Mansyur_Residence_E-Brosur.pdf"
							target="_blank"
							rel="noopener noreferrer"
						>
							<Button
								title="Unduh"
								variant="secondary"
								className="px-8 py-4 text-base font-semibold bg-white/10 hover:bg-white/20 text-white border-2 border-white/30 hover:border-white/50 backdrop-blur-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5"
							>
								Unduh
							</Button>
						</a>
					</div>
				</div>
				<div className="py-16 md:py-20 lg:py-24">
					<div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
				</div>
				<div className="mb-16 grid grid-cols-2 items-start gap-x-12 gap-y-12 md:mb-20 md:gap-y-14 lg:mb-24 lg:grid-cols-4 lg:gap-x-16">
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em] text-secondary-300">
							Halaman
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="/"
									className="text-sm leading-[1.6] tracking-[-0.01em] text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
								>
									Beranda
								</a>
							</li>
							<li>
								<a
									href="/residents"
									className="text-sm leading-[1.6] tracking-[-0.01em] text-white/70 hover:text-white hover:translate-x-1 inline-block transition-all duration-200"
								>
									Residents
								</a>
							</li>
							<li>
								<a
									href="/gallery"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Galeri
								</a>
							</li>
							<li>
								<a
									href="/contact-us"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Hubungi Kami
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em] text-secondary-300">
							Residents
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="/resident"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Harga Unit
								</a>
							</li>
							<li>
								<a
									href="/resident"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Bandingkan Unit
								</a>
							</li>
							<li>
								<a
									href="/resident"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Tur Virtual
								</a>
							</li>
							<li>
								<a
									href="/resident"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Tanya Sekarang
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em] text-secondary-300">
							Fasilitas
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="/gallery"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Kolam Infinity
								</a>
							</li>
							<li>
								<a
									href="/gallery"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Pusat Kebugaran
								</a>
							</li>
							<li>
								<a
									href="/gallery"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Sky Lounge
								</a>
							</li>
							<li>
								<a
									href="/gallery"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Parkir Pintar
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em] text-secondary-300">
							Kontak
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="tel:+6285358565679"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									+62-853-5856-5679
								</a>
							</li>
							<li>
								<a
									href="mailto:info@mansyurresidence.com"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									info@mansyurresidence.com
								</a>
							</li>
							<li>
								<span className="text-sm leading-[1.6] tracking-[-0.01em] text-white/70">
									Jl. Dr. Mansyur No.165, Tj. Rejo, Kec. Medan Sunggal, Kota
									Medan, Sumatera Utara 20154, Indonesia
								</span>
							</li>
						</ul>
					</div>
				</div>
				<div className="col-span-1 flex flex-col items-start justify-between pb-8 sm:flex-row sm:items-center md:pb-10 lg:col-span-2">
					<a
						href="/"
						className="transition-opacity hover:opacity-80 duration-200"
					>
						<img
							src="./images/Mansyur_Residence_Logo.webp"
							alt="Mansyur Residence Logo"
							className="mb-8 inline-block sm:mb-0 h-16 md:h-20 w-auto"
						/>
					</a>
				</div>
				<div className="h-px w-full bg-gradient-to-r from-transparent via-white/30 to-transparent" />
				<div className="flex flex-col-reverse items-start gap-6 pb-4 pt-8 sm:flex-row sm:items-center sm:justify-between md:pb-0 md:pt-10">
					<div className="flex flex-col-reverse items-start md:flex-row md:gap-8 lg:items-center">
						<p className="text-base leading-[1.6] tracking-[-0.01em] text-white/60">
							© 2026 Mansyur Residence. All rights reserved.
						</p>
					</div>
					<div className="flex items-center justify-center gap-5">
						<a
							href="https://web.facebook.com/p/mansyurresidence-100063528183662/?_rdc=1&_rdr"
							className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
							aria-label="Facebook"
						>
							<BiLogoFacebookCircle className="size-6" />
						</a>
						<a
							href="https://www.instagram.com/mansyur.residence/"
							className="transition-all duration-200 hover:scale-110 hover:text-primary-600 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-primary-500 rounded-sm"
							aria-label="Instagram"
						>
							<BiLogoInstagram className="size-6" />
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
		</footer>
	);
}

export default Footer;
