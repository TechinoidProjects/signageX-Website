import { Heading } from "@/components/common/MainHeading";
import AnimatedCards from "@/components/HomePage/WhyChooseSignageX/AnimatedCards";
import { Card } from "@/lib/industriesData";

interface FeaturedAppsProps {
  headingTitle?: string;
  headingSubtitle?: string;
  headingTitleColor?: string;
  headingSubtitleColor?: string;
  cards: Card[];
  interval?: number;
  buttonText?: string;
  buttonHref?: string;
}

export default function FeaturedApps({
  headingTitle = "Ready-to-Use Apps & Widgets",
  headingSubtitle = "Access a library of pre-built apps and widgets designed for retail, education, healthcare, and more. Easily customize them with AI to create meaningful screen experiences — no effort required.",
  headingTitleColor = "text-white",
  headingSubtitleColor = "text-white",
  cards,
  interval = 5000,
  buttonText = "View All Widgets/Apps",
  buttonHref = "#",
}: FeaturedAppsProps) {
  return (
    <section className="relative w-full bg-deep-purple-500 text-white py-16 overflow-hidden my-6">
      <div className="text-center mb-10 px-4">
        <Heading 
          title={headingTitle}
          subtitle={headingSubtitle}
          titleColorClass={headingTitleColor}
          subtitleColorClass={headingSubtitleColor}
          size="md"
        />
      </div>

      <AnimatedCards cards={cards} interval={interval} />

      <div className="flex justify-center mt-10">
        <a
          href={buttonHref}
          className="bg-white text-[#1E1045] font-semibold py-3 px-6 rounded-xl hover:bg-white/90 transition"
        >
          {buttonText}
        </a>
      </div>
    </section>
  );
}
