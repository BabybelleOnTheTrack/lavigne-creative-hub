import { useState } from "react";
import { ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Project {
  id: string;
  title: string;
  description: string;
  tags: string[];
  images: string[];
  link: string;
}

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  const [currentImage, setCurrentImage] = useState(0);

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <article
      className="group bg-card rounded-lg shadow-card overflow-hidden transition-smooth hover:shadow-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Carousel */}
        <div className="relative w-full lg:w-56 shrink-0">
          <div className="aspect-[4/3] overflow-hidden bg-muted">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
          </div>
          
          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-2 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center text-foreground opacity-0 group-hover:opacity-100 transition-smooth hover:bg-background"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex gap-1.5">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 rounded-full transition-smooth ${
                      idx === currentImage 
                        ? 'bg-primary' 
                        : 'bg-background/60 hover:bg-background'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex-1">
            <h3 className="font-display text-xl font-semibold text-foreground mb-3">
              {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-4">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2 mb-4">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-secondary text-secondary-foreground"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
          
          {/* Action */}
          <div>
            <Button asChild variant="default" size="sm" className="gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                Voir le projet
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </Button>
          </div>
        </div>
      </div>
    </article>
  );
};

export default ProjectCard;
