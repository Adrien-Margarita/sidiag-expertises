import { EnvelopeIcon } from "@heroicons/react/24/outline";
import { PhoneIcon } from "lucide-react";
import QuoteForm from "../components/QuoteForm";

export default function HomePage() {
  return (
<main className="mt-16">
  
  <section className="relative">
    {/* Image en fond */}
    <img
      src="/banner.webp"
      alt="rade toulonnaise"
      className="w-full h-auto object-cover"
    />

    {/* Bloc texte superposé */}
    <div className="absolute inset-0 flex items-center justify-center md:justify-start">
  <div className="absolute bottom-0 right-0 p-6 md:p-10">
    <div className="max-w-md bg-gray-800 bg-opacity-40 p-6 rounded-md text-white backdrop-blur-sm text-right">
      <h1 className="text-xl md:text-4xl font-bold mb-3 leading-snug">
        Votre diagnostiqueur de proximité
      </h1>
      <p className="text-sm md:text-lg mb-5 leading-relaxed">
        Nous vous accompagnons dans tous vos diagnostics immobiliers, en toute transparence.
      </p>
      <a
        href="#devis"
        className="border border-white text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-white hover:text-cyan-900 transition"
      >
        Demander un devis
      </a>
    </div>
  </div>
    </div>
  </section>

    {/* Formulaire Jotform embed */}

    <QuoteForm />

    {/* Qui sommes-nous ? */}
    <section  id="about" className="bg-sidiag-dark text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
            <p className="uppercase text-sm text-teal-300 mb-2">Professionnalisme & confiance</p>
            <h2 className="text-2xl md:text-4xl font-bold mb-6">Qui sommes-nous ?</h2>
            <div className="space-y-6 text-sm md:text-base">
                <p>
                    Forts d’une solide expérience dans le domaine de l’immobilier, nous réalisons des diagnostics
                    fiables et impartiaux, adaptés à chaque situation.
                </p>
                <p>
                    Notre équipe de professionnels certifiés vous garantit réactivité, transparence et conseil
                    sur-mesure pour tous vos projets.
                </p>
            </div>
        </div>
    </section>

    {/* Nos services */}
    <section id="services" className="bg-sidiag-medium text-white py-10">
      <div className="px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="uppercase text-sm text-teal-200 mb-2">Ce que nous proposons</p>
          <h2 className="text-2xl md:text-3xl font-bold mb-10">Nos différents services</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Service 1 */}
          <a
            href="/diagnostics-vente"
            className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group block"
          >
            <img
              src="/vente.jpg"
              alt="Diagnostics vente"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 group-hover:text-teal-700 transition-colors">
                Diagnostics vente
              </h3>
              <p>
                Tous les diagnostics obligatoires pour vendre votre bien, réalisés dans les règles.
              </p>
            </div>
          </a>

          {/* Service 2 */}
          <a
            href="/diagnostics-location"
            className="bg-white text-gray-800 rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow group block"
          >
            <img
              src="/location.png"
              alt="Diagnostics location"
              className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <div className="p-4">
              <h3 className="font-bold text-lg mb-2 group-hover:text-teal-700 transition-colors">
                Diagnostics location
              </h3>
              <p>
                Pour louer en toute légalité et sérénité, nos diagnostics conformes et rapides.
              </p>
            </div>
          </a>
        </div>
      </div>
    </section>


    {/* Parallax image */}
<section className="relative w-full overflow-hidden">

    {/* Image mobile : fixe, pas zoomée */}
    <div className="block md:hidden">
        <img
        src="/toulon.webp"
        alt="Fond décoratif"
        className="w-full h-auto block"/>
    </div>

    {/* Image desktop avec parallax */}
    <div
        className="hidden md:block w-full h-[35vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/toulon.webp')" }}>
    </div>
</section>


    {/* Call to action */}
    <section className="bg-sidiag-medium text-white text-center px-6 py-20">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Vous avez un bien à faire diagnostiquer ?
        </h2>
        <p className="mb-6 text-sm md:text-base">
            Nous vous fournissons rapidement un devis gratuit et personnalisé.
        </p>
        <a
            href="#devis"
            className="inline-block border border-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-white hover:text-teal-800 transition"
        >
            Demander un devis gratuit
        </a>
    </section>

    {/* Contact */}
    <section className="bg-sidiag-dark text-white px-6 py-20">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-2xl md:text-4xl font-bold mb-6">Nous contacter</h1>
          <p className="mb-8 text-sm md:text-base">
            Vous pouvez nous joindre facilement par téléphone ou par email.
          </p>
          <div className="flex flex-col items-center space-y-4">
            {/* Numéro de téléphone cliquable */}
            <a 
              href="tel:+33668852578" 
              className="inline-flex items-center text-teal-300 hover:text-teal-400"
            >
              <PhoneIcon className="w-6 h-6 mr-2" />
              <span>+33 6 68 85 25 78</span>
            </a>
            {/* Adresse email cliquable */}
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