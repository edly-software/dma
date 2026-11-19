"use client";
import { ContactDrawer } from "./contact-drawer";
import { Play, X, ArrowUpRight } from "lucide-react";
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
			className="pointer-events-none h-full w-full object-cover object-center"
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
			className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 p-4 md:p-8"
			onClick={onClose}
		>
			<div
				className="relative w-full max-w-5xl"
				onClick={(e) => e.stopPropagation()}
			>
				<div className="mb-3 flex items-center justify-between text-xs text-white/80">
					<span className="font-mono uppercase tracking-[0.14em]">
						DerMobileAufbereiter — Arbeitsprobe
					</span>
					<button
						type="button"
						onClick={onClose}
						className="inline-flex cursor-pointer items-center gap-1.5 text-xs font-medium text-white/70 transition-colors hover:text-white"
					>
						<X className="h-4 w-4" />
						Schließen
					</button>
				</div>
				<div className="overflow-hidden rounded-xl border border-white/15 bg-black">
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
	);
}

const specs = [
	{ index: "01", label: "Einsatzgebiet", value: "Memmingen & Umgebung" },
	{ index: "02", label: "Arbeitsweise", value: "100 % Mobil vor Ort" },
	{ index: "03", label: "Zeitaufwand", value: "Ab ca. 120 Minuten" },
	{ index: "04", label: "Konditionen", value: "Festpreise ab 75 €" },
];

export function Hero() {
	const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

	return (
		<section className="w-full bg-[#F6F5F2] text-[#0B0B0C]">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Top Editorial Meta Strip */}
				<div className="flex flex-wrap items-center justify-between gap-4 border-b border-black/[0.08] py-4 text-xs">
					<span className="font-mono uppercase tracking-[0.14em] text-[#6E6D68]">
						Mobile Fahrzeugaufbereitung — Vor-Ort-Service
					</span>
					<a
						href="https://g.co/kgs/RNBDcBy"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex items-center gap-1.5 font-mono text-xs font-medium text-[#0B0B0C] transition-opacity hover:opacity-70"
					>
						<span>5.0 ★ Google Bewertungen</span>
						<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>

				{/* Main Editorial Split */}
				<div className="grid items-end gap-10 py-14 md:py-20 lg:grid-cols-12 lg:gap-12 lg:py-24">
					<div className="lg:col-span-6">
						<h1 className="text-5xl leading-[0.98] font-bold tracking-[-0.035em] sm:text-6xl md:text-7xl xl:text-[5.25rem]">
							<span className="block text-[#9A9890]">Schmutz adè.</span>
							<span className="mt-1 block text-[#0B0B0C]">Glanz olè.</span>
						</h1>

						<h2 className="sr-only">
							Mobile Autoaufbereitung und Fahrzeugpflege in Memmingen
						</h2>

						<p className="mt-7 max-w-md text-base leading-relaxed text-[#52524E] sm:text-lg">
							Professionelle Innenraum-Tiefenreinigung, mehrstufige Lackpolitur
							und Keramikpflege — direkt vor Ihrer Tür in Memmingen und
							Umgebung.
						</p>

						<div className="mt-9 flex flex-wrap items-center gap-3">
							<ContactDrawer
								size="lg"
								variant="primary"
								label="Termin vereinbaren"
							/>
							<a
								href="#preise"
								className="inline-flex h-12 items-center justify-center rounded-full border border-[#0B0B0C]/20 px-6 text-sm font-medium text-[#0B0B0C] transition-colors hover:border-[#0B0B0C]"
							>
								Preisliste ansehen
							</a>
						</div>
					</div>

					{/* Clean Editorial Video Frame */}
					<div className="lg:col-span-6">
						<div className="overflow-hidden rounded-xl bg-[#0B0B0C]">
							<div className="aspect-[16/10] w-full overflow-hidden">
								<HeroVideo />
							</div>
						</div>
						<div className="mt-3 flex items-center justify-between text-xs text-[#6E6D68]">
							<span className="font-mono uppercase tracking-[0.12em]">
								Fig. 01 — Innen- & Lackaufbereitung vor Ort
							</span>
							<button
								type="button"
								onClick={() => setIsVideoModalOpen(true)}
								className="inline-flex cursor-pointer items-center gap-1.5 font-medium text-[#0B0B0C] transition-opacity hover:opacity-70"
							>
								<Play className="h-3 w-3 fill-current" />
								<span>Video mit Ton abspielen</span>
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Exposed Hairline Spec Bar */}
			<div className="border-y border-black/[0.08]">
				<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-2 divide-y divide-black/[0.08] sm:grid-cols-4 sm:divide-x sm:divide-y-0">
						{specs.map((spec, idx) => (
							<div
								key={spec.index}
								className={`py-5 ${
									idx > 0 ? "sm:pl-6" : ""
								} ${idx < 3 ? "sm:pr-6" : ""}`}
							>
								<span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#6E6D68]">
									{spec.index} / {spec.label}
								</span>
								<span className="mt-1 block text-sm font-semibold text-[#0B0B0C] sm:text-base">
									{spec.value}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>

			{isVideoModalOpen && (
				<VideoModal onClose={() => setIsVideoModalOpen(false)} />
			)}
		</section>
	);
}
