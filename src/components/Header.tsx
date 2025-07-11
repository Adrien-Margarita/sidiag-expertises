import { useState } from "react";
import { Menu, X, ChevronDown } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { diagnostics } from "../data/diagnosticsData";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();

  const navLinks = [
    { name: "Accueil", href: "/#accueil" },
    { name: "Qui sommes-nous ?", href: "/#about" },
    { name: "Contact", href: "/contact" },
  ];

  const venteDiagnostics = diagnostics.filter((d) =>
    d.transactions.includes("Vente")
  );
  const locationDiagnostics = diagnostics.filter((d) =>
    d.transactions.includes("Location")
  );

  const handleNavigate = (path: string) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <Link to="/#accueil" className="flex items-center gap-3">
          <img
            src="/logo.webp"
            alt="Sidiag Logo"
            className="w-[100px] h-[100px] object-contain"
          />
          <span className="text-lg font-semibold text-sidiag-dark">
            Sidiag Expertises
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden xl-sm:flex gap-6 items-center relative">
          <Link
            to="/#accueil"
            className="text-sm text-gray-700 hover:text-sidiag-medium transition"
          >
            Accueil
          </Link>
          
          {/* Vente dropdown */}
          <div className="relative group">
            <button
              onClick={() => handleNavigate("/diagnostics-vente")}
              className="text-sm text-gray-700 hover:text-sidiag-medium transition flex items-center gap-1"
            >
              Diagnostics Vente <ChevronDown size={16} />
            </button>
            <ul className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform scale-95 group-hover:scale-100 bg-white shadow-md border rounded-md z-50 min-w-[220px] text-sm">
              {venteDiagnostics.map((diag) => (
                <li key={diag.slug}>
                  <Link
                    to={`/diagnostic/${diag.slug}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {diag.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Location dropdown */}
          <div className="relative group">
            <button
              onClick={() => handleNavigate("/diagnostics-location")}
              className="text-sm text-gray-700 hover:text-sidiag-medium transition flex items-center gap-1"
            >
              Diagnostics Location <ChevronDown size={16} />
            </button>
            <ul className="absolute top-full left-0 mt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 ease-in-out transform scale-95 group-hover:scale-100 bg-white shadow-md border rounded-md z-50 min-w-[220px] text-sm">
              {locationDiagnostics.map((diag) => (
                <li key={diag.slug}>
                  <Link
                    to={`/diagnostic/${diag.slug}`}
                    className="block px-4 py-2 hover:bg-gray-100 text-gray-700"
                  >
                    {diag.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Link
            to="/#about"
            className="text-sm text-gray-700 hover:text-sidiag-medium transition"
          >
            Qui sommes-nous ?
          </Link>
          <Link
            to="/contact"
            className="text-sm text-gray-700 hover:text-sidiag-medium transition"
          >
            Contact
          </Link>
          <Link
            to="/#devis"
            className="bg-sidiag-dark text-white px-4 py-2 rounded-lg text-sm hover:bg-sidiag-medium transition"
          >
            Demander un devis gratuit
          </Link>
        </nav>

        {/* Mobile menu */}
        <button
          className="xl-sm:hidden p-2 text-sidiag-dark"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {menuOpen && (
        <div className="xl-sm:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col p-4 gap-3">
            <Link 
              to="/#accueil"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-sidiag-medium transition"
            >
              Accueil
            </Link>
            <div>
              <Link
                to="/diagnostics-vente"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium mt-2"
              >
                Diagnostics Vente
              </Link>
              {venteDiagnostics.map((diag) => (
                <Link
                  key={diag.slug}
                  to={`/diagnostic/${diag.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="block pl-2 text-sm text-gray-600 hover:text-sidiag-medium"
                >
                  {diag.title}
                </Link>
              ))}
            </div>

            <div>
              <Link
                to="/diagnostics-location"
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium mt-2"
              >
                Diagnostics Location
              </Link>
              {locationDiagnostics.map((diag) => (
                <Link
                  key={diag.slug}
                  to={`/diagnostic/${diag.slug}`}
                  onClick={() => setMenuOpen(false)}
                  className="block pl-2 text-sm text-gray-600 hover:text-sidiag-medium"
                >
                  {diag.title}
                </Link>
              ))}
            </div>
            <Link
              to="/#about"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-sidiag-medium transition"
            >
              Qui sommes-nous ?
            </Link>
            <Link
              to="/contact"
              onClick={() => setMenuOpen(false)}
              className="text-sm text-gray-700 hover:text-sidiag-medium transition"
            >
              Contact
            </Link>
            <Link
              to="/#devis"
              className="bg-sidiag-dark text-white text-center px-4 py-2 rounded-lg text-sm hover:bg-cyan-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Demander un devis
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
