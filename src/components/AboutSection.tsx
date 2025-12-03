import avatarImage from "@/assets/avatar.jpg";

const AboutSection = () => {
  return (
    <section className="container py-8">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 max-w-2xl border-2 border-border bg-card p-4 shadow-card">
        <div className="shrink-0">
          <img
            src={avatarImage}
            alt="Photo de profil"
            className="w-16 h-16 border-2 border-border object-cover"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-display text-2xl text-primary mb-1">&gt; Salut, voici mes projets !</h2>
          <p className="text-muted-foreground leading-relaxed text-sm">
            Passionné par une plein de truc, je m'investis dans des projets variés : de l'aéronautique au développement
            web, en passant par la programation de jeux vidéo. Ce hub rassemble tous mes projets, aussi différents
            soient-ils. // A. Lavigne
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
