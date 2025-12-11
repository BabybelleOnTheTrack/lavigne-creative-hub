import { Button } from "@/components/ui/button";
import { ArrowLeft, Construction } from "lucide-react";
import { Link } from "react-router-dom";

const AvionBedelia16 = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display text-xl">Retour</span>
          </Link>
          <h1 className="font-display text-2xl md:text-3xl tracking-wide">AVION BÉDÉLIA</h1>
        </div>
        {/* Sub-navigation */}
        <nav className="container py-2 flex gap-4 border-t border-border">
          <Link to="/avion-bedelia" className="font-display text-sm hover:text-primary transition-colors">1/9</Link>
          <Link to="/avion-bedelia/1-6" className="font-display text-sm text-primary border-b-2 border-primary pb-1">1/6</Link>
          <Link to="/avion-bedelia/1-3" className="font-display text-sm hover:text-primary transition-colors">1/3</Link>
          <Link to="/avion-bedelia/1-1" className="font-display text-sm hover:text-primary transition-colors">1/1</Link>
        </nav>
      </header>

      <main className="container py-8 max-w-4xl">
        <section className="mb-12 text-center py-20">
          <Construction className="w-16 h-16 mx-auto mb-6 text-muted-foreground" />
          <h2 className="font-display text-3xl md:text-4xl mb-6">
            Maquette 1/6
          </h2>
          <p className="font-body text-lg text-muted-foreground">
            En construction...
          </p>
          <p className="font-body text-sm text-muted-foreground mt-4">
            Cette section sera bientôt disponible avec tous les détails de la maquette à l'échelle 1/6.
          </p>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border py-6 bg-card">
        <div className="container text-center">
          <p className="font-body text-muted-foreground">© 2025 Lavigne - Projet Avion Bédélia</p>
        </div>
      </footer>
    </div>
  );
};

export default AvionBedelia16;
