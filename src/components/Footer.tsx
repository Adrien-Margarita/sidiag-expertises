export default function Footer() {
  return (
    <footer className="bg-sidiag-dark text-white text-sm px-6 py-10">
      <div className="max-w-7xl mx-auto grid gap-6 md:grid-cols-3">
        <div>
          <h3 className="font-semibold text-lg mb-2">Sidiag Expertises</h3>
          <p>Votre diagnostiqueur immobilier de proximité.</p>
          <p>Propriétaire : Sofiane Zeghoudi</p>
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Mentions légales</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="/mentions-legales"
                className="underline hover:text-sidiag-light"
              >
                Voir les mentions légales
              </a>
            </li>
            <li>SIRET : 945 059 368 00015</li>
            <li>Assurance RC Pro : Klarity CDIAGK002075</li>
            <img src="/certification.webp" alt="certification LCP" className="w-[40%] bg-white p-1 rounded-md"/>
          </ul>
          
        </div>

        <div>
          <h4 className="font-semibold text-lg mb-2">Conformité</h4>
          <ul className="space-y-1">
            <li>
              <a
                href="/politique-confidentialite"
                className="underline hover:text-sidiag-light"
              >
                Politique de confidentialité (RGPD)
              </a>
            </li>
            <li>Hébergement : Vercel</li>
            <li>&copy; {new Date().getFullYear()} SAS Sidiag Expertises</li>
          </ul>
        </div>
      </div>
      <div className="mt-6 text-center text-xs text-gray-300">
        Les informations collectées via ce site sont destinées à traiter votre demande. Conformément à la loi « Informatique et Libertés » et au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant.
      </div>
    </footer>
  );
}
