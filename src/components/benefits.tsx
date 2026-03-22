import { MapPin, Clock, Shield, Zap } from "lucide-react";

const benefits = [
    {
        icon: <MapPin className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
        title: "100% Mobil",
        description: "Wir kommen zu Ihnen. Kein Anfahrtsstress, keine Wartezeit.",
    },
    {
        icon: <Clock className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
        title: "Flexibel & Schnell",
        description: "Termine nach Vereinbarung, auch am Wochenende möglich.",
    },
    {
        icon: <Shield className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
        title: "Versichert & Sicher",
        description: "Vollkasko-Schutz für Ihr Fahrzeug während der Behandlung.",
    },
    {
        icon: <Zap className="h-6 w-6 text-blue-600 dark:text-blue-400" />,
        title: "Eigene Versorgung",
        description: "Strom und Wasser bringen wir auf Wunsch einfach mit.",
    },
];

export function Benefits() {
    return (
        <section className="py-20 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {benefits.map((benefit, index) => (
                        <div key={index} className="flex flex-col items-center text-center space-y-4">
                            <div className="p-4 rounded-full bg-blue-50 dark:bg-blue-900/20 ring-1 ring-blue-100 dark:ring-blue-900/30">
                                {benefit.icon}
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                                    {benefit.title}
                                </h3>
                                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed max-w-xs mx-auto">
                                    {benefit.description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
