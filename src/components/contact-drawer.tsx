import { CalendarDaysIcon, PhoneIcon } from "@heroicons/react/24/outline";
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

export function ContactDrawer({ secondary }: { secondary?: boolean }) {
	const goToCalendar = () => {

	}
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
									<Separator className="my-2" />
									<div className="flex h-5 items-center space-x-4 text-sm">
										<div>dermobileaufbereiter@gmail.com</div>
										<Separator orientation="vertical" />
										<div>017643190053</div>
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
