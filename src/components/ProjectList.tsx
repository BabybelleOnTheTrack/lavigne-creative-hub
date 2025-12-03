import ProjectCard from "./ProjectCard";
import projectImage from "@/assets/project-image.jpg";
import avionRc1 from "@/assets/avion-rc-1.jpg";
import avionRc2 from "@/assets/avion-rc-2.jpg";
import secretSanta from "@/assets/secret-santa.png";

export interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link: string;
}

export const projects: Project[] = [
  {
    id: "avion-rc",
    title: "Construction d'avion Radio Commandé",
    description:
      "Projet de construction d'un avion télécommandé de A à Z. De la conception des plans à l'assemblage final, en passant par la découpe des matériaux et l'installation de l'électronique de vol.",
    tags: ["Aéronautique", "DIY", "Électronique"],
    images: [avionRc1, avionRc2],
    link: "https://payhip.com/AVIONLAVIGNE",
  },
  {
    id: "clement-ader",
    title: "Hommage à Clément Ader",
    description:
      "Site web dédié à Clément Ader, pionnier de l'aviation française. Découvrez l'histoire de cet inventeur visionnaire et ses contributions majeures à l'aéronautique.",
    tags: ["Web", "Histoire", "Aéronautique"],
    images: [projectImage, projectImage, projectImage],
    link: "https://google.com",
  },
  {
    id: "secret-santa",
    title: "Père Noël Secret",
    description:
      "Application web permettant d'organiser facilement des Pères Noël secrets entre amis ou en famille. Tirage au sort automatique, liste de souhaits et rappels par email. GRATUIT",
    tags: ["Web", "Application"],
    images: [secretSanta],
    link: "https://google.com",
  },
  {
    id: "studio-jv",
    title: "Studio de Jeux Vidéo",
    description:
      "Site vitrine pour un studio indépendant de jeux vidéo. Présentation des projets en cours, de l'équipe et des actualités du studio.",
    tags: ["Web", "Jeux Vidéo", "Design"],
    images: [projectImage, projectImage, projectImage],
    link: "https://google.com",
  },
];

interface ProjectListProps {
  filteredProjects: Project[];
}

const ProjectList = ({ filteredProjects }: ProjectListProps) => {
  if (filteredProjects.length === 0) {
    return (
      <div className="container py-12 text-center">
        <p className="text-muted-foreground">Aucun projet ne correspond à votre recherche.</p>
      </div>
    );
  }

  return (
    <section className="container py-8 pb-16">
      <div className="flex flex-col gap-6">
        {filteredProjects.map((project, index) => (
          <ProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default ProjectList;
