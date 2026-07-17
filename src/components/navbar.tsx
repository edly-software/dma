import { useState } from "react";
import {
	Navbar,
	NavBody,
	NavItems,
	MobileNav,
	NavbarLogo,
	MobileNavHeader,
	MobileNavMenu,
	MobileNavToggle,
	NavbarButton,
} from "@/components/ui/resizable-navbar";

const navItems = [
	{ name: "Leistungen", link: "#leistungen" },
	{ name: "Preise", link: "#preise" },
	{ name: "Galerie", link: "#bewertungen" },
];

export function Navigationbar() {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<div className="relative w-full">
			<Navbar>
				<NavBody>
					<NavbarLogo />
					<NavItems items={navItems} />
					<div className="relative z-20 flex items-center gap-2">
						<NavbarButton
							href="tel:+4917643190053"
							variant="secondary"
							className="hidden border border-white/25 text-white xl:inline-flex"
						>
							Anrufen
						</NavbarButton>
						<NavbarButton
							href="https://wa.me/4917643190053"
							variant="primary"
							className="bg-brand text-white shadow-none hover:bg-blue-500"
						>
							WhatsApp
						</NavbarButton>
					</div>
				</NavBody>

				<MobileNav>
					<MobileNavHeader>
						<NavbarLogo />
						<MobileNavToggle
							isOpen={isOpen}
							onClick={() => setIsOpen((o) => !o)}
						/>
					</MobileNavHeader>
					<MobileNavMenu isOpen={isOpen} onClose={() => setIsOpen(false)}>
						{navItems.map((item) => (
							<a
								key={item.link}
								href={item.link}
								onClick={() => setIsOpen(false)}
								className="w-full rounded-lg px-3 py-2 text-base font-semibold text-neutral-800"
							>
								{item.name}
							</a>
						))}
						<div className="mt-2 flex w-full flex-col gap-2">
							<a
								href="tel:+4917643190053"
								className="flex min-h-11 items-center justify-center rounded-lg border border-neutral-200 px-4 text-sm font-bold text-neutral-900"
							>
								Jetzt anrufen
							</a>
							<a
								href="https://wa.me/4917643190053"
								className="flex min-h-11 items-center justify-center rounded-lg bg-brand px-4 text-sm font-bold text-white"
							>
								WhatsApp
							</a>
						</div>
					</MobileNavMenu>
				</MobileNav>
			</Navbar>
		</div>
	);
}
