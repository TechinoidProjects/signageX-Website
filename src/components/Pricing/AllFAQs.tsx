import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { FAQs } from "@/components/ui/faq";

import { Dices } from "lucide-react";

const FAQ_DATA = [
  {
    id: "upgrade",
    tag: "Upgrade",
    heading: "Can I upgrade anytime?",
    subheading:
      "Yes, you can upgrade or downgrade your plan anytime. Changes take effect instantly, and your billing will be adjusted automatically. Yes, you can upgrade or downgrade your plan anytime. Changes take effect instantly, and your billing will be adjusted automatically.",
  },
  {
    id: "trial",
    tag: "Trial",
    heading: "Do you offer a free trial?",
    subheading: "Yes, we offer a 14 day free trial for all our plans. During this time, you can explore all features and make an informed decision. No commitment, no obligations just a chance to see how SignageX can benefit your business."
  },
  {
    id: "support",
    tag: "Support",
    heading: "Is support included in all plans?",
    subheading: "Yes, we offer a 14-day free trial for all our plans. During this time, you can explore all features and make an informed decision. No commitment, no obligations just a chance to see how SignageX can benefit your business."
  },
  {
    id: "hardware",
    tag: "Hardware",
    heading: "Can I use my existing screens?",
    subheading: "Yes, SignageX is compatible with most existing screens, including LED, LCD, and plasma displays."
  }
];

export default function AllFAQs() {
  return (
    <section className="bg-white w-full h-full  py-16 md:py-6 px-4">
      <div className=" container mx-auto flex flex-col justify-center items-center md:gap-4 ">
        <div className="flex flex-col justify-between items-center pb-8 gap-2 ">
          {/* Badge */}
          <Badge
            text="FAQS"
            icon={Dices}
            variant="outline"
            color="custom"
          />
          <Heading
            title="Any Questions?"
            subtitle="Answers to common questions about plans, billing, and upgrades."
          />
        </div>
        <FAQs faqs={FAQ_DATA} />
      </div>
      
    </section>
  );
}
