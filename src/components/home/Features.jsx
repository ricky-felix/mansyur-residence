"use client";

import React from "react";
import { BiCog, BiLeaf, BiShield, BiWifi } from "react-icons/bi";

export function Features() {
	const features = [
		{
			title: "Otomasi cerdas",
			description:
				"Pencahayaan, suhu, dan sistem keamanan merespons kehadiran anda secara otomatis. Tidak perlu lagi memikirkan detail kecil yang menghabiskan waktu.",
			topOffset: "30%",
			icon: BiCog,
		},
		{
			title: "Efisiensi energi",
			description:
				"Manajemen daya pintar mengurangi konsumsi listrik hingga empat puluh persen. Tagihan lebih rendah sambil menjaga planet tetap sehat.",
			topOffset: "32%",
			icon: BiLeaf,
		},
		{
			title: "Perlindungan maksimal",
			description:
				"Pantau akses masuk dan keluar secara real-time dengan teknologi IoT terdepan. Keamanan keluarga anda adalah prioritas utama kami.",
			topOffset: "34%",
			icon: BiShield,
		},
		{
			title: "Konektivitas sempurna",
			description:
				"WiFi berkecepatan tinggi dan integrasi aplikasi memastikan anda selalu terhubung. Kelola apartemen dari mana saja, kapan saja.",
			topOffset: "36%",
			icon: BiWifi,
		},
	];

	return (
		<section
			id="relume"
			className="px-[5%] py-24 md:py-32 lg:py-40 bg-primary-200"
		>
			<div className="container mx-auto">
				<div className="grid grid-cols-1 items-start gap-y-20 md:grid-flow-row md:grid-cols-2 md:gap-x-20 lg:gap-x-28">
					<div className="static md:sticky md:top-[25%] space-y-8">
						<p className="text-sm font-semibold uppercase tracking-[0.2em] opacity-60">
							Fitur
						</p>
						<h2 className="text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:text-4xl lg:text-5xl">
							Apartemen yang beradaptasi dengan kehidupan anda
						</h2>
						<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
							Mansyur Residence bukan sekadar tempat tinggal. Ini adalah rumah
							yang memahami apa yang anda butuhkan, kapan anda membutuhkannya.
							Teknologi bekerja di latar belakang, membuat hidup lebih mudah dan
							lebih aman.
						</p>
					</div>
					<div className="space-y-8 md:space-y-10">
						{features.map((feature) => {
							const IconComponent = feature.icon;
							return (
								<div
									key={feature.title}
									className="group sticky border-2 border-border-primary bg-primary-300 p-10 md:p-12 transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 rounded-sm"
									style={{ top: feature.topOffset }}
								>
									<div className="mb-6 md:mb-7 transition-transform duration-300 group-hover:scale-110 group-hover:rotate-3 inline-block">
										<IconComponent
											className="size-14 md:size-16"
											aria-hidden="true"
										/>
									</div>
									<h3 className="mb-5 text-xl font-bold md:text-2xl leading-[1.2] tracking-[-0.02em]">
										{feature.title}
									</h3>
									<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
										{feature.description}
									</p>
								</div>
							);
						})}
					</div>
				</div>
			</div>
		</section>
	);
}

export default Features;
