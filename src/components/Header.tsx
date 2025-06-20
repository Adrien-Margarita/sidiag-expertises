import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = [
    { name: "Accueil", href: "#" },
    { name: "Services", href: "#services" },
    { name: "Qui sommes-nous ?", href: "#about" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <img src="/logo.png" alt="Sidiag Logo" className="w-10 h-10 object-contain" />
          <span className="text-lg font-semibold text-gray-800">Sidiag Expertises</span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex gap-6 items-center">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm text-gray-700 hover:text-cyan-800 transition"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#devis"
            className="bg-cyan-900 text-white px-4 py-2 rounded-lg text-sm hover:bg-cyan-800 transition"
          >
            Demander un devis
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-cyan-900"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Panel */}
      {menuOpen && (
        <div className="md:hidden bg-white shadow-md border-t border-gray-100">
          <div className="flex flex-col p-4 gap-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm text-gray-700 hover:text-cyan-800"
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <a
              href="#devis"
              className="bg-cyan-900 text-white text-center px-4 py-2 rounded-lg text-sm hover:bg-cyan-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Demander un devis
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
