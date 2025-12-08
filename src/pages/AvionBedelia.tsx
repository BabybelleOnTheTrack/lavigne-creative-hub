import { Button } from "@/components/ui/button";
import { ExternalLink, Download, ArrowLeft, Youtube } from "lucide-react";
import { Link } from "react-router-dom";
import avionBedelia from "@/assets/avion-bedelia.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const components = [
  { name: "Moteur brushless 2212", poids: "50g", prix: "15€" },
  { name: "Servo 9g (x3)", poids: "27g", prix: "12€" },
  { name: "Batterie LiPo 3S 1300mAh", poids: "110g", prix: "18€" },
  { name: "Contrôleur ESC 30A", poids: "25g", prix: "10€" },
  { name: "Récepteur 6 voies", poids: "8g", prix: "15€" },
  { name: "Bois balsa (planche)", poids: "variable", prix: "8€" },
  { name: "Contreplaqué 3mm", poids: "variable", prix: "5€" },
  { name: "Hélice 10x4.5", poids: "15g", prix: "4€" },
  { name: "Roues mousse (x3)", poids: "20g", prix: "6€" },
  { name: "Fils et connecteurs", poids: "10g", prix: "5€" },
];

const AvionBedelia = () => {
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
      </header>

      <main className="container py-8 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 border-b-2 border-border pb-2">
            Mon Plus Grand Projet
          </h2>
          <p className="font-body text-lg leading-relaxed">
            Bienvenue dans mon projet le plus ambitieux : la reconstruction de l'avion Bédélia, un appareil de 1910
            tombé dans l'oubli pendant plus de 105 ans.
          </p>
        </section>

        {/* Histoire */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">1. L'Histoire</h2>
          <div className="space-y-4">
            <p className="font-body leading-relaxed">
              Bédélia est une marque de voiture française fondée au début du XXe siècle. Ce que peu de gens savent,
              c'est que son fondateur a également construit un avion. L'existence de cet appareil a été complètement
              ignorée pendant 105 ans !
            </p>
            <p className="font-body leading-relaxed">
              Redécouvert en 2015, nous ne possédons que très peu de documents à son sujet. Quelques photos d'époque et
              des descriptions fragmentaires sont tout ce qui reste de cette machine volante pionnière.
            </p>
            <div className="border-2 border-border p-2 bg-card my-6">
              <img src={avionBedelia} alt="L'avion Bédélia original - Photo d'époque de 1910" className="w-full" />
              <p className="text-sm text-muted-foreground text-center mt-2 font-body">
                L'avion Bédélia original - Photo d'époque (circa 1910)
              </p>
            </div>
          </div>
        </section>

        {/* Projet de reconstruction */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">
            2. Le Projet de Reconstruction
          </h2>
          <div className="space-y-4">
            <p className="font-body leading-relaxed">
              J'ai toujours voulu construire un avion inspiré des films de Miyazaki. Ces machines volantes poétiques,
              entre steampunk et rêverie, m'ont fasciné depuis mon enfance. L'avion Bédélia, avec son design d'une autre
              époque, correspond parfaitement à cette esthétique.
            </p>
            <p className="font-body leading-relaxed">
              Je vais donc construire une <strong>interprétation de l'avion Bédélia</strong>, en taille réelle, biplace
              et à moteur électrique.
            </p>
          </div>

          {/* Les 5 étapes */}
          <div className="mt-8 border-2 border-border bg-card p-6">
            <h3 className="font-display text-xl mb-4">Les 5 Étapes du Projet</h3>
            <ol className="space-y-3 font-body">
              <li className="flex gap-3">
                <span className="font-display text-primary">1.</span>
                <span>Récupération de documentation et réalisation des dessins préparatoires</span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-primary">2.</span>
                <span>Réalisation d'une maquette 1/9 - Prototype de découverte et support pour mes vidéos</span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-primary">3.</span>
                <span>Réalisation d'une maquette 1/6 avec les bonnes dimensions mais à l'échelle</span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-primary">4.</span>
                <span>Réalisation d'une maquette 1/2 avec le moteur électrique final</span>
              </li>
              <li className="flex gap-3">
                <span className="font-display text-primary">5.</span>
                <span>Réalisation de l'avion taille 1/1 - Le vrai, le grand, le magnifique !</span>
              </li>
            </ol>
          </div>
        </section>

        {/* Détails étape 1 */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">
            3. Détails de l'Étape 1 - Maquette 1/9
          </h2>

          <h3 className="font-display text-xl mb-4">Liste des Composants</h3>
          <div className="border-2 border-border overflow-hidden mb-6">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="font-display">Composant</TableHead>
                  <TableHead className="font-display">Poids</TableHead>
                  <TableHead className="font-display">Prix</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {components.map((item) => (
                  <TableRow key={item.name}>
                    <TableCell className="font-body">{item.name}</TableCell>
                    <TableCell className="font-body">{item.poids}</TableCell>
                    <TableCell className="font-body">{item.prix}</TableCell>
                  </TableRow>
                ))}
                <TableRow className="bg-secondary">
                  <TableCell className="font-display">TOTAL</TableCell>
                  <TableCell className="font-display">~265g</TableCell>
                  <TableCell className="font-display">~98€</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>

          <div className="mb-8">
            <Button asChild variant="outline" className="gap-2">
              <a href="https://youtu.be/1Ww-396kYuY?si=V8-DP2ddEkzIXngk" target="_blank" rel="noopener noreferrer">
                <Youtube className="w-4 h-4" />
                Voir le tutoriel vidéo
              </a>
            </Button>
          </div>

          <h3 className="font-display text-xl mb-4">Technique de Montage</h3>
          <p className="font-body leading-relaxed mb-6">
            La maquette est construite principalement en bois balsa et contreplaqué. Les techniques de découpe et
            d'assemblage sont détaillées dans mes plans téléchargeables.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="gap-2">
              <a href="https://payhip.com/AVIONLAVIGNE" target="_blank" rel="noopener noreferrer">
                <Download className="w-4 h-4" />
                Télécharger le plan
              </a>
            </Button>
            <Button asChild variant="secondary" className="gap-2">
              <a href="https://payhip.com/AVIONLAVIGNE" target="_blank" rel="noopener noreferrer">
                <ExternalLink className="w-4 h-4" />
                Voir mes autres plans
              </a>
            </Button>
          </div>
        </section>

        {/* Projets et associations préférés */}
        <section className="mb-12 border-2 border-border bg-card p-6">
          <h2 className="font-display text-2xl md:text-3xl mb-6">Mes Projets et Associations Préférés</h2>
          <ul className="space-y-3 font-body">
            <li>
              <a
                href="https://www.amisdebedelia.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Les Amis de Bédélia
              </a>
              <span className="text-muted-foreground"> - Association de passionnés</span>
            </li>
            <li>
              <a
                href="https://www.museemontagnoire.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Musée de la Montagne Noire
              </a>
              <span className="text-muted-foreground"> - Histoire locale et aéronautique</span>
            </li>
            <li>
              <a
                href="https://www.late28.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Laté 28
              </a>
              <span className="text-muted-foreground"> - Restauration d'avions historiques</span>
            </li>
            <li>
              <a
                href="https://payhip.com/AVIONLAVIGNE"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Les Avions Lavigne
              </a>
              <span className="text-muted-foreground"> - Mes plans de maquettes</span>
            </li>
            <li>
              <a
                href="https://www.youtube.com/@Babou_bricolage"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Ma chaîne YouTube
              </a>
              <span className="text-muted-foreground"> - Tutoriels et constructions</span>
            </li>
          </ul>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border py-6 bg-card">
        <div className="container text-center">
          <p className="font-body text-muted-foreground">© 2024 Lavigne - Projet Avion Bédélia</p>
        </div>
      </footer>
    </div>
  );
};

export default AvionBedelia;
