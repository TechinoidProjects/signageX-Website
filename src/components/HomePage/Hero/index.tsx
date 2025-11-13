"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { PlayCircle, Sparkles} from "lucide-react";
import { GlobalStatsGrid } from "./GlobalStatsGrid";
import { ActionButton } from "@/components/ui/action-button";

export default function HeroSection() {
  return (
    <section className="w-full flex justify-center items-center h-full md:h-[105vh]">
        <div className=" w-full px-6 flex flex-col items-center justify-between py-5 md:relative h-full">
        <div className="flex flex-col items-center gap-6 container">
            <Badge text="Powered by AI" icon={Sparkles} variant="outline" color="custom" />
            <Heading
            title="Digital Signage Experience, Paired With AI"
            subtitle="Create, manage, and optimize digital signage faster with AI-driven tools, for seamless, dynamic experiences on any screen."
            />
            <div className="flex flex-col md:flex-row items-center mt-4 w-full max-w-md md:gap-1 gap-4">
                <ActionButton
                    variant="primary"
                    size="lg"
                    onClick={() => console.log("Button clicked!")}
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
        <div className=" md:absolute top-60 flex justify-center w-full px-8">
            <GlobalStatsGrid/>
        </div>
        </div>
    </section>
  );
}
