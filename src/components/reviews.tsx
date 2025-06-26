import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Reviews() {
	const testimonials = [
		{
			quote:
				"Top Service!!Kann ich nur weiter empfehlen sehr schnell und zuverlässig.Auto ist jedesmal wie neu!",
			name: "Weiterer Kunde",
			designation: "Top Kunde seit 2023",
			before: "/dma/images/oro_before.png",
			after: "/dma/images/oro_after.png",
		},
		{
			quote:
				"DerMobileAufbereiter hat meinen Fahrzeuginnenraum auf ein ganz neues Level gebracht! Jedes Detail wurde mit höchster Präzision gereinigt und aufbereitet. Sitze, Armaturenbrett, Teppiche – alles sieht aus wie neu und riecht frisch. Die professionelle und sorgfältige Arbeit hat mich absolut überzeugt. Wer eine gründliche Innenraumaufbereitung sucht, ist hier genau richtig. Klare Empfehlung! Danke !",
			name: "Weiterer Kunde",
			designation: "",
			before: "/dma/images/liviu_before.png",
			after: "/dma/images/liviu_after.png",
		},
		{
			quote:
				"Ich bin total begeistert von der Innenreinigung und Aufbereitung durch ‘Der mobile Aufbereiter’! Vor allem meine hellen Sitze hatten über die Zeit einiges abbekommen, und ich dachte schon, die Flecken würden nie wieder rausgehen. Aber jetzt sieht alles aus wie neu – die Sitze sind wieder strahlend sauber und das ganze Auto riecht frisch.✨",
			name: "Weiterer Kunde",
			designation: "",
			before: "/dma/images/michelle_before.png",
			after: "/dma/images/michelle_after.png",

		},
		{
			quote:
				"Top Jungs mein Auto hat nach der Aufbereitung ausgesehen wie ein Neuwagen kann ich aufjedenfall nur weiterempfehlen👍",
			name: "Weiterer Kunde",
			designation: "",
			before: "/dma/images/weiterer_kunde_before.png",
			after: "/dma/images/weiterer_kunde_after.png",
		},
		{
			quote:
				"Sehr guter Service und extrem freundliches und zuvorkommendes Personal. Das Auto vom sehr schlechten Zustand zu einem Neuwagen – das nenne ich Top-Arbeit, sehr empfehlenswert!",
			name: "Weiterer Kunde",
			designation: "",
			before: "/dma/images/weiter_before.png",
			after: "/dma/images/weiter_after.png",
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} />;
}
