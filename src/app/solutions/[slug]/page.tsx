import Hero from "@/components/common/Hero";
import CTA from "@/components/common/CTA";
import ChallengeSection from "@/components/Solutions/ChallengeSection";
import SolutionHighlightSection from "@/components/Solutions/SolutionHighlightSection";
import { FeatureTabs } from "@/components/HomePage/FeaturedTabs";
import FeaturedApps from "@/components/Industries/FeaturedApps";
import { notFound } from "next/navigation";
import { solutions } from '@/lib/solutionsData';

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionsPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col items-center  mt-15">
        <Hero
            badgeText={solution.badgeTitle}
            heading={solution.title}
            subheading={solution.description}
            buttonText="Start Free Trial"
            imageOneSrc={solution.imageSrcOne}
            imageTwoSrc={solution.imageSrcTwo}
        />
      {solution.challengeSection && (
        <ChallengeSection
          badgeText={solution.challengeSection.badgeText}
          heading={solution.challengeSection.heading}
          subheading={solution.challengeSection.subheading}
          imageLeft={solution.challengeSection.imageLeft}
          imageRight={solution.challengeSection.imageRight}
          cards={solution.challengeSection.cards}
        />
      )}
      {solution.solutionHighlightSection && (
        <SolutionHighlightSection
          badgeText={solution.solutionHighlightSection.badgeText}
          heading={solution.solutionHighlightSection.heading}
          subheading={solution.solutionHighlightSection.subheading}
          topImage={solution.solutionHighlightSection.topImage}
          bottomImage={solution.solutionHighlightSection.bottomImage}
          topRightCard={solution.solutionHighlightSection.topRightCard}
          bottomLeftCard={solution.solutionHighlightSection.bottomLeftCard}
        />
      )}
      {solution.featureTabs && (
        <FeatureTabs
          tabs={solution.featureTabs.tabs}
          badgeText={solution.featureTabs.badgeText}
          heading={solution.featureTabs.heading}
          subheading={solution.featureTabs.subheading}
        />
      )}
      <FeaturedApps
        badgeTitle="Ready-to-Use"
        headingTitle="Free Designs & Templates For You"
        headingSubtitle="Prebuilt layouts crafted to boost menu appeal instantly."
        headingTitleColor="text-white"
        headingSubtitleColor="text-white/90"
        cards={solution.featuredApps?.cards || []}
        interval={7000}
        buttonText="Explore All Retail Widgets"
        buttonHref="/widgets/retail"
        shownButton={false}
      />
      <CTA />
    </main>
  );
}
