import { Button } from "@/components/ui/button";
import { ExternalLink, Download, ArrowLeft, FileText } from "lucide-react";
import { Link } from "react-router-dom";

// Documents disponibles
const documents: { name: string; description: string; type: "download" | "link"; url: string; year?: string }[] = [
  { 
    name: "L'homme qui donna des ailes au monde - Clément Ader", 
    description: "Livre de Louis Castex", 
    type: "link", 
    url: "https://archive.org/details/lhomme-qui-donna-des-ailes-au-monde-clement-ader-louis-castex/mode/2up",
    year: "1947"
  },
];

const ClementAder = () => {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="border-b-2 border-border bg-card">
        <div className="container flex items-center justify-between py-4">
          <Link to="/" className="flex items-center gap-2 hover:text-primary transition-colors">
            <ArrowLeft className="w-5 h-5" />
            <span className="font-display text-xl">Retour</span>
          </Link>
          <div className="flex items-center gap-3">
            <h1 className="font-display text-2xl md:text-3xl tracking-wide">CLÉMENT ADER</h1>
            <span className="border-2 border-primary bg-primary/10 px-2 py-1 text-xs font-display text-primary">
              DOCUMENT
            </span>
          </div>
        </div>
      </header>

      <main className="container py-8 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 border-b-2 border-border pb-2">
            Qui est Clément Ader ?
          </h2>
          <div className="space-y-4 font-body text-sm md:text-lg leading-relaxed">
            <p>
              Clément Ader est mon ingénieur préféré. Il a été un visionnaire dans tous les domaines qu'il a touchés : le vélo avec les pneus en caoutchouc, les chenilles pour les voitures (puis les tanks), la téléphonie et bien sûr l'avion.
            </p>
            <p>
              C'est un homme qui a révolutionné notre monde. Malgré son immense fortune dans les années 1880-1890, il resta discret et travailla continuellement à la réalisation de son rêve : voler avec du plus lourd que l'air.
            </p>
            <p>
              J'admire cet homme qui a travaillé toute sa vie en pensant toujours à demain, qui a tout fait pour que ses inventions soient utilisées et améliorent notre quotidien. J'admire aussi l'histoire de celui à qui tout a réussi pendant 30 ans, qui a échoué, non pas à voler, mais à faire entendre au monde que le plus lourd que l'air devait exister.
            </p>
            <p>
              J'aime l'histoire qu'il nous enseigne. À notre époque où nos fusées sont de plus en plus grandes et nos ordinateurs de plus en plus puissants, n'oublions pas qu'un visionnaire peut discréditer son art par excès de vision. N'oublions pas également que c'est à nous, population, de donner la possibilité à ces visionnaires de bâtir le monde de demain, de ne pas les brider et de les aider.
            </p>
            <p className="italic text-muted-foreground">
              Alors, en hommage, je répertorie ici les divers livres et témoignages que j'ai pu retrouver sur internet et dans ma bibliothèque.
            </p>
          </div>
        </section>

        {/* Documents */}
        <section className="mb-12 border-2 border-border bg-card p-6">
          <h2 className="font-display text-2xl md:text-3xl mb-6 flex items-center gap-3">
            <FileText className="w-6 h-6" />
            Documents
          </h2>

          {documents.length > 0 ? (
            <div className="space-y-4">
              {documents.map((doc, index) => (
                <div key={index} className="flex items-center justify-between border-b border-border pb-3 last:border-b-0">
                  <div>
                    <p className="font-body text-sm md:text-base font-medium">
                      {doc.name} {doc.year && <span className="text-muted-foreground">({doc.year})</span>}
                    </p>
                    <p className="font-body text-xs md:text-sm text-muted-foreground">{doc.description}</p>
                  </div>
                  <Button asChild variant={doc.type === "download" ? "default" : "default"} className={`gap-2 shrink-0 ml-4 ${doc.type === "link" ? "bg-primary text-primary-foreground hover:bg-primary/90" : ""}`}>
                    {doc.type === "download" ? (
                      <a href={doc.url} download>
                        <Download className="w-4 h-4" />
                        Télécharger
                      </a>
                    ) : (
                      <a href={doc.url} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                        Lire
                      </a>
                    )}
                  </Button>
                </div>
              ))}
            </div>
          ) : (
            <p className="font-body text-sm md:text-base text-muted-foreground italic">
              Documents à venir... Revenez bientôt !
            </p>
          )}
        </section>

        {/* Sa Vie */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">1. Sa Vie</h2>
          <div className="space-y-4 font-body text-xs md:text-base leading-relaxed">
            <p>
              <strong>Clément Agnès Ader</strong> naît le <strong>2 avril 1841</strong> à Muret, près de Toulouse, dans
              une famille modeste. Très tôt, il montre un intérêt pour la mécanique et les sciences.
            </p>
            <p>
              Après des études à l'École des Arts et Métiers, il devient ingénieur et se passionne pour les nouvelles
              technologies de son époque. Il travaille d'abord sur les chemins de fer, puis s'intéresse au téléphone,
              améliorant considérablement le système de transmission de la voix.
            </p>
            <p>
              En 1881, il installe les premières lignes téléphoniques à Paris et invente le "théâtrophone", un système
              permettant de diffuser des spectacles en direct par téléphone. Cette invention lui vaut une certaine
              notoriété et lui permet de financer ses recherches aéronautiques.
            </p>
            <p>
              Passionné par le vol des oiseaux, notamment celui des chauves-souris, il consacre une grande partie de sa
              vie à l'étude du vol et à la conception d'aéronefs. Il vit modestement, réinvestissant la quasi-totalité
              de ses revenus dans ses recherches.
            </p>
          </div>
        </section>

        {/* Son Œuvre */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">2. Son Œuvre</h2>
          <div className="space-y-4 font-body text-xs md:text-base leading-relaxed">
            <p>
              L'œuvre de Clément Ader se concentre principalement sur la conception d'aéronefs inspirés de la nature :
            </p>

            <div className="border-2 border-border bg-card p-6 my-6">
              <h3 className="font-display text-lg md:text-xl mb-4">Ses Créations Majeures</h3>
              <ul className="space-y-3">
                <li className="flex gap-3">
                  <span className="font-display text-primary">•</span>
                  <span>
                    <strong>Éole (1890)</strong> - Premier aéronef à quitter le sol par ses propres moyens. Le 9 octobre
                    1890, l'Éole aurait effectué un "saut" de 50 mètres à environ 20 cm du sol, dans le parc du château
                    d'Armainvilliers.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-primary">•</span>
                  <span>
                    <strong>Zéphyr et Aquilon (1891-1893)</strong> - Prototypes intermédiaires développant les concepts
                    de l'Éole.
                  </span>
                </li>
                <li className="flex gap-3">
                  <span className="font-display text-primary">•</span>
                  <span>
                    <strong>Avion III (1897)</strong> - Son œuvre la plus aboutie, financée par le Ministère de la
                    Guerre. Cet appareil à deux hélices et moteur à vapeur de 40 chevaux tenta un vol le 14 octobre
                    1897 à Satory, sans succès.
                  </span>
                </li>
              </ul>
            </div>

            <p>
              Au-delà de l'aviation, Ader a également inventé le mot <strong>"avion"</strong> (du latin <em>avis</em>,
              oiseau), qu'il a déposé comme marque en 1890. Il a aussi contribué à l'amélioration des microphones, des
              systèmes de transmission, et a imaginé des concepts de chenilles pour véhicules militaires.
            </p>
            <p>
              Son livre <strong>"L'Aviation militaire"</strong> (1909) présente des visions prophétiques sur l'avenir
              de l'aviation dans les conflits armés, anticipant avec précision les bombardements aériens et les combats
              de la Première Guerre mondiale.
            </p>
          </div>
        </section>

        {/* Sa Mort */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">3. Sa Mort</h2>
          <div className="space-y-4 font-body text-xs md:text-base leading-relaxed">
            <p>
              Clément Ader décède le <strong>3 mars 1925</strong> à Toulouse, à l'âge de 83 ans. Il meurt dans une
              relative obscurité, son rôle de pionnier de l'aviation étant alors contesté au profit des frères Wright.
            </p>
            <p>
              Ce n'est qu'après sa mort que la France reconnaît pleinement sa contribution à l'histoire de l'aviation.
              Aujourd'hui, son nom est honoré de nombreuses façons : l'aéroport de Muret-Lherm porte son nom, ainsi que
              plusieurs rues, écoles et institutions en France.
            </p>
            <p>
              L'<strong>Avion III</strong>, son dernier aéronef, est conservé au Musée des Arts et Métiers à Paris, où
              il témoigne de l'audace et de l'ingéniosité de ce pionnier.
            </p>
            <p className="text-muted-foreground italic">
              "Il a voulu voler et il a volé. Avant tout le monde." - Inscription sur sa tombe
            </p>
          </div>
        </section>


        {/* Ressources externes */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">
            Ressources et Liens Utiles
          </h2>
          <ul className="space-y-3 font-body text-xs md:text-base">
            <li>
              <a
                href="https://fr.wikipedia.org/wiki/Cl%C3%A9ment_Ader"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Wikipedia - Clément Ader
              </a>
              <span className="text-muted-foreground"> - Biographie complète</span>
            </li>
            <li>
              <a
                href="https://www.arts-et-metiers.net/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Musée des Arts et Métiers
              </a>
              <span className="text-muted-foreground"> - Où est exposé l'Avion III</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border py-6 bg-card">
        <div className="container text-center">
          <p className="font-body text-muted-foreground">© 2025 Lavigne - Clément Ader</p>
        </div>
      </footer>
    </div>
  );
};

export default ClementAder;
