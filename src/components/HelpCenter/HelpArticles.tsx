import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import  { DownloadCard } from "@/components/ui/cards/DownloadCard";
import { Dices } from "lucide-react";

export default function HelpArticles() {
  return (
    <section className="bg-background-light w-full h-full  py-16 md:py-6 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 gap-2 ">
          {/* Badge */}
          <Badge
            text="help articles"
            icon={Dices}
            variant="outline"
            color="custom"
          />
          <Heading
            title="Get More Information"
            subtitle="Launch in minutes. Amplify your reach, influence and income."
          />
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-8 w-full ">
          <DownloadCard
            href="#"
            logo="/svg/vector-9.svg"
            title="Getting Started"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-8.svg"
            title="Screen Setup"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-7.svg"
            title="Account Setup"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-5.svg"
            title="Content Upload"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-4.svg"
            title="AI Tools"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-3.svg"
            title="Dashboard Guide"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-6.svg"
            title="Integrations"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-2.svg"
            title="Billing & Plans"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector-1.svg"
            title="Troubleshooting"
            version="2 Articles"
            color="invert"
          />
          <DownloadCard
            href="#"
            logo="/svg/vector.svg"
            title="Security"
            version="2 Articles"
            color="invert"
          />
        </div>
      </div>
      
    </section>
  );
}
