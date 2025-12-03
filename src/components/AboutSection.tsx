import avatarImage from "@/assets/avatar.jpg";

const AboutSection = () => {
  return (
    <section className="container py-12">
      <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 max-w-2xl">
        <div className="shrink-0">
          <img
            src={avatarImage}
            alt="Photo de profil"
            className="w-20 h-20 rounded-full object-cover shadow-card border-2 border-card"
          />
        </div>
        <div className="text-center sm:text-left">
          <h2 className="font-display text-xl font-medium text-foreground mb-2">Salut, voici mes projets !</h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionné par une plein de truc, je m'investis dans des projets variés : de l'aéronautique au développement
            web, en passant par la programation de jeux vidéo. Ce hub rassemble tous mes projets, aussi différents
            soient-ils. A. Lavigne
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
