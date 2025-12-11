import { Badge } from "@/components/ui/badge-default";
import { Heading } from "@/components/common/MainHeading";
import { FAQs } from "@/components/ui/faq";

import { Dices } from "lucide-react";

const FAQ_DATA = [
  {
    id: "setup",
    tag: "Setup",
    heading: "How do I set up SignageX with my existing screens?",
    subheading:
      "You simply connect your current displays; no new hardware is required. Our platform auto-detects and syncs your devices in minutes, making setup fast and hassle-free. If you need any help, feel free to reach out to us.",
  },
  {
    id: "pricing",
    tag: "Pricing",
    heading: "What pricing plans do you offer?",
    subheading:
      "We offer flexible pricing plans designed for businesses of all sizes. Whether you're managing a single screen or hundreds across multiple locations, you can choose from monthly or annual subscriptions. Each plan includes essential features like cloud-based management, templates, scheduling, and customer support.",
  },
  {
    id: "AI",
    tag: "AI",
    heading: "How does AI improve digital signage content?",
    subheading:
      "AI helps automate and enhance your content creation by generating layouts, optimizing messaging, analyzing engagement, and suggesting improvements. With AI-driven content recommendations and smart scheduling, you can save time while delivering more compelling, personalized, and visually consistent digital signage.",
  },
  {
    id: "Scalability",
    tag: "Scalability",
    heading: "Can I manage multiple locations and screens?",
    subheading:
      "Yes, SignageX allows you to control unlimited screens from a single dashboard. You can assign content to specific locations, create groups, schedule updates, and monitor device status in real-time—making multi-location management simple and scalable.",
  },
  {
    id: "Integration",
    tag: "Integration",
    heading: "Does SignageX work with third-party apps and tools?",
    subheading:
      "Absolutely. SignageX integrates with popular third-party tools such as Google Sheets, YouTube, Canva, social media feeds, weather widgets, calendars, and more. You can easily connect your apps to automate content updates and streamline workflows.",
  },
  {
    id: "Updates",
    tag: "Updates",
    heading: "How often is the software updated?",
    subheading:
      "We regularly release updates to improve performance, add new features, and enhance security. Most updates are automatic, ensuring you always have access to the latest version without needing to manually install anything.",
  },
  {
    id: "Security",
    tag: "Security",
    heading: "Is my data safe on SignageX?",
    subheading:
      "We prioritize data security and privacy. SignageX employs industry-standard encryption, secure data centers, and regular security audits to protect your information. We also comply with relevant data protection regulations to ensure your data is handled responsibly.",
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
            title="Answers For Your Questions"
            subtitle="Launch in minutes. Amplify your reach, influence and income."
          />
        </div>
        <FAQs faqs={FAQ_DATA} />
      </div>
      
    </section>
  );
}
