import { Phone, Copy, Check, Mail, ArrowUpRight } from "lucide-react";
import {
	Drawer,
	DrawerClose,
	DrawerContent,
	DrawerDescription,
	DrawerFooter,
	DrawerHeader,
	DrawerTitle,
	DrawerTrigger,
} from "@/components/ui/drawer";
import { useState } from "react";
import { cn } from "@/lib/utils";

const phoneNumber = "0176 43190053";
const rawPhoneNumber = "017643190053";
const internationalPhoneNumber = "+4917643190053";
const emailAddress = "dermobileaufbereiter@gmail.com";

export function ContactDrawer({
	secondary,
	size = "lg",
	label = "Termin anfragen",
	service,
	className,
	variant,
}: {
	secondary?: boolean;
	size?: "sm" | "default" | "lg";
	label?: string;
	service?: string;
	className?: string;
	variant?: "primary" | "light" | "outline";
}) {
	const [copiedItem, setCopiedItem] = useState<string | null>(null);
	const message = `Hallo, ich interessiere mich für ${service ?? "eine mobile Autoaufbereitung"}. Wann wäre ein Termin möglich?`;
	const encodedMessage = encodeURIComponent(message);
	const mailSubject = encodeURIComponent(
		`Terminanfrage: ${service ?? "Mobile Autoaufbereitung"}`,
	);

	const copyToClipboard = async (text: string, type: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedItem(type);
			setTimeout(() => setCopiedItem(null), 2000);
		} catch (err) {
			console.error("Failed to copy: ", err);
		}
	};

	const resolvedVariant = variant ?? (secondary ? "outline" : "primary");

	const sizeStyles = {
		sm: "h-9 px-4 text-xs",
		default: "h-11 px-5 text-sm",
		lg: "h-12 px-6 text-sm",
	};

	const variantStyles = {
		primary:
			"bg-[#0B0B0C] text-[#F6F5F2] hover:bg-[#232326]",
		light:
			"bg-[#F6F5F2] text-[#0B0B0C] hover:bg-white",
		outline:
			"border border-[#0B0B0C]/20 bg-transparent text-[#0B0B0C] hover:border-[#0B0B0C]",
	};

	return (
		<Drawer>
			<DrawerTrigger asChild>
				<button
					type="button"
					className={cn(
						"group inline-flex cursor-pointer items-center justify-center gap-2.5 rounded-full font-medium tracking-tight transition-colors duration-150",
						sizeStyles[size],
						variantStyles[resolvedVariant],
						className,
					)}
				>
					<span>{label}</span>
					<ArrowUpRight className="h-4 w-4 shrink-0 transition-transform duration-150 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
				</button>
			</DrawerTrigger>

			<DrawerContent className="border-t border-black/10 bg-[#F6F5F2] text-[#0B0B0C]">
				<div className="mx-auto w-full max-w-lg px-5 pt-3 pb-8">
					<DrawerHeader className="px-0 text-left">
						<p className="font-mono text-[11px] uppercase tracking-[0.14em] text-[#6E6D68]">
							Direktkontakt — Memmingen & Umgebung
						</p>
						<DrawerTitle className="mt-1 text-2xl font-bold tracking-tight text-[#0B0B0C]">
							Termin vereinbaren
						</DrawerTitle>
						<DrawerDescription className="text-sm text-[#52524E]">
							{service ? (
								<span className="mt-1 inline-block font-medium text-[#0B0B0C]">
									Auswahl: {service}
								</span>
							) : (
								"Wählen Sie Ihren bevorzugten Kontaktweg."
							)}
						</DrawerDescription>
					</DrawerHeader>

					<div className="mt-4 divide-y divide-black/10 border-y border-black/10">
						{/* WhatsApp */}
						<a
							href={`https://wa.me/${internationalPhoneNumber.replace("+", "")}?text=${encodedMessage}`}
							target="_blank"
							rel="noopener noreferrer"
							className="group flex items-center justify-between py-4 transition-colors hover:bg-black/[0.02]"
						>
							<div>
								<span className="block text-base font-semibold text-[#0B0B0C]">
									WhatsApp schreiben
								</span>
								<span className="text-xs text-[#6E6D68]">
									Direktnachricht mit Ihrer Anfrage öffnen
								</span>
							</div>
							<span className="inline-flex items-center gap-1.5 rounded-full bg-[#0B0B0C] px-3.5 py-1.5 text-xs font-medium text-[#F6F5F2] transition-transform group-hover:translate-x-0.5">
								Öffnen
								<ArrowUpRight className="h-3.5 w-3.5" />
							</span>
						</a>

						{/* Phone */}
						<div className="flex items-center justify-between gap-3 py-4">
							<a
								href={`tel:${internationalPhoneNumber}`}
								className="group flex-1"
							>
								<span className="block text-base font-semibold text-[#0B0B0C] group-hover:underline">
									Telefonisch anrufen
								</span>
								<span className="font-mono text-xs text-[#6E6D68]">
									{phoneNumber}
								</span>
							</a>
							<div className="flex items-center gap-2">
								<button
									type="button"
									onClick={() => copyToClipboard(rawPhoneNumber, "phone")}
									className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-black/15 px-3 text-xs font-medium text-[#0B0B0C] transition-colors hover:border-black"
									aria-label="Telefonnummer kopieren"
								>
									{copiedItem === "phone" ? (
										<>
											<Check className="h-3.5 w-3.5" />
											<span>Kopiert</span>
										</>
									) : (
										<>
											<Copy className="h-3.5 w-3.5" />
											<span>Kopieren</span>
										</>
									)}
								</button>
								<a
									href={`tel:${internationalPhoneNumber}`}
									className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-[#0B0B0C] transition-colors hover:border-black"
									aria-label="Anrufen"
								>
									<Phone className="h-3.5 w-3.5" />
								</a>
							</div>
						</div>

						{/* Email */}
						<div className="flex items-center justify-between gap-3 py-4">
							<a
								href={`mailto:${emailAddress}?subject=${mailSubject}&body=${encodedMessage}`}
								className="group min-w-0 flex-1"
							>
								<span className="block text-base font-semibold text-[#0B0B0C] group-hover:underline">
									E-Mail senden
								</span>
								<span className="block truncate font-mono text-xs text-[#6E6D68]">
									{emailAddress}
								</span>
							</a>
							<div className="flex shrink-0 items-center gap-2">
								<button
									type="button"
									onClick={() => copyToClipboard(emailAddress, "email")}
									className="inline-flex h-8 cursor-pointer items-center gap-1.5 rounded-full border border-black/15 px-3 text-xs font-medium text-[#0B0B0C] transition-colors hover:border-black"
									aria-label="E-Mail kopieren"
								>
									{copiedItem === "email" ? (
										<>
											<Check className="h-3.5 w-3.5" />
											<span>Kopiert</span>
										</>
									) : (
										<>
											<Copy className="h-3.5 w-3.5" />
											<span>Kopieren</span>
										</>
									)}
								</button>
								<a
									href={`mailto:${emailAddress}?subject=${mailSubject}&body=${encodedMessage}`}
									className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-black/15 text-[#0B0B0C] transition-colors hover:border-black"
									aria-label="E-Mail öffnen"
								>
									<Mail className="h-3.5 w-3.5" />
								</a>
							</div>
						</div>
					</div>

					<p className="mt-4 text-xs leading-relaxed text-[#6E6D68]">
						Hinweis: Nennen Sie uns kurz Ihr Fahrzeugmodell, die gewünschte
						Leistung und 2–3 mögliche Termine in Memmingen oder Umgebung.
					</p>

					<DrawerFooter className="mt-5 px-0 pb-0">
						<DrawerClose asChild>
							<button
								type="button"
								className="h-10 w-full cursor-pointer rounded-full border border-black/15 text-xs font-semibold uppercase tracking-wider text-[#0B0B0C] transition-colors hover:border-black"
							>
								Schließen
							</button>
						</DrawerClose>
					</DrawerFooter>
				</div>
			</DrawerContent>
		</Drawer>
	);
}
