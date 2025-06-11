import { Car, Sparkles, CarFront, MapPin, Clock, Shield } from "lucide-react";
import { GlowingEffect } from "@/components/ui/glowing-effect";

export function GlowingBento() {
	return (
		<section className="py-12 md:py-20">
			<div className="container mx-auto px-4 md:px-6">
				<div className="mx-auto max-w-4xl text-center mb-12">
					<h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
						Unsere Services
					</h2>
					<p className="text-lg text-gray-500 dark:text-gray-400">
						Professionelle Autoaufbereitung direkt vor Ihrer Haustür
					</p>
				</div>
				<ul className="p-5 md:p-0 grid grid-cols-1 grid-rows-none gap-6 md:grid-cols-12 md:grid-rows-3 lg:gap-6 xl:max-h-[40rem] xl:grid-rows-2">
					<GridItem
						area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
						icon={<Car className="h-5 w-5 text-blue-600 dark:text-blue-400" />}
						title="Innenaufbereitung"
						description="Professionelle Reinigung von Sitzen, Armaturenbrett, Teppichen und allen Innenoberflächen für ein wie-neu Gefühl."
					/>

					<GridItem
						area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
						icon={<MapPin className="h-5 w-5 text-green-600 dark:text-green-400" />}
						title="Memmingen und Umgebung Mobile Service"
						description="Wir kommen direkt zu Ihnen - egal ob zu Hause, im Büro oder an jedem anderen gewünschten Ort."
					/>

					<GridItem
						area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
						icon={<CarFront className="h-5 w-5 text-purple-600 dark:text-purple-400" />}
						title="Außenaufbereitung"
						description="Komplette Fahrzeugwäsche, Lackpflege und Detailing für einen strahlenden Glanz und optimalen Schutz."
					/>

					<GridItem
						area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
						icon={<Clock className="h-5 w-5 text-orange-600 dark:text-orange-400" />}
						title="Schnell & Zuverlässig"
						description="Termingerechte Durchführung mit höchster Qualität - Ihr Auto ist in den besten Händen."
					/>

					<GridItem
						area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
						icon={<Shield className="h-5 w-5 text-red-600 dark:text-red-400" />}
						title="Qualitätsgarantie"
						description="100% Zufriedenheitsgarantie - Wir arbeiten so lange, bis Sie vollständig zufrieden sind."
					/>
				</ul>
			</div>
		</section>
	);
}

interface GridItemProps {
	area: string;
	icon: React.ReactNode;
	title: string;
	description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
	return (
		<li className={`min-h-[16rem] list-none ${area}`}>
			<div className="relative h-full rounded-2xl border border-gray-200 dark:border-gray-800 p-3 md:rounded-3xl md:p-4 bg-white dark:bg-gray-900 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
				<GlowingEffect
					spread={50}
					glow={true}
					disabled={false}
					proximity={80}
					inactiveZone={0.01}
				/>
				<div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl p-6 md:p-8">
					<div className="relative flex flex-1 flex-col gap-4">
						<div className="w-fit rounded-xl bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-700 p-3 shadow-sm">
							{icon}
						</div>
						<div className="space-y-3">
							<h3 className="font-bold text-xl md:text-2xl text-gray-900 dark:text-white leading-tight">
								{title}
							</h3>
							<p className="text-sm md:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
								{description}
							</p>
						</div>
					</div>
				</div>
			</div>
		</li>
	);
};
