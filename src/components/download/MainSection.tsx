import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { Dices } from "lucide-react";
import { DownloadCard } from "@/components/ui/cards/DownloadCard";

export default function MainSection() {
  return (
    <section className="bg-white w-full flex-col justify-center items-center py-16 md:pt-8 md:pb-16 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 gap-2 ">
          <Badge
            text="Start Now"
            icon={Dices}
            variant="outline"
            color="custom"
          />

          <Heading
            title="Download SignageX"
            subtitle="Launch in minutes. Amplify your reach, influence and income."
          />
        </div>
        <div className="grid grid-cols-2 w-full gap-6">
            <DownloadCard
                href="/downloads/macos"
                logo="/images/Apple.png"
                title="macOS"
                version="Version 10.25.36"
            />
            <DownloadCard
                href="/downloads/chrome"
                logo="/images/Chrome.png"
                title="Chrome"
                version="Version 10.25.36"
            />
            <DownloadCard
                href="/downloads/windows"
                logo="/images/Windows.png"
                title="Windows"
                version="Version 10.25.36"
            />
            <DownloadCard
                href="/downloads/android"
                logo="/images/Android.png"
                title="Android"
                version="Version 10.25.36"
            />
        </div>

      </div>
    </section>
  );
}