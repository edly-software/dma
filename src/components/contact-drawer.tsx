import { CalendarDaysIcon, PhoneIcon, ClipboardIcon, CheckIcon } from "@heroicons/react/24/outline";
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

export function ContactDrawer({ secondary }: { secondary?: boolean }) {
	const [copiedItem, setCopiedItem] = useState<string | null>(null);

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
						secondary ? <Button size={"sm"} variant={'secondary'} className="flex gap-2 text-md w-full sm:w-auto">
							<p>Termin vereinbaren</p>
						</Button>
							:
							<Button size={"lg"} className="flex gap-2 text-md w-full sm:w-auto">
								<PhoneIcon className="w-4 h-4 text-white" />
								<p>Termin vereinbaren</p>
							</Button>
					}
				</DrawerTrigger>
				<DrawerContent>
					<div className="mx-auto w-full max-w-sm">
						<DrawerHeader>
							<DrawerTitle>Kontakt</DrawerTitle>
							<DrawerDescription>
								Termine können telefonisch oder per Mail getätigt werden.
							</DrawerDescription>
						</DrawerHeader>
						<div>
							<div className="p-4">
								<div>
									<Separator className="my-4" />
									<div className="space-y-3">
										<div className="relative">
											<button
												onClick={() => copyToClipboard('dermobileaufbereiter@gmail.com', 'email')}
												className="group flex items-center gap-2 w-full p-3 bg-blue-50 hover:bg-blue-100 rounded-lg border border-blue-200 hover:border-blue-300 transition-all duration-200"
											>
												<div className="text-blue-600 font-medium flex-1">dermobileaufbereiter@gmail.com</div>
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
												onClick={() => copyToClipboard('017643190053', 'phone')}
												className="group flex items-center gap-2 w-full p-3 bg-green-50 hover:bg-green-100 rounded-lg border border-green-200 hover:border-green-300 transition-all duration-200"
											>
												<div className="text-green-600 font-medium flex-1">017643190053</div>
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
