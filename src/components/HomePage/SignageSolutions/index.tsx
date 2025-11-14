import Image from "next/image";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { FeatureItem } from "@/components/HomePage/SignageSolutions/FeatureItem";
import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "Works With Existing Hardware –",
    description: "No costly replacements needed.",
  },
  {
    title: "AI-Powered Layouts –",
    description: "Design stunning displays in seconds.",
  },
  {
    title: "Code-Free Apps & Widgets –",
    description: "Build interactive experiences easily.",
  },
  {
    title: "Seamless Multi-Screen Scaling –",
    description: "Manage 100+ displays effortlessly.",
  },
];

export default function SignageSolutions() {
  
  return (
    <section className="bg-background-light w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 md:pb-16 gap-2 md:gap-6">
          {/* Badge */}
          <Badge
            text="our solutions"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          {/* Heading */}
          <Heading
            title="Solve Signage Problems with AI"
            subtitle="We bring speed, AI, intelligence and solutions to your digital signage problems with SignageX"
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
          <div className="h-full w-full ">
            <Image
                src="/images/signage-solutions.png" // replace with your image path
                alt="AI Digital Signage"
                width={540}
                height={400}
                className="object-cover relative rounded-3xl overflow-hidden bg-white shadow-xl w-full h-full"
                priority
              />
          </div>

          <div className="bg-white rounded-3xl flex-1 flex flex-col items-center justify-between gap-6 shadow-bs p-6 lg:p-8">
            <div className="flex flex-col items-start gap-2 w-full">
              <h3 className="text-xl font-semibold text-zinc-800 mb-2">AI-Powered Signage</h3>

              {/* Feature List */}
              <ul className="space-y-4 mt-2">
                {features.map((feature, index) => (
                <FeatureItem
                  key={index}
                  title={feature.title}
                  description={feature.description}
                />
                ))}
              </ul>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col items-start gap-5 pt-6">
              <p className="font-lato text-base not-italic font-normal leading-6 text-gray-500">Old signage slows you down. SignageX uses AI to create dynamic content and scale on your existing screens.</p>
              <Button color="purple"  href="#">
                Get Yours Now
              </Button>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
