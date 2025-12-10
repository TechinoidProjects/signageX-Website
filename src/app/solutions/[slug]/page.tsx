import Hero from "@/components/common/Hero";
import CTA from "@/components/common/CTA";
import ChallengeSection from "@/components/Solutions/ChallengeSection";
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
      <CTA />
    </main>
  );
}
