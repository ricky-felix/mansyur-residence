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
import React from "react";
import { BiEnvelope, BiMap, BiPhone } from "react-icons/bi";
import { RxChevronRight } from "react-icons/rx";

export function ContactForm() {
	return (
		<section
			id="relume"
			className="px-[5%] py-16 md:py-24 lg:py-28 bg-primary-200"
		>
			<div className="container mx-auto">
				<div className="rb-12 mb-8 max-w-lg md:mb-12">
					<p className="mb-3 font-semibold md:mb-4">Hubungi</p>
					<h2 className="rb-5 mb-5 text-5xl font-bold md:mb-6 md:text-7xl lg:text-8xl">
						Kirim pesan
					</h2>
					<p className="md:text-md">
						Isi formulir di bawah untuk informasi lebih lanjut
					</p>
				</div>
				<div className="grid auto-cols-fr grid-cols-1 gap-x-12 gap-y-12 md:grid-cols-[1fr_1fr] md:gap-y-16 lg:gap-x-20">
					<form className="grid grid-cols-1 grid-rows-[auto_auto] gap-6">
						<div className="grid grid-cols-2 gap-6">
							<div className="grid w-full items-center">
								<Label htmlFor="firstName" className="mb-2">
									Nama depan
								</Label>
								<Input type="text" id="firstName" />
							</div>
							<div className="grid w-full items-center">
								<Label htmlFor="lastName" className="mb-2">
									Nama belakang
								</Label>
								<Input type="text" id="lastName" />
							</div>
						</div>
						<div className="grid grid-cols-1 gap-6 md:grid-cols-2">
							<div className="grid w-full items-center">
								<Label htmlFor="email" className="mb-2">
									Email
								</Label>
								<Input type="email" id="email" />
							</div>
							<div className="grid w-full items-center">
								<Label htmlFor="phone" className="mb-2">
									Nomor telepon
								</Label>
								<Input type="text" id="phone" />
							</div>
						</div>
						<div className="grid w-full items-center">
							<Label className="mb-2">Tipe unit</Label>
							<Select>
								<SelectTrigger>
									<SelectValue placeholder="Pilih unit" />
								</SelectTrigger>
								<SelectContent>
									<SelectItem value="first-choice">First Choice</SelectItem>
									<SelectItem value="second-choice">Second Choice</SelectItem>
									<SelectItem value="third-choice">Third Choice</SelectItem>
								</SelectContent>
							</Select>
						</div>
						<div className="grid w-full items-center py-3 md:py-4">
							<Label className="mb-3 md:mb-4">Apa kepentingan anda?</Label>
							<RadioGroup className="grid grid-cols-2 gap-x-6 gap-y-3.5">
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="first-choice" id="first-choice" />
									<Label htmlFor="first-choice">Studio</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="second-choice" id="second-choice" />
									<Label htmlFor="second-choice">Dua kamar</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="third-choice" id="third-choice" />
									<Label htmlFor="third-choice">Profesional</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="fourth-choice" id="fourth-choice" />
									<Label htmlFor="fourth-choice">Keluarga</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="fifth-choice" id="fifth-choice" />
									<Label htmlFor="fifth-choice">Investor</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="other" id="other" />
									<Label htmlFor="other">Lainnya</Label>
								</div>
							</RadioGroup>
						</div>
						<div className="grid w-full items-center">
							<Label htmlFor="message" className="mb-2">
								Pesan
							</Label>
							<Textarea
								id="message"
								placeholder="Tulis pesan anda"
								className="min-h-[12.25rem] overflow-auto"
							/>
						</div>
						<div className="mb-3 flex items-center space-x-2 text-sm md:mb-4">
							<Checkbox id="terms" />
							<Label htmlFor="terms" className="cursor-pointer">
								Saya setuju dengan syarat
							</Label>
						</div>
						<div>
							<Button title="Kirim">Kirim</Button>
						</div>
					</form>
					<div className="mb-auto grid gap-x-4 gap-y-10 py-2 sm:grid-cols-2">
						<div>
							<div className="mb-3 md:mb-4">
								<BiEnvelope className="size-8" />
							</div>
							<h3 clssName="mb-2 text-md font-bold leading-[1.4] md:text-xl">
								Email
							</h3>
							<p className="mb-2">Hubungi kami melalui email</p>
							<a className="underline" href="#">
								hello@relume.io
							</a>
						</div>
						<div>
							<div className="mb-3 md:mb-4">
								<BiPhone className="size-8" />
							</div>
							<h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
								Telepon
							</h3>
							<p className="mb-2">Hubungi tim penjualan kami</p>
							<a className="underline" href="#">
								+62 (61) 8888-8888
							</a>
						</div>
						<div>
							<div className="mb-3 md:mb-4">
								<BiMap className="size-8" />
							</div>
							<h3 className="mb-2 text-md font-bold leading-[1.4] md:text-xl">
								Kantor
							</h3>
							<p className="mb-2">Jl. Mansyur No. 123, Medan 20112</p>
							<div className="mt-5 md:mt-6">
								<Button
									title="Lihat lokasi"
									variant="link"
									size="link"
									iconRight={<RxChevronRight />}
								>
									Lihat lokasi
								</Button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}

export default ContactForm;
