import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "lucide-react";
import QuoteForm from "../components/QuoteForm";
import DiagnosticsCarousel from "../components/DiagnosticsCarousel";

export default function HomePage() {
  return (
    <main className="mt-16">
      {/* Hero */}
      <section className="relative z-0" id="accueil" role="region" aria-labelledby="hero-title">
        <img
          src="/banner.webp"
          alt="Rade de Toulon et bord de mer dans le Var"
          className="w-full md:h-[50vh] xl:h-[70vh] md:max-h-[800px] object-cover object-bottom 2xl:h-[85vh] 2xl:max-h-[1200px] 4xl:h-[96vh] 4xl:max-h-[1600px] pointer-events-none"
        />


        {/* Bloc texte superposé */}
        <div className="absolute inset-0 hidden md:flex items-center justify-start">
          <div className="absolute bottom-0 right-0 px-6 p-10 ">
            <div className="max-w-md bg-gray-800 bg-opacity-40 p-6 rounded-md text-white backdrop-blur-sm text-center">
              <h1 id="hero-title" className="text-4xl font-bold mb-3 leading-snug">
                Diagnostics immobiliers à Toulon, dans le Var et en PACA
              </h1>
              <p className="text-lg mb-5 leading-relaxed">
                Votre diagnostiqueur certifié intervient rapidement à Toulon, La Seyne‑sur‑Mer, La Garde, La Valette, Carqueiranne, Sanary‑sur‑Mer, Bandol et alentours.
              </p>
              <a
                href="#devis"
                className="border border-white text-white px-4 py-2 rounded-md text-base hover:bg-white hover:text-cyan-900 transition"
              >
                Demander un devis gratuit
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Carousel diagnostics */}
      <DiagnosticsCarousel />

      {/* Formulaire */}
      <QuoteForm />

      {/* Qui sommes-nous */}
      <section id="about" role="region" aria-labelledby="about-title" className="bg-sidiag-dark text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-sm text-teal-300 mb-2">Professionnalisme & confiance</p>
          <h2 id="about-title" className="text-2xl md:text-4xl font-bold mb-6">
            Votre expert en diagnostics immobiliers dans le Var
          </h2>
          <div className="space-y-6 text-sm md:text-base">
            <p>
              Basés à <strong>Toulon</strong>, nous intervenons dans tout le <strong>Var</strong> et la région <strong>PACA</strong> pour réaliser vos diagnostics immobiliers obligatoires en cas de vente ou de location.
            </p>
            <p>
              Notre équipe certifiée met son expertise à votre service à <strong>La Seyne‑sur‑Mer</strong>, <strong>La Garde</strong>, <strong>La Valette</strong>, <strong>Carqueiranne</strong>, <strong>Sanary‑sur‑Mer</strong>, <strong>Bandol</strong> et les environs.
            </p>
            <p>
              Réactivité, impartialité et accompagnement personnalisé sont nos priorités.
            </p>
          </div>
        </div>
      </section>

      {/* Nos services */}
      <section id="services" role="region" aria-labelledby="services-title" className="bg-sidiag-medium text-white py-10">
        <div className="px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase text-sm text-teal-200 mb-2">Nos expertises</p>
            <h2 id="services-title" className="text-2xl md:text-3xl font-bold mb-10">
              Diagnostics immobiliers pour vente et location
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Vente */}
            <a
              href="/diagnostics-vente"
              className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group block"
            >
              <img
                src="/vente.webp"
                alt="Diagnostics obligatoires pour vendre un bien immobilier"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-teal-700 transition-colors">
                  Diagnostics vente
                </h3>
                <p>
                  Tous les diagnostics légaux pour vendre votre bien dans les règles, en toute tranquillité.
                </p>
              </div>
            </a>

            {/* Location */}
            <a
              href="/diagnostics-location"
              className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group block"
            >
              <img
                src="/location.webp"
                alt="Diagnostics pour louer un appartement ou une maison"
                className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
              />
              <div className="p-4">
                <h3 className="font-bold text-lg mb-2 group-hover:text-teal-700 transition-colors">
                  Diagnostics location
                </h3>
                <p>
                  Pour louer en toute conformité et assurer la sécurité de vos locataires.
                </p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Parallax */}
      <section className="relative w-full overflow-hidden">
        <div className="block md:hidden">
          <img
            src="/toulon.webp"
            alt="Vue aérienne de Toulon"
            className="w-full h-auto block"
          />
        </div>
        <div
          className="hidden md:block w-full h-[35vh] bg-fixed bg-center bg-cover"
          style={{ backgroundImage: "url('/toulon.webp')" }}
          role="img"
          aria-label="Vue aérienne de Toulon et sa rade"
        />
      </section>

      {/* Call to action */}
      <section role="region" aria-labelledby="cta-title" className="bg-sidiag-medium text-white text-center px-6 py-20">
        <h2 id="cta-title" className="text-2xl md:text-3xl font-bold mb-4">
          Obtenez votre devis gratuit dans le Var et en PACA
        </h2>
        <p className="mb-6 text-sm md:text-base">
          Nous vous fournissons rapidement un devis gratuit et personnalisé pour vos diagnostics à Toulon, La Seyne‑sur‑Mer, La Garde, La Valette, Carqueiranne, Sanary‑sur‑Mer, Bandol et alentours.
        </p>
        <a
          href="#devis"
          className="inline-block border border-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-white hover:text-teal-800 transition"
        >
          Demander un devis gratuit
        </a>
      </section>

      {/* Contact */}
      <section id="contact" role="region" aria-labelledby="contact-title" className="bg-sidiag-dark text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h2 id="contact-title" className="text-2xl md:text-4xl font-bold mb-6">
            Nous contacter
          </h2>
          <p className="mb-8 text-sm md:text-base">
            Vous pouvez nous joindre facilement par téléphone ou par email.
          </p>
          <div className="flex flex-col items-center space-y-4">
            <a 
              href="tel:+33668852578" 
              className="inline-flex items-center text-teal-300 hover:text-teal-400"
            >
              <PhoneIcon className="w-6 h-6 mr-2" />
              <span>+33 6 68 85 25 78</span>
            </a>
            <a 
              href="mailto:sidiag.expertises@gmail.com" 
              className="inline-flex items-center text-teal-300 hover:text-teal-400"
            >
              <EnvelopeIcon className="w-6 h-6 mr-2" />
              <span>sidiag.expertises@gmail.com</span>
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
