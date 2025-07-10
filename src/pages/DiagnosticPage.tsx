import { useParams } from "react-router-dom";
import { diagnostics } from "../data/diagnosticsData";
import { Helmet } from "react-helmet-async";


export default function DiagnosticPage() {
  const { slug } = useParams<{ slug: string }>();
  const diag = diagnostics.find((d) => d.slug === slug);

  if (!diag) return <p className="text-center mt-16 text-red-500">Diagnostic introuvable</p>;

  return (
    <main className="mt-16">
      <Helmet>
        <title>{`${diag.title} à Toulon et PACA - Sidiag Expertises`}</title>
        <meta
          name="description"
          content={`${diag.title} obligatoire dans le Var et la région PACA. Découvrez pourquoi, quand et comment réaliser ce diagnostic immobilier à Toulon, La Seyne, Bandol et alentours.`}
        />
      </Helmet>

      {/* Bandeau image */}
      <section className="relative">
        <img
          src="/diagnostic-banner.webp"
          alt="Diagnostic immobilier"
          className="w-full h-[30vh] object-cover object-bottom"
        />
        <div className="absolute -bottom-8 left-8 bg-white shadow-lg rounded-full p-3">
          <img src={diag.icon} alt={diag.title} className="w-16 h-16" />
        </div>
      </section>

      <section className="px-6 py-20 max-w-5xl mx-auto space-y-8">
        <div className="animate-fade-in">
          <h1 className="text-3xl font-bold text-sidiag-dark mb-2">{diag.title}</h1>
          <p className="text-gray-700">{diag.description}</p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 animate-fade-in">
          <div className="bg-gray-50 rounded shadow p-4">
            <h3 className="font-semibold mb-1">Secteur concerné</h3>
            <p>{diag.secteur}</p>
          </div>
          <div className="bg-gray-50 rounded shadow p-4">
            <h3 className="font-semibold mb-1">Immeubles concernés</h3>
            <p>{diag.immeubles}</p>
          </div>
          <div className="bg-gray-50 rounded shadow p-4">
            <h3 className="font-semibold mb-1">Transactions concernées</h3>
            <p>{diag.transactions}</p>
          </div>
          <div className="bg-gray-50 rounded shadow p-4">
            <h3 className="font-semibold mb-1">Usages concernés</h3>
            <p>{diag.usages}</p>
          </div>
          <div className="bg-gray-50 rounded shadow p-4">
            <h3 className="font-semibold mb-1">Parties concernées</h3>
            <p>{diag.parties}</p>
          </div>
          <div className="bg-gray-50 rounded shadow p-4">
            <h3 className="font-semibold mb-1">Durée de validité</h3>
            <p>{diag.validite}</p>
          </div>
          <div className="bg-gray-50 rounded shadow p-4 md:col-span-3">
            <h3 className="font-semibold mb-1">Sanctions en cas d’absence</h3>
            <p>{diag.sanctions}</p>
          </div>
        </div>

        <div className="space-y-6 animate-fade-in">
          <h2 className="text-2xl font-semibold text-sidiag-dark">Pourquoi ?</h2>
          <p>{diag.pourquoi}</p>

          <h2 className="text-2xl font-semibold text-sidiag-dark">Quand ?</h2>
          <p>{diag.quand}</p>

          <h2 className="text-2xl font-semibold text-sidiag-dark">Comment ?</h2>
          <p>{diag.comment}</p>
        </div>

        <div className="text-center mt-10 animate-fade-in">
          <a
            href="/#devis"
            className="bg-sidiag-dark text-white px-6 py-3 rounded hover:bg-sidiag-medium transition"
          >
            Demander un devis gratuit
          </a>
        </div>
      </section>
    </main>
  );
}
