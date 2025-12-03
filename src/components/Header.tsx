import { Button } from "@/components/ui/button";
import { Mail } from "lucide-react";

const Header = () => {
  return (
    <header className="sticky top-0 z-50 w-full border-b-2 border-border bg-background">
      <div className="container flex h-14 items-center justify-between">
        <a href="/" className="font-display text-3xl font-bold tracking-tight text-primary hover:text-accent">
          &lt;Lavigne/&gt;
        </a>
        <Button variant="outline" size="sm" className="gap-2" asChild>
          <a href="mailto:this.is.babybelle@gmail.com">
            <Mail className="h-4 w-4" />
            [Contact]
          </a>
        </Button>
      </div>
    </header>
  );
};

export default Header;
