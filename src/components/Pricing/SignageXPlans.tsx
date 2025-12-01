"use client";

import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices, Dice6, Dice2 } from "lucide-react";
import CustomPlanCard from "./CustomPlanCard";

export default function SignageXPlans() {
  

  return (
    <section className="bg-back-primary w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        {/* Header */}
        <div className="flex flex-col justify-between items-center text-center pb-8 gap-2 md:gap-6">
          <Badge text="More Options" icon={Dices} variant="outline" color="white" />

          <Heading
            title="Tailored Plans For Every Business"
            subtitle="Explore custom, reseller, and white-label solutions built to match your goals and grow your digital signage network with SignageX."
            titleColorClass="text-white"
            subtitleColorClass="text-white"
          />
        </div>
        <CustomPlanCard
          icon={<Dice6 size={24} />}
          title="Custom Plan"
          description="Get a fully tailored digital signage solution designed to match your business goals. From advanced integrations to custom features. Scale your signage, your way."
          buttonText="Contact Sales"
          imageSrc="/images/pricing-card-settings.png" 
          href="/contacts"
        />

        <div className="grid md:grid-cols-2 grid-cols- gap-6">
          <CustomPlanCard
            icon={<Dice2 size={24} />}
            title="Reseller Plan"
            description="Offer SignageX under your own brand with full customization and branding control — your logo, your identity, our AI power."
            buttonText="Contact Sales"
            imageSrc="" 
            href="/contacts"

          />
          <CustomPlanCard
            icon={<Dice2 size={24} />}
            title="White Label Plan"
            description="Expand your business by reselling SignageX solutions. Earn revenue while providing clients cutting-edge digital signage software."
            buttonText="Contact Sales"
            imageSrc="" 
            href="/contacts"

          />
        </div>

      </div>
    </section>
  );
}
