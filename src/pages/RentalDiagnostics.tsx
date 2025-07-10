import { Link } from "react-router-dom";
import { diagnostics } from "../data/diagnosticsData";

export default function RentalDiagnostics() {
  const diagnosticsLocation = diagnostics.filter((d) =>
    d.transactions.includes("Location")
  );

  return (
    <main className="mt-16">
      {/* Hero */}
      <section className="relative" role="banner">
        <img
          src="/diagnostic-banner.webp"
          alt="Diagnostics immobiliers obligatoires pour la location à Toulon et dans le Var"
          className="w-full h-[40vh] object-cover object-bottom"
        />
        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
          <h1 className="text-3xl md:text-5xl text-white font-bold text-center px-4">
            Diagnostics immobiliers obligatoires pour la location à Toulon, La Seyne‑sur‑Mer et dans le Var
          </h1>
        </div>
      </section>

      {/* Introduction */}
      <section className="px-6 py-12 max-w-5xl mx-auto space-y-6">
        <p>
          Pour louer votre bien immobilier à <strong>Toulon</strong>, <strong>La Seyne‑sur‑Mer</strong>, <strong>La Garde</strong>,
          <strong> La Valette</strong>, <strong>Carqueiranne</strong>, <strong>Sanary‑sur‑Mer</strong>, <strong>Bandol</strong> et dans tout le <strong>Var</strong>,
          vous devez fournir des <strong>diagnostics immobiliers obligatoires</strong>. Ces expertises garantissent la sécurité, la transparence et la conformité de votre bail.
        </p>

        <p>
          Notre équipe de <strong>diagnostiqueurs certifiés</strong> intervient rapidement dans toutes ces communes pour vous remettre un <strong>dossier complet et conforme</strong> aux réglementations en vigueur.
        </p>
      </section>

      {/* Liste dynamique des diagnostics */}
      <section className="bg-gray-50 py-12" aria-labelledby="diagnostics-title">
        <div className="px-6 max-w-6xl mx-auto">
          <h2
            id="diagnostics-title"
            className="text-2xl font-bold text-center mb-8"
          >
            Quels diagnostics obligatoires pour louer votre bien ?
          </h2>

          <div className="grid md:grid-cols-2 gap-8" role="list">
            {diagnosticsLocation.map((diag) => (
              <Link
                to={`/diagnostic/${diag.slug}`}
                key={diag.slug}
                role="listitem"
                aria-label={`En savoir plus sur ${diag.title}`}
                className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition block focus:outline-none focus:ring-2 focus:ring-teal-500"
              >
                <div className="flex items-center space-x-4 mb-4">
                  <img
                    src={diag.icon}
                    alt=""
                    role="presentation"
                    className="w-12 h-12"
                  />
                  <h3 className="text-lg font-semibold">{diag.title}</h3>
                </div>
                <p className="text-sm">{diag.description}</p>
                <p className="mt-2 text-xs text-gray-500 italic">
                  {diag.validite} • {diag.parties}
                </p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Secteur */}
      <section className="px-6 py-12 max-w-5xl mx-auto space-y-6">
        <h2 className="text-2xl font-bold">Intervention dans tout le Var</h2>
        <p>
          Nous intervenons sur toute la région <strong>Var</strong> et <strong>PACA</strong>, en particulier dans les communes de <strong>Toulon</strong>, <strong>La Seyne‑sur‑Mer</strong>, <strong>La Garde</strong>,
          <strong> La Valette</strong>, <strong>Carqueiranne</strong>, <strong>Sanary‑sur‑Mer</strong> <strong>Bandol</strong> et <strong>alentours</strong>.
        </p>
        <p>
          Nos <strong>diagnostics immobiliers location</strong> sont réalisés dans les règles de l’art et dans les meilleurs délais, pour vous permettre de louer votre bien en toute sérénité.
        </p>
      </section>

      {/* Pourquoi nous choisir */}
      <section
        className="bg-sidiag-dark text-white py-12"
        aria-labelledby="why-choose-us"
      >
        <div className="px-6 max-w-4xl mx-auto text-center space-y-4">
          <h2 id="why-choose-us" className="text-2xl font-bold">
            Pourquoi choisir Sidiag Expertises pour vos diagnostics location ?
          </h2>
          <ul
            className="list-disc list-inside space-y-2 text-left max-w-xl mx-auto"
            role="list"
          >
            <li>Diagnostiqueurs certifiés et expérimentés</li>
            <li>Intervention rapide dans tout le Var</li>
            <li>Rapport clair et conforme à la réglementation</li>
            <li>Tarifs compétitifs</li>
            <li>Accompagnement et conseils personnalisés</li>
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section
        className="bg-sidiag-medium text-white py-12"
        aria-labelledby="cta-title"
      >
        <div className="text-center space-y-4">
          <h2
            id="cta-title"
            className="text-2xl md:text-3xl font-bold"
          >
            Prêt à louer votre bien ?
          </h2>
          <p className="text-sm md:text-base">
            Obtenez votre devis gratuit pour vos diagnostics location en quelques clics.
          </p>
          <Link
            to="/#devis"
            aria-label="Demander un devis gratuit"
            className="inline-block border border-white px-6 py-3 rounded-md text-sm md:text-base hover:bg-white hover:text-teal-800 transition focus:outline-none focus:ring-2 focus:ring-white"
          >
            Demander un devis gratuit
          </Link>
        </div>
      </section>
    </main>
  );
}
