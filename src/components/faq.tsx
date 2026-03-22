import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDownIcon } from "@heroicons/react/24/outline";

const faqs = [
    {
        question: "Wie lange dauert eine Aufbereitung?",
        answer:
            "Die Dauer hängt stark vom gewählten Paket und dem Zustand des Fahrzeugs ab. Eine einfache Innenreinigung dauert ca. 2-3 Stunden, während eine Komplettaufbereitung bis zu 6-8 Stunden in Anspruch nehmen kann.",
    },
    {
        question: "Muss ich Strom und Wasser bereitstellen?",
        answer:
            "Für die meisten Arbeiten benötigen wir Zugang zu einer Steckdose (230V). Wasser haben wir in der Regel dabei oder benötigen nur einen einfachen Zugang. Wir klären diese Details gerne vorab.",
    },
    {
        question: "Kommen Sie auch zu meiner Arbeit?",
        answer:
            "Ja! Unser mobiler Service ist darauf ausgelegt, zu Ihnen zu kommen – egal ob nach Hause oder ins Büro. Wir benötigen lediglich genügend Platz, um um das Fahrzeug herumzuarbeiten.",
    },
    {
        question: "Welche Zahlungsmethoden werden akzeptiert?",
        answer:
            "Wir akzeptieren Barzahlung, EC-Karte sowie gängige Kreditkarten direkt vor Ort. Für Firmenkunden ist auch eine Zahlung auf Rechnung möglich.",
    },
];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <div className="w-full max-w-3xl mx-auto px-4">
            <div className="space-y-4">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className="border-b border-gray-200 dark:border-gray-800 bg-transparent transition-colors duration-200"
                    >
                        <button
                            onClick={() => setOpenIndex(openIndex === index ? null : index)}
                            className="flex w-full items-center justify-between p-4 md:p-6 text-left"
                        >
                            <span className="text-base md:text-lg font-medium text-gray-900 dark:text-white">
                                {faq.question}
                            </span>
                            <ChevronDownIcon
                                className={`h-5 w-5 text-gray-500 transition-transform duration-300 ${openIndex === index ? "rotate-180" : ""
                                    }`}
                            />
                        </button>
                        <AnimatePresence>
                            {openIndex === index && (
                                <motion.div
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: "auto", opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.3, ease: "easeInOut" }}
                                >
                                    <div className="px-4 pb-4 md:px-6 md:pb-6 text-gray-600 dark:text-gray-400 leading-relaxed text-sm md:text-base pt-2 font-light">
                                        {faq.answer}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                ))}
            </div>
        </div>
    );
}
