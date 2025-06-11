import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button"
import { BanknotesIcon } from "@heroicons/react/24/outline"
import { ContactDrawer } from "@/components/contact-drawer"

export function Hero() {
	return (
		<>
			<HeroHighlight>
				<motion.h1
					initial={{
						opacity: 0,
						y: 20,
					}}
					animate={{
						opacity: 1,
						y: [20, -5, 0],
					}}
					transition={{
						duration: 0.5,
						ease: [0.4, 0.0, 0.2, 1],
					}}
					className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-700 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
				>
					<Highlight>Erkenne den Unterschied</Highlight> <br />
					Professionelle
					Innen-
					und Außenaufbereitung
					für dein Auto,
					direkt vor
					deiner Tür!
				</motion.h1>
				<div className="flex flex-col md:flex-row gap-5 mt-5 justify-center align-middle p-5 md:p-0">
					<ContactDrawer secondary={false} />
					<Button
						variant={"secondary"}
						size={"lg"}
						className="flex gap-2 text-md w-full sm:w-auto"
						asChild
					>
						<a href="#preise" >

							<BanknotesIcon className="w-4 h-4" />
							<span>Preisliste ansehen</span>
						</a>
					</Button>
				</div>

			</HeroHighlight >
		</>
	);
}

