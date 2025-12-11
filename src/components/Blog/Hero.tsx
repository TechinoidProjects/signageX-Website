import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="bg-white w-full flex-col justify-center items-center py-16 md:py-6 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 gap-2 ">
          {/* Badge */}
          <Badge
            text="Blogs"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          <Heading
            title="SignageX Blogs"
            subtitle="Expert insights on everything about AI powered digital signage for every industry"
          />
        </div>
      </div>
      <div className="hero-image">
        <Image
            src="/images/blog-hero.jpg"
            alt="Hero Image"
            width={1600}
            height={1600}
            className="rounded-2xl w-full h-100 object-cover"
        />
    </div>
    </section>
  );
}
