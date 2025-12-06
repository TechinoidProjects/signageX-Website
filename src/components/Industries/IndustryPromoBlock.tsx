import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import PromoSection from "@/components/Industries/PromoSection";

interface PromoItem {
  imageSrc: string;
  heading: string;
  description: string;
  reverse?: boolean;
}

interface IndustryPromoBlockProps {
  badgeText: string;
  badgeIcon: any;
  title: string;
  subtitle: string;
  promoSections: PromoItem[];
}

export default function IndustryPromoBlock({
  badgeText,
  badgeIcon,
  title,
  subtitle,
  promoSections,
}: IndustryPromoBlockProps) {
  return (
    <section className="bg-background-light w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-8 gap-6">

        {/* Badge + Heading */}
        <div className="flex flex-col justify-between items-center gap-2 md:gap-4 text-center">
          <Badge text={badgeText} icon={badgeIcon} variant="outline" color="custom" />
          <Heading title={title} subtitle={subtitle} />
        </div>

        {/* Promo Sections */}
        {promoSections.map((section, index) => (
          <PromoSection
            key={`promo-${index}`}
            imageSrc={section.imageSrc}
            heading={section.heading}
            description={section.description}
            reverse={section.reverse}
          />
        ))}
      </div>
    </section>
  );
}
