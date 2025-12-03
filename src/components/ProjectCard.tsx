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
      className="group bg-card border-2 border-border shadow-card overflow-hidden transition-smooth hover:shadow-hover animate-fade-in"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="flex flex-col lg:flex-row">
        {/* Carousel */}
        <div className="relative w-full lg:w-56 shrink-0">
          <div className="aspect-[4/3] overflow-hidden bg-muted border-b-2 lg:border-b-0 lg:border-r-2 border-border">
            <img
              src={project.images[currentImage]}
              alt={`${project.title} - Image ${currentImage + 1}`}
              className="w-full h-full object-cover"
            />
          </div>
          
          {/* Carousel Controls */}
          {project.images.length > 1 && (
            <>
              <button
                onClick={prevImage}
                className="absolute left-1 top-1/2 -translate-y-1/2 w-6 h-6 border border-border bg-background flex items-center justify-center text-foreground hover:bg-secondary hover:border-primary"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button
                onClick={nextImage}
                className="absolute right-1 top-1/2 -translate-y-1/2 w-6 h-6 border border-border bg-background flex items-center justify-center text-foreground hover:bg-secondary hover:border-primary"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
              
              {/* Dots */}
              <div className="absolute bottom-1 left-1/2 -translate-x-1/2 flex gap-1">
                {project.images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentImage(idx)}
                    className={`w-2 h-2 border border-border ${
                      idx === currentImage 
                        ? 'bg-primary border-primary' 
                        : 'bg-background hover:bg-secondary'
                    }`}
                  />
                ))}
              </div>
            </>
          )}
        </div>
        
        {/* Content */}
        <div className="flex-1 p-4 flex flex-col">
          <div className="flex-1">
            <h3 className="font-display text-2xl text-primary mb-2">
              &gt; {project.title}
            </h3>
            <p className="text-muted-foreground leading-relaxed mb-3 text-sm">
              {project.description}
            </p>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-1 mb-3">
              {project.tags.map((tag) => (
                <span
                  key={tag}
                  className="inline-flex items-center px-2 py-0.5 border border-border text-xs font-body bg-secondary text-secondary-foreground uppercase"
                >
                  [{tag}]
                </span>
              ))}
            </div>
          </div>
          
          {/* Action */}
          <div>
            <Button asChild variant="default" size="sm" className="gap-2">
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                [Voir le projet]
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
