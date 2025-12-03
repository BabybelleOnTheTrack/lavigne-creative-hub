import { useState, useMemo } from "react";
import Header from "@/components/Header";
import SearchFilters from "@/components/SearchFilters";
import AboutSection from "@/components/AboutSection";
import ProjectList, { projects } from "@/components/ProjectList";

const Index = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // Extract all unique tags
  const allTags = useMemo(() => {
    const tags = new Set<string>();
    projects.forEach((project) => {
      project.tags.forEach((tag) => tags.add(tag));
    });
    return Array.from(tags).sort();
  }, []);

  // Filter projects based on search and tags
  const filteredProjects = useMemo(() => {
    return projects.filter((project) => {
      const matchesSearch =
        searchQuery === "" ||
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.description.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesTags =
        selectedTags.length === 0 ||
        selectedTags.some((tag) => project.tags.includes(tag));

      return matchesSearch && matchesTags;
    });
  }, [searchQuery, selectedTags]);

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag)
        ? prev.filter((t) => t !== tag)
        : [...prev, tag]
    );
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <SearchFilters
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        allTags={allTags}
        selectedTags={selectedTags}
        toggleTag={toggleTag}
      />
      <main>
        <AboutSection />
        <ProjectList filteredProjects={filteredProjects} />
      </main>
      <footer className="border-t border-border/50 py-6">
        <div className="container flex flex-col items-center gap-3 text-sm text-muted-foreground">
          <div className="flex items-center gap-4">
            <a 
              href="mailto:this.is.babybelle@gmail.com" 
              className="hover:text-primary transition-colors"
            >
              this.is.babybelle@gmail.com
            </a>
            <span>|</span>
            <a 
              href="https://www.youtube.com/@Babou_bricolage" 
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:text-primary transition-colors"
            >
              YouTube
            </a>
          </div>
          <div>© {new Date().getFullYear()} Lavigne. Tous droits réservés.</div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
