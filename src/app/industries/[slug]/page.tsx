import Hero from "@/components/common/Hero";
import PromoSectionBlock from "@/components/Industries/IndustryPromoBlock";
import { FeatureTabs } from "@/components/HomePage/FeaturedTabs";
import FeaturedApps from "@/components/Industries/FeaturedApps";
import CTA from "@/components/common/CTA";
import { Dices } from "lucide-react";
import { industries } from "@/lib/industriesData";
import { notFound } from "next/navigation";

interface IndustryPageProps {
  params: Promise<{ slug: string }>;
}

export default async function IndustryPage({ params }: IndustryPageProps) {
  const { slug } = await params;
  const industry = industries.find((item) => item.slug === slug);

  if (!industry) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col items-center  mt-15">
        <Hero
            badgeText={industry.subheading}
            heading={`Transform ${industry.title} Experiences with Digital Signage`}
            subheading={industry.description}
            buttonText="Start Free Trial"
            imageOneSrc={industry.imageSrc}
            imageTwoSrc={industry.imageSrc}
        />

        <PromoSectionBlock
            badgeText="Smart Usage"
            badgeIcon={Dices}
            title={`Smart Usage of ${industry.title} Signage`}
            subtitle={industry.description}
            promoSections={
                industry.promoSections ?? [
                {
                    imageSrc: industry.imageSrc,
                    heading: `When Signage Matters in ${industry.title}`,
                    description: industry.description,
                    reverse: industry.reverse,
                },
                ]
            }
        />
        <FeatureTabs
          tabs={industry.tabs || []}
          badgeText={industry.title}
          heading={`Digital Signage for ${industry.title}`}
          subheading={industry.description}
        />
        <FeaturedApps
          headingTitle="Retail Digital Signage Apps"
          headingSubtitle="Ready-to-use widgets for boosting sales, promoting products, and enhancing customer experience."
          headingTitleColor="text-white"
          headingSubtitleColor="text-white/90"
          cards={industry.cards || []}
          interval={7000}
          buttonText="Explore All Retail Widgets"
          buttonHref="/widgets/retail"
        />

      <CTA />
    </main>
  );
}
