"use client"
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices, Monitor } from "lucide-react";
import StepCard from "@/components/ui/cards/step-card";
import { Button } from "@/components/ui/button";
import { Key } from "../../../public/svg/Key";
import { Cable } from "../../../public/svg/Cable";

export default function GetStarted() {
  return (
    <section className="w-full flex justify-center items-center py-8 md:py-16 px-4 bg-background-light">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center pb-8 gap-2 md:pb-16 md:gap-6">
          {/* Badge */}
          <Badge
            text="get started"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          {/* Heading */}
          <Heading
            title="Get Started Quickly"
            subtitle="Launch your AI-powered digital signage in minutes, no coding, no extra hardware, just seamless setup."
          />
        </div>

        {/* Steps */}
        <div className="flex w-full items-center md:justify-start justify-center flex-col md:flex-row md:flex-wrap gap-6">
          <StepCard
            title="1. Create Your Account"
            description="Sign up for a SignageX account to access our AI-powered digital signage platform."
            svg={<Key />}
          />
          <StepCard
            title="2. Connect Your Player"
            description="Link your device to SignageX effortlessly to dive in digital signage world."
            svg={<Cable />}
          />
          <StepCard
            title="3. Go Live Instantly"
            description="Deploy your content across any screen or network, scaling easy with just one click."
            icon={Monitor}
          />
        </div>

        <Button
          color="purple"
          size="lg"
          className="mt-10 mx-auto"
          href="#"
        >
          Start Free Trial - No Card Needed
        </Button>
      </div>
    </section>
  );
}
