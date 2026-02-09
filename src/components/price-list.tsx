'use client';

import { CheckIcon, Flame } from "lucide-react";
import { ContactDrawer } from "./contact-drawer";
import { motion } from "motion/react";

const vehicleTypes = ["Kleinwagen", "Lim./Kombi", "SUV", "7 Sitzer/TR"];

const pricingCategories = [
	{
		id: "innenreinigung",
		name: "INNENREINIGUNG",
		description: "Komplette Innenraum Reinigung",
		duration: "ca. 120 Min",
		isPopular: false,
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
		id: "innen-aussen",
		name: "INNEN&AUSSENREINIGUNG",
		description: "Rundum Komplettbehandlung",
		duration: "ca. 240 Min",
		isPopular: true,
		prices: [
			{ type: "Kleinwagen", price: 170 },
			{ type: "Lim./Kombi", price: 185 },
			{ type: "SUV", price: 205 },
			{ type: "7 Sitzer/TR", price: 235 },
		],
		features: [
			"Alles von Innenreinigung inklusive",
			"Premium-Handwäsche",
			"Spezialreinigung der Felgen",
			"Keramikpflege",
			"Glanzveredelung",
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
			"Außenreinigung",
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
			"Außenreinigung",
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
			className="relative"
		>
			{/* Category Badge */}
			<div className="flex items-center gap-3 mb-5">
				<div className={`inline-flex items-center gap-2 px-5 py-2 rounded-full font-extrabold text-sm md:text-base tracking-wider uppercase ${
					category.isPopular
						? "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900"
						: "bg-gradient-to-r from-yellow-400 to-yellow-300 text-gray-900"
				}`}>
					{category.isPopular && <Flame className="h-4 w-4" />}
					{category.name}
				</div>
				{category.isPopular && (
					<span className="text-xs font-semibold text-yellow-400 border border-yellow-400/30 px-3 py-1 rounded-full">
						Beliebt
					</span>
				)}
			</div>

			{/* Vehicle Type Headers + Prices Grid */}
			<div className="grid grid-cols-1 lg:grid-cols-[1fr,auto] gap-4 lg:gap-8 items-start">
				{/* Features - Left Side */}
				<div className="order-2 lg:order-1 space-y-2">
					{category.features.map((feature, idx) => (
						<div key={idx} className="flex items-start gap-2.5">
							<CheckIcon className="h-4 w-4 flex-shrink-0 mt-0.5 text-yellow-400" />
							<span className="text-sm md:text-[15px] text-gray-300 leading-relaxed">
								{feature}
							</span>
						</div>
					))}
				</div>

				{/* Price Table - Right Side */}
				<div className="order-1 lg:order-2">
					<div className="grid grid-cols-4 gap-2 md:gap-3 min-w-0 lg:min-w-[420px]">
						{/* Column Headers */}
						{vehicleTypes.map((type) => (
							<div key={type} className="text-center">
								<span className="text-[11px] md:text-xs font-medium text-gray-400 leading-tight block">
									{type}
								</span>
							</div>
						))}
						{/* Prices */}
						{category.prices.map((priceItem) => (
							<div key={priceItem.type} className="text-center">
								<div className="bg-gray-800/60 border border-gray-700/50 rounded-xl py-3 px-1 md:px-3 transition-all duration-200 hover:bg-gray-700/60 hover:border-gray-600/50">
									<span className="text-lg md:text-2xl font-bold text-white">
										{priceItem.price}€
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
		<>
			<section id="preise" className="py-12 md:py-20 bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
				<div className="container mx-auto px-4 md:px-6">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6 }}
						className="mx-auto max-w-3xl text-center mb-16"
					>
						<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
							Preisliste
						</h2>
						<p className="text-lg text-gray-400">
							Wir Kommen zu Ihnen!
						</p>
					</motion.div>

					{/* Price Sections */}
					<div className="max-w-5xl mx-auto space-y-12 md:space-y-16">
						{pricingCategories.map((category, index) => (
							<div key={category.id}>
								<PriceSection category={category} index={index} />
								{index < pricingCategories.length - 1 && (
									<div className="mt-10 md:mt-14 border-t border-gray-800" />
								)}
							</div>
						))}
					</div>

					{/* CTA Section */}
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.6, delay: 0.2 }}
						className="max-w-3xl mx-auto mt-16 flex justify-center"
					>
						<ContactDrawer secondary={false} size="default" />
					</motion.div>
				</div>
			</section>
		</>
	);
}
