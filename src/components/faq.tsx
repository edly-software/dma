"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import { ContactDrawer } from "./contact-drawer";

const processSteps = [
	{
		step: "01",
		title: "Anfrage & Termin",
		description:
			"Nennen Sie uns Ihr Fahrzeugmodell, das gewünschte Paket und 2–3 mögliche Termine per WhatsApp, Telefon oder E-Mail.",
	},
	{
		step: "02",
		title: "Vor-Ort-Service",
		description:
			"Wir kommen direkt zu Ihnen nach Hause oder an Ihren Arbeitsplatz in Memmingen und Umgebung – ohne Anfahrts- oder Wartezeit für Sie.",
	},
	{
		step: "03",
		title: "Fertigstellung",
		description:
			"Ihr Fahrzeug wird direkt vor Ort gründlich gereinigt, aufbereitet oder poliert und im frisch gepflegten Zustand übergeben.",
	},
];

const faqs = [
	{
		question: "Wie lange dauert eine mobile Aufbereitung?",
		answer:
			"Die Dauer richtet sich nach dem gewählten Paket und dem Zustand des Fahrzeugs. Eine komplette Innenreinigung dauert ca. 120 Minuten, während eine 1- oder 2-stufige Lackpolitur inklusive Innenreinigung entsprechend mehr Zeit für ein sauberes Finish benötigt.",
	},
	{
		question: "Muss vor Ort Strom und Wasser bereitgestellt werden?",
		answer:
			"Für unsere Reinigungs- und Poliergeräte benötigen wir vor Ort in der Regel Zugang zu einer normalen Steckdose (230V). Alle Details zu den Gegebenheiten klären wir unkompliziert vorab bei der Terminvereinbarung.",
	},
	{
		question: "Kommen Sie auch an den Arbeitsplatz oder nach Hause?",
		answer:
			"Ja. Unser mobiler Service ist darauf ausgelegt, dorthin zu kommen, wo Ihr Fahrzeug steht – ob in der privaten Einfahrt, im Hof oder auf dem Firmenparkplatz in Memmingen und Umgebung. Wir benötigen lediglich ausreichend Platz rund um das Fahrzeug.",
	},
	{
		question: "Wie erfolgt die Terminvereinbarung?",
		answer:
			"Am schnellsten erreichen Sie uns direkt per WhatsApp oder telefonisch unter 0176 43190053 sowie per E-Mail. Teilen Sie uns einfach Ihr Fahrzeugmodell und die gewünschte Leistung mit.",
	},
];

export function FAQ() {
	const [openIndex, setOpenIndex] = useState<number | null>(0);

	return (
		<section
			id="faq"
			className="scroll-mt-16 bg-[#F6F5F2] py-20 text-[#0B0B0C] md:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Editorial Section Header */}
				<div className="grid gap-6 pb-14 lg:grid-cols-12 lg:items-end lg:pb-16">
					<div className="lg:col-span-4">
						<span className="font-mono text-xs uppercase tracking-[0.14em] text-[#6E6D68]">
							04 — Ablauf & FAQ
						</span>
					</div>
					<div className="lg:col-span-8">
						<h2 className="text-3xl leading-[1.06] font-bold tracking-[-0.03em] sm:text-5xl">
							Drei Schritte zum gepflegten Fahrzeug.
						</h2>
					</div>
				</div>

				{/* 3-Step Hairline Grid */}
				<div className="grid divide-y divide-black/[0.08] border-y border-black/[0.08] md:grid-cols-3 md:divide-x md:divide-y-0">
					{processSteps.map((item, idx) => (
						<div
							key={item.step}
							className={`py-8 ${idx > 0 ? "md:pl-8" : ""} ${
								idx < 2 ? "md:pr-8" : ""
							}`}
						>
							<span className="font-mono text-xs uppercase tracking-[0.12em] text-[#6E6D68]">
								Schritt {item.step}
							</span>
							<h3 className="mt-3 text-xl font-bold tracking-[-0.02em] text-[#0B0B0C]">
								{item.title}
							</h3>
							<p className="mt-2 text-sm leading-relaxed text-[#52524E]">
								{item.description}
							</p>
						</div>
					))}
				</div>

				{/* FAQ Split */}
				<div className="mt-20 grid gap-10 lg:grid-cols-12 lg:gap-12">
					<div className="lg:col-span-4">
						<span className="font-mono text-xs uppercase tracking-[0.14em] text-[#6E6D68]">
							Häufige Fragen
						</span>
						<h3 className="mt-3 text-2xl font-bold tracking-[-0.025em] text-[#0B0B0C]">
							Wichtige Hinweise vorab.
						</h3>
						<p className="mt-3 text-sm leading-relaxed text-[#52524E]">
							Ihre Frage ist nicht dabei? Kontaktieren Sie uns direkt per
							Telefon oder WhatsApp für eine kurze Beratung.
						</p>
						<div className="mt-6">
							<ContactDrawer
								variant="outline"
								size="default"
								label="Direkt anfragen"
							/>
						</div>
					</div>

					<div className="lg:col-span-8">
						<div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
							{faqs.map((faq, index) => {
								const isOpen = openIndex === index;
								return (
									<div key={faq.question}>
										<button
											type="button"
											onClick={() => setOpenIndex(isOpen ? null : index)}
											className="flex w-full cursor-pointer items-center justify-between gap-6 py-5 text-left"
										>
											<span className="text-base font-semibold text-[#0B0B0C] sm:text-lg">
												{faq.question}
											</span>
											<span className="flex h-6 w-6 shrink-0 items-center justify-center text-[#6E6D68]">
												{isOpen ? (
													<Minus className="h-4 w-4 text-[#0B0B0C]" />
												) : (
													<Plus className="h-4 w-4" />
												)}
											</span>
										</button>
										<AnimatePresence initial={false}>
											{isOpen && (
												<motion.div
													initial={{ height: 0, opacity: 0 }}
													animate={{ height: "auto", opacity: 1 }}
													exit={{ height: 0, opacity: 0 }}
													transition={{ duration: 0.2, ease: "easeOut" }}
													className="overflow-hidden"
												>
													<div className="pb-6 pr-8 text-sm leading-relaxed text-[#52524E] sm:text-base">
														{faq.answer}
													</div>
												</motion.div>
											)}
										</AnimatePresence>
									</div>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
