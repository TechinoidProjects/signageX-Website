import CTA from "@/components/common/CTA";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { RecommendedPlayersTable } from "@/components/download/RecommendedPlayersTable";
import Requirements from "@/components/download/Requirements"
import { notFound } from "next/navigation";
import { platforms } from "@/lib/downloadData";

interface DownloadPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export default async function DownloadSlugPage({ params }: DownloadPageProps) {
  const { slug } = await params;
  const platform = platforms.find((item) => item.slug === slug);

  if (!platform) {
    return notFound();
  }

  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col items-center mt-0 md:mt-15">
      {/* Hero Section */}
      <section className="w-full bg-white flex justify-center py-16 md:py-20 px-4">
        <div className="container mx-auto flex flex-col items-center gap-6">
          <Badge text={platform.badge} variant="outline" color="custom" />

          <Heading title={platform.title} subtitle={platform.subtitle} />

          <button className="mt-4 inline-flex items-center justify-center rounded-xl bg-primary px-8 py-3 text-sm md:text-base font-medium text-white shadow-sm hover:shadow-md transition-all">
            {platform.buttonLabel}
          </button>
        </div>
      </section>

      <Requirements
        heading={platform.checklistTitle}
        mainHeading={platform.requirementsTitle}
        description={platform.requirementsSubtitle}
        imageSrc={platform.illustration}
        paragraphs={platform.paragraph}
        features={platform.checklist}
      />


      {slug === "android" && platform.tables &&
        platform.tables.map((table) => (
          <RecommendedPlayersTable
            key={table.title}
            title={table.title}
            headers={table.headers}
            rows={table.rows}
          />
        ))}

      <CTA />
    </main>
  );
}
