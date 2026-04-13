"use client";

import { IconBrandGoogle, IconBrandInstagram, IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Compare } from "@/components/ui/compare";

// ── Data ──────────────────────────────────────────────────────────────────────

const beforeAfterPairs = [
	{ before: "/images/oro_before.png",            after: "/images/oro_after.png" },
	{ before: "/images/liviu_before.png",          after: "/images/liviu_after.png" },
	{ before: "/images/michelle_before.png",       after: "/images/michelle_after.png" },
	{ before: "/images/weiterer_kunde_before.png", after: "/images/weiterer_kunde_after.png" },
	{ before: "/images/weiter_before.png",         after: "/images/weiter_after.png" },
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

// ── Stacked before/after carousel ────────────────────────────────────────────

function BeforeAfterStack() {
	const [active, setActive] = useState(0);

	const handleNext = () => setActive((p) => (p + 1) % beforeAfterPairs.length);
	const handlePrev = () => setActive((p) => (p - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);

	const randomRotate = () => Math.floor(Math.random() * 21) - 10;

	return (
		<div className="flex flex-col items-center gap-6">
			{/* Stacked cards */}
			<div className="relative h-72 w-72 md:h-96 md:w-96">
				<AnimatePresence>
					{beforeAfterPairs.map((pair, index) => (
						<motion.div
							key={pair.before}
							initial={{ opacity: 0, scale: 0.9, rotate: randomRotate() }}
							animate={{
								opacity: index === active ? 1 : 0.6,
								scale: index === active ? 1 : 0.95,
								rotate: index === active ? 0 : randomRotate(),
								zIndex: index === active ? 40 : beforeAfterPairs.length - index,
								y: index === active ? [0, -12, 0] : 0,
							}}
							exit={{ opacity: 0, scale: 0.9 }}
							transition={{ duration: 0.4, ease: "easeInOut" }}
							className="absolute inset-0 origin-bottom"
						>
							<Compare
								firstImage={pair.before}
								secondImage={pair.after}
								firstImageClassName="object-cover object-left-top"
								secondImageClassname="object-cover object-left-top"
								className="h-full w-full rounded-3xl"
								slideMode="hover"
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>

			{/* Nav + counter */}
			<div className="flex items-center gap-4">
				<button
					onClick={handlePrev}
					className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
				>
					<IconArrowLeft className="h-5 w-5 text-neutral-700 transition-transform group-hover:rotate-12" />
				</button>
				<span className="text-sm text-neutral-400 font-mono tabular-nums">
					{active + 1} / {beforeAfterPairs.length}
				</span>
				<button
					onClick={handleNext}
					className="group flex h-9 w-9 items-center justify-center rounded-full bg-neutral-100 hover:bg-neutral-200 transition-colors"
				>
					<IconArrowRight className="h-5 w-5 text-neutral-700 transition-transform group-hover:-rotate-12" />
				</button>
			</div>

			<p className="text-xs text-neutral-400 tracking-wide uppercase">
				Hover zum Vergleichen
			</p>
		</div>
	);
}

// ── Section ───────────────────────────────────────────────────────────────────

export function Reviews() {
	return (
		<section className="container mx-auto px-4 py-16 md:py-24">

			{/* Header */}
			<div className="text-center mb-12 md:mb-16">
				<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-100 border border-neutral-200 mb-4">
					<div className="h-2 w-2 bg-blue-500 rounded-full" />
					<span className="text-sm text-neutral-500 tracking-wide">Galerie</span>
				</div>
				<h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 text-neutral-900">
					Unsere Arbeit
				</h2>
				<p className="text-lg text-neutral-500 max-w-xl mx-auto">
					Vorher & Nachher sowie Eindrücke aus unseren Aufbereitungen.
				</p>
			</div>

			{/* Main layout: stacked cards + photo grid */}
			<div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start max-w-6xl mx-auto">

				{/* Left: before/after stack */}
				<div className="flex-shrink-0 flex justify-center lg:justify-start w-full lg:w-auto">
					<BeforeAfterStack />
				</div>

				{/* Right: image grid */}
				<div className="flex-1 columns-2 sm:columns-3 gap-3 space-y-3">
					{galleryImages.map((src, i) => (
						<div
							key={src}
							className="break-inside-avoid rounded-2xl overflow-hidden bg-neutral-100"
						>
							<img
								src={src}
								alt={`Professionelle Autoaufbereitung in Memmingen - Vorher Nachher Ergebnis ${i + 1}`}
								className="w-full h-auto object-cover hover:scale-105 transition-transform duration-500"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>

			{/* Social CTAs */}
			<div className="flex flex-col sm:flex-row gap-4 justify-center mt-14">
				<a
					href="https://g.co/kgs/RNBDcBy"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-neutral-200 hover:border-blue-400 hover:shadow-md text-neutral-800 font-medium transition-all duration-200 group"
				>
					<IconBrandGoogle className="h-5 w-5 text-blue-500" />
					Google Bewertungen ansehen
				</a>
				<a
					href="https://instagram.com/dermobileaufbereiter"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-white border-2 border-neutral-200 hover:border-pink-400 hover:shadow-md text-neutral-800 font-medium transition-all duration-200 group"
				>
					<IconBrandInstagram className="h-5 w-5 text-pink-500" />
					Instagram besuchen
				</a>
			</div>
		</section>
	);
}
