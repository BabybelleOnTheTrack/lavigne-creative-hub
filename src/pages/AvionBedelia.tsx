import { Button } from "@/components/ui/button";
import { ExternalLink, Download, ArrowLeft, Youtube, Instagram, Box } from "lucide-react";
import { Link } from "react-router-dom";
import avionBedelia from "@/assets/avion-bedelia.png";
import bedeliaVoiture from "@/assets/bedelia-voiture.jpg";
import planAvion from "@/assets/plan-avion-bedelia.png";
import porcoRossoConcept from "@/assets/porco-rosso-concept.jpg";
import bleriot11Prototype from "@/assets/bleriot-11-prototype.png";
import brevetBedelia from "@/assets/brevet-bedelia.png";
import avion3dModel from "@/assets/avion-bedelia-3d-model.png";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";

const components = [
  { name: "Moteur brushless 2212", poids: "50g", prix: "7€" },
  { name: "Servo 3.6g (x3)", poids: "11g", prix: "5€" },
  { name: "Batterie LiPo 3S 450mAh", poids: "38g", prix: "18€" },
  { name: "Contrôleur ESC 30A", poids: "25g", prix: "8€" },
  { name: "Récepteur 4 voies FS2A", poids: "2g", prix: "4€" },
  { name: "Bois balsa (planche) 100*10*2 x2", poids: "variable", prix: "10€" },
  { name: "Contreplaqué 3mm 20*10 x1", poids: "variable", prix: "5€" },
  { name: "Hélice 8x4.5", poids: "4g", prix: "4€" },
  { name: "Roues mousse (x3)", poids: "8g", prix: "6€" },
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
        {/* Sub-navigation */}
        <nav className="container py-2 flex gap-4 border-t border-border">
          <Link to="/avion-bedelia" className="font-display text-sm text-primary border-b-2 border-primary pb-1">1/9</Link>
          <Link to="/avion-bedelia/1-6" className="font-display text-sm hover:text-primary transition-colors">1/6</Link>
          <Link to="/avion-bedelia/1-3" className="font-display text-sm hover:text-primary transition-colors">1/3</Link>
          <Link to="/avion-bedelia/1-1" className="font-display text-sm hover:text-primary transition-colors">1/1</Link>
        </nav>
      </header>

      <main className="container py-8 max-w-4xl">
        {/* Introduction */}
        <section className="mb-12">
          <h2 className="font-display text-3xl md:text-4xl mb-6 border-b-2 border-border pb-2">
            Mon Plus Grand Projet
          </h2>
          <p className="font-body text-sm md:text-lg leading-relaxed">
            Bienvenue dans mon projet le plus ambitieux : la reconstruction de l'avion Bédélia, un appareil de 1910
            tombé dans l'oubli pendant plus de 105 ans.
          </p>
          <div className="border-2 border-border p-1 bg-card w-64 md:w-80 mt-4">
            <img src={brevetBedelia} alt="Brevet de l'avion Bédélia - 1910" className="w-full" />
            <p className="text-xs text-muted-foreground text-center mt-1 font-body">Brevet de l'avion Bédélia</p>
          </div>
        </section>

        {/* Histoire */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">1. L'Histoire</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="flex-1">
                <p className="font-body text-xs md:text-base leading-relaxed">
                  Bédélia est une marque de voiture française fondée en 1902. La marque a construit environ 3000
                  véhicules, et il n'en reste aujourd'hui que 30 exemplaires dans le monde ! Ce que peu de gens savent,
                  c'est que son fondateur a également construit un avion. L'existence de cet appareil a été complètement
                  ignorée pendant 105 ans !
                </p>
              </div>
              <div className="border-2 border-border p-1 bg-card shrink-0 w-48">
                <img src={bedeliaVoiture} alt="Voiture Bédélia de 1913" className="w-full" />
                <p className="text-xs text-muted-foreground text-center mt-1 font-body">Bédélia 1913</p>
              </div>
            </div>
            <p className="font-body text-xs md:text-base leading-relaxed">
              Redécouvert en 2015, nous ne possédons que très peu de documents à son sujet. Quelques photos d'époque et
              des descriptions fragmentaires sont tout ce qui reste de cette machine volante pionnière.
            </p>
            <p className="font-body text-xs md:text-base leading-relaxed text-primary">
              Si vous possédez des informations ou des documents sur l'avion Bédélia, n'hésitez pas à nous contacter :{" "}
              <a href="mailto:lesamisdebedelia@gmail.com" className="underline hover:no-underline">
                lesamisdebedelia@gmail.com
              </a>
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
            <p className="font-body text-xs md:text-base leading-relaxed">
              J'ai toujours voulu construire un avion inspiré des films de Miyazaki. Ces machines volantes poétiques,
              entre steampunk et rêverie, m'ont fasciné depuis mon enfance. L'avion Bédélia, avec son design d'une autre
              époque, correspond parfaitement à cette esthétique.
            </p>
            <p className="font-body text-xs md:text-base leading-relaxed">
              Je vais donc construire une <strong>interprétation de l'avion Bédélia</strong>, en taille réelle, biplace
              et à moteur électrique.
            </p>
            <div className="border-2 border-border p-1 bg-card w-64 my-4">
              <img src={porcoRossoConcept} alt="Concept art Porco Rosso - Miyazaki" className="w-full" />
              <p className="text-xs text-muted-foreground text-center mt-1 font-body">
                Concept art Porco Rosso - Miyazaki
              </p>
            </div>
            <Button asChild variant="outline" className="gap-2">
              <a href="https://www.instagram.com/babou_ama/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                Voir l'avancement du projet
              </a>
            </Button>
          </div>

          {/* Les 5 étapes */}
          <div className="mt-8 border-2 border-border bg-card p-6">
            <h3 className="font-display text-lg md:text-xl mb-4">Les 5 Étapes du Projet</h3>
            <ol className="space-y-3 font-body text-xs md:text-base">
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

          <h3 className="font-display text-lg md:text-xl mb-4">Liste des Composants</h3>
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
                  <TableCell className="font-display">~138g + bois</TableCell>
                  <TableCell className="font-display">67€</TableCell>
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

          <h3 className="font-display text-lg md:text-xl mb-4">Technique de Montage</h3>
          <p className="font-body text-xs md:text-base leading-relaxed mb-6">
            La maquette est construite principalement en bois balsa et contreplaqué. Les techniques de découpe et
            d'assemblage sont détaillées dans mes plans téléchargeables.
          </p>

          <div className="flex flex-wrap gap-4">
            <Button asChild className="gap-2">
              <a href="/plans/Proto_fuselage_Balsa2mm_V3.svg" download="Plan_Avion_Bedelia_1-9.svg">
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
            <Button asChild variant="outline" className="gap-2">
              <a href="https://www.instagram.com/babou_ama/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                Voir l'avancement du projet
              </a>
            </Button>
          </div>

          <div className="border-2 border-border p-2 bg-card mt-6">
            <img src={planAvion} alt="Aperçu du plan SVG de l'avion Bédélia 1/9" className="w-full" />
            <p className="text-sm text-muted-foreground text-center mt-2 font-body">
              Aperçu du plan de découpe pour la maquette 1/9
            </p>
          </div>
        </section>

        {/* Moteur électrique */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">
            4. Un Moteur Électrique ?
          </h2>
          <div className="space-y-4 font-body text-xs md:text-base leading-relaxed">
            <p>
              L'avion Bédélia représentait <strong>une véritable prouesse technologique en 1910</strong>. Y installer
              aujourd'hui un moteur thermique ne serait qu'une simple reproduction du passé.
            </p>
            <p>
              <strong>Mon objectif, à mon échelle, est de contribuer à faire progresser l'aviation.</strong> C'est
              pourquoi j'ai choisi d'y intégrer un moteur électrique.
            </p>
            <p>
              Non pour en faire l'avion le plus rapide ou le plus élégant, mais pour démontrer que{" "}
              <strong>
                si un fuselage vieux de 115 ans peut voler à l'électrique, alors rien n'empêche nos aéronefs modernes
                d'en faire autant
              </strong>
              .
            </p>
            <p className="text-muted-foreground italic">
              Un grand merci à Hugo d'Ipsolair dont les explications — partagées autour d'une bière — m'ont encouragé à
              emprunter cette voie.
            </p>
            <Button asChild variant="outline" className="gap-2 mt-2">
              <a href="https://www.instagram.com/ips_olaire/" target="_blank" rel="noopener noreferrer">
                <Instagram className="w-4 h-4" />
                Suivre leur aventure
              </a>
            </Button>
          </div>
        </section>

        {/* Projets et associations préférés */}
        <section className="mb-12 border-2 border-border bg-card p-6">
          <h2 className="font-display text-2xl md:text-3xl mb-6">Mes Projets et Associations Préférés</h2>
          <ul className="space-y-3 font-body text-xs md:text-base">
            <li>
              <a
                href="https://www.facebook.com/lesamisdebedelia/?locale=fr_FR"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Les Amis de Bédélia
              </a>
              <span className="text-muted-foreground"> - Association </span>
            </li>
            <li>
              <a
                href="http://a.p.p.a.r.a.t.free.fr/nous_contacter_026.htm"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Musée de la Montagne Noire
              </a>
              <span className="text-muted-foreground"> - Musée </span>
            </li>
            <li>
              <a
                href="https://late28.fr"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary hover:underline"
              >
                Laté 28
              </a>
              <span className="text-muted-foreground"> - Restauration du late 28 </span>
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
              <span className="text-muted-foreground"> - Mes plans de maquettes (gratuit et payant)</span>
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
              <span className="text-muted-foreground"> - mon ptit kiff</span>
            </li>
          </ul>
        </section>

        {/* Exemple prototype Blériot */}
        <section className="mb-12">
          <div className="border-2 border-border p-2 bg-card">
            <img src={bleriot11Prototype} alt="Prototype d'un Blériot 11 volant" className="w-full" />
            <p className="text-sm text-muted-foreground text-center mt-2 font-body">
              Exemple d'un prototype d'un Blériot 11 en cours de réalisation - AVION LAVIGNE
            </p>
          </div>
        </section>

        {/* Modélisation 3D */}
        <section className="mb-12">
          <h2 className="font-display text-2xl md:text-3xl mb-6 border-b-2 border-border pb-2">
            <Box className="inline w-6 h-6 mr-2" />
            Modélisation 3D
          </h2>
          <p className="font-body text-xs md:text-base leading-relaxed mb-6">
            Téléchargez le modèle 3D de l'avion Bédélia pour l'explorer ou l'imprimer en 3D.
          </p>
          <div className="border-2 border-border p-2 bg-card mb-6">
            <img src={avion3dModel} alt="Modèle 3D de l'avion Bédélia" className="w-full" />
            <p className="text-sm text-muted-foreground text-center mt-2 font-body">
              Aperçu du modèle 3D
            </p>
          </div>
          <Button asChild className="gap-2">
            <a href="/models/avion-bedelia.blend" download="avion-bedelia.blend">
              <Download className="w-4 h-4" />
              Télécharger le modèle 3D
            </a>
          </Button>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t-2 border-border py-6 bg-card">
        <div className="container text-center">
          <p className="font-body text-muted-foreground"> 2025 Lavigne - Projet Avion Bédélia</p>
        </div>
      </footer>
    </div>
  );
};

export default AvionBedelia;
