'use client';

import { CheckIcon, Flame, Car, CarFront, Truck, Bus } from "lucide-react";
import { ContactDrawer } from "./contact-drawer";
import { motion } from "motion/react";

const vehicleTypes = [
	{ label: "Kleinwagen", icon: Car },
	{ label: "Lim./Kombi", icon: CarFront },
	{ label: "SUV", icon: Truck },
	{ label: "7 Sitzer/TR", icon: Bus },
];

const pricingCategories = [
	{
		id: "innenreinigung",
		name: "INNENREINIGUNG",
		description: "Komplette Innenraum Reinigung",
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
			"Leder- und Alcantara Behandlung",
		],
	},
	{
		id: "1-stufig",
		name: "1 STUFIGE POLITUR",
		description: "Professionelle Politur",
		duration: "",
		isPopular: false,
		prices: [
			{ type: "Kleinwagen", price: 280 },
			{ type: "Lim./Kombi", price: 320 },
			{ type: "SUV", price: 360 },
			{ type: "7 Sitzer/TR", price: 400 },
		],
		features: [
			"Innenreinigung",
			"Lackreinigung",
			"Politur Stufe 1 – leichte Swirls & Kratzer entfernen, Glanz auffrischen",
			"Lack entfetten",
			"Keramikpflege",
		],
	},
	{
		id: "2-stufig",
		name: "2 STUFIGE POLITUR",
		description: "Professionelle Politur Premium",
		duration: "",
		isPopular: false,
		prices: [
			{ type: "Kleinwagen", price: 360 },
			{ type: "Lim./Kombi", price: 400 },
			{ type: "SUV", price: 440 },
			{ type: "7 Sitzer/TR", price: 480 },
		],
		features: [
			"Innenreinigung",
			"Lackreinigung",
			"Politur Stufe 1 – starke Kratzer entfernen",
			"Politur Stufe 2 – Finish auf Hochglanz",
			"Lack entfetten",
			"Keramikpflege",
		],
	},
];

interface PricingCategory {
	id: string;
	name: string;
	description: string;
	duration: string;
	isPopular?: boolean;
	prices: Array<{ type: string; price: number }>;
	features: string[];
}

const PriceSection = ({ category, index }: { category: PricingCategory; index: number }) => {
	return (
		<motion.div
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: index * 0.1 }}
			className={`relative rounded-3xl border p-5 md:p-8 ${
				category.isPopular
					? "border-brand/40 bg-gradient-to-br from-brand/10 via-gray-900/80 to-gray-950"
					: "border-gray-800 bg-gray-900/50"
			}`}
		>
			<div className="mb-6 flex flex-wrap items-center gap-3">
				<div className="inline-flex items-center gap-2 rounded-full bg-brand px-5 py-2 text-sm font-extrabold uppercase tracking-wider text-brand-ink md:text-base">
					{category.isPopular && <Flame className="h-4 w-4" />}
					{category.name}
				</div>
				{category.isPopular && (
					<span className="rounded-full border border-brand/40 px-3 py-1 text-xs font-semibold text-brand">
						Beliebt
					</span>
				)}
				{category.duration && (
					<span className="text-sm text-gray-400">{category.duration}</span>
				)}
			</div>

			<p className="mb-6 text-sm text-gray-400 md:text-base">{category.description}</p>

			<div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-[1fr,auto] lg:gap-8">
				<div className="order-2 space-y-2 lg:order-1">
					{category.features.map((feature) => (
						<div key={feature} className="flex items-start gap-2.5">
							<CheckIcon className="mt-0.5 h-4 w-4 flex-shrink-0 text-brand" />
							<span className="text-sm leading-relaxed text-gray-300 md:text-[15px]">
								{feature}
							</span>
						</div>
					))}
				</div>

				<div className="order-1 lg:order-2">
					<div className="grid min-w-0 grid-cols-4 gap-2 md:gap-3 lg:min-w-[420px]">
						{vehicleTypes.map((vt) => (
							<div key={vt.label} className="flex flex-col items-center gap-1.5 pb-2">
								<vt.icon className="h-6 w-6 text-brand md:h-7 md:w-7" />
								<span className="text-center text-[11px] font-medium leading-tight text-gray-400 md:text-xs">
									{vt.label}
								</span>
							</div>
						))}
						{category.prices.map((priceItem) => (
							<div key={priceItem.type} className="text-center">
								<div className="rounded-xl border border-gray-700/50 bg-gray-800/60 px-1 py-3 transition-all duration-200 hover:border-brand/30 hover:bg-gray-700/60 md:px-3">
									<span className="text-lg font-bold text-white md:text-2xl">
										{priceItem.price}&nbsp;€
									</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</motion.div>
	);
};

export default function PriceingSection() {
	return (
		<section id="preise" className="scroll-mt-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 py-12 md:py-20">
			<div className="container mx-auto px-4 md:px-6">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
					className="mx-auto mb-12 max-w-3xl text-center md:mb-16"
				>
					<h2 className="mb-4 text-3xl font-extrabold text-white md:text-5xl">
						Preisliste
					</h2>
					<p className="text-lg text-gray-400">Wir kommen zu Ihnen!</p>
				</motion.div>

				<div className="mx-auto grid max-w-5xl gap-6 md:gap-8">
					{pricingCategories.map((category, index) => (
						<PriceSection key={category.id} category={category} index={index} />
					))}
				</div>

				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6, delay: 0.2 }}
					className="mx-auto mt-16 flex max-w-3xl justify-center"
				>
					<ContactDrawer secondary={false} size="default" />
				</motion.div>
			</div>
		</section>
	);
}
