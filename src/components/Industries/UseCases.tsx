import UseCaseCard from "../ui/cards/UseCaseCard";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import { solutions } from "@/lib/solutionsData";

export default function UseCases() {
  // Map solutions to the format expected by UseCaseCard
  const useCases = solutions.map(solution => ({
    imageSrc: solution.image,
    title: solution.title,
    description: solution.description,
    href: `/solutions/${solution.slug}`
  }));

  return (
    <section className="bg-background-light w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center pb-8 md:pb-16 gap-2 md:gap-6">
          <Badge
            text="Use Cases"
            icon={Dices}
            variant="outline"
            color="custom"
          />
          <Heading
            title="Our Solutions In Action"
            subtitle="Most digital signage is stuck with static software."
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 top-1/2 relative">
          {useCases.map((useCase, index) => (
            <UseCaseCard
              key={index}
              imageSrc={useCase.imageSrc}
              title={useCase.title}
              description={useCase.description}
              href={useCase.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
