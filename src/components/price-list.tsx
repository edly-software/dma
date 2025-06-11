import { CheckIcon, StarIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
export default function PriceingSection() {
	return (
		<>
			<section id="preise" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
				<div className="container mx-auto px-4 md:px-6">
					<div className="mx-auto max-w-4xl text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
							Preisliste
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Transparente Preise: Keine versteckten Kosten, alles im Voraus
							besprochen.
						</p>
					</div>
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
						{/* Basis Paket */}
						<div className="relative rounded-2xl bg-white dark:bg-gray-900 p-8 shadow-xl border border-gray-200 dark:border-gray-700 hover:shadow-2xl transition-all duration-300 hover:scale-[1.01]">
							<div className="space-y-6">
								<div className="text-center">
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Basis Paket</h3>
									<div className="flex items-center justify-center gap-2 mb-4">
										<span className="text-5xl font-bold text-blue-600 dark:text-blue-400">€50</span>
									</div>
									<p className="text-gray-600 dark:text-gray-300">Perfekt für die regelmäßige Pflege</p>
								</div>
								<ul className="space-y-4">
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Staubsaugen + Reinigung inkl. Fußmatten, Sitze und Kofferraum
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Reinigung der Armaturen, des Lenkrads und aller Innenoberflächen
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Duftstoffbehandlung für einen frischen Innenraum
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-green-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Reinigung der Fenster und Spiegel
										</span>
									</li>
								</ul>
							</div>
							<a href="https://cal.com/dermobileaufbereiter/" className="block mt-8">
								<Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 text-lg font-semibold rounded-xl transition-colors duration-200">
									Jetzt buchen
								</Button>
							</a>
						</div>

						{/* Luxus Paket */}
						<div className="relative rounded-2xl bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 p-8 shadow-xl border-2 border-purple-200 dark:border-purple-700 hover:shadow-2xl transition-all duration-300 hover:scale-[1.02]">
							{/* Popular Badge */}
							<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
								<div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center gap-1">
									<StarIcon className="h-4 w-4" />
									Beliebt
								</div>
							</div>
							<div className="space-y-6">
								<div className="text-center">
									<h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">Luxus Paket</h3>
									<div className="flex items-center justify-center gap-2 mb-4">
										<span className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">€100</span>
									</div>
									<p className="text-gray-600 dark:text-gray-300">Komplette Premium-Aufbereitung</p>
								</div>
								<ul className="space-y-4">
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300 font-medium">
											Alle Leistungen des Basispakets
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Fleckenentfernung und Behandlung hartnäckiger Verschmutzungen
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Tiefenreinigung und Desodorierung der Polster & Teppiche
										</span>
									</li>
									<li className="flex items-start gap-3">
										<CheckIcon className="h-6 w-6 text-purple-500 flex-shrink-0 mt-0.5" />
										<span className="text-gray-700 dark:text-gray-300">
											Professionelle Lederreinigung und -pflege
										</span>
									</li>
								</ul>
							</div>
							<a href="https://cal.com/dermobileaufbereiter/" className="block mt-8">
								<Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-3 text-lg font-semibold rounded-xl transition-all duration-200 shadow-lg">
									Jetzt buchen
								</Button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
