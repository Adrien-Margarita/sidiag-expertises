import { useState } from "react";

interface FormData {
  souhaitez: string;
  electrique: string;
  gaz: string;
  copropriete: string;
}

export default function QuoteForm() {
  const [formData, setFormData] = useState<FormData>({
    souhaitez: "",
    electrique: "",
    gaz: "",
    copropriete: "",
  });

  const handleSelect = (field: keyof FormData, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const inputBase =
    "w-full border border-gray-300 rounded-lg px-3 py-2 focus:outline-none focus:border-teal-500 focus:ring-1 focus:ring-teal-500 bg-white transition";

  const radioButtonClass = (selected: boolean) =>
    `px-4 py-2 rounded-lg transition border ${
      selected
        ? "bg-sidiag-dark text-white border-sidiag-dark"
        : "bg-gray-100 hover:bg-teal-100 border-gray-300"
    }`;

  return (
    <section id="devis" className="px-4 py-10 max-w-4xl mx-auto">
      <h2 className="text-center text-2xl font-bold text-sidiag-dark mb-8">
        Demande de devis gratuit
      </h2>

      <form
        action="https://formsubmit.co/c893066a5e53353fc0c8c0e5b9528bbb"
        method="POST"
        className="space-y-6 bg-white/90 p-6 rounded-2xl shadow-lg transition-all duration-300 hover:shadow-2xl backdrop-blur"
      >
        <input type="hidden" name="_next" value="https://www.sidiag-expertises.com/merci" />
        <input type="text" name="_honey" style={{ display: "none" }} />
        <input type="hidden" name="_captcha" value="false" />

        {/* Votre bien immobilier */}
        <h3 className="text-xl font-semibold text-sidiag-dark">
          Votre bien immobilier
        </h3>

        {/* Vous souhaitez */}
        <div>
          <label className="block font-medium mb-1">Vous souhaitez*</label>
          <div className="flex space-x-4">
            {["Vendre", "Louer"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect("souhaitez", option)}
                className={radioButtonClass(formData.souhaitez === option)}
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
          <select name="typeBien" className={`${inputBase}`} required>
            <option value="">Veuillez sélectionner</option>
            {[
              "Un appartement",
              "Une maison",
              "Un immeuble",
              "Un terrain",
              "Un local commercial",
              "Des parties communes",
              "Un garage",
              "Une cave",
              "Autre",
            ].map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </div>

        {/* Electricité / gaz */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <p className="font-medium mb-1">
              Installation électrique +15 ans ?
            </p>
            <div className="flex space-x-4">
              {["Oui", "Non"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect("electrique", option)}
                  className={radioButtonClass(formData.electrique === option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <input type="hidden" name="electrique" value={formData.electrique} />
          </div>

          <div>
            <p className="font-medium mb-1">Installation gaz +15 ans ?</p>
            <div className="flex space-x-4">
              {["Oui", "Non"].map((option) => (
                <button
                  key={option}
                  type="button"
                  onClick={() => handleSelect("gaz", option)}
                  className={radioButtonClass(formData.gaz === option)}
                >
                  {option}
                </button>
              ))}
            </div>
            <input type="hidden" name="gaz" value={formData.gaz} />
          </div>
        </div>

        {/* Pièces, surface, année */}
        <div className="grid md:grid-cols-3 gap-4">
          <input
            type="number"
            name="pieces"
            placeholder="Nombre de pièces*"
            className={inputBase}
            required
          />
          <input
            type="number"
            name="surface"
            placeholder="Surface (m²)*"
            className={inputBase}
            required
          />
          <input
            type="number"
            name="annee"
            placeholder="Année*"
            className={inputBase}
            required
          />
        </div>

        {/* Copropriété */}
        <div>
          <p className="font-medium mb-1">Copropriété</p>
          <div className="flex space-x-4">
            {["Oui", "Non"].map((option) => (
              <button
                key={option}
                type="button"
                onClick={() => handleSelect("copropriete", option)}
                className={radioButtonClass(formData.copropriete === option)}
              >
                {option}
              </button>
            ))}
          </div>
          <input
            type="hidden"
            name="copropriete"
            value={formData.copropriete}
          />
        </div>

        {/* Adresse */}
        <input
          type="text"
          name="adresse"
          placeholder="Adresse*"
          className={inputBase}
          required
        />
        <input
          type="text"
          name="complement"
          placeholder="Complément d'adresse"
          className={inputBase}
        />

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="ville"
            placeholder="Ville*"
            className={inputBase}
            required
          />
          <input
            type="text"
            name="codePostal"
            placeholder="Code Postal*"
            className={inputBase}
            required
          />
        </div>

        {/* Vos coordonnées */}
        <h3 className="text-xl font-semibold text-sidiag-dark mt-6">
          Vos coordonnées
        </h3>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="nom"
            placeholder="Nom*"
            className={inputBase}
            required
          />
          <input
            type="text"
            name="prenom"
            placeholder="Prénom"
            className={inputBase}
          />
        </div>

        <input
          type="tel"
          name="telephone"
          placeholder="Téléphone*"
          className={inputBase}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          className={inputBase}
          required
        />

        <button
          type="submit"
          className="bg-sidiag-dark text-white px-6 py-3 rounded-lg hover:bg-sidiag-medium shadow transition transform hover:-translate-y-0.5"
        >
          Envoyer la demande
        </button>
      </form>
    </section>
  );
}
