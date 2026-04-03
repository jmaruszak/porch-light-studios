import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "Asher Vonn — Hoodie & Headphones",
    videoSrc: "/videos/hoodie-headphones.mp4",
    description:
      "An introspective music video exploring post breakup nostalgia.",
  },
  {
    title: "Island Time",
    videoSrc: "/videos/island-time.mp4",
    description:
      "A viral Ole Miss anthem built around quarterback Trinidad Chambliss and Oxford",
  },
  {
    title: "Chrome Syndicate — Konbini",
    videoSrc: "/videos/the-konbini.mp4",
    description:
      "A stylized music video celebrating connections made in Tokyo convenience stores",
  },
];

export function FeaturedProjects() {
  return (
    <section
      id="projects"
      className="px-6 py-20 md:px-12 md:py-28 lg:px-20 lg:py-32"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="font-display mb-3 text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium tracking-[0.04em] text-[var(--foreground)]">
          Featured Projects
        </h2>
        <p className="mb-14 max-w-2xl text-[0.95rem] font-light leading-[1.85] tracking-[0.03em] text-[var(--muted)] md:mb-20 md:text-[1rem]">
          A curated set of pieces from the studio each with its own vibe, rhythm, and
          atmosphere.
        </p>
        <div className="grid grid-cols-1 gap-16 sm:grid-cols-2 sm:gap-16 lg:grid-cols-3 lg:gap-20">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              videoSrc={project.videoSrc}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
