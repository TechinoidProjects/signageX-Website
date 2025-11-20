"use client";

import { Dices } from "lucide-react";
import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import {WhyChooseTabs} from "./WhyChooseTabs";


export const WhyChooseUs = () => {
 
  return (
    <section className="bg-white w-full flex justify-center items-center py-8 md:py-16 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center text-center pb-2 md:pb-16 gap-2 md:gap-6">
          <Badge
            text="why us"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          <Heading
            title="Why Choose SignageX"
            subtitle="Experience AI-powered digital signage that’s smarter, faster, and works seamlessly with your existing hardware."
          />
        </div>
        <WhyChooseTabs/>

      </div>
    </section>
  );
};
