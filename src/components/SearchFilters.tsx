import { useState } from "react";
import { Search, X, ChevronUp, ChevronDown } from "lucide-react";
import { Input } from "@/components/ui/input";

interface SearchFiltersProps {
  searchQuery: string;
  setSearchQuery: (query: string) => void;
  allTags: string[];
  selectedTags: string[];
  toggleTag: (tag: string) => void;
}

const SearchFilters = ({
  searchQuery,
  setSearchQuery,
  allTags,
  selectedTags,
  toggleTag,
}: SearchFiltersProps) => {
  const [isVisible, setIsVisible] = useState(true);

  return (
    <div className="sticky top-16 z-40 border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container">
        {/* Toggle button */}
        <button
          onClick={() => setIsVisible(!isVisible)}
          className="w-full flex items-center justify-center py-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          {isVisible ? (
            <ChevronUp className="h-4 w-4" />
          ) : (
            <ChevronDown className="h-4 w-4" />
          )}
        </button>

        {/* Filters content */}
        <div
          className={`overflow-hidden transition-all duration-200 ${
            isVisible ? "max-h-96 pb-4" : "max-h-0"
          }`}
        >
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
            {/* Search */}
            <div className="relative w-full max-w-sm">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Rechercher un projet..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-10 bg-card border-border/50"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-smooth"
                >
                  <X className="h-4 w-4" />
                </button>
              )}
            </div>
            
            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => toggleTag(tag)}
                  className={`tag ${selectedTags.includes(tag) ? 'active' : ''}`}
                >
                  {tag}
                  {selectedTags.includes(tag) && (
                    <X className="ml-1 h-3 w-3" />
                  )}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchFilters;
