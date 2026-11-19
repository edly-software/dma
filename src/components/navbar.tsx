import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navItems = [
	{ name: "Leistungen", link: "#leistungen" },
	{ name: "Preise", link: "#preise" },
	{ name: "Referenzen", link: "#bewertungen" },
	{ name: "Ablauf & FAQ", link: "#faq" },
];

export function Navigationbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<header className="sticky top-0 z-50 w-full border-b border-black/[0.08] bg-[#F6F5F2]/90 backdrop-blur-md">
			<div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
				{/* Brand Lockup */}
				<div className="flex items-center gap-3">
					<a
						href="/"
						className="flex items-center gap-2.5 text-sm font-bold tracking-tight text-[#0B0B0C]"
					>
						<img
							src="/logo.jpeg"
							alt="DerMobileAufbereiter"
							width={28}
							height={28}
							className="h-7 w-7 rounded object-cover"
						/>
						<span>DerMobileAufbereiter</span>
					</a>
					<span className="hidden h-3.5 w-px bg-black/15 sm:inline-block" />
					<span className="hidden font-mono text-[11px] uppercase tracking-[0.12em] text-[#6E6D68] sm:inline-block">
						Memmingen
					</span>
				</div>

				{/* Desktop Nav */}
				<nav
					aria-label="Hauptnavigation"
					className="hidden items-center gap-8 md:flex"
				>
					{navItems.map((item) => (
						<a
							key={item.link}
							href={item.link}
							className="text-sm font-medium text-[#52524E] transition-colors hover:text-[#0B0B0C]"
						>
							{item.name}
						</a>
					))}
				</nav>

				{/* Right Actions */}
				<div className="hidden items-center gap-5 md:flex">
					<a
						href="tel:+4917643190053"
						className="font-mono text-xs font-medium text-[#52524E] transition-colors hover:text-[#0B0B0C]"
					>
						0176 43190053
					</a>
					<a
						href="https://wa.me/4917643190053?text=Hallo%2C%20ich%20interessiere%20mich%20f%C3%BCr%20eine%20mobile%20Autoaufbereitung.%20Wann%20w%C3%A4re%20ein%20Termin%20m%C3%B6glich%3F"
						target="_blank"
						rel="noopener noreferrer"
						className="group inline-flex h-9 items-center gap-1.5 rounded-full bg-[#0B0B0C] px-4 text-xs font-medium text-[#F6F5F2] transition-colors hover:bg-[#232326]"
					>
						<span>WhatsApp</span>
						<ArrowUpRight className="h-3.5 w-3.5 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
					</a>
				</div>

				{/* Mobile Controls */}
				<div className="flex items-center gap-2.5 md:hidden">
					<a
						href="https://wa.me/4917643190053"
						target="_blank"
						rel="noopener noreferrer"
						className="inline-flex h-8 items-center rounded-full bg-[#0B0B0C] px-3.5 text-xs font-medium text-[#F6F5F2]"
					>
						WhatsApp
					</a>
					<button
						type="button"
						onClick={() => setIsOpen((o) => !o)}
						aria-label={isOpen ? "Menü schließen" : "Menü öffnen"}
						className="flex h-9 w-9 items-center justify-center rounded-full border border-black/15 text-[#0B0B0C]"
					>
						{isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
					</button>
				</div>
			</div>

			{/* Mobile Menu */}
			<AnimatePresence>
				{isOpen && (
					<motion.div
						initial={{ opacity: 0, height: 0 }}
						animate={{ opacity: 1, height: "auto" }}
						exit={{ opacity: 0, height: 0 }}
						transition={{ duration: 0.2 }}
						className="overflow-hidden border-t border-black/[0.08] bg-[#F6F5F2] md:hidden"
					>
						<div className="mx-auto max-w-7xl px-4 py-5">
							<nav className="divide-y divide-black/[0.08] border-b border-black/[0.08]">
								{navItems.map((item, idx) => (
									<a
										key={item.link}
										href={item.link}
										onClick={() => setIsOpen(false)}
										className="flex items-center justify-between py-3.5 text-base font-medium text-[#0B0B0C]"
									>
										<span>{item.name}</span>
										<span className="font-mono text-xs text-[#6E6D68]">
											0{idx + 1}
										</span>
									</a>
								))}
							</nav>
							<div className="mt-4 flex items-center justify-between pt-1">
								<a
									href="tel:+4917643190053"
									onClick={() => setIsOpen(false)}
									className="font-mono text-xs font-medium text-[#0B0B0C] underline underline-offset-4"
								>
									Tel. 0176 43190053
								</a>
								<span className="font-mono text-[11px] uppercase tracking-wider text-[#6E6D68]">
									Memmingen & Umgebung
								</span>
							</div>
						</div>
					</motion.div>
				)}
			</AnimatePresence>
		</header>
	);
}
