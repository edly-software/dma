import { ArrowDownRight } from "lucide-react";
import { ContactDrawer } from "@/components/contact-drawer";

const serviceOffers = [
	{
		index: "01.1",
		category: "Innenraum-Aufbereitung",
		tag: "Meistgebucht",
		title: "Innenraum wie neu",
		description:
			"Gründliche Tiefenreinigung für Sitze, Teppiche, Kofferraum und sämtliche Oberflächen. Ideal, wenn das Fahrzeug wieder frisch riechen und gepflegt wirken soll.",
		image: "/images/IMG-20260227-WA0030.jpg",
		alt: "Heller, frisch aufbereiteter Fahrzeuginnenraum nach einer mobilen Innenreinigung",
		price: "ab 75 €",
		duration: "ca. 120 Min",
		bestFor: "Vor Fahrzeugverkauf, Leasingrückgabe oder nach dem Familienalltag.",
		features: [
			"Polster, Teppiche und Fußmatten shampooniert",
			"Kunststoffpflege und streifenfreie Scheibenreinigung",
			"Leder- und Alcantara-Behandlung",
			"Geruchsneutralisierung inklusive",
		],
		cta: "Innenreinigung anfragen",
	},
	{
		index: "01.2",
		category: "Exterieur & Lackschutz",
		tag: "Inkl. Innenreinigung",
		title: "Politur & Lackfinish",
		description:
			"Professionelle Lackreinigung mit 1- oder 2-stufiger maschineller Politur. Entfernt matte Stellen, Swirls sowie Kratzer und bringt Tiefe zurück in den Lack.",
		image: "/images/politur-lackfinish.jpg",
		alt: "Aufbereiteter Fahrzeuglack mit sichtbarem Glanz nach professioneller Politur",
		price: "ab 280 €",
		duration: "nach Zustand",
		bestFor: "Bei mattem Lack, Waschanlagen-Swirls, Mikrokratzern oder zum Werterhalt.",
		features: [
			"Komplette Innenreinigung bereits enthalten",
			"Lackreinigung, Entfettung & maschinelle Politur",
			"Finish auf Hochglanz (1- oder 2-stufig)",
			"Keramikpflege zum nachhaltigen Lackschutz",
		],
		cta: "Politur anfragen",
	},
];

export function GlowingBento() {
	return (
		<section
			id="leistungen"
			className="scroll-mt-16 bg-[#F6F5F2] py-20 text-[#0B0B0C] md:py-28"
		>
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Editorial Section Header */}
				<div className="grid gap-6 pb-14 lg:grid-cols-12 lg:items-end lg:pb-20">
					<div className="lg:col-span-4">
						<span className="font-mono text-xs uppercase tracking-[0.14em] text-[#6E6D68]">
							01 — Leistungen
						</span>
					</div>
					<div className="lg:col-span-8">
						<h2 className="text-3xl leading-[1.06] font-bold tracking-[-0.03em] sm:text-5xl">
							Autopflege, die man sofort sieht.
						</h2>
						<p className="mt-4 max-w-2xl text-base leading-relaxed text-[#52524E] sm:text-lg">
							Wir reinigen und pflegen Ihr Fahrzeug direkt dort, wo es steht.
							Zwei klar strukturierte Leistungsbereiche mit transparenten
							Startpreisen für Memmingen und Umgebung.
						</p>
					</div>
				</div>

				{/* Architectural Service Rows */}
				<div className="divide-y divide-black/[0.08] border-y border-black/[0.08]">
					{serviceOffers.map((service) => (
						<article
							key={service.title}
							className="grid gap-8 py-12 lg:grid-cols-12 lg:gap-12 lg:py-16"
						>
							{/* Photography Column */}
							<div className="lg:col-span-5">
								<div className="aspect-[4/3] w-full overflow-hidden rounded-xl bg-[#E6E4DC]">
									<img
										src={service.image}
										alt={service.alt}
										className="h-full w-full object-cover"
										loading="lazy"
									/>
								</div>
							</div>

							{/* Specification Column */}
							<div className="flex flex-col justify-between lg:col-span-7">
								<div>
									{/* Index & Tag */}
									<div className="flex flex-wrap items-center justify-between gap-2 border-b border-black/[0.08] pb-3">
										<span className="font-mono text-xs uppercase tracking-[0.12em] text-[#6E6D68]">
											{service.index} — {service.category}
										</span>
										<span className="rounded-full border border-black/15 px-2.5 py-0.5 font-mono text-[11px] uppercase tracking-wider text-[#0B0B0C]">
											{service.tag}
										</span>
									</div>

									{/* Title & Description */}
									<div className="mt-5 grid gap-4 sm:grid-cols-[1fr_auto] sm:items-baseline">
										<h3 className="text-2xl font-bold tracking-[-0.025em] sm:text-3xl">
											{service.title}
										</h3>
										<div className="flex items-baseline gap-4 font-mono text-xs text-[#6E6D68]">
											<span>
												Startpreis:{" "}
												<strong className="text-sm font-semibold text-[#0B0B0C]">
													{service.price}
												</strong>
											</span>
											<span>·</span>
											<span>Dauer: {service.duration}</span>
										</div>
									</div>

									<p className="mt-3 max-w-2xl text-base leading-relaxed text-[#52524E]">
										{service.description}
									</p>

									{/* Scope Grid */}
									<div className="mt-6 grid gap-x-8 gap-y-2.5 border-t border-black/[0.08] pt-5 sm:grid-cols-2">
										{service.features.map((feature) => (
											<div
												key={feature}
												className="flex items-start gap-2.5 text-sm text-[#0B0B0C]"
											>
												<span className="font-mono text-xs text-[#6E6D68]">
													—
												</span>
												<span>{feature}</span>
											</div>
										))}
									</div>

									<p className="mt-5 text-xs text-[#6E6D68]">
										<span className="font-medium text-[#0B0B0C]">
											Empfohlen:
										</span>{" "}
										{service.bestFor}
									</p>
								</div>

								<div className="mt-8 flex flex-wrap items-center gap-4 pt-2">
									<ContactDrawer
										variant="primary"
										size="default"
										label={service.cta}
										service={`${service.title} (${service.price})`}
									/>
									<a
										href="#preise"
										className="group inline-flex items-center gap-1.5 text-sm font-medium text-[#52524E] transition-colors hover:text-[#0B0B0C]"
									>
										<span>Preise nach Fahrzeugklasse</span>
										<ArrowDownRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:translate-y-0.5" />
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
