import PriceingSection from "@/components/price-list"
import { GlowingBento } from "../glowing-bento"
import { Hero } from "../hero"
import { Navigationbar } from "../navbar"
import { Reviews } from "../reviews"
export function Home() {
	return (
		<>
			<div className="fixed top-0 left-0 right-0 z-50">
				<Navigationbar />
			</div>
			<div className="font-geist">
				{/* Hero Section */}
				<div className="md:p-10 md:grid place-items-center mt-5">
					<Hero />
				</div>
				
				{/* Services Section */}
				<GlowingBento />
				
				{/* Pricing Section */}
				<PriceingSection />
				
				{/* Reviews Section */}
				<div className="py-12 md:py-20">
					<div className="container mx-auto px-4 md:px-6">
						<div className="mx-auto max-w-4xl text-center mb-12">
							<h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
								Kundenbewertungen
							</h2>
							<p className="text-lg text-gray-600 dark:text-gray-300">
								Sehen Sie selbst, was unsere zufriedenen Kunden sagen
							</p>
						</div>
						<Reviews />
					</div>
				</div>
			</div>
		</>
	)
}
