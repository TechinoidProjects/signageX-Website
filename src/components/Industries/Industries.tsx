import { IndustryCard } from "@/components/ui/cards/IndustryCard";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";

export default function Industries() {
  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 md:pb-16 gap-2 md:gap-6">
          {/* Badge */}
          <Badge
            text="industries"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          {/* Heading */}
          <Heading
            title="AI-powered digital signage for every industry"
            subtitle="Transform retail, healthcare, education, and more with smart, AI-powered signage solutions that work on your existing screens."
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 top-1/2 relative">
          <IndustryCard
            imageSrc="/images/FeaturedImage1.jpg"
            title="Retail"
            href="/retail"
          />

          <IndustryCard
            imageSrc="/images/FeaturedImage5.jpg"
            title="Corporate"
            href="/corporate"
          />
          <IndustryCard
            imageSrc="/images/FeaturedImage2.jpg"
            title="Healthcare"
            href="/healthcare"
          />
          <IndustryCard
            imageSrc="/images/FeaturedImage3.jpg"
            title="Education"
            href="/education"
          />

          <IndustryCard
            imageSrc="/images/FeaturedImage2.jpg"
            title="Restaurants"
            href="/restaurants"
          />

          <IndustryCard
            imageSrc="/images/FeaturedImage4.jpg"
            title="Hospitality"
            href="/hospitality"
          />

          <IndustryCard
            imageSrc="/images/FeaturedImage3.jpg"
            title="Government"
            href="/government"
          />
          <IndustryCard
            imageSrc="/images/FeaturedImage1.jpg"
            title="Transport"
            href="/transportation"
          />
          <IndustryCard
            imageSrc="/images/FeaturedImage5.jpg"
            title="Fitness"
            href="/fitness"
          />
          <IndustryCard
            imageSrc="/images/FeaturedImage1.jpg"
            title="Entertainment"
            href="/entertainment"
          />
          <IndustryCard
            imageSrc="/images/FeaturedImage2.jpg"
            title="Financial Institutions"
            href="/financial-institutions"
          />
        </div>
      </div>
    </section>
  );
}
