import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices, Dice2, Dice3, Dice5 } from "lucide-react";
import { Button } from "@/components/ui/button";
import PricingCard from "@/components/ui/cards/PricingCard";
import LicenseSelector from "./LicenseSelector";

export default function GetStarted() {
  return (
    <section className="w-full flex justify-center items-center py-20 bg-white">
      <div className="container mx-auto flex flex-col justify-center items-center px-4">
        {/* Badge + Heading */}
        <div className="flex flex-col justify-between items-center pb-16 gap-6 text-center">
          <Badge
            text="Pricing"
            icon={Dices}
            variant="solid"
            color="custom"
          />
          <Heading
            title="Best Pricing for Your Business"
            subtitle="Choose the AI-powered digital signage plan that fits your needs, no hidden fees. Just powerful features to help you scale effortlessly."
          />
        </div>

        {/* License Selector */}
        <div className="flex gap-6 md:gap-12 flex-wrap justify-center items-center mb-8">
          <LicenseSelector />
        </div>

        {/* Pricing Cards */}
        <div className="w-full flex flex-col md:flex-row md:flex-wrap gap-6 justify-center items-stretch">
          <PricingCard
            title="Basic"
            subtitle="Best for startups"
            price="$19"
            licensesIncluded={1}
            extraLicenseCost="$0.63 per extra license"
            popular={false}
            icon={<Dice2 className="w-5 h-5 text-purple-400" />}
            buttonLabel="Get Started"
            href="#"
          />
          <PricingCard
            title="Pro"
            subtitle="Best for growing teams"
            price="$29"
            licensesIncluded={5}
            extraLicenseCost="$0.63 per extra license"
            popular={true}
            icon={<Dice3 className="w-5 h-5 text-purple-400" />}
            buttonLabel="Get Started"
            href="#"
          />
          <PricingCard
            title="Enterprise"
            subtitle="Best for large organizations"
            price="$39"
            licensesIncluded={10}
            extraLicenseCost="$0.63 per extra license"
            popular={true}
            icon={<Dice5 className="w-5 h-5 text-purple-400" />}
            buttonLabel="Get Started"
            href="#"
          />
        </div>

        {/* Compare Features Button */}
        <Button color="purple" size="lg" className="mt-10 mx-auto" href="#">
          Compare Features
        </Button>
      </div>
    </section>
  );
}
