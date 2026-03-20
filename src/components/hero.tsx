"use client";
import { motion, AnimatePresence } from "motion/react";
import { Button } from "@/components/ui/button";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { ContactDrawer } from "@/components/contact-drawer";
import { useState, useEffect } from "react";

const heroImages = [
	"/images/IMG-20260227-WA0030.jpg",
	"/images/IMG-20260320-WA0022.jpg",
	"/images/IMG-20260320-WA0019.jpg",
	"/images/IMG-20260320-WA0024.jpg",
	"/images/IMG-20260320-WA0027.jpg",
	"/images/IMG-20260320-WA0021.jpg",
];

export function Hero() {
	const [currentIndex, setCurrentIndex] = useState(0);

	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentIndex((prev) => (prev + 1) % heroImages.length);
		}, 4000);
		return () => clearInterval(interval);
	}, []);

	return (
		<section className="relative w-full min-h-screen overflow-hidden bg-black">
			{/* Slideshow background */}
			<AnimatePresence mode="sync">
				<motion.div
					key={currentIndex}
					initial={{ opacity: 0, scale: 1.05 }}
					animate={{ opacity: 1, scale: 1 }}
					exit={{ opacity: 0 }}
					transition={{ duration: 1.2, ease: "easeInOut" }}
					className="absolute inset-0"
				>
					<img
						src={heroImages[currentIndex]}
						alt="Auto Aufbereitung"
						className="w-full h-full object-cover"
					/>
				</motion.div>
			</AnimatePresence>

			{/* Gradient overlays */}
			<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/80" />
			<div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/20" />

			{/* Content */}
			<div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6 py-24">
				<motion.div
					initial={{ opacity: 0, y: 40 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					className="max-w-4xl mx-auto"
				>
					{/* Motto */}
					<div className="mb-8 space-y-2">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.3, duration: 0.7 }}
							className="flex items-center justify-center gap-3"
						>
							<span className="text-4xl sm:text-5xl md:text-7xl font-black text-gray-400/70 line-through decoration-red-500 decoration-[3px] tracking-tight">
								Schmutz adè
							</span>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.5, duration: 0.7 }}
						>
							<span className="text-4xl sm:text-5xl md:text-7xl font-black tracking-tight bg-gradient-to-r from-blue-300 via-cyan-200 to-white bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(147,210,255,0.5)]">
								Glanz olè!
							</span>
						</motion.div>
					</div>

					{/* Divider */}
					<motion.div
						initial={{ scaleX: 0 }}
						animate={{ scaleX: 1 }}
						transition={{ delay: 0.7, duration: 0.6 }}
						className="w-24 h-0.5 bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mb-6"
					/>

					{/* Subtitle */}
					<motion.p
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.8, duration: 0.6 }}
						className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed"
					>
						Professionelle Innen- und Außenaufbereitung –{" "}
						<span className="text-white font-medium">direkt vor deiner Tür.</span>
					</motion.p>

					{/* CTAs */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ delay: 1, duration: 0.5 }}
						className="flex flex-col sm:flex-row gap-4 justify-center items-center"
					>
						<ContactDrawer secondary={false} />
						<Button
							variant={"secondary"}
							size={"lg"}
							className="flex gap-2 text-sm sm:text-md w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white hover:text-white shadow-lg hover:shadow-xl transition-all duration-200 backdrop-blur-sm"
							asChild
						>
							<a href="#preise">
								<BanknotesIcon className="w-5 h-5" />
								<span>Preisliste ansehen</span>
							</a>
						</Button>
					</motion.div>
				</motion.div>

				{/* Slide indicators */}
				<motion.div
					initial={{ opacity: 0 }}
					animate={{ opacity: 1 }}
					transition={{ delay: 1.2 }}
					className="absolute bottom-8 flex gap-2 items-center"
				>
					{heroImages.map((_, i) => (
						<button
							key={i}
							onClick={() => setCurrentIndex(i)}
							className={`h-1.5 rounded-full transition-all duration-500 ${
								i === currentIndex
									? "bg-white w-8"
									: "bg-white/30 w-2 hover:bg-white/60"
							}`}
							aria-label={`Bild ${i + 1}`}
						/>
					))}
				</motion.div>
			</div>
		</section>
	);
}
