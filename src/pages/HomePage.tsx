export default function HomePage() {
  return (
<main className="mt-16">
    {/* Hero Section */}
<section
  className="relative w-full h-[400px] md:h-screen bg-cover bg-center flex items-center justify-center md:justify-start"
  style={{ backgroundImage: "url('/banner.webp')" }}
>
    <div className="absolute inset-0 z-0" />

    {/* Bloc texte responsive */}
    <div className="mx-4 relative z-10 px-4 max-w-md bg-gray-800 bg-opacity-40 p-6 rounded-md text-white backdrop-blur-sm text-center md:text-left md:ml-20">
        <h1 className="text-xl md:text-4xl font-bold mb-3 leading-snug">
        Votre diagnostiqueur de proximité
        </h1>
        <p className="text-sm md:text-lg mb-5 leading-relaxed">
        Nous vous accompagnons dans tous vos diagnostics immobiliers, en toute transparence.
        </p>
        <a
        href="#devis"
        className="border border-white text-white px-4 py-2 rounded-md text-sm md:text-base hover:bg-white hover:text-cyan-900 transition">
        Demander un devis
        </a>
    </div>
</section>

    {/* Formulaire Jotform embed */}
    <section id="devis" className="px-4 py-10 max-w-4xl mx-auto">
        <h2 className="text-center text-xl font-semibold mb-6">Demande de devis</h2>
        <div className="w-full h-[600px]">
            <iframe
                title="Demande de devis"
                className="w-full h-full border rounded-lg shadow-md"
                src="https://form.jotform.com/231234567890123"
                allowFullScreen
            />
        </div>
    </section>

    {/* Qui sommes-nous ? */}
    <section id="about" className="bg-teal-800 text-white px-6 py-20">
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
    <section className="bg-teal-700 text-white py-10">
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
        src="/parallax.jpeg"
        alt="Fond décoratif"
        className="w-full h-auto block"/>
    </div>

    {/* Image desktop avec parallax */}
    <div
        className="hidden md:block w-full h-[50vh] bg-fixed bg-center bg-cover"
        style={{ backgroundImage: "url('/parallax.jpeg')" }}>
    </div>
</section>


    {/* Call to action */}
    <section className="bg-teal-800 text-white text-center px-6 py-20">
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
</main>
  );
}
