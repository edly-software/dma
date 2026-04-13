"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { ContactDrawer } from "@/components/contact-drawer";
import { Play, X } from "lucide-react";
import { useState, useEffect } from "react";

// ── Autoplay video ─────────────────────────────────────────────────────────────

function HeroVideo() {
	return (
		<video
			src="/test.mp4"
			loop
			muted
			autoPlay
			playsInline
			preload="auto"
			className="pointer-events-none w-full h-full object-cover object-top"
		/>
	);
}

// ── Modal ──────────────────────────────────────────────────────────────────────

function VideoModal({ onClose }: { onClose: () => void }) {
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") onClose();
		};
		document.addEventListener("keydown", onKey);
		document.body.style.overflow = "hidden";
		return () => {
			document.removeEventListener("keydown", onKey);
			document.body.style.overflow = "";
		};
	}, [onClose]);

	return (
		<div
			className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
			onClick={onClose}
		>
			<div className="absolute inset-0 bg-black/80 backdrop-blur-sm" />
			<div
				className="relative w-full max-w-5xl"
				onClick={(e) => e.stopPropagation()}
			>
				<button
					onClick={onClose}
					className="absolute -top-10 right-0 flex items-center gap-1.5 text-white/60 hover:text-white text-sm transition-colors"
				>
					<X className="h-4 w-4" />
					Schließen
				</button>

				<div
					className="rounded-[2rem] p-[5px]"
					style={{
						background:
							"linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.10) 100%)",
						boxShadow:
							"0 24px 64px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.08) inset",
					}}
				>
					<div className="rounded-[1.6rem] overflow-hidden bg-black">
						<video
							src="/test.mp4"
							controls
							autoPlay
							playsInline
							className="w-full aspect-video"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

// ── Hero ───────────────────────────────────────────────────────────────────────

export function Hero() {
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

	return (
		<section
			className="relative w-full min-h-screen overflow-hidden text-white"
			style={{ backgroundColor: "#050508" }}
		>
			{/* Dot grid background */}
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>

			{/* Radial vignette — fades dots out toward edges */}
			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #050508 100%)",
				}}
			/>

			{/* Content */}
			<div className="relative z-10 container mx-auto px-4 md:px-6 min-h-screen flex items-center">
				<div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 w-full py-24">

					{/* Left: Text */}
					<motion.div
						className="flex-1 text-center lg:text-left"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					>
						<p className="text-sm xl:text-base font-semibold tracking-[0.2em] uppercase text-white/40 mb-4">
							DerMobileAufbereiter
						</p>

						<div className="inline-flex items-center gap-2 px-3 xl:px-4 py-1 xl:py-1.5 rounded-full bg-white/10 border border-white/20 mb-8 md:mb-10 backdrop-blur-sm">
							<div className="h-2 w-2 bg-cyan-400 rounded-full animate-pulse" />
							<span className="text-sm xl:text-base text-white/70 tracking-wide">
								Mobile Aufbereitung
							</span>
						</div>

						<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-black mb-6 tracking-tight leading-tight">
							<span className="text-white/40 line-through decoration-red-500 decoration-[3px]">
								Schmutz adè
							</span>
							<br />
							<span
								className="bg-clip-text text-transparent"
								style={{
									backgroundImage:
										"linear-gradient(to right, #93c5fd, #67e8f9, #ffffff)",
								}}
							>
								Glanz olè!
							</span>
						</h1>
						
						{/* SEO-optimized subtitle for accessibility and search engines */}
						<h2 className="sr-only">Mobile Autoaufbereitung und Fahrzeugpflege in Memmingen</h2>

						<p className="text-base sm:text-lg xl:text-xl 2xl:text-2xl text-white/60 mb-8 leading-relaxed font-light max-w-xl xl:max-w-2xl">
							Professionelle Innen- und Außenaufbereitung –{" "}
							<span className="text-white font-medium">direkt vor deiner Tür.</span>{" "}
							Wir kommen zu dir nach Memmingen und Umgebung.
						</p>

						<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
							<ContactDrawer secondary={false} />
							<Button
								variant="secondary"
								size="lg"
								className="flex gap-2 text-sm xl:text-base w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/25 text-white hover:text-white shadow-lg transition-all duration-200 backdrop-blur-sm"
								asChild
							>
								<a href="#preise">
									<BanknotesIcon className="w-5 h-5" />
									<span>Preisliste ansehen</span>
								</a>
							</Button>
						</div>
					</motion.div>

					{/* Right: Video card */}
					<motion.div
						className="flex-1 xl:flex-[1.3] w-full max-w-lg lg:max-w-none"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
					>
						{/* Outer border */}
						<div
							className="relative w-full aspect-video rounded-[2rem] p-[5px]"
							style={{
								background:
									"linear-gradient(145deg, rgba(255,255,255,0.18) 0%, rgba(255,255,255,0.04) 60%, rgba(255,255,255,0.10) 100%)",
								boxShadow:
									"0 8px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.08) inset",
							}}
						>
							{/* Inner border */}
							<div
								className="relative w-full h-full rounded-[1.6rem] overflow-hidden"
								style={{
									background: "rgba(0,0,0,0.4)",
									boxShadow: "0 0 0 1px rgba(255,255,255,0.10) inset",
								}}
							>
								<HeroVideo />
							</div>
						</div>

						{/* Modal trigger */}
						<div className="mt-4 flex justify-center lg:justify-start">
							<button
								onClick={() => setIsVideoModalOpen(true)}
								className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/15 border border-white/20 text-white/80 hover:text-white text-sm font-medium transition-all backdrop-blur-sm"
							>
								<Play className="h-3.5 w-3.5 fill-current" />
								Video abspielen
							</button>
						</div>
					</motion.div>

				</div>
			</div>

			{isVideoModalOpen && (
				<VideoModal onClose={() => setIsVideoModalOpen(false)} />
			)}
		</section>
	);
}
