import { Car, Sparkles, CarFront } from "lucide-react";

const services = [
    {
        icon: <Car className="h-8 w-8 text-blue-600 dark:text-blue-400" />,
        title: "Innenaufbereitung",
        description: "Tiefenreinigung für Polster, Teppiche und Armaturen. Wir entfernen Flecken, Gerüche und Staub für ein frisches Neuwagen-Gefühl.",
        price: "ab 149€",
    },
    {
        icon: <CarFront className="h-8 w-8 text-purple-600 dark:text-purple-400" />,
        title: "Außenaufbereitung",
        description: "Lackschonende Handwäsche, Politur und Versiegelung. Wir bringen den Glanz zurück und schützen Ihren Lack nachhaltig.",
        price: "ab 199€",
    },
    {
        icon: <Sparkles className="h-8 w-8 text-indigo-600 dark:text-indigo-400" />,
        title: "Komplett-Service",
        description: "Das Rundum-Sorglos-Paket. Innen- und Außenpflege kombiniert für das perfekte Ergebnis und maximalen Werterhalt.",
        price: "ab 299€",
    },
];

export function Services() {
    return (
        <section className="py-24 md:py-32 bg-white dark:bg-black relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-serif font-medium mb-6 text-gray-900 dark:text-white tracking-tight">
                        Unsere Leistungen
                    </h2>
                    <p className="text-lg text-gray-500 dark:text-gray-400 font-light">
                        Exzellente Pflege für Ihr Fahrzeug. Wählen Sie das passende Paket.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {services.map((service, index) => (
                        <div
                            key={index}
                            className="flex flex-col border-t border-gray-200 dark:border-gray-800 pt-8 transition-colors duration-300 hover:border-blue-500 dark:hover:border-blue-400"
                        >
                            <div className="mb-6 text-gray-400 dark:text-gray-500 group-hover:text-blue-500 dark:group-hover:text-blue-400 transition-colors duration-300">
                                {service.icon}
                            </div>

                            <h3 className="text-2xl font-medium text-gray-900 dark:text-white mb-4">
                                {service.title}
                            </h3>

                            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed font-light flex-grow">
                                {service.description}
                            </p>

                            <div className="flex items-center justify-between mt-auto pt-4">
                                <span className="text-xl font-medium text-gray-900 dark:text-white">
                                    {service.price}
                                </span>
                                <a
                                    href="#preise"
                                    className="text-sm uppercase tracking-widest font-medium text-gray-400 hover:text-gray-900 dark:text-gray-500 dark:hover:text-white transition-colors duration-300"
                                >
                                    Details
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
