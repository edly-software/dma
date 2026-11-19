import PriceingSection from "@/components/price-list";
import { GlowingBento } from "../glowing-bento";
import { Hero } from "../hero";
import { Navigationbar } from "../navbar";
import { Reviews } from "../reviews";
import { FAQ } from "../faq";

export function Home() {
	return (
		<>
			<Navigationbar />
			<main>
				<Hero />
				<GlowingBento />
				<PriceingSection />
				<Reviews />
				<FAQ />
			</main>
		</>
	);
}
