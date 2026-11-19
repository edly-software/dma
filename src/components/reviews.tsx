"use client";

import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { AnimatePresence, motion } from "motion/react";
import { useState, useEffect } from "react";
import { Compare } from "@/components/ui/compare";
import { X, ArrowUpRight } from "lucide-react";

const beforeAfterPairs = [
	{
		id: "01",
		title: "Tiefenreinigung & Polster",
		before: "/images/oro_before.png",
		after: "/images/oro_after.png",
	},
	{
		id: "02",
		title: "Cockpit & Fußraum",
		before: "/images/liviu_before.png",
		after: "/images/liviu_after.png",
	},
	{
		id: "03",
		title: "Sitz- & Teppichaufbereitung",
		before: "/images/michelle_before.png",
		after: "/images/michelle_after.png",
	},
	{
		id: "04",
		title: "Kompletter Innenraum",
		before: "/images/weiterer_kunde_before.png",
		after: "/images/weiterer_kunde_after.png",
	},
	{
		id: "05",
		title: "Detail- & Oberflächenpflege",
		before: "/images/weiter_before.png",
		after: "/images/weiter_after.png",
	},
];

const galleryImages = [
	"/images/IMG-20260320-WA0013.jpg",
	"/images/IMG-20260320-WA0014.jpg",
	"/images/IMG-20260320-WA0015.jpg",
	"/images/IMG-20260320-WA0016.jpg",
	"/images/IMG-20260320-WA0019.jpg",
	"/images/IMG-20260320-WA0021.jpg",
	"/images/IMG-20260320-WA0022.jpg",
	"/images/IMG-20260320-WA0024.jpg",
	"/images/IMG-20260320-WA0025.jpg",
	"/images/IMG-20260320-WA0027.jpg",
	"/images/IMG-20260320-WA0028.jpg",
	"/images/IMG-20260320-WA0029.jpg",
	"/images/IMG-20260227-WA0030.jpg",
];

function BeforeAfterStudio() {
	const [active, setActive] = useState(0);

	const handleNext = () => setActive((p) => (p + 1) % beforeAfterPairs.length);
	const handlePrev = () =>
		setActive((p) => (p - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);

	const activePair = beforeAfterPairs[active];

	return (
		<div className="flex flex-col justify-between">
			<div>
				<div className="mb-4 flex items-center justify-between border-b border-black/[0.08] pb-3">
					<div>
						<span className="font-mono text-xs uppercase tracking-[0.12em] text-[#6E6D68]">
							Vergleich {activePair.id} / 05 — {activePair.title}
						</span>
					</div>
					<div className="flex items-center gap-1.5">
						<button
							type="button"
							onClick={handlePrev}
							className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-black/15 text-[#0B0B0C] transition-colors hover:border-black"
							aria-label="Vorheriges Bild"
						>
							<IconArrowLeft className="h-3.5 w-3.5" />
						</button>
						<button
							type="button"
							onClick={handleNext}
							className="flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border border-black/15 text-[#0B0B0C] transition-colors hover:border-black"
							aria-label="Nächstes Bild"
						>
							<IconArrowRight className="h-3.5 w-3.5" />
						</button>
					</div>
				</div>

				<div className="relative aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#0B0B0C]">
					<Compare
						key={activePair.before}
						firstImage={activePair.before}
						secondImage={activePair.after}
						firstImageClassName="object-cover object-center"
						secondImageClassname="object-cover object-center"
						className="h-full w-full"
						slideMode="drag"
					/>
				</div>
			</div>

			<div className="mt-4 flex flex-wrap items-center justify-between gap-3">
				<div className="flex items-center gap-1">
					{beforeAfterPairs.map((pair, idx) => (
						<button
							key={pair.id}
							type="button"
							onClick={() => setActive(idx)}
							className={`h-7 cursor-pointer rounded px-2.5 font-mono text-xs transition-colors ${
								idx === active
									? "bg-[#0B0B0C] text-[#F6F5F2]"
									: "text-[#6E6D68] hover:text-[#0B0B0C]"
							}`}
						>
							{pair.id}
						</button>
					))}
				</div>
				<span className="font-mono text-[11px] uppercase tracking-wider text-[#6E6D68]">
					Regler ziehen
				</span>
			</div>
		</div>
	);
}

export function Reviews() {
	const [showAll, setShowAll] = useState(false);
	const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

	const visibleImages = showAll ? galleryImages : galleryImages.slice(0, 6);

	useEffect(() => {
		if (lightboxIndex === null) return;
		const onKey = (e: KeyboardEvent) => {
			if (e.key === "Escape") setLightboxIndex(null);
			if (e.key === "ArrowRight")
				setLightboxIndex((i) =>
					i !== null ? (i + 1) % galleryImages.length : null,
				);
			if (e.key === "ArrowLeft")
				setLightboxIndex((i) =>
					i !== null
						? (i - 1 + galleryImages.length) % galleryImages.length
						: null,
				);
		};
		document.addEventListener("keydown", onKey);
		return () => document.removeEventListener("keydown", onKey);
	}, [lightboxIndex]);

	return (
		<section
			id="bewertungen"
			className="scroll-mt-16 border-b border-black/[0.08] bg-[#F6F5F2] py-20 text-[#0B0B0C] md:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Editorial Section Header */}
				<div className="grid gap-6 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
					<div className="lg:col-span-4">
						<span className="font-mono text-xs uppercase tracking-[0.14em] text-[#6E6D68]">
							03 — Referenzen
						</span>
					</div>
					<div className="flex flex-col justify-between gap-6 lg:col-span-8 md:flex-row md:items-end">
						<div>
							<h2 className="text-3xl leading-[1.06] font-bold tracking-[-0.03em] sm:text-5xl">
								Ergebnisse am Kundenfahrzeug.
							</h2>
							<p className="mt-3 max-w-xl text-base text-[#52524E]">
								Unbearbeitete Vorher-Nachher-Vergleiche und Dokumentationen
								unserer Aufbereitungen in Memmingen.
							</p>
						</div>

						<div className="flex flex-wrap items-center gap-5 text-xs font-medium">
							<a
								href="https://g.co/kgs/RNBDcBy"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-1 border-b border-black/30 pb-0.5 text-[#0B0B0C] transition-colors hover:border-black"
							>
								<span>Google Bewertungen (5.0 ★)</span>
								<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</a>
							<a
								href="https://instagram.com/dermobileaufbereiter"
								target="_blank"
								rel="noopener noreferrer"
								className="group inline-flex items-center gap-1 border-b border-black/30 pb-0.5 text-[#0B0B0C] transition-colors hover:border-black"
							>
								<span>Instagram</span>
								<ArrowUpRight className="h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
							</a>
						</div>
					</div>
				</div>

				{/* 12-Column Editorial Split */}
				<div className="grid gap-12 lg:grid-cols-12">
					{/* Left: Vorher / Nachher */}
					<div className="lg:col-span-5">
						<BeforeAfterStudio />
					</div>

					{/* Right: Clean Architectural Archive Grid */}
					<div className="lg:col-span-7">
						<div className="mb-4 flex items-center justify-between border-b border-black/[0.08] pb-3">
							<span className="font-mono text-xs uppercase tracking-[0.12em] text-[#6E6D68]">
								Arbeitsarchiv — Memmingen
							</span>
							<span className="font-mono text-xs text-[#6E6D68]">
								{visibleImages.length} / {galleryImages.length} Aufnahmen
							</span>
						</div>

						<div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
							{visibleImages.map((src, i) => (
								<button
									key={src}
									type="button"
									onClick={() => setLightboxIndex(i)}
									className="group relative aspect-[4/3] cursor-pointer overflow-hidden rounded-lg bg-[#E6E4DC] text-left"
								>
									<img
										src={src}
										alt={`Autoaufbereitung Memmingen – Ergebnis ${i + 1}`}
										className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
										loading="lazy"
									/>
									<span className="absolute bottom-2 left-2 rounded bg-black/65 px-1.5 py-0.5 font-mono text-[10px] text-white opacity-0 transition-opacity group-hover:opacity-100">
										{String(i + 1).padStart(2, "0")}
									</span>
								</button>
							))}
						</div>

						<div className="mt-5 flex justify-end">
							<button
								type="button"
								onClick={() => setShowAll((s) => !s)}
								className="cursor-pointer font-mono text-xs uppercase tracking-[0.12em] text-[#0B0B0C] underline underline-offset-4 transition-opacity hover:opacity-70"
							>
								{showAll
									? "Ansicht reduzieren"
									: `Alle ${galleryImages.length} Aufnahmen anzeigen`}
							</button>
						</div>
					</div>
				</div>
			</div>

			{/* Lightbox Modal */}
			<AnimatePresence>
				{lightboxIndex !== null && (
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
						onClick={() => setLightboxIndex(null)}
					>
						<div
							className="relative w-full max-w-4xl"
							onClick={(e) => e.stopPropagation()}
						>
							<div className="mb-3 flex items-center justify-between text-xs text-white/80">
								<span className="font-mono">
									Aufnahme {String(lightboxIndex + 1).padStart(2, "0")} /{" "}
									{galleryImages.length}
								</span>
								<button
									type="button"
									onClick={() => setLightboxIndex(null)}
									className="inline-flex cursor-pointer items-center gap-1.5 text-xs text-white/70 hover:text-white"
								>
									<X className="h-4 w-4" />
									Schließen
								</button>
							</div>

							<div className="relative overflow-hidden rounded-xl bg-black">
								<img
									src={galleryImages[lightboxIndex]}
									alt={`Ergebnis ${lightboxIndex + 1}`}
									className="max-h-[78vh] w-full object-contain"
								/>

								<button
									type="button"
									onClick={() =>
										setLightboxIndex(
											(lightboxIndex - 1 + galleryImages.length) %
												galleryImages.length,
										)
									}
									className="absolute top-1/2 left-3 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
									aria-label="Vorheriges Bild"
								>
									<IconArrowLeft className="h-4 w-4" />
								</button>
								<button
									type="button"
									onClick={() =>
										setLightboxIndex((lightboxIndex + 1) % galleryImages.length)
									}
									className="absolute top-1/2 right-3 flex h-9 w-9 -translate-y-1/2 cursor-pointer items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black"
									aria-label="Nächstes Bild"
								>
									<IconArrowRight className="h-4 w-4" />
								</button>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</section>
	);
}
