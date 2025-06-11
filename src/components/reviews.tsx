import { AnimatedTestimonials } from "@/components/ui/animated-testimonials";

export function Reviews() {
	const testimonials = [
		{
			quote:
				"Top Service!!Kann ich nur weiter empfehlen sehr schnell und zuverlässig.Auto ist jedesmal wie neu!",
			name: "Weiterer Kunde",
			designation: "Top Kunde seit 2023",
			before: "/images/oro_before.png",
			after: "/images/oro_after.png",
		},
		{
			quote:
				"DerMobileAufbereiter hat meinen Fahrzeuginnenraum auf ein ganz neues Level gebracht! Jedes Detail wurde mit höchster Präzision gereinigt und aufbereitet. Sitze, Armaturenbrett, Teppiche – alles sieht aus wie neu und riecht frisch. Die professionelle und sorgfältige Arbeit hat mich absolut überzeugt. Wer eine gründliche Innenraumaufbereitung sucht, ist hier genau richtig. Klare Empfehlung! Danke !",
			name: "Weiterer Kunde",
			designation: "",
			before: "/images/liviu_before.png",
			after: "/images/liviu_after.png",
		},
		{
			quote:
				"Ich bin total begeistert von der Innenreinigung und Aufbereitung durch ‘Der mobile Aufbereiter’! Vor allem meine hellen Sitze hatten über die Zeit einiges abbekommen, und ich dachte schon, die Flecken würden nie wieder rausgehen. Aber jetzt sieht alles aus wie neu – die Sitze sind wieder strahlend sauber und das ganze Auto riecht frisch.✨",
			name: "Weiterer Kunde",
			designation: "",
			before: "/images/michelle_before.png",
			after: "/images/michelle_after.png",

		},
		{
			quote:
				"Die Innenreinigung war einfach top! Ich habe schon viele Autos reinigen lassen, aber die Arbeit von ‘Der mobile Aufbereiter’ ist wirklich herausragend. Die Liebe zum Detail und die Sorgfalt, mit der alles gemacht wurde, sind bemerkenswert. Mein Auto sieht jetzt aus wie neu und riecht fantastisch. Ich kann diesen Service nur empfehlen!",
			name: "Weiterer Kunde",
			designation: "",
			before: "/images/weiterer_kunde_before.png",
			after: "/images/weiterer_kunde_after.png",
		},
		{
			quote:
				"Ich bin begeistert von der Innenreinigung! Mein Auto sieht aus wie neu und riecht frisch. Die Liebe zum Detail ist beeindruckend. Ich kann diesen Service nur empfehlen!",
			name: "Weiterer Kunde",
			designation: "",
			before: "/images/weiter_before.png",
			after: "/images/weiter_after.png",
		},
	];
	return <AnimatedTestimonials testimonials={testimonials} />;
}
