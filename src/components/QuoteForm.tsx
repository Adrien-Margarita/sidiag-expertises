import { useState } from "react";

// Définition des données du formulaire
interface FormData {
  souhaitez: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    souhaitez: "",
  });

  const handleSelect = (option: string) => {
    setFormData({ souhaitez: option });
  };

  const inputBase =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-sidiag-mediumLight focus:ring-1 focus:ring-sidiag-mediumLight transition";

  return (
    <section id="devis" className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-sidiag-dark mb-8">Demande de devis</h2>

      {/* Formulaire natif */}
      <form
        action="https://formsubmit.co/50c526c681ddbcdca4f503a3881e55c8"
        method="POST"
        className="space-y-6 bg-white/90 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-xl backdrop-blur"
      >
        <input type="hidden" name="_next" value="http://localhost:5173/merci" />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />

        {/* Votre bien immobilier */}
        <h3 className="text-xl font-semibold text-sidiag-dark">Votre bien immobilier</h3>

        {/* Vous souhaitez */}
        <div>
          <label className="block font-medium mb-1">Vous souhaitez*</label>
          <div className="flex space-x-4">
            {["Vendre", "Louer"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect(option)}
                className={`px-4 py-2 rounded-lg transition
                ${formData.souhaitez === option
                    ? "bg-sidiag-dark text-white"
                    : "bg-gray-100 hover:bg-sidiag-light/20"}`}
              >
                {option}
              </button>
            ))}
          </div>
          <input type="hidden" name="souhaitez" value={formData.souhaitez} />
        </div>

        {/* Type de bien */}
        <div>
          <label className="block font-medium mb-1">Type de bien*</label>
          <div className="relative">
            <select name="typeBien" className={`${inputBase} pr-10`} required>
              <option value="">Veuillez sélectionner</option>
              {[
                "Un appartement", "Une maison", "Un immeuble", "Un terrain",
                "Un local commercial", "Des parties communes", "Un garage",
                "Une cave", "Autre"
              ].map((type) => (
                <option key={type}>{type}</option>
              ))}
            </select>
            <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 text-sidiag-dark" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z" clipRule="evenodd" />
              </svg>
            </div>
          </div>
        </div>

        {/* Electricité / gaz */}
        <div className="grid md:grid-cols-2 gap-4">
          <select name="electrique" className={inputBase} required>
            <option value="">Installation électrique +15 ans ?</option>
            <option>Oui</option>
            <option>Non</option>
          </select>
          <select name="gaz" className={inputBase} required>
            <option value="">Installation gaz +15 ans ?</option>
            <option>Oui</option>
            <option>Non</option>
          </select>
        </div>

        {/* Pièces, surface, année */}
        <div className="grid md:grid-cols-3 gap-4">
          <input type="number" name="pieces" placeholder="Nombre de pièces*" className={inputBase} required />
          <input type="number" name="surface" placeholder="Surface (m²)*" className={inputBase} required />
          <input type="number" name="annee" placeholder="Année*" className={inputBase} required />
        </div>

        {/* Copropriété */}
        <label className="flex items-center space-x-2">
          <input type="checkbox" name="copropriete" />
          <span>Copropriété</span>
        </label>

        {/* Adresse */}
        <input type="text" name="adresse" placeholder="Adresse*" className={inputBase} required />
        <input type="text" name="complement" placeholder="Complément d'adresse" className={inputBase} />

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="ville" placeholder="Ville*" className={inputBase} required />
          <input type="text" name="codePostal" placeholder="Code Postal*" className={inputBase} required />
        </div>

        {/* Vos coordonnées */}
        <h3 className="text-xl font-semibold text-sidiag-dark mt-6">Vos coordonnées</h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input type="text" name="nom" placeholder="Nom*" className={inputBase} required />
          <input type="text" name="prenom" placeholder="Prénom" className={inputBase} />
        </div>

        <input type="tel" name="telephone" placeholder="Téléphone*" className={inputBase} required />
        <input type="email" name="email" placeholder="Email*" className={inputBase} required />

        <button type="submit" className="bg-sidiag-dark text-white px-6 py-3 rounded-lg hover:bg-sidiag-medium shadow transition transform hover:-translate-y-0.5">
          Envoyer la demande
        </button>
      </form>
    </section>
  );
}
