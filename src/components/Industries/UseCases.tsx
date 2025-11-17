import UseCaseCard from "../ui/cards/UseCaseCard";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";

export default function UseCases() {
  return (
    <section className="bg-background-light w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 md:pb-16 gap-2 md:gap-6">
          <Badge
            text="Use Cases"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          <Heading
            title="Our Solutions In Action"
            subtitle="Most digital signage is stuck with static software."
          />
        </div>

        <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 top-1/2 relative">
            <UseCaseCard
                imageSrc="/images/featuredImage2.jpg"
                title="Menu Boards"
                description="Update menus in real time with AI digital signage. Perfect for  boosting sales and customer engagement."
                href="/menu-boards"
            />
            <UseCaseCard
                imageSrc="/images/featuredImage1.jpg"
                title="Data Dashboards"
                description="Show real-time data across offices and teams. Turn analytics into actionable insights with AI-driven dashboards."
                href="/menu-boards"
            />
            <UseCaseCard
                imageSrc="/images/featuredImage3.jpg"
                title="Production Dashboard"
                description="Track KPIs and production lines live. AI signage helps reduce downtime and improve factory efficiency."
                href="/menu-boards"
            />
            <UseCaseCard
                imageSrc="/images/featuredImage4.jpg"
                title="Meeting Room"
                description="Simplify room booking and schedules with smart digital signage, improving collaboration and reducing confusion."
                href="/menu-boards"
            />
            <UseCaseCard
                imageSrc="/images/featuredImage1.jpg"
                title="Lobby & Reception"
                description="Welcome visitors and share updates through AI-powered lobby displays for a strong first impression."
                href="/menu-boards"
            />
            <UseCaseCard
                imageSrc="/images/featuredImage1.jpg"
                title="Libraries Dashboards"
                description="Show events, updates, and news with AI digital signage built for libraries and educational spaces."
                href="/menu-boards"
            />
        </div>
      </div>
    </section>
  );
}
