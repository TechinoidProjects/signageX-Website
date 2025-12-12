"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { PlayCircle, Sparkles} from "lucide-react";
import { GlobalStatsGrid } from "./GlobalStatsGrid";
import { ActionButton } from "@/components/ui/action-button";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center items-center lg:items-start min-h-[70vh] lg:min-h-[50vh] xl:min-h-[105vh] pt-8 lg:pt-10 pb-10 lg:pb-20">
        <div className=" w-full px-4 md:px-6 flex flex-col items-center justify-between lg:relative h-full">
        <div className="flex flex-col items-center gap-2 container">
            <Badge text="Powered by AI" icon={Sparkles} variant="outline" color="custom" />
            <Heading
            title="Digital Signage Experience, Paired With AI"
            subtitle="Create, manage, and optimize digital signage faster with AI-driven tools, for seamless, dynamic experiences on any screen."
            />
            <div className="flex flex-col md:flex-row items-center mt-4 w-full max-w-md md:gap-1 gap-4 z-10">
                <ActionButton
                    variant="primary"
                    size="lg"
                    href="/trial"
                    >
                    Start Free Trial
                </ActionButton>

                <ActionButton
                    href="/demo"
                    variant="gradientGhost"
                    size="lg"
                    iconLeft={<PlayCircle className="w-10 h-10" />}
                    className="w-full"
                    >
                    Watch Demo
                </ActionButton>
            </div>
        </div>
        <div className="flex justify-center w-full px-0 md:px-8 lg:absolute lg:top-48">
            <GlobalStatsGrid/>
        </div>
        </div>
    </section>
  );
}
