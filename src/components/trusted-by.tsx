import { motion } from "motion/react";

const companies = [
    "Sirch Memmingen",
    "Sirch Kempten",
    "Aston Martin Memmingen",
];

export function TrustedBy() {
    return (
        <section className="py-12 bg-white dark:bg-black border-y border-gray-100 dark:border-gray-800">
            <div className="container mx-auto px-4 text-center">
                <p className="text-sm font-medium text-gray-500 dark:text-gray-400 mb-8 uppercase tracking-widest">
                    Vertraut von führenden Unternehmen
                </p>
                <div className="flex flex-col md:flex-row flex-wrap justify-center items-center gap-8 md:gap-16 lg:gap-24">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company}
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <h3 className="text-xl md:text-2xl font-serif text-gray-400 hover:text-gray-800 dark:text-gray-600 dark:hover:text-gray-200 transition-colors duration-300 cursor-default">
                                {company}
                            </h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
