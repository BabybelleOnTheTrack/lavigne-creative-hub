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
          <h2 className="font-display text-xl font-medium text-foreground mb-2">
            Bonjour, moi c'est Lavigne
          </h2>
          <p className="text-muted-foreground leading-relaxed">
            Passionné par une multitude de domaines, je m'investis dans des projets variés : 
            de l'aéronautique au développement web, en passant par les jeux vidéo. 
            Ce hub rassemble tous mes projets, aussi différents soient-ils.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
