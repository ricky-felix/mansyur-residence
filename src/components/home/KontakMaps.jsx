"use client";

import { Button } from "@relume_io/relume-ui";
import React, { useRef } from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";
import { motion, useInView } from "framer-motion";

export function KontakMaps() {
	const ref = useRef(null);
	const isInView = useInView(ref, { once: true, margin: "-100px" });

	return (
		<section
			id="contact"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-700 text-white"
			ref={ref}
		>
			<div className="container mx-auto">
				<motion.div
					className="rb-12 mb-12 max-w-lg md:mb-18 lg:mb-20"
					initial={{ opacity: 0, y: 30 }}
					animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
					transition={{ duration: 0.6, ease: "easeOut" }}
				>
					<p className="mb-3 font-semibold md:mb-4">Hubungi</p>
					<h2 className="rb-5 mb-5 text-3xl font-bold md:mb-6 md:text-4xl lg:text-5xl">
						Jadwalkan kunjungan anda
					</h2>
					<p className="md:text-md">
						Tim kami siap membantu anda menemukan unit yang sempurna
					</p>
				</motion.div>
				<div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[0.5fr_1fr] md:gap-x-20 md:gap-y-16">
					<div className="grid auto-cols-fr grid-cols-1 gap-x-4 gap-y-10">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
							transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
							className="group"
						>
							<motion.div
								className="mb-3 md:mb-4"
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ duration: 0.3 }}
							>
								<BiEnvelope className="size-8" aria-hidden="true" />
							</motion.div>
							<h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
								Email
							</h3>
							<p className="mb-2">Kirim pesan langsung ke kami</p>
							<a
								className="underline underline-offset-2 transition-all duration-200 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black rounded-sm"
								href="mailto:hello@relume.io"
								aria-label="Email hello@relume.io"
							>
								hello@relume.io
							</a>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
							transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
							className="group"
						>
							<motion.div
								className="mb-3 md:mb-4"
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ duration: 0.3 }}
							>
								<BiPhone className="size-8" aria-hidden="true" />
							</motion.div>
							<h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
								Telepon
							</h3>
							<p className="mb-2">Hubungi tim penjualan kami</p>
							<a
								className="underline underline-offset-2 transition-all duration-200 hover:underline-offset-4 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-black rounded-sm"
								href="tel:+62614567890"
								aria-label="Telepon +62 61 4567 8900"
							>
								+62 61 4567 8900
							</a>
						</motion.div>
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -30 }}
							transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
							className="group"
						>
							<motion.div
								className="mb-3 md:mb-4"
								whileHover={{ scale: 1.1, rotate: 5 }}
								transition={{ duration: 0.3 }}
							>
								<BiMap className="size-8" aria-hidden="true" />
							</motion.div>
							<h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
								Kantor
							</h3>
							<p className="mb-2">
								Jalan Diponegoro No. 45, Medan, Sumatera Utara 20111
							</p>
							<div className="mt-5 md:mt-6">
								<motion.div
									whileHover={{ x: 5 }}
									transition={{ duration: 0.2 }}
								>
									<Button
										title="Dapatkan arah"
										variant="link"
										size="link"
										iconRight={<RxChevronRight />}
										className="text-primary-100 hover:text-primary-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
										aria-label="Dapatkan arah ke Mansyur Residence"
									>
										Dapatkan arah
									</Button>
								</motion.div>
							</div>
						</motion.div>
					</div>
					<motion.div
						className="w-full overflow-hidden rounded-lg"
						initial={{ opacity: 0, scale: 0.95 }}
						animate={
							isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }
						}
						transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
					>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.0176876408453!2d98.6567891!3d3.5851399!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30312f6c48c6e25b%3A0x21d48a8b5c8e8b1b!2sJl.%20Dr.%20Mansyur%2C%20Medan!5e0!3m2!1sen!2sid!4v1705000000000!5m2!1sen!2sid"
							style={{ border: 0 }}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Lokasi Mansyur Residence"
							className="w-full h-[300px] sm:h-[350px] md:h-[450px] lg:h-[500px]"
						/>
					</motion.div>
				</div>
			</div>
		</section>
	);
}

export default KontakMaps;
