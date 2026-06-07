import { PhoneIcon, ClipboardIcon, CheckIcon, EnvelopeIcon, ChatBubbleLeftRightIcon } from "@heroicons/react/24/outline";
import { Button } from "@/components/ui/button";
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
import { Separator } from "@/components/ui/separator";
import { useState } from "react";

const phoneNumber = "017643190053";
const internationalPhoneNumber = "+4917643190053";
const emailAddress = "dermobileaufbereiter@gmail.com";

export function ContactDrawer({
	secondary,
	size = "lg",
	label = "Termin vereinbaren",
	service,
}: {
	secondary?: boolean;
	size?: "sm" | "default" | "lg";
	label?: string;
	service?: string;
}) {
	const [copiedItem, setCopiedItem] = useState<string | null>(null);
	const message = `Hallo, ich interessiere mich für ${service ?? "eine mobile Autoaufbereitung"}. Wann wäre ein Termin möglich?`;
	const encodedMessage = encodeURIComponent(message);
	const mailSubject = encodeURIComponent(`Terminanfrage: ${service ?? "Mobile Autoaufbereitung"}`);

	const copyToClipboard = async (text: string, type: string) => {
		try {
			await navigator.clipboard.writeText(text);
			setCopiedItem(type);
			setTimeout(() => setCopiedItem(null), 2000);
		} catch (err) {
			console.error('Failed to copy: ', err);
		}
	};
	return (
		<>
			<Drawer>
				<DrawerTrigger asChild>
					{
						secondary ? <Button size={size} variant={'secondary'} className="flex gap-2 text-md w-full sm:w-auto">
							<p>{label}</p>
						</Button>
							:
							<Button size={size} className="flex gap-2 text-md w-full sm:w-auto">
								<PhoneIcon className="w-4 h-4 text-white" />
								<p>{label}</p>
							</Button>
					}
				</DrawerTrigger>
				<DrawerContent>
					<div className="mx-auto w-full max-w-md">
						<DrawerHeader>
							<DrawerTitle className="text-xl">Termin anfragen</DrawerTitle>
							<DrawerDescription>
								{service
									? `Schnellkontakt für ${service}.`
									: "Wählen Sie den schnellsten Weg für Ihre Anfrage."}
							</DrawerDescription>
						</DrawerHeader>
						<div>
							<div className="p-4">
								<div>
									<div className="grid gap-3">
										<a
											href={`tel:${internationalPhoneNumber}`}
											className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-gray-950 px-4 py-3 text-base font-semibold text-white transition hover:bg-gray-800"
										>
											<PhoneIcon className="h-5 w-5" />
											Jetzt anrufen
										</a>
										<a
											href={`https://wa.me/${internationalPhoneNumber.replace("+", "")}?text=${encodedMessage}`}
											target="_blank"
											rel="noopener noreferrer"
											className="flex min-h-14 items-center justify-center gap-3 rounded-lg bg-green-600 px-4 py-3 text-base font-semibold text-white transition hover:bg-green-700"
										>
											<ChatBubbleLeftRightIcon className="h-5 w-5" />
											Per WhatsApp anfragen
										</a>
										<a
											href={`mailto:${emailAddress}?subject=${mailSubject}&body=${encodedMessage}`}
											className="flex min-h-14 items-center justify-center gap-3 rounded-lg border border-gray-300 bg-white px-4 py-3 text-base font-semibold text-gray-950 transition hover:bg-gray-50"
										>
											<EnvelopeIcon className="h-5 w-5" />
											E-Mail vorbereiten
										</a>
									</div>

									<div className="mt-4 rounded-lg bg-yellow-50 p-4 text-sm leading-relaxed text-yellow-900">
										Tipp: Senden Sie Fahrzeugmodell, gewünschte Leistung und 2-3
										mögliche Termine mit. Dann kann ich schneller ein konkretes
										Angebot machen.
									</div>

									<Separator className="my-4" />
									<p className="mb-3 text-sm font-medium text-gray-500">
										Kontakt kopieren
									</p>
									<div className="space-y-3">
										<div className="relative">
											<button
												onClick={() => copyToClipboard(emailAddress, 'email')}
												className="group flex items-center gap-2 w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200"
											>
												<div className="text-blue-600 font-medium flex-1">{emailAddress}</div>
												{copiedItem === 'email' ? (
													<CheckIcon className="w-4 h-4 text-green-600" />
												) : (
													<ClipboardIcon className="w-4 h-4 text-blue-500 group-hover:text-blue-600" />
												)}
											</button>
											{copiedItem === 'email' && (
												<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs py-1 px-2 rounded shadow-lg">
													E-Mail kopiert! ✓
												</div>
											)}
										</div>
										<div className="relative">
											<button
												onClick={() => copyToClipboard(phoneNumber, 'phone')}
												className="group flex items-center gap-2 w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 hover:border-green-300 transition-all duration-200"
											>
												<div className="text-green-600 font-medium flex-1">{phoneNumber}</div>
												{copiedItem === 'phone' ? (
													<CheckIcon className="w-4 h-4 text-green-600" />
												) : (
													<ClipboardIcon className="w-4 h-4 text-green-500 group-hover:text-green-600" />
												)}
											</button>
											{copiedItem === 'phone' && (
												<div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-green-600 text-white text-xs py-1 px-2 rounded shadow-lg">
													Telefon kopiert! ✓
												</div>
											)}
										</div>
									</div>
								</div>
							</div>
							{/* <div className="flex justify-center m-5">
								<a
									href="https://cal.com/dermobileaufbereiter/"
									target="_blank"
									className="w-full"
								>
									<Button className="w-full flex gap-5" onClick={goToCalendar}>
										<CalendarDaysIcon className="w-5 h-5" />
										Kalendereintrag erstellen
									</Button>
								</a>
							</div> */}
						</div>
						<DrawerFooter>
							<DrawerClose>
								<Button variant={"destructive"} className="w-full">
									Schließen
								</Button>
							</DrawerClose>
						</DrawerFooter>
					</div>
				</DrawerContent>
			</Drawer >
		</>
	);
}
