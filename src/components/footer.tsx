import {
	ArrowUpRight,
	Clock3,
	Facebook,
	Instagram,
	Mail,
	MapPin,
	Phone,
} from "lucide-react";

const navigation = [
	{ label: "Leistungen", href: "#leistungen" },
	{ label: "Preise", href: "#preise" },
	{ label: "Kundenstimmen", href: "#bewertungen" },
];

const contact = [
	{
		label: "Anrufen",
		value: "+49 176 43190053",
		href: "tel:+4917643190053",
		icon: Phone,
	},
	{
		label: "E-Mail schreiben",
		value: "dermobileaufbereiter@gmail.com",
		href: "mailto:dermobileaufbereiter@gmail.com",
		icon: Mail,
	},
	{
		label: "Servicegebiet",
		value: "Memmingen und Umgebung",
		icon: MapPin,
	},
];

const social = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/dermobileaufbereiter",
		icon: Instagram,
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/profile.php?id=61559232703025",
		icon: Facebook,
	},
];

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="relative isolate overflow-hidden bg-[#050508] text-white">
			<div
				className="absolute inset-0 -z-20 opacity-70"
				style={{
					backgroundImage:
						"radial-gradient(circle at 10% 10%, rgba(34, 211, 238, 0.16), transparent 24rem), radial-gradient(circle at 90% 75%, rgba(59, 130, 246, 0.16), transparent 28rem)",
				}}
			/>
			<div
				className="absolute inset-0 -z-10 opacity-35"
				style={{
					backgroundImage:
						"radial-gradient(circle, rgba(255,255,255,0.16) 1px, transparent 1px)",
					backgroundSize: "28px 28px",
				}}
			/>

			<div className="container mx-auto px-4 md:px-6">
				<div className="grid gap-10 px-1 py-12 md:grid-cols-2 lg:grid-cols-[1.3fr_0.7fr_1fr] lg:gap-14 lg:py-16">
					<div>
						<a
							href="/"
							className="group inline-flex items-center gap-3 rounded-xl focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
							aria-label="DerMobileAufbereiter Startseite"
						>
							<span className="grid h-11 w-11 place-items-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-sm font-black tracking-tight text-cyan-100">
								DMA
							</span>
							<span>
								<span className="block font-bold tracking-tight">
									DerMobileAufbereiter
								</span>
								<span className="block text-sm text-white/50">
									Mobile Fahrzeugpflege
								</span>
							</span>
						</a>
						<p className="mt-5 max-w-md text-sm leading-6 text-white/55 text-pretty">
							Professionelle Autoaufbereitung mit Präzision, hochwertigen
							Produkten und einem Service, der zu dir kommt.
						</p>
						<div className="mt-6 flex items-center gap-3">
							{social.map(({ label, href, icon: Icon }) => (
								<a
									key={label}
									href={href}
									target="_blank"
									rel="noreferrer"
									aria-label={`${label} öffnen`}
									className="grid h-11 w-11 place-items-center rounded-full border border-white/15 bg-white/[0.06] text-white/70 transition-colors hover:border-cyan-300/50 hover:bg-cyan-300/10 hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
								>
									<Icon className="h-5 w-5" aria-hidden="true" />
								</a>
							))}
						</div>
					</div>

					<div>
						<h3 className="text-sm font-semibold tracking-[0.16em] text-white/45 uppercase">
							Entdecken
						</h3>
						<nav className="mt-5" aria-label="Footer Navigation">
							<ul className="space-y-1">
								{navigation.map(({ label, href }) => (
									<li key={href}>
										<a
											href={href}
											className="group inline-flex min-h-9 items-center gap-1.5 text-sm text-white/70 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
										>
											{label}
											<ArrowUpRight
												className="h-3.5 w-3.5 opacity-0 transition-opacity group-hover:opacity-100"
												aria-hidden="true"
											/>
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>

					<div>
						<h3 className="text-sm font-semibold tracking-[0.16em] text-white/45 uppercase">
							Kontakt
						</h3>
						<ul className="mt-5 space-y-4">
							{contact.map(({ label, value, href, icon: Icon }) => (
								<li key={label} className="flex gap-3">
									<Icon
										className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300"
										aria-hidden="true"
									/>
									<div>
										<p className="text-xs text-white/40">{label}</p>
										{href ? (
											<a
												href={href}
												className="break-all text-sm text-white/75 transition-colors hover:text-cyan-200 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
											>
												{value}
											</a>
										) : (
											<p className="text-sm text-white/75">{value}</p>
										)}
									</div>
								</li>
							))}
						</ul>
						<p className="mt-5 flex items-center gap-2 text-xs text-white/45">
							<Clock3 className="h-4 w-4 text-cyan-300" aria-hidden="true" />
							Termine nach Vereinbarung
						</p>
					</div>
				</div>

				<div className="flex flex-col gap-4 border-t border-white/10 px-1 py-6 text-xs text-white/45 sm:flex-row sm:items-center sm:justify-between">
					<p>© {year} DerMobileAufbereiter. Alle Rechte vorbehalten.</p>
					<div className="flex gap-5">
						<a className="transition-colors hover:text-cyan-200" href="/datenschutz">
							Datenschutz
						</a>
						<a className="transition-colors hover:text-cyan-200" href="/impressum">
							Impressum
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
