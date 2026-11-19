"use client";

import { useState } from "react";
import { ContactDrawer } from "./contact-drawer";

const vehicleTypes = [
	{ id: "Kleinwagen", label: "Kleinwagen" },
	{ id: "Lim./Kombi", label: "Lim./Kombi" },
	{ id: "SUV", label: "SUV" },
	{ id: "7 Sitzer/TR", label: "7 Sitzer/TR" },
];

interface PricingCategory {
	id: string;
	index: string;
	name: string;
	description: string;
	duration: string;
	isPopular?: boolean;
	prices: Array<{ type: string; price: number }>;
	features: string[];
}

const pricingCategories: PricingCategory[] = [
	{
		id: "innenreinigung",
		index: "01",
		name: "Innenreinigung",
		description: "Komplette Innenraum-Tiefenreinigung",
		duration: "ca. 120 Min",
		isPopular: true,
		prices: [
			{ type: "Kleinwagen", price: 75 },
			{ type: "Lim./Kombi", price: 85 },
			{ type: "SUV", price: 95 },
			{ type: "7 Sitzer/TR", price: 105 },
		],
		features: [
			"Müllentsorgung",
			"Staubsaugen von Innenraum und Kofferraum",
			"Shampoonieren aller Polster, Teppiche und Fußmatten",
			"Aufbereitung und Pflege aller Kunststoff- und Verkleidungselemente",
			"Reinigung aller Innenraum-Scheiben",
			"Geruchsneutralisierung",
			"Leder- und Alcantara-Behandlung",
		],
	},
	{
		id: "1-stufig",
		index: "02",
		name: "1-Stufige Politur",
		description: "Professionelle Lackpolitur inkl. Innenreinigung",
		duration: "Inkl. Keramikpflege",
		isPopular: false,
		prices: [
			{ type: "Kleinwagen", price: 280 },
			{ type: "Lim./Kombi", price: 320 },
			{ type: "SUV", price: 360 },
			{ type: "7 Sitzer/TR", price: 400 },
		],
		features: [
			"Komplette Innenreinigung inklusive",
			"Gründliche Lackreinigung",
			"Politur Stufe 1 – leichte Swirls & Kratzer entfernen, Glanz auffrischen",
			"Lack entfetten",
			"Keramikpflege zum Lackschutz",
		],
	},
	{
		id: "2-stufig",
		index: "03",
		name: "2-Stufige Politur",
		description: "Premium-Lackkorrektur auf Hochglanz inkl. Innenreinigung",
		duration: "Inkl. Keramikpflege",
		isPopular: false,
		prices: [
			{ type: "Kleinwagen", price: 360 },
			{ type: "Lim./Kombi", price: 400 },
			{ type: "SUV", price: 440 },
			{ type: "7 Sitzer/TR", price: 480 },
		],
		features: [
			"Komplette Innenreinigung inklusive",
			"Gründliche Lackreinigung",
			"Politur Stufe 1 – starke Kratzer entfernen",
			"Politur Stufe 2 – Finish auf Hochglanz",
			"Lack entfetten",
			"Keramikpflege zum Lackschutz",
		],
	},
];

export default function PriceingSection() {
	const [selectedVehicle, setSelectedVehicle] = useState<string>("Kleinwagen");

	return (
		<section
			id="preise"
			className="scroll-mt-16 bg-[#0B0B0C] py-20 text-[#F6F5F2] md:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Editorial Section Header */}
				<div className="grid gap-8 pb-12 lg:grid-cols-12 lg:items-end lg:pb-16">
					<div className="lg:col-span-4">
						<span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D87]">
							02 — Preisliste
						</span>
					</div>
					<div className="flex flex-col justify-between gap-6 lg:col-span-8 xl:flex-row xl:items-end">
						<div>
							<h2 className="text-3xl leading-[1.06] font-bold tracking-[-0.03em] sm:text-5xl">
								Festpreise nach Fahrzeuggröße.
							</h2>
							<p className="mt-3 text-base text-[#A09F99]">
								Alle Preise verstehen sich inklusive Anfahrt in Memmingen.
							</p>
						</div>

						{/* Minimal Segmented Vehicle Selector */}
						<div
							role="tablist"
							aria-label="Fahrzeuggröße wählen"
							className="inline-grid grid-cols-2 gap-1 rounded-lg border border-white/15 bg-white/[0.03] p-1 sm:grid-cols-4"
						>
							{vehicleTypes.map((vt) => {
								const isActive = selectedVehicle === vt.id;
								return (
									<button
										key={vt.id}
										type="button"
										role="tab"
										aria-selected={isActive}
										onClick={() => setSelectedVehicle(vt.id)}
										className={`cursor-pointer rounded-md px-3 py-2 text-xs font-medium transition-colors ${
											isActive
												? "bg-[#F6F5F2] text-[#0B0B0C]"
												: "text-[#A09F99] hover:text-white"
										}`}
									>
										{vt.label}
									</button>
								);
							})}
						</div>
					</div>
				</div>

				{/* 3-Column Architectural Pricing Matrix */}
				<div className="grid divide-y divide-white/12 border border-white/12 lg:grid-cols-3 lg:divide-x lg:divide-y-0">
					{pricingCategories.map((category) => {
						const activePriceObj =
							category.prices.find((p) => p.type === selectedVehicle) ??
							category.prices[0];

						return (
							<div
								key={category.id}
								className="flex flex-col justify-between p-6 sm:p-8 lg:p-10"
							>
								<div>
									{/* Top Meta */}
									<div className="flex items-center justify-between gap-2">
										<span className="font-mono text-xs uppercase tracking-[0.12em] text-[#8E8D87]">
											Paket {category.index}
										</span>
										{category.isPopular ? (
											<span className="rounded-full bg-[#F6F5F2] px-2.5 py-0.5 font-mono text-[10px] font-semibold uppercase tracking-wider text-[#0B0B0C]">
												Meistgebucht
											</span>
										) : (
											<span className="font-mono text-[11px] text-[#8E8D87]">
												{category.duration}
											</span>
										)}
									</div>

									{/* Title & Description */}
									<h3 className="mt-4 text-2xl font-bold tracking-[-0.025em] text-[#F6F5F2]">
										{category.name}
									</h3>
									<p className="mt-1.5 text-sm text-[#A09F99]">
										{category.description}
									</p>

									{/* Active Price Display */}
									<div className="mt-8 flex items-baseline justify-between border-t border-white/12 pt-6">
										<div>
											<span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8E8D87]">
												{activePriceObj.type}
											</span>
											<span className="mt-1 block font-mono text-4xl font-bold tracking-tight text-[#F6F5F2] sm:text-5xl">
												{activePriceObj.price}&nbsp;€
											</span>
										</div>
										{category.duration && (
											<span className="font-mono text-xs text-[#8E8D87]">
												{category.duration}
											</span>
										)}
									</div>

									{/* All 4 Vehicle Sizes Row */}
									<div className="mt-6 grid grid-cols-4 divide-x divide-white/10 border border-white/10">
										{category.prices.map((priceItem) => {
											const isTierSelected = priceItem.type === selectedVehicle;
											return (
												<button
													key={priceItem.type}
													type="button"
													onClick={() => setSelectedVehicle(priceItem.type)}
													className={`cursor-pointer px-2 py-2.5 text-left transition-colors ${
														isTierSelected
															? "bg-white/12 text-[#F6F5F2]"
															: "bg-transparent text-[#8E8D87] hover:bg-white/[0.04] hover:text-white"
													}`}
												>
													<span className="block truncate font-mono text-[10px]">
														{priceItem.type}
													</span>
													<span className="mt-0.5 block font-mono text-xs font-semibold text-[#F6F5F2]">
														{priceItem.price}&nbsp;€
													</span>
												</button>
											);
										})}
									</div>

									{/* Scope of Work List */}
									<div className="mt-8 border-t border-white/12 pt-6">
										<span className="block font-mono text-[11px] uppercase tracking-[0.12em] text-[#8E8D87]">
											Leistungsumfang
										</span>
										<ul className="mt-4 space-y-2.5">
											{category.features.map((feature) => (
												<li
													key={feature}
													className="flex items-start gap-2.5 text-sm leading-snug text-[#D4D3CD]"
												>
													<span className="font-mono text-xs text-[#8E8D87]">
														—
													</span>
													<span>{feature}</span>
												</li>
											))}
										</ul>
									</div>
								</div>

								{/* Footer CTA */}
								<div className="mt-10 pt-4">
									<ContactDrawer
										variant={category.isPopular ? "light" : "light"}
										size="default"
										label={`${category.name} anfragen`}
										service={`${category.name} (${activePriceObj.type} – ${activePriceObj.price} €)`}
										className={`w-full ${
											category.isPopular
												? ""
												: "border border-white/20 bg-transparent text-[#F6F5F2] hover:bg-white/10"
										}`}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
