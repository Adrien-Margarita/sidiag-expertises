export default function Footer() {
  return (
    <footer className="bg-gray-100 text-sm text-gray-600 px-6 py-8">
      <div className="max-w-6xl mx-auto grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <div>
          <h3 className="font-semibold text-gray-800 mb-2">Sidiag Expertises</h3>
          <p>Votre diagnostiqueur immobilier de proximité.</p>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Mentions légales</h4>
          <ul className="space-y-1">
            <li>SIRET : 123 456 789 00012</li>
            <li>Responsabilité civile professionnelle assurée</li>
            <li>Certifié par un organisme agréé</li>
          </ul>
        </div>

        <div>
          <h4 className="font-semibold text-gray-800 mb-2">Infos & conformité</h4>
          <ul className="space-y-1">
            <li>Conformité RGPD</li>
            <li>Hébergement : Vercel</li>
            <li>&copy; {new Date().getFullYear()} Sidiag Expertises</li>
          </ul>
        </div>
      </div>
    </footer>
  );
}
