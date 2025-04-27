import { Button } from "@/components/ui/button"
import { ResponsiveDiv } from "@/components/responsive-div"
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
			<div className="font-geist md:p-10 md:grid place-items-center gap-14 mt-5">
				<Hero />
				<GlowingBento />
				<Reviews />
			</div>
		</>
	)
}
