import PriceingSection from "@/components/price-list"
import { GlowingBento } from "../glowing-bento"
import { Hero } from "../hero"
import { Navigationbar } from "../navbar"
import { Reviews } from "../reviews"
import { Star } from "lucide-react"

export function Home() {
  return (
    <>
      <div className="fixed top-0 left-0 right-0 z-50">
        <Navigationbar />
      </div>
      <div>
        <Hero />
        <GlowingBento />
        <PriceingSection />

        <div id="bewertungen" className="scroll-mt-20 py-12 md:py-20">
          <div className="container mx-auto px-4 md:px-6">
            <div className="mx-auto mb-12 max-w-4xl text-center">
              <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-brand/30 bg-brand-soft px-4 py-1.5 text-sm font-medium text-brand-ink">
                <Star className="h-3.5 w-3.5 fill-brand text-brand" />
                Kundenstimmen
              </div>
              <h2 className="mb-4 text-3xl font-extrabold tracking-tight sm:text-5xl">
                Kundenbewertungen
              </h2>
              <p className="text-lg text-gray-600">
                Sehen Sie selbst, was unsere zufriedenen Kunden sagen
              </p>
            </div>
            <Reviews />
          </div>
        </div>
      </div>
    </>
  )
}
