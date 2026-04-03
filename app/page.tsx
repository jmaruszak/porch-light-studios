import { SiteHeader } from "@/components/SiteHeader";
import { Hero } from "@/components/Hero";
import { MetricsStrip } from "@/components/MetricsStrip";
import { FeaturedProjects } from "@/components/FeaturedProjects";
import { Theater } from "@/components/Theater";
import { InDevelopment } from "@/components/InDevelopment";
import { StorePreview } from "@/components/StorePreview";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      <SiteHeader />
      <Hero />
      <MetricsStrip />
      <FeaturedProjects />
      <Theater />
      <InDevelopment />
      <StorePreview />
      <Footer />
    </main>
  );
}
