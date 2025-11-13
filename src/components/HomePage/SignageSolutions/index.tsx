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
    <section className="bg-background-light w-full flex justify-center items-center py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-16 gap-6">
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
                className="object-cover relative rounded-3xl overflow-hidden bg-white shadow-xl w-full"
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
              {/* <Link
                href="/get-started"
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl text-white font-[Lato] text-[16px] font-semibold 
                bg-[linear-gradient(92deg,#0F0031_-5.73%,#413263_120.63%)] hover:opacity-90 transition-all duration-200"
              >
                Start Free Trial
              </Link>

              <button
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-[Lato] text-[16px] font-semibold text-[#0F0031]
                bg-white border border-[#0F0031]/20 shadow-sm hover:bg-gray-50 transition-all duration-200"
              >
                <PlayCircle className="w-5 h-5 text-[#0F0031]" />
                Watch Demo
              </button> */}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
