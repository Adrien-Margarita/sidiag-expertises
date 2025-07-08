export default function Thanks() {
  return (
    <main className="px-4 py-20 max-w-2xl mx-auto text-center">
      <h1 className="text-3xl md:text-4xl font-bold text-sidiag-dark mb-6">
        Merci pour votre demande !
      </h1>
      <p className="text-lg md:text-xl mb-4">
        Nous avons bien reçu votre message et reviendrons vers vous dans les meilleurs délais.
      </p>
      <a
        href="/"
        className="inline-block mt-6 bg-sidiag-dark text-white px-6 py-3 rounded-lg hover:bg-sidiag-medium transition"
      >
        Retour à l’accueil
      </a>
    </main>
  );
}
