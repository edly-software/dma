"use client";
import { motion } from "motion/react";
import { Button } from "@/components/ui/button";
import { BanknotesIcon } from "@heroicons/react/24/outline";
import { ContactDrawer } from "./contact-drawer";
import { Play, Star, X } from "lucide-react";
import { useState, useEffect } from "react";

function HeroVideo() {
	return (
		<video
			src="/test.mp4"
			poster="/images/IMG-20260227-WA0030.jpg"
			loop
			muted
			autoPlay
			playsInline
			preload="metadata"
			className="pointer-events-none h-full w-full object-cover object-top"
		/>
	);
}

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
					className="absolute -top-10 right-0 flex items-center gap-1.5 text-sm text-white/60 transition-colors hover:text-white"
				>
					<X className="h-4 w-4" />
					Schließen
				</button>

				<div
					className="rounded-[2rem] p-[5px]"
					style={{
						background:
							"linear-gradient(145deg, rgba(147,197,253,0.35) 0%, rgba(255,255,255,0.06) 60%, rgba(103,232,249,0.25) 100%)",
						boxShadow:
							"0 24px 64px rgba(0,0,0,0.7), 0 1px 0 rgba(255,255,255,0.08) inset",
					}}
				>
					<div className="overflow-hidden rounded-[1.6rem] bg-black">
						<video
							src="/test.mp4"
							poster="/images/IMG-20260227-WA0030.jpg"
							controls
							autoPlay
							playsInline
							className="aspect-video w-full"
						/>
					</div>
				</div>
			</div>
		</div>
	);
}

export function Hero() {
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

	return (
		<section
			className="relative w-full min-h-screen overflow-hidden text-white"
			style={{ backgroundColor: "#050508" }}
		>
			<div
				className="absolute inset-0"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255,255,255,0.12) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>

			<div
				className="absolute inset-0"
				style={{
					background:
						"radial-gradient(ellipse 80% 80% at 50% 50%, transparent 40%, #050508 100%)",
				}}
			/>

			<div className="relative z-10 container mx-auto flex min-h-screen items-center px-4 md:px-6">
				<div className="flex w-full flex-col items-center gap-10 py-24 lg:flex-row lg:gap-16">
					<motion.div
						className="flex-1 text-center lg:text-left"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, ease: [0.4, 0, 0.2, 1] }}
					>
						<p className="mb-4 text-sm font-semibold uppercase tracking-[0.2em] text-cyan-300/80 xl:text-base">
							DerMobileAufbereiter
						</p>

						<a
							href="https://g.co/kgs/RNBDcBy"
							target="_blank"
							rel="noopener noreferrer"
							className="mb-6 inline-flex items-center gap-2 rounded-full border border-cyan-300/30 bg-cyan-400/10 px-3 py-1.5 text-sm text-cyan-200 backdrop-blur-sm transition hover:bg-cyan-400/20 xl:px-4"
						>
							<Star className="h-3.5 w-3.5 fill-current" />
							<span className="tracking-wide">Google Bewertungen ansehen</span>
						</a>

						<div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 backdrop-blur-sm md:mb-10 xl:px-4 xl:py-1.5">
							<div className="h-2 w-2 animate-pulse rounded-full bg-cyan-400" />
							<span className="text-sm tracking-wide text-white/70 xl:text-base">
								Mobile Aufbereitung
							</span>
						</div>

						<h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl">
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

						<h2 className="sr-only">
							Mobile Autoaufbereitung und Fahrzeugpflege in Memmingen
						</h2>

						<p className="mb-8 max-w-xl text-base font-light leading-relaxed text-white/60 sm:text-lg xl:max-w-2xl xl:text-xl 2xl:text-2xl">
							Professionelle Innenaufbereitung –{" "}
							<span className="font-medium text-white">direkt vor deiner Tür.</span>{" "}
							Wir kommen zu dir nach Memmingen und Umgebung.
						</p>

						<div className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start">
							<ContactDrawer secondary={false} />
							<Button
								variant="secondary"
								size="lg"
								className="flex w-full gap-2 border border-white/25 bg-white/10 text-sm text-white shadow-lg backdrop-blur-sm transition-all duration-200 hover:bg-white/20 hover:text-white sm:w-auto xl:text-base"
								asChild
							>
								<a href="#preise">
									<BanknotesIcon className="h-5 w-5" />
									<span>Preisliste ansehen</span>
								</a>
							</Button>
						</div>
					</motion.div>

					<motion.div
						className="w-full max-w-lg flex-1 lg:max-w-none xl:flex-[1.3]"
						initial={{ opacity: 0, y: 32 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.3, ease: [0.4, 0, 0.2, 1] }}
					>
						<div
							className="relative aspect-video w-full rounded-[2rem] p-[5px]"
							style={{
								background:
									"linear-gradient(145deg, rgba(147,197,253,0.35) 0%, rgba(255,255,255,0.06) 60%, rgba(103,232,249,0.2) 100%)",
								boxShadow:
									"0 8px 32px rgba(0,0,0,0.6), 0 1px 0 rgba(255,255,255,0.08) inset",
							}}
						>
							<div
								className="relative h-full w-full overflow-hidden rounded-[1.6rem]"
								style={{
									background: "rgba(0,0,0,0.4)",
									boxShadow: "0 0 0 1px rgba(255,255,255,0.10) inset",
								}}
							>
								<HeroVideo />
							</div>
						</div>

						<div className="mt-4 flex justify-center lg:justify-start">
							<button
								onClick={() => setIsVideoModalOpen(true)}
								className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-medium text-white/80 backdrop-blur-sm transition-all hover:bg-white/15 hover:text-white"
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
