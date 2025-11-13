import SignageCTA from "./SignageCTA"
import FeatureCard from "@/components/ui/cards/FeatureCard";

export default function GetStarted() {
    
  return (
    <section className="w-full flex justify-center items-center py-16 px-4 bg-background-light">
        <div className=" container container-fluid flex justify-center items-center flex-col">
            <SignageCTA/>
        <div className="w-full flex gap-4 py-6 items-center justify-between flex-col md:flex-row md:flex-wrap p-0">
            <FeatureCard
                number="01"
                title="AI-Powered Signage"
                description="Design smart layouts and automate content with AI digital signage tools."
            />
            <FeatureCard
                number="02"
                title="Easy-to-Use Platform"
                description="Manage and deploy content quickly with our simple dashboard."
            />
            <FeatureCard
                number="03"
                title="Unlimited Widgets"
                description="Create dynamic displays using ready-to-use widgets."
            />
        </div>
                   
        
        </div>
    </section>
  );
}

