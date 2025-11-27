import Image from "next/image";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { FeatureItem } from "@/components/HomePage/SignageSolutions/FeatureItem";
import { Dices } from "lucide-react";
import { Button } from "@/components/ui/button";

const features = [
  {
    title: "AI-Driven Innovation –",
    description: "Smarter tools to design and manage content.",
  },
  {
    title: "Seamless Integration –",
    description: "Works with existing screens and hardware.",
  },
  {
    title: "Scalable Solutions –",
    description: "Manage one or 100+ displays effortlessly.",
  },
  {
    title: "Future-Ready Tech –",
    description: "Stay ahead with continuous AI upgrades.",
  },
];

export default function OurMission() {
  
  return (
    <section className="bg-white w-full flex justify-center items-center py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-16 gap-6">
          {/* Badge */}
          <Badge
            text="our mission"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          {/* Heading */}
          <Heading
            title="Smarter Signage for Everyone"
            subtitle="We aim to redefine digital signage with AI-powered tools, making it simple, scalable, and accessible for every industry."
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 ">
            <div className="bg-background-light rounded-3xl flex-1 flex flex-col items-center justify-between gap-6 shadow-bs p-6 lg:p-8">
                <div className="flex flex-col items-start gap-2 w-full">
                <h3 className="text-xl font-semibold text-zinc-800 mb-2">Why We Exist</h3>

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
                <p className="font-lato text-base not-italic font-normal leading-6 text-gray-500">We make AI digital signage easy, smart, and scalable for every business and every industry.</p>
                <Button color="purple"  href="#">
                    Get Yours Now
                </Button>
                
                </div>
            </div>
            <div className="h-full w-full ">
                <Image
                    src="/images/mission-Image.png" // replace with your image path
                    alt="AI Digital Signage"
                    width={540}
                    height={400}
                    className="object-cover relative rounded-3xl overflow-hidden bg-white shadow-xl w-full"
                    priority
                />
            </div>
        </div>

      </div>
    </section>
  );
}
