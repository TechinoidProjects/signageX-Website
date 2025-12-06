import { IndustryCard } from "@/components/ui/cards/IndustryCard";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import { industries } from "@/lib/industriesData";

export default function Industries() {
  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 md:pb-16 gap-2 md:gap-6">
          {/* Badge */}
          <Badge
            text="industries"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          {/* Heading */}
          <Heading
            title="AI-powered digital signage for every industry"
            subtitle="Transform retail, healthcare, education, and more with smart, AI-powered signage solutions that work on your existing screens."
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 top-1/2 relative">
          {industries.map((i) => (
            <IndustryCard
              key={i.slug}
              imageSrc={i.imageSrc}
              title={i.title}
              href={`/industries/${i.slug}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
