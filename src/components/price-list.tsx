'use client';

import { CheckIcon, HelpCircle, Flame } from "lucide-react";
import { ContactDrawer } from "./contact-drawer";
import { motion } from "motion/react";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";

const pricingCategories = [
	{
		id: "innenreinigung",
		name: "INNENREINIGUNG",
		description: "Komplette Innenraum Reinigung",
		basePrice: 75,
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
			"Staubsaugen",
			"Shamponieren aller Polster",
			"Kunststoff-Aufbereitung",
			"Scheiben-Reinigung",
			"Geruchsneutralisierung",
		],
	},
	{
		id: "innen-aussen",
		name: "INNEN&AUSSEN",
		description: "Rundum Komplettbehandlung",
		basePrice: 130,
		duration: "ca. 240 Min",
		isPopular: true,
		prices: [
			{ type: "Kleinwagen", price: 130 },
			{ type: "Lim./Kombi", price: 145 },
			{ type: "SUV", price: 165 },
			{ type: "7 Sitzer/TR", price: 195 },
		],
		features: [
			"Alles von Innenreinigung",
			"Premium-Handwäsche",
			"Spezialreinigung Felgen",
			"Wachs-Schutz",
			"Glanzveredelung",
		],
	},
	{
		id: "1-stufig",
		name: "1 STUFIGE POLITUR",
		description: "Professionelle Politur",
		basePrice: 280,
		duration: "",
		isPopular: false,
		prices: [
			{ type: "Kleinwagen", price: 280 },
			{ type: "Lim./Kombi", price: 320 },
			{ type: "SUV", price: 360 },
			{ type: "7 Sitzer/TR", price: 400 },
		],
		features: [
			"Alles von Innenreinigung",
			"Vorwäsche",
			"Lackreinigung",
			"Politur Stufe 1",
			"Lack entfetten",
			"Keramikpflege",
		],
	},
	{
		id: "2-stufig",
		name: "2 STUFIGE POLITUR",
		description: "Professionelle Politur Premium",
		basePrice: 360,
		duration: "",
		isPopular: false,
		prices: [
			{ type: "Kleinwagen", price: 360 },
			{ type: "Lim./Kombi", price: 400 },
			{ type: "SUV", price: 440 },
			{ type: "7 Sitzer/TR", price: 480 },
		],
		features: [
			"Alles von Innenreinigung",
			"Vorwäsche",
			"Lackreinigung",
			"Politur Stufe 1 & 2",
			"Lack entfetten",
			"Keramikpflege",
		],
	},
];

interface PricingCard {
	id: string;
	name: string;
	description: string;
	basePrice: number;
	duration: string;
	isPopular?: boolean;
	prices: Array<{ type: string; price: number }>;
	features: string[];
}

const carIcons: { [key: string]: string } = {
	"Kleinwagen": "🚗",
	"Lim./Kombi": "🚙",
	"SUV": "🚐",
	"7 Sitzer/TR": "🚛",
};

const PriceCard = ({ card }: { card: PricingCard }) => {
	const borderColor = card.isPopular ? "border-rose-500 border-2" : "border border-gray-700";
	const bgGradient = card.isPopular ? "bg-gradient-to-br from-rose-950/20 to-rose-900/10" : "bg-gray-900/50";

	return (
		<motion.div
			initial={{ opacity: 0, y: 20 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5 }}
			className={`relative rounded-2xl p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:shadow-2xl h-full flex flex-col ${bgGradient} ${borderColor}`}
		>
			{/* Popular Badge */}
			{card.isPopular && (
				<div className="absolute -top-4 left-1/2 -translate-x-1/2">
					<div className="bg-gradient-to-r from-rose-500 to-rose-600 text-white px-4 py-1.5 rounded-full text-xs md:text-sm font-bold flex items-center gap-1">
						<Flame className="h-4 w-4" />
						Beliebt
					</div>
				</div>
			)}

			{/* Header */}
			<div className="mb-4">
				<h3 className="text-xl md:text-2xl font-bold text-white mb-1">
					{card.name}
				</h3>
				<p className="text-gray-400 text-sm md:text-base">
					{card.description}
				</p>
			</div>

			{/* Price Section */}
			<div className="mb-6">
				<Popover>
					<PopoverTrigger asChild>
						<button className="group cursor-pointer">
							<div className="flex items-baseline gap-1 transition-all duration-300">
								<span className="text-3xl md:text-4xl font-bold text-white group-hover:text-blue-400 transition-colors">
									ab {card.basePrice}€
								</span>
								{card.duration && (
									<span className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
										/{card.duration}
									</span>
								)}
								<span className="ml-2 text-xs px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full opacity-0 group-hover:opacity-100 transition-all duration-300 whitespace-nowrap">
									Klick für Details
								</span>
							</div>
						</button>
					</PopoverTrigger>
					<PopoverContent className="w-72 p-4 bg-gray-800 border border-gray-700 rounded-lg">
						<div className="space-y-3">
							<p className="font-semibold text-white text-sm">Preise nach Fahrzeugtyp:</p>
							{card.prices.map((price, idx) => (
								<div key={idx} className="flex items-center justify-between p-2 rounded hover:bg-gray-700/50 transition-colors">
									<div className="flex items-center gap-2">
										<span className="text-lg">{carIcons[price.type] || "🚗"}</span>
										<span className="text-sm text-gray-300">{price.type}</span>
									</div>
									<span className="font-bold text-white">{price.price}€</span>
								</div>
							))}
						</div>
					</PopoverContent>
				</Popover>
				<p className="text-xs text-gray-500 mt-2">
					Je nach Fahrzeugtyp
				</p>
			</div>

			{/* Features */}
			<div className="mb-6 flex-grow">
				<div className="space-y-2.5">
					{card.features.map((feature, idx) => (
						<div key={idx} className="flex items-center gap-3">
							<CheckIcon className={`h-4 w-4 flex-shrink-0 ${card.isPopular ? 'text-rose-400' : 'text-blue-400'}`} />
							<span className="text-sm text-gray-300">
								{feature}
							</span>
						</div>
					))}
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
							Transparente Preise nach Fahrzeugtyp - Keine versteckten Kosten
						</p>
					</motion.div>

					{/* Cards Grid */}
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
						{pricingCategories.map((card) => (
							<PriceCard key={card.id} card={card} />
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
