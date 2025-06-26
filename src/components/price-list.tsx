import { Button } from "./ui/button";
import { CheckIcon, StarIcon } from "lucide-react";
import { ContactDrawer } from "./contact-drawer";

export default function PriceingSection() {
	return (
		<>
			<section id="preise" className="py-12 md:py-20 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
				<div className="container mx-auto px-4 md:px-6">
					<div className="mx-auto max-w-6xl text-center mb-12">
						<h2 className="text-3xl font-bold tracking-tight sm:text-5xl mb-4">
							Preisliste
						</h2>
						<p className="text-lg text-gray-600 dark:text-gray-300">
							Transparente Preise nach Fahrzeugtyp - Keine versteckten Kosten
						</p>
					</div>

					{/* Innenreinigung Section */}
					<div className="mb-16">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-center shadow-xl">
							<h3 className="text-3xl font-bold text-white mb-4">INNENREINIGUNG</h3>
							<p className="text-blue-100 text-lg">Dauer: 60 Minuten</p>
						</div>

						<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
							<div className="p-8">
								{/* Services List */}
								<div className="mb-8">
									<ul className="space-y-3 text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Müllentsorgung</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Staubsaugen von Innenraum und Kofferraum</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Shamponieren aller Polster, Teppiche und Fußmatten</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Aufbereitung und Pflege aller Kunststoff- und Verkleidungselemente</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Reinigung aller Innenraum-Scheiben</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Geruchsneutralisierung</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Leder- und Alcantara Behandlung</span>
										</li>
									</ul>
								</div>

								{/* Pricing Grid */}
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									<div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Kleinwagen</div>
										<div className="text-2xl font-bold text-blue-600 dark:text-blue-400">75€</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Lim./Kombi</div>
										<div className="text-2xl font-bold text-blue-600 dark:text-blue-400">85€</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">SUV</div>
										<div className="text-2xl font-bold text-blue-600 dark:text-blue-400">95€</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-br from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl border border-blue-200 dark:border-blue-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">7 Sitzer/TR</div>
										<div className="text-2xl font-bold text-blue-600 dark:text-blue-400">105€</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Außenreinigung Section */}
					<div className="mb-12">
						<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 mb-8 text-center shadow-xl">
							<h3 className="text-3xl font-bold text-white mb-4">AUSSENREINIGUNG</h3>
							<p className="text-blue-100 text-lg">Dauer: 120 Minuten</p>
						</div>

						<div className="bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200 dark:border-gray-700 overflow-hidden">
							<div className="p-8">
								{/* Services List */}
								<div className="mb-8">
									<ul className="space-y-3 text-gray-700 dark:text-gray-300">
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Premium-Handwäsche mit Wachs-Schutz</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Spezialreinigung der Felgen</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Keramikpflege mit wasserabweisendem Schutz</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Glanzveredelung</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Schutzschicht</span>
										</li>
										<li className="flex items-start gap-3">
											<CheckIcon className="h-5 w-5 text-green-500 flex-shrink-0 mt-0.5" />
											<span>Kratzfreie Pflege mit High-End-Produkten</span>
										</li>
									</ul>
								</div>

								{/* Pricing Grid */}
								<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
									<div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Kleinwagen</div>
										<div className="text-2xl font-bold text-purple-600 dark:text-purple-400">85€</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">Lim./Kombi</div>
										<div className="text-2xl font-bold text-purple-600 dark:text-purple-400">95€</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">SUV</div>
										<div className="text-2xl font-bold text-purple-600 dark:text-purple-400">105€</div>
									</div>
									<div className="text-center p-4 bg-gradient-to-br from-purple-50 to-blue-50 dark:from-purple-900/20 dark:to-blue-900/20 rounded-xl border border-purple-200 dark:border-purple-700 hover:shadow-lg transition-all duration-200">
										<div className="text-sm text-gray-600 dark:text-gray-400 mb-2">7 Sitzer/TR</div>
										<div className="text-2xl font-bold text-purple-600 dark:text-purple-400">125€</div>
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* Additional Info */}
					<div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-8 text-center text-white mb-8 shadow-xl">
						<p className="text-lg mb-4">
							<span className="text-blue-200">Verpassen sie uns nicht!</span> <br />
						</p>
            <div className="flex justify-center items-center gap-2">
							<ContactDrawer secondary={true}>
								Jetzt Termin buchen
							</ContactDrawer>
            </div>
					</div>
				</div>
			</section>
		</>
	);
}
