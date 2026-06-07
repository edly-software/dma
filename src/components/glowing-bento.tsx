import {
	ArrowRight,
	Car,
	CarFront,
	CheckCircle2,
	Clock,
	Heart,
	MapPin,
	ShieldCheck,
	Sparkles,
	Star,
} from "lucide-react";
import { ContactDrawer } from "@/components/contact-drawer";

const proofPoints = [
	{ icon: MapPin, label: "Vor Ort in Memmingen" },
	{ icon: Star, label: "Echte Kundenfahrzeuge" },
	{ icon: ShieldCheck, label: "Sorgfältige Fahrzeugpflege" },
	{ icon: Clock, label: "Flexible Termine" },
];

const sectionHighlights = [
	"Keine Fahrt zur Waschhalle",
	"Klare Pakete mit Startpreisen",
	"Direkte Anfrage per Telefon oder WhatsApp",
];

const serviceOffers = [
	{
		icon: Car,
		kicker: "Für Alltag, Familie & Gerüche",
		title: "Innenraum wie neu",
		description:
			"Tiefenreinigung für Sitze, Teppiche, Kofferraum und alle Oberflächen. Ideal, wenn das Auto wieder frisch riechen und gepflegt wirken soll.",
		image: "/images/IMG-20260227-WA0030.jpg",
		alt: "Heller, frisch aufbereiteter Fahrzeuginnenraum nach einer mobilen Innenreinigung",
		price: "ab 75 EUR",
		duration: "ca. 120 Min",
		bestFor: "Perfekt vor Verkauf, Leasingrückgabe oder nach Familienalltag.",
		features: [
			"Polster, Teppiche und Fußmatten shampooniert",
			"Kunststoffpflege und Scheibenreinigung",
			"Geruchsneutralisierung inklusive",
		],
		cta: "Innenreinigung anfragen",
	},
	{
		icon: Sparkles,
		kicker: "Beliebteste Wahl",
		title: "Innen & außen komplett",
		description:
			"Die Rundum-Behandlung für sichtbaren Glanz und ein sauberes Gefühl beim Einsteigen. Der beste Mix aus Wirkung, Schutz und Werterhalt.",
		image: "/images/IMG-20260320-WA0013.jpg",
		alt: "Glänzendes Auto nach einer kompletten Innen- und Außenaufbereitung",
		price: "ab 170 EUR",
		duration: "ca. 240 Min",
		bestFor: "Die beste Wahl, wenn das Auto sichtbar hochwertiger aussehen soll.",
		features: [
			"Innenreinigung komplett inklusive",
			"Premium-Handwäsche und Felgenreinigung",
			"Keramikpflege und Glanzveredelung",
		],
		cta: "Komplettpaket anfragen",
		featured: true,
	},
	{
		icon: CarFront,
		kicker: "Für Glanz, Lack & Werterhalt",
		title: "Politur & Lackfinish",
		description:
			"Professionelle Lackreinigung mit 1- oder 2-stufiger Politur. Entfernt matte Stellen, leichte Swirls und bringt Tiefe zurück in den Lack.",
		image: "/images/liviu_after.png",
		alt: "Aufbereiteter Fahrzeuglack mit sichtbarem Glanz nach professioneller Politur",
		price: "ab 280 EUR",
		duration: "nach Zustand",
		bestFor: "Ideal bei mattem Lack, Mikrokratzern oder vor dem Fahrzeugverkauf.",
		features: [
			"Lackreinigung und maschinelle Politur",
			"Finish auf Hochglanz",
			"Keramikpflege zum Schutz",
		],
		cta: "Politur anfragen",
	},
];

export function GlowingBento() {
	return (
		<section
			id="leistungen"
			className="scroll-mt-20 overflow-hidden bg-white py-16 md:py-24"
		>
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-6xl">
					<div className="grid gap-8 lg:grid-cols-[minmax(0,0.95fr),minmax(22rem,0.55fr)] lg:items-end">
						<div>
							<div className="mb-5 inline-flex items-center gap-2 rounded-full border border-yellow-300 bg-yellow-50 px-4 py-1.5 text-sm font-semibold text-yellow-700">
								<Heart className="h-3.5 w-3.5" />
								DMA
							</div>
							<h2 className="max-w-4xl text-3xl font-black tracking-tight text-gray-950 sm:text-5xl">
								Autopflege, die man sofort sieht.
							</h2>
							<p className="mt-5 max-w-3xl text-lg leading-relaxed text-gray-600">
								Wir reinigen und pflegen Ihr Fahrzeug dort, wo es steht. Wählen
								Sie das passende Paket und fragen Sie direkt einen Termin in
								Memmingen und Umgebung an.
							</p>
						</div>

						<div className="border-l-2 border-yellow-400 pl-5">
							<p className="text-sm font-bold uppercase tracking-wide text-gray-500">
								Warum Kunden buchen
							</p>
							<ul className="mt-4 space-y-3">
								{sectionHighlights.map((highlight) => (
									<li
										key={highlight}
										className="flex gap-3 text-base font-semibold text-gray-950"
									>
										<CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-yellow-500" />
										<span>{highlight}</span>
									</li>
								))}
							</ul>
						</div>
					</div>

					<div className="mt-8 grid border-y border-gray-200 sm:grid-cols-2 lg:grid-cols-4">
						{proofPoints.map((point, index) => (
							<div
								key={point.label}
								className={`flex min-h-14 items-center gap-3 py-4 text-sm font-semibold text-gray-700 ${
									index % 2 === 0 ? "sm:pr-5" : "sm:border-l sm:px-5"
								} ${index > 1 ? "border-t sm:border-t lg:border-t-0" : ""} ${
									index > 0 ? "lg:border-l lg:px-5" : "lg:pr-5"
								}`}
							>
								<point.icon className="h-4 w-4 shrink-0 text-yellow-500" />
								<span>{point.label}</span>
							</div>
						))}
					</div>
				</div>

				<div className="mt-12 divide-y divide-gray-200 border-y border-gray-200">
					{serviceOffers.map((service) => (
						<article
							key={service.title}
							className="grid gap-6 py-8 md:grid-cols-[26rem_1fr] md:gap-10 md:py-10 xl:grid-cols-[30rem_1fr] xl:gap-14"
						>
							<div
								className="relative aspect-[4/3] rounded-[2rem] p-[5px] md:aspect-[5/4]"
								style={{
									background:
										"linear-gradient(145deg, rgba(0,0,0,0.14) 0%, rgba(0,0,0,0.04) 58%, rgba(0,0,0,0.12) 100%)",
									boxShadow:
										"0 8px 28px rgba(15, 23, 42, 0.12), 0 1px 0 rgba(255,255,255,0.9) inset",
								}}
							>
								<div className="h-full w-full overflow-hidden rounded-[1.6rem] bg-gray-100">
									<img
										src={service.image}
										alt={service.alt}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
							</div>

							<div className="flex min-w-0 flex-col justify-between">
								<div>
									<div className="mb-4 flex flex-wrap items-center gap-3">
										<div className="flex h-10 w-10 items-center justify-center border border-gray-200 bg-white">
											<service.icon className="h-5 w-5 text-gray-950" />
										</div>
										<p className="text-sm font-bold uppercase tracking-wide text-gray-500">
											{service.kicker}
										</p>
										{service.featured && (
											<span className="border border-yellow-300 bg-yellow-50 px-2.5 py-1 text-xs font-bold uppercase tracking-wide text-yellow-800">
												Meist gebucht
											</span>
										)}
									</div>

									<div className="grid gap-4 lg:grid-cols-[1fr,auto] lg:items-start">
										<div>
											<h3 className="text-2xl font-black tracking-tight text-gray-950 md:text-3xl">
												{service.title}
											</h3>
											<p className="mt-3 max-w-2xl text-base leading-relaxed text-gray-600">
												{service.description}
											</p>
										</div>
										<div className="grid grid-cols-2 gap-px overflow-hidden border border-gray-200 bg-gray-200 text-sm lg:min-w-56">
											<div className="bg-white p-3">
												<p className="text-xs uppercase tracking-wide text-gray-500">
													Preis
												</p>
												<p className="mt-1 font-bold text-gray-950">{service.price}</p>
											</div>
											<div className="bg-white p-3">
												<p className="text-xs uppercase tracking-wide text-gray-500">
													Dauer
												</p>
												<p className="mt-1 font-bold text-gray-950">
													{service.duration}
												</p>
											</div>
										</div>
									</div>

									<p className="mt-5 border-l-2 border-yellow-400 pl-4 text-sm font-semibold leading-relaxed text-gray-950">
										{service.bestFor}
									</p>

									<ul className="mt-5 grid gap-3 sm:grid-cols-3">
										{service.features.map((feature) => (
											<li
												key={feature}
												className="flex gap-2.5 text-sm leading-relaxed text-gray-700"
											>
												<CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-yellow-500" />
												<span>{feature}</span>
											</li>
										))}
									</ul>
								</div>

								<div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
									<ContactDrawer
										secondary={false}
										size="lg"
										label={service.cta}
										service={service.title}
									/>
									<a
										href="#preise"
										className="inline-flex min-h-10 items-center justify-center gap-2 rounded-md px-4 text-sm font-semibold text-gray-500 transition hover:text-gray-950"
									>
										Preise vergleichen
										<ArrowRight className="h-4 w-4" />
									</a>
								</div>
							</div>
						</article>
					))}
				</div>
			</div>
		</section>
	);
}
