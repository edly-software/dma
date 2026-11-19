import { ArrowUpRight } from "lucide-react";

const navigation = [
	{ label: "Leistungen", href: "/#leistungen" },
	{ label: "Preise", href: "/#preise" },
	{ label: "Referenzen", href: "/#bewertungen" },
	{ label: "Ablauf & FAQ", href: "/#faq" },
];

const social = [
	{
		label: "Instagram",
		href: "https://www.instagram.com/dermobileaufbereiter",
	},
	{
		label: "Facebook",
		href: "https://www.facebook.com/profile.php?id=61559232703025",
	},
	{
		label: "Google Bewertungen",
		href: "https://g.co/kgs/RNBDcBy",
	},
];

export function Footer() {
	const year = new Date().getFullYear();

	return (
		<footer className="bg-[#0B0B0C] text-[#F6F5F2]">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				{/* Editorial Contact Statement */}
				<div className="grid gap-8 border-b border-white/12 py-16 md:py-24 lg:grid-cols-12 lg:items-end">
					<div className="lg:col-span-7">
						<span className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D87]">
							Kontakt & Terminvereinbarung
						</span>
						<h2 className="mt-4 text-3xl leading-[1.06] font-bold tracking-[-0.03em] sm:text-5xl">
							Wir kommen direkt zu Ihrem Fahrzeug.
						</h2>
					</div>
					<div className="flex flex-wrap items-center gap-3 lg:col-span-5 lg:justify-end">
						<a
							href="https://wa.me/4917643190053?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20mobile%20Autoaufbereitung.%20Wann%20w%C3%A4re%20ein%20Termin%20m%C3%B6glich%3F"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex h-12 items-center gap-2 rounded-full bg-[#F6F5F2] px-6 text-sm font-medium text-[#0B0B0C] transition-colors hover:bg-white"
						>
							<span>Per WhatsApp schreiben</span>
							<ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
						</a>
						<a
							href="tel:+4917643190053"
							className="inline-flex h-12 items-center rounded-full border border-white/20 px-6 font-mono text-sm font-medium text-[#F6F5F2] transition-colors hover:border-white"
						>
							0176 43190053
						</a>
					</div>
				</div>

				{/* Structured Columns */}
				<div className="grid gap-10 py-14 sm:grid-cols-2 lg:grid-cols-12">
					<div className="lg:col-span-5">
						<a href="/" className="inline-flex items-center gap-2.5">
							<img
								src="/logo.jpeg"
								alt="DerMobileAufbereiter"
								width={28}
								height={28}
								className="h-7 w-7 rounded object-cover"
							/>
							<span className="text-base font-bold tracking-tight text-[#F6F5F2]">
								DerMobileAufbereiter
							</span>
						</a>
						<p className="mt-4 max-w-sm text-sm leading-relaxed text-[#A09F99]">
							Professionelle mobile Fahrzeugaufbereitung, Innenraumreinigung
							und Lackpolitur in Memmingen und Umgebung.
						</p>
					</div>

					<div className="lg:col-span-2">
						<h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D87]">
							Navigation
						</h3>
						<ul className="mt-4 space-y-2.5 text-sm">
							{navigation.map(({ label, href }) => (
								<li key={href}>
									<a
										href={href}
										className="text-[#D4D3CD] transition-colors hover:text-white"
									>
										{label}
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="lg:col-span-2">
						<h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D87]">
							Profile
						</h3>
						<ul className="mt-4 space-y-2.5 text-sm">
							{social.map(({ label, href }) => (
								<li key={label}>
									<a
										href={href}
										target="_blank"
										rel="noreferrer"
										className="group inline-flex items-center gap-1 text-[#D4D3CD] transition-colors hover:text-white"
									>
										<span>{label}</span>
										<ArrowUpRight className="h-3.5 w-3.5 opacity-60 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
									</a>
								</li>
							))}
						</ul>
					</div>

					<div className="lg:col-span-3">
						<h3 className="font-mono text-xs uppercase tracking-[0.14em] text-[#8E8D87]">
							Direktkontakt
						</h3>
						<dl className="mt-4 space-y-2.5 text-sm text-[#D4D3CD]">
							<div>
								<dt className="sr-only">Telefon</dt>
								<dd>
									<a
										href="tel:+4917643190053"
										className="font-mono transition-colors hover:text-white"
									>
										+49 176 43190053
									</a>
								</dd>
							</div>
							<div>
								<dt className="sr-only">E-Mail</dt>
								<dd>
									<a
										href="mailto:dermobileaufbereiter@gmail.com"
										className="break-all transition-colors hover:text-white"
									>
										dermobileaufbereiter@gmail.com
									</a>
								</dd>
							</div>
							<div className="pt-1 text-xs text-[#8E8D87]">
								Memmingen & Umgebung · Termine nach Vereinbarung
							</div>
						</dl>
					</div>
				</div>

				{/* Legal & Attribution Bar */}
				<div className="flex flex-col gap-4 border-t border-white/12 py-6 text-xs text-[#8E8D87] sm:flex-row sm:items-center sm:justify-between">
					<p>© {year} DerMobileAufbereiter. Alle Rechte vorbehalten.</p>

					<div className="flex flex-wrap items-center gap-6">
						<a
							className="transition-colors hover:text-white"
							href="/datenschutz"
						>
							Datenschutz
						</a>
						<a className="transition-colors hover:text-white" href="/impressum">
							Impressum
						</a>
						<a
							href="https://g-unit-solutions.de"
							target="_blank"
							rel="noopener noreferrer"
							className="group inline-flex items-center gap-2 text-[#8E8D87] transition-colors hover:text-white"
							aria-label="Website erstellt von G Unit Solutions — g-unit-solutions.de öffnen"
						>
							<span>Erstellt von</span>
							<img
								src="/logo_icon_light.svg"
								alt=""
								width={18}
								height={18}
								className="h-4 w-4 shrink-0 opacity-75 transition-opacity group-hover:opacity-100"
								loading="lazy"
								decoding="async"
							/>
							<span className="font-medium text-[#D4D3CD] group-hover:text-white">
								G Unit Solutions
							</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
}
