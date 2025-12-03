import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <a href="/" className="font-display text-2xl font-semibold tracking-tight text-foreground">
          Lavigne
        </a>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <a href="mailto:this.is.babybelle@gmail.com">
            <Mail className="h-4 w-4" />
            Me Contacter
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
