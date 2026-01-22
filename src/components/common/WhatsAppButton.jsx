import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaWhatsapp } from "react-icons/fa6";

/**
 * WhatsAppButton - A floating WhatsApp chat button component
 *
 * Features:
 * - Fixed position in bottom-right corner
 * - Smooth hover animations with Framer Motion
 * - Tooltip label that appears on hover
 * - Responsive design with mobile-friendly sizing
 * - Direct link to WhatsApp with pre-configured phone number
 *
 * @component
 */
export function WhatsAppButton() {
	const [isHovered, setIsHovered] = useState(false);

	// WhatsApp phone number (format: country code without + or spaces)
	const phoneNumber = "6285358565679";
	const message = "Halo, saya tertarik dengan Mansyur Residence. Bisakah Anda memberikan informasi lebih lanjut?";

	// Generate WhatsApp link with pre-filled message
	const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

	return (
		<div className="fixed bottom-6 right-6 z-50">
			<motion.a
				href={whatsappLink}
				target="_blank"
				rel="noopener noreferrer"
				className="relative flex items-center justify-center"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				whileHover={{ scale: 1.1 }}
				whileTap={{ scale: 0.95 }}
				initial={{ opacity: 0, y: 20 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.3 }}
				aria-label="Chat with us on WhatsApp"
			>
				{/* Tooltip label */}
				<AnimatePresence>
					{isHovered && (
						<motion.div
							initial={{ opacity: 0, x: 10 }}
							animate={{ opacity: 1, x: 0 }}
							exit={{ opacity: 0, x: 10 }}
							transition={{ duration: 0.2 }}
							className="absolute right-full mr-3 px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg shadow-lg whitespace-nowrap"
						>
							Chat with us
							{/* Arrow pointer */}
							<div className="absolute top-1/2 right-0 transform translate-x-full -translate-y-1/2">
								<div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[6px] border-l-gray-900" />
							</div>
						</motion.div>
					)}
				</AnimatePresence>

				{/* WhatsApp button with pulsing effect */}
				<motion.div
					className="relative w-14 h-14 md:w-16 md:h-16 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:shadow-xl transition-shadow"
					animate={{
						boxShadow: isHovered
							? "0 20px 25px -5px rgba(37, 211, 102, 0.3), 0 10px 10px -5px rgba(37, 211, 102, 0.2)"
							: "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
					}}
				>
					{/* Pulsing ring effect */}
					<motion.div
						className="absolute inset-0 bg-[#25D366] rounded-full opacity-75"
						animate={{
							scale: [1, 1.2, 1],
							opacity: [0.75, 0, 0.75],
						}}
						transition={{
							duration: 2,
							repeat: Infinity,
							ease: "easeInOut",
						}}
					/>

					{/* WhatsApp icon */}
					<FaWhatsapp className="text-white text-3xl md:text-4xl relative z-10" />
				</motion.div>
			</motion.a>
		</div>
	);
}
