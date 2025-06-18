import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import {
	IconBrandGithub,
	IconBrandTiktok,
	IconBrandX,
	IconExchange,
	IconHome,
	IconNewSection,
	IconTerminal2,
} from "@tabler/icons-react";
import { Calendar, Car, CarFront, Instagram } from "lucide-react";

export function Dock() {
	const links = [
		{
			title: "Kalendar",
			icon: (
				<Calendar className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://cal.com/dermobileaufbereiter/",
		},
		{
			title: "Before&After",
			icon: (
				<CarFront className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://www.instagram.com/dermobileaufbereiter",
		},
		{
			title: "Instagram",
			icon: (
				<Instagram className="h-full w-full text-neutral-500 dark:text-neutral-300" />
			),
			href: "https://www.instagram.com/dermobileaufbereiter",
		},
	];
	return (
		<div className="fixed md:bottom-0 flex items-center justify-center sm:h-[5rem] w-full z-50">
			<FloatingDock
				mobileClassName="translate-y-20" // only for demo, remove for production
				items={links}
			/>
		</div>
	);
}
