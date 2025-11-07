import { Menu, X, Instagram, Facebook, Mail } from "lucide-react";
import { useState } from "react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMenuOpen(false);
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo/Name */}
          <div className="flex items-center">
            <h1 className="text-2xl font-bold text-foreground">Artist Portfolio</h1>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <button
              onClick={() => scrollToSection("abstract")}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Abstract
            </button>
            <button
              onClick={() => scrollToSection("portraits")}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Portraits
            </button>
            <button
              onClick={() => scrollToSection("landscapes")}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Landscapes
            </button>
            <button
              onClick={() => scrollToSection("still-life")}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Still Life
            </button>
            <button
              onClick={() => scrollToSection("urban")}
              className="text-foreground hover:text-accent transition-smooth"
            >
              Urban
            </button>
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-accent transition-smooth"
            >
              About
            </button>
          </nav>

          {/* Social Links */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              <Facebook className="w-5 h-5" />
            </a>
            <a
              href="mailto:artist@example.com"
              className="text-muted-foreground hover:text-accent transition-smooth"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4">
            <nav className="flex flex-col space-y-4">
              <button
                onClick={() => scrollToSection("abstract")}
                className="text-foreground hover:text-accent transition-smooth text-left"
              >
                Abstract
              </button>
              <button
                onClick={() => scrollToSection("portraits")}
                className="text-foreground hover:text-accent transition-smooth text-left"
              >
                Portraits
              </button>
              <button
                onClick={() => scrollToSection("landscapes")}
                className="text-foreground hover:text-accent transition-smooth text-left"
              >
                Landscapes
              </button>
              <button
                onClick={() => scrollToSection("still-life")}
                className="text-foreground hover:text-accent transition-smooth text-left"
              >
                Still Life
              </button>
              <button
                onClick={() => scrollToSection("urban")}
                className="text-foreground hover:text-accent transition-smooth text-left"
              >
                Urban
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-foreground hover:text-accent transition-smooth text-left"
              >
                About
              </button>
              <div className="flex items-center space-x-4 pt-4">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Instagram className="w-5 h-5" />
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="mailto:artist@example.com"
                  className="text-muted-foreground hover:text-accent transition-smooth"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
