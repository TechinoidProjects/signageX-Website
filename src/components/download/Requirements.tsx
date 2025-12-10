import Image from "next/image";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { FeatureItem } from "@/components/HomePage/SignageSolutions/FeatureItem";
import { Dice2 } from "lucide-react";
import { Button } from "@/components/ui/button";

type FeatureItemType = string | { title: string; description: string };

interface RequirementsProps {
  mainHeading: string;
  description: string;
  heading: string;          // H3 heading text
  imageSrc: string;         // Image source path
  paragraphs?: string[];    // Optional array of paragraphs
  features?: FeatureItemType[]; // Can be string or Feature object
}

export default function Requirements({
  mainHeading,
  description,
  heading,
  imageSrc,
  paragraphs,
  features = [],
}: RequirementsProps) {
  return (
    <section className="bg-background-light w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center pb-8 md:pb-16 gap-2 md:gap-6">
          <Badge
            text="requirement"
            icon={Dice2}
            variant="outline"
            color="custom"
          />

          <Heading
            title={mainHeading}
            subtitle={description}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="h-full w-full">
            <Image
              src={imageSrc}
              alt="AI Digital Signage"
              width={540}
              height={400}
              className="object-cover relative rounded-3xl overflow-hidden bg-white shadow-xl w-full h-full"
              priority
            />
          </div>

          <div className="bg-white rounded-3xl flex-1 flex flex-col items-center justify-between gap-6 shadow-bs p-6 lg:p-8">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">{heading}</h3>
              {features.length > 0 && (
                <ul className="space-y-4 mt-2 w-full">
                  {features.map((feature, index) => {
                    if (typeof feature === 'string') {
                      return (
                        <li key={index} className="flex items-start gap-3">
                          <Dice2 className="text-gray-300 rounded-xl rotate-90" />
                          <p className="text-gray-700 text-[16px] font-medium leading-snug">
                            {feature}
                          </p>
                        </li>
                      );
                    }
                    return (
                      <FeatureItem
                        key={index}
                        title={feature.title}
                        description={feature.description}
                      />
                    );
                  })}
                </ul>
              )}
            </div>
            
            {paragraphs && paragraphs.length > 0 && (
              <div className="flex flex-col items-start gap-5 pt-6">
                {paragraphs.map((para, index) => (
                  <p
                    key={index}
                    className="font-lato text-base not-italic font-normal leading-6 text-gray-500"
                  >
                    {para}
                  </p>
                ))}
                <Button color="purple" href="#">
                  Get Yours Now
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
