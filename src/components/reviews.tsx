"use client";

import { IconBrandGoogle, IconBrandInstagram, IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { motion, AnimatePresence } from "motion/react";
import { useMemo, useState } from "react";
import { Compare } from "@/components/ui/compare";
import { Star } from "lucide-react";

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

const cardRotations = [-6, 4, -3, 7, -5];

function BeforeAfterStack() {
	const [active, setActive] = useState(0);
	const rotations = useMemo(() => cardRotations, []);

	const handleNext = () => setActive((p) => (p + 1) % beforeAfterPairs.length);
	const handlePrev = () =>
		setActive((p) => (p - 1 + beforeAfterPairs.length) % beforeAfterPairs.length);

	return (
		<div className="flex flex-col items-center gap-6">
			<div className="relative h-72 w-72 md:h-96 md:w-96">
				<AnimatePresence>
					{beforeAfterPairs.map((pair, index) => (
						<motion.div
							key={pair.before}
							initial={{ opacity: 0, scale: 0.9, rotate: rotations[index] ?? 0 }}
							animate={{
								opacity: index === active ? 1 : 0.6,
								scale: index === active ? 1 : 0.95,
								rotate: index === active ? 0 : rotations[index] ?? 0,
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
								slideMode="drag"
							/>
						</motion.div>
					))}
				</AnimatePresence>
			</div>

			<div className="flex items-center gap-4">
				<button
					onClick={handlePrev}
					className="group flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft transition-colors hover:bg-brand"
					aria-label="Vorheriges Vorher-Nachher Bild"
				>
					<IconArrowLeft className="h-5 w-5 text-brand-ink transition-transform group-hover:rotate-12" />
				</button>
				<span className="font-mono text-sm tabular-nums text-neutral-400">
					{active + 1} / {beforeAfterPairs.length}
				</span>
				<button
					onClick={handleNext}
					className="group flex h-9 w-9 items-center justify-center rounded-full bg-brand-soft transition-colors hover:bg-brand"
					aria-label="Nächstes Vorher-Nachher Bild"
				>
					<IconArrowRight className="h-5 w-5 text-brand-ink transition-transform group-hover:-rotate-12" />
				</button>
			</div>

			<p className="text-xs uppercase tracking-wide text-neutral-400">
				Ziehen zum Vergleichen
			</p>
		</div>
	);
}

export function Reviews() {
	return (
		<section className="container mx-auto px-4 py-8 md:py-12">
			<div className="mb-10 flex justify-center md:mb-12">
				<a
					href="https://g.co/kgs/RNBDcBy"
					target="_blank"
					rel="noopener noreferrer"
					className="inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-2 text-sm font-semibold text-brand-ink transition hover:bg-brand"
				>
					<Star className="h-4 w-4 fill-brand text-brand" />
					Google Bewertungen ansehen
				</a>
			</div>

			<div className="mx-auto mb-12 max-w-3xl text-center md:mb-16">
				<div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-3 py-1">
					<div className="h-2 w-2 rounded-full bg-brand" />
					<span className="text-sm tracking-wide text-brand-ink/70">Galerie</span>
				</div>
				<h2 className="mb-4 text-2xl font-extrabold text-neutral-900 sm:text-3xl md:text-4xl">
					Unsere Arbeit
				</h2>
				<p className="mx-auto max-w-xl text-lg text-neutral-500">
					Vorher & Nachher sowie Eindrücke aus unseren Aufbereitungen.
				</p>
			</div>

			<div className="mx-auto flex max-w-6xl flex-col items-start gap-12 lg:flex-row lg:gap-16">
				<div className="flex w-full flex-shrink-0 justify-center lg:w-auto lg:justify-start">
					<BeforeAfterStack />
				</div>

				<div className="flex-1 columns-2 gap-3 space-y-3 sm:columns-3">
					{galleryImages.map((src, i) => (
						<div
							key={src}
							className="break-inside-avoid overflow-hidden rounded-2xl bg-neutral-100"
						>
							<img
								src={src}
								alt={`Professionelle Autoaufbereitung in Memmingen - Vorher Nachher Ergebnis ${i + 1}`}
								className="h-auto w-full object-cover transition-transform duration-500 hover:scale-105"
								loading="lazy"
							/>
						</div>
					))}
				</div>
			</div>

			<div className="mt-14 flex flex-col justify-center gap-4 sm:flex-row">
				<a
					href="https://g.co/kgs/RNBDcBy"
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-3 rounded-full border-2 border-neutral-200 bg-white px-6 py-3 font-medium text-neutral-800 transition-all duration-200 hover:border-brand hover:shadow-md"
				>
					<IconBrandGoogle className="h-5 w-5 text-brand" />
					Google Bewertungen ansehen
				</a>
				<a
					href="https://instagram.com/dermobileaufbereiter"
					target="_blank"
					rel="noopener noreferrer"
					className="group inline-flex items-center gap-3 rounded-full border-2 border-neutral-200 bg-white px-6 py-3 font-medium text-neutral-800 transition-all duration-200 hover:border-brand hover:shadow-md"
				>
					<IconBrandInstagram className="h-5 w-5 text-brand-ink" />
					Instagram besuchen
				</a>
			</div>
		</section>
	);
}
