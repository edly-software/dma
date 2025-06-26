import { motion } from "motion/react";
import { HeroHighlight, Highlight } from "@/components/ui/hero-highlight";
import { Button } from "@/components/ui/button"
import { BanknotesIcon } from "@heroicons/react/24/outline"
import { ContactDrawer } from "@/components/contact-drawer"

export function Hero() {
	return (
		<>
			<HeroHighlight>
				<motion.div
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
					className="text-center max-w-5xl mx-auto px-4"
				>
					<h1 className="text-3xl md:text-5xl lg:text-6xl font-bold text-neutral-700 dark:text-white leading-tight lg:leading-tight mb-6">
						<Highlight className="text-3xl md:text-5xl lg:text-6xl">Erkenne den Unterschied</Highlight>
						<br className="hidden md:block" />
						<span className="block mt-2 md:mt-4">
							Professionelle Innen- und Außenaufbereitung
						</span>
						<span className="block mt-2">
							für dein Auto, direkt vor deiner Tür!
						</span>
					</h1>
					<p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
						Erleben Sie professionelle Autoaufbereitung auf höchstem Niveau - 
						bequem und termingerecht an Ihrem Wunschort.
					</p>
				</motion.div>
				
				<motion.div 
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5, delay: 0.2 }}
					className="flex flex-col sm:flex-row gap-4 justify-center items-center px-4 max-w-md mx-auto"
				>
					{/* <ContactDrawer secondary={false} /> */}
					<Button
						variant={"secondary"}
						size={"lg"}
						className="flex gap-2 text-md w-full sm:w-auto bg-white/90 hover:bg-white border border-gray-200 text-gray-700 hover:text-gray-900 shadow-lg hover:shadow-xl transition-all duration-200"
						asChild
					>
						<a href="#preise">
							<BanknotesIcon className="w-5 h-5" />
							<span>Preisliste ansehen</span>
						</a>
					</Button>
				</motion.div>

			</HeroHighlight>
		</>
	);
}

