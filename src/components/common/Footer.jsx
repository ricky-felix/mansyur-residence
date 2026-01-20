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
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-700 text-white"
		>
			<div className="container mx-auto">
				<div className="lg:flex lg:items-start lg:justify-between lg:gap-16">
					<div className="max-w-2xl">
						<h1 className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl">
							Mulai hidup pintar hari ini
						</h1>
						<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
							Bergabunglah dengan komunitas penghuni Mansyur Residence yang
							terus berkembang
						</p>
					</div>
					<div className="mt-8 flex flex-wrap gap-5 md:mt-10 lg:mt-0 lg:flex-nowrap">
						<Button title="Jadwalkan" className="text-base px-8 py-6">
							Jadwalkan
						</Button>
						<Button
							title="Unduh"
							variant="secondary"
							className="text-base px-8 py-6"
						>
							Unduh
						</Button>
					</div>
				</div>
				<div className="py-16 md:py-20 lg:py-24">
					<div className="h-px w-full bg-black opacity-20" />
				</div>
				<div className="mb-16 grid grid-cols-2 items-start gap-x-12 gap-y-12 md:mb-20 md:gap-y-14 lg:mb-24 lg:grid-cols-4 lg:gap-x-16">
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em]">
							Halaman
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="/"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Beranda
								</a>
							</li>
							<li>
								<a
									href="/residents"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
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
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em]">
							Residents
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="/residents#pricing"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Harga Unit
								</a>
							</li>
							<li>
								<a
									href="/residents#comparison"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Bandingkan Unit
								</a>
							</li>
							<li>
								<a
									href="/gallery"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Tur Virtual
								</a>
							</li>
							<li>
								<a
									href="/contact-us"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Tanya Sekarang
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em]">
							Fasilitas
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="/#amenities"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Kolam Infinity
								</a>
							</li>
							<li>
								<a
									href="/#amenities"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Pusat Kebugaran
								</a>
							</li>
							<li>
								<a
									href="/#amenities"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Sky Lounge
								</a>
							</li>
							<li>
								<a
									href="/#amenities"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									Parkir Pintar
								</a>
							</li>
						</ul>
					</div>
					<div className="flex flex-col items-start justify-start">
						<h2 className="mb-4 text-base font-semibold tracking-[-0.01em]">
							Kontak
						</h2>
						<ul className="space-y-3">
							<li>
								<a
									href="tel:+62614567890"
									className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80 hover:opacity-100 transition-opacity duration-200"
								>
									+62 61 4567 8900
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
								<span className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80">
									Jl. Diponegoro No. 45, Medan
								</span>
							</li>
							<li>
								<span className="text-sm leading-[1.6] tracking-[-0.01em] opacity-80">
									Sumatera Utara 20111
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
							src="https://d22po4pjz3o32e.cloudfront.net/logo-image.svg"
							alt="Mansyur Residence Logo"
							className="mb-8 inline-block sm:mb-0 h-10"
						/>
					</a>
				</div>
				<div className="h-px w-full bg-black opacity-20" />
				<div className="flex flex-col-reverse items-start gap-6 pb-4 pt-8 sm:flex-row sm:items-center sm:justify-between md:pb-0 md:pt-10">
					<div className="flex flex-col-reverse items-start md:flex-row md:gap-8 lg:items-center">
						<p className="text-base leading-[1.6] tracking-[-0.01em] opacity-70">
							© 2025 Mansyur Residence. All rights reserved.
						</p>
					</div>
					<div className="flex items-center justify-center gap-5">
						<a
							href="#"
							className="transition-opacity hover:opacity-60 duration-200"
						>
							<BiLogoFacebookCircle className="size-7" />
						</a>
						<a
							href="#"
							className="transition-opacity hover:opacity-60 duration-200"
						>
							<BiLogoInstagram className="size-7" />
						</a>
						<a
							href="#"
							className="transition-opacity hover:opacity-60 duration-200"
						>
							<FaXTwitter className="size-7 p-0.5" />
						</a>
						<a
							href="#"
							className="transition-opacity hover:opacity-60 duration-200"
						>
							<BiLogoLinkedinSquare className="size-7" />
						</a>
						<a
							href="#"
							className="transition-opacity hover:opacity-60 duration-200"
						>
							<BiLogoYoutube className="size-7" />
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}

export default Footer;
