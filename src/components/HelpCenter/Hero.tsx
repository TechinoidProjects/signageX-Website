import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import HelpCard from "@/components/ui/cards/HelpCard";
import { Dices } from "lucide-react";

type HeroProps = {
  badgeText?: string;
  heading?: string;
  subheading?: string;
};

export default function Hero({
  badgeText = "help center",
  heading = "We Have Answers",
  subheading = "SignageX knows and takes care of its users. Please find solutions for any blockers.",
}: HeroProps) {
  return (
    <section className="bg-white w-full h-full py-16 md:py-6 px-4">
      <div className="container mx-auto flex flex-col justify-center items-center md:gap-4">
        <div className="flex flex-col justify-between items-center pb-8 gap-2">

          {/* Badge */}
          <Badge
            text={badgeText}
            icon={Dices}
            variant="outline"
            color="custom"
          />

          <Heading title={heading} subtitle={subheading} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8 w-full">
          <HelpCard
            title="Join Our Discord"
            avatars={[
              "/images/avatar1.png",
              "/images/avatar2.png",
              "/images/avatar3.png",
              "/images/avatar4.png",
            ]}
            membersCount="+10k"
            logoSrc="/images/Discord.png"
            link="https://discord.com/invite/xyz"
          />

          <HelpCard
            title="Join Our Whatsapp"
            avatars={[
              "/images/avatar1.png",
              "/images/avatar2.png",
              "/images/avatar3.png",
              "/images/avatar4.png",
            ]}
            membersCount="+10k"
            logoSrc="/images/Whatsapp.png"
            link="https://discord.com/invite/xyz"
          />

          <HelpCard
            title="Join Our Slack"
            avatars={[
              "/images/avatar1.png",
              "/images/avatar2.png",
              "/images/avatar3.png",
              "/images/avatar4.png",
            ]}
            membersCount="+10k"
            logoSrc="/images/Slack.png"
            link="https://discord.com/invite/xyz"
          />
        </div>
      </div>
    </section>
  );
}
