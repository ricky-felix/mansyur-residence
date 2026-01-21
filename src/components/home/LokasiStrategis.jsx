"use client";

import React, { Fragment } from "react";

export function LokasiStrategis() {
	return (
		<section
			id="location"
			className="overflow-hidden px-[5%] py-24 md:py-32 lg:py-40 bg-secondary-200"
		>
			<div className="container mx-auto">
				<div className="mb-16 md:mb-20 lg:mb-24">
					<div className="w-full max-w-2xl">
						<p className="mb-4 text-xs font-bold uppercase tracking-[0.2em] opacity-60 md:mb-5">
							Lokasi
						</p>
						<h2 className="mb-6 text-3xl font-bold leading-[1.1] tracking-[-0.02em] md:mb-7 md:text-4xl lg:text-5xl">
							Jantung kota dengan akses ke semua yang penting
						</h2>
						<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
							Mansyur Residence berdiri di lokasi strategis Medan, menghubungkan
							anda dengan pusat bisnis, pendidikan, dan hiburan. Setiap tempat
							yang anda butuhkan hanya beberapa menit perjalanan.
						</p>
					</div>
				</div>
				<div className="relative grid auto-cols-fr grid-flow-row grid-cols-1 items-center justify-items-center md:grid-flow-col md:grid-cols-[max-content_1fr] md:justify-items-stretch">
					<div className="relative hidden md:grid md:grid-cols-1 md:items-end md:gap-4">
						<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
							<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
						</div>
					</div>
					<div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
						<Fragment>
							<div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
								<img
									src="https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=400&h=400&fit=crop"
									alt="Modern airport terminal building"
									className="aspect-square w-full object-cover"
								/>
							</div>
							<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
								<div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
								<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
							</div>
							<div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
								<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
									Bandara
								</h3>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Kualanamu International Airport berjarak 25 kilometer dari
									residens
								</p>
							</div>
						</Fragment>
					</div>
					<div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
						<Fragment>
							<div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
								<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
									Pusat
								</h3>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Pusat perbelanjaan dan bisnis utama hanya 3 kilometer dari
									sini
								</p>
							</div>
							<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
								<div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
								<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
							</div>
							<div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
								<img
									src="https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=400&h=400&fit=crop"
									alt="Shopping mall and business district"
									className="aspect-square w-full object-cover"
								/>
							</div>
						</Fragment>
					</div>
					<div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
						<Fragment>
							<div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
								<img
									src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=400&h=400&fit=crop"
									alt="Modern hospital building exterior"
									className="aspect-square w-full object-cover"
								/>
							</div>
							<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
								<div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
								<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
							</div>
							<div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
								<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
									Rumah
								</h3>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Rumah sakit terkemuka dan klinik modern tersedia dalam jarak 2
									kilometer
								</p>
							</div>
						</Fragment>
					</div>
					<div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
						<Fragment>
							<div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none md:self-end">
								<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
									Sekolah
								</h3>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Institusi pendidikan berkualitas internasional berada 4
									kilometer dari lokasi
								</p>
							</div>
							<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
								<div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
								<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full" />
							</div>
							<div className="col-end-2 row-end-2 mb-8 self-start overflow-hidden md:col-end-auto md:row-end-auto md:mb-0 md:mr-10">
								<img
									src="https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=400&h=400&fit=crop"
									alt="International school campus"
									className="aspect-square w-full object-cover"
								/>
							</div>
						</Fragment>
					</div>
					<div className="relative grid w-full auto-cols-fr grid-cols-[0.5fr_max-content_1fr] items-start gap-4 sm:w-auto md:grid-cols-1 md:grid-rows-[1fr_max-content_1fr] md:items-end">
						<Fragment>
							<div className="mb-8 overflow-hidden md:mb-0 md:mr-10">
								<img
									src="https://images.unsplash.com/photo-1585320806297-9794b3e4eeae?w=400&h=400&fit=crop"
									alt="Beautiful city park with greenery"
									className="aspect-square w-full object-cover"
								/>
							</div>
							<div className="flex size-full flex-col items-center md:h-auto md:flex-row">
								<div className="z-20 size-[0.9375rem] flex-none rounded-full bg-black shadow-[0_0_0_8px_white]" />
								<div className="h-full w-[3px] bg-black md:h-[3px] md:w-full hidden md:block" />
							</div>
							<div className="order-last mb-4 flex flex-col items-start self-start pr-4 sm:mb-0 md:order-none">
								<h3 className="mb-3 text-xl font-bold md:text-2xl lg:text-3xl leading-[1.2] tracking-[-0.02em]">
									Taman
								</h3>
								<p className="text-base md:text-lg leading-[1.7] tracking-[-0.01em] opacity-90">
									Ruang hijau dan rekreasi publik dapat diakses dalam 1
									kilometer
								</p>
							</div>
						</Fragment>
					</div>
					<div className="absolute right-0 z-0 h-1 w-16 bg-gradient-to-r from-transparent to-white hidden md:block" />
				</div>
			</div>
		</section>
	);
}

export default LokasiStrategis;
