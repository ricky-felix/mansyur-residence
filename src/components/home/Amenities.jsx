"use client";

import { Button } from "@relume_io/relume-ui";
import React from "react";
import { RxChevronRight } from "react-icons/rx";

export function Amenities() {
	return (
		<section id="amenities" className="px-[5%] py-24 md:py-32 lg:py-40">
			<div className="container mx-auto">
				<div className="mx-auto mb-16 w-full max-w-2xl text-center md:mb-20 lg:mb-24">
					<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] opacity-60 md:mb-5">Fasilitas</p>
					<h1 className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl">
						Amenities kelas dunia
					</h1>
					<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
						Nikmati berbagai fasilitas premium yang dirancang untuk kenyamanan
						maksimal
					</p>
				</div>
				<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10 lg:grid-cols-3">
					<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10">
						<div className="flex flex-col border-2 border-border-primary rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<div className="mb-6 md:mb-7">
									<img
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-14"
										alt="Relume logo 1"
									/>
								</div>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em]">
									Lounge di langit
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">Pemandangan kota Medan yang spektakuler dari ketinggian</p>
								<div className="mt-6 md:mt-7">
									<Button
										title="Jelajahi"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700"
									>
										Jelajahi
									</Button>
								</div>
							</div>
						</div>
						<div className="flex flex-col border-2 border-border-primary rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">Unggulan</p>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em]">
									Kolam renang infinity
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Berenang dengan latar belakang cakrawala kota yang menawan
								</p>
								<div className="mt-6 md:mt-7">
									<Button
										title="Lihat"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700"
									>
										Lihat
									</Button>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center self-start">
								<img
									src="https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=600&h=400&fit=crop"
									alt="Luxury infinity pool with city skyline view"
									className="w-full"
								/>
							</div>
						</div>
					</div>
					<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10">
						<div className="flex flex-col border-2 border-border-primary rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">Teknologi</p>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em]">
									Pusat kebugaran modern
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">Peralatan terkini untuk gaya hidup sehat dan aktif anda</p>
								<div className="mt-6 md:mt-7">
									<Button
										title="Lihat"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700"
									>
										Lihat
									</Button>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center self-start">
								<img
									src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=400&fit=crop"
									alt="Modern fitness center with state-of-the-art equipment"
									className="w-full"
								/>
							</div>
						</div>
						<div className="flex flex-col border-2 border-border-primary rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<div className="mb-6 md:mb-7">
									<img
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-14"
										alt="Relume logo 2"
									/>
								</div>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em]">
									Ruang kerja bersama
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">Lingkungan produktif untuk profesional dan entrepreneur</p>
								<div className="mt-6 md:mt-7">
									<Button
										title="Lihat"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700"
									>
										Lihat
									</Button>
								</div>
							</div>
						</div>
					</div>
					<div className="grid auto-cols-fr grid-cols-1 gap-8 md:gap-10">
						<div className="flex flex-col border-2 border-border-primary rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<div className="mb-6 md:mb-7">
									<img
										src="https://d22po4pjz3o32e.cloudfront.net/relume-icon.svg"
										className="size-14"
										alt="Relume logo 3"
									/>
								</div>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em]">
									Parkir pintar otomatis
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Sistem parkir canggih dengan teknologi terdepan untuk
									kemudahan anda
								</p>
								<div className="mt-6 md:mt-7">
									<Button
										title="Lihat"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700"
									>
										Lihat
									</Button>
								</div>
							</div>
						</div>
						<div className="flex flex-col border-2 border-border-primary rounded-sm overflow-hidden transition-all duration-300 hover:shadow-2xl hover:-translate-y-1">
							<div className="flex flex-1 flex-col justify-center p-8 md:p-10">
								<p className="mb-3 text-sm font-semibold uppercase tracking-[0.2em] opacity-60">Inovasi</p>
								<h2 className="mb-4 text-xl font-bold md:mb-5 md:text-2xl leading-[1.2] tracking-[-0.02em]">
									Fitur pintar untuk kehidupan modern
								</h2>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">Rumah yang mendengarkan dan merespons kebutuhan anda</p>
								<div className="mt-6 md:mt-7">
									<Button
										title="Lihat"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-600 hover:text-primary-700"
									>
										Lihat
									</Button>
								</div>
							</div>
							<div className="flex w-full flex-col items-center justify-center self-start">
								<img
									src="https://images.unsplash.com/photo-1558002038-1055907df827?w=600&h=400&fit=crop"
									alt="Smart home technology control panel"
									className="w-full"
								/>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default Amenities;
