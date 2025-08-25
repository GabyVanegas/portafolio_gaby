import { cn } from "../lib/utils";
import { useEffect, useState } from "react";
import { X, Menu } from "lucide-react";

const navItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Acerca de", href: "#about" },
  { name: "Habilidades", href: "#skills" },
  { name: "Proyectos", href: "#proyectos" },
  { name: "Contacto", href: "#contacto" },
];

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed w-full z-40 transition-all duration-300",
        isScrolled
          ? "py-3 bg-background/80 backdrop-blur-md shadow-xs text-foreground" // al hacer scroll vuelve a colores del tema
          : "py-5 text-white" // mientras estás arriba (sobre el HeroSection), blanco siempre
      )}
    >
      <div className="container flex items-center justify-between">
        {/* Logo */}
        <a className="text-xl font-bold flex items-center" href="#inicio">
          <span className="relative z-10">
            <span className="text-glow">Gaby</span> Portafolio
          </span>
        </a>

        {/* nav escritorio */}
        <div className="hidden md:flex space-x-8">
          {navItems.map((item, key) => (
            <a
              key={key}
              href={item.href}
              className={cn(
                "transition-colors duration-300",
                isScrolled
                  ? "text-foreground/80 hover:text-primary"
                  : "text-white hover:text-primary"
              )}
            >
              {item.name}
            </a>
          ))}
        </div>

        {/* nav móvil */}
        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          className={cn(
            "md:hidden p-2 z-50",
            isScrolled ? "text-foreground" : "text-white"
          )}
          aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* menú móvil desplegable */}
        <div
          className={cn(
            "fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
            "transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
          )}
        >
          <div className="flex flex-col space-y-8 text-xl">
            {navItems.map((item, key) => (
              <a
                key={key}
                href={item.href}
                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
};
