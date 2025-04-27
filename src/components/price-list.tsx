import { CheckIcon } from "@heroicons/react/24/outline";
import { Button } from "./ui/button";
export default function PriceingSection() {
	return (
		<>
			<section id="preise" className="py-12 md:py-20">
				<div className="container mx-auto px-4 md:px-6">
					<div className="mx-auto max-w-4xl text-center">
						<h2 className="text-3xl font-bold tracking-tight sm:text-5xl">
							Preisliste
						</h2>
						<p className="mt-4 text-lg text-gray-500 dark:text-gray-400">
							Transparente Preise: Keine versteckten Kosten, alles im Voraus
							besprochen.
						</p>
					</div>
					<div className="mt-10 grid grid-cols-1 gap-6 ">
						<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
							<div className="space-y-4">
								<h3 className="text-2xl font-bold">Basis Paket</h3>
								<p className="text-4xl font-bold">€50</p>
								<ul className="space-y-2 text-gray-500 dark:text-gray-400">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Staubsaugen + Reinigung inkl Fußmatten, Sitze, und
										Kofferraum
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Reinigung der Armaturen, des Lenkrads und anderer
										Innenoberflächen.
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Basic analytics Duftstoffbehandlung für einen frischen
										Innenraum.
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Reinigung der Fenster und Spiegel.
									</li>
								</ul>
							</div>
							<a href="https://cal.com/dermobileaufbereiter/">
								<Button className="mt-6 w-full">Jetzt anrufen</Button>
							</a>
						</div>
						<div className="rounded-lg bg-white p-6 shadow-md dark:bg-gray-950">
							<div className="space-y-4">
								<h3 className="text-2xl font-bold">Luxus Paket</h3>
								<p className="text-4xl font-bold">€100</p>
								<ul className="space-y-2 text-gray-500 dark:text-gray-400">
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" /> Alle
										Leistungen des Basispakets.
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Fleckenentfernung und Behandlung von hartnäckigen
										Verschmutzungen.
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Tiefenreinigung, Fleckenentfernung und Desodorierung der
										Polster & Teppiche.
									</li>
									<li className="flex items-center">
										<CheckIcon className="mr-2 h-5 w-5 text-green-500" />
										Lederreinigung und -pflege für Ledersitze und -verkleidungen
									</li>
								</ul>
							</div>
							<a href="https://cal.com/dermobileaufbereiter/">
								<Button className="mt-6 w-full">Jetzt anrufen</Button>
							</a>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
