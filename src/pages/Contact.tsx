import { PhoneIcon, EnvelopeIcon } from '@heroicons/react/24/outline';
import QuoteForm from '../components/QuoteForm';

export default function ContactPage() {
  return (
    <main className="mt-16">
        {/* Image de couverture */}
      <div>
        <img
        src="./contact.webp"
        alt="maison en croquis avec DPE"
        className="w-full h-[30vh] object-cover"
        />
      </div>
      {/* Section Informations de contact */}
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

      {/* Section Formulaire de devis */}
      <section className="px-6 py-20">
        <div className="max-w-3xl mx-auto">
          <QuoteForm />
        </div>
      </section>
    </main>
  );
}
