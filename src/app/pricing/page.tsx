
import SignagePricing from "@/components/HomePage/SignagePricing";
import SignageXPlans from "@/components/Pricing/SignageXPlans";
import PricingTable from "@/components/Pricing/PricingTable";
import CTA from "@/components/common/CTA";
export default function HowItWorks() {
  return (
    <main className="min-h-screen bg-white flex flex-col justify-start items-center mt-15">
        <SignagePricing
            badgeText="Pricing"
            heading="Simple Plans, Smarter Signage"
            subheading="Choose a flexible pricing plan that fits your business. Scale effortlessly as you grow with AI-powered digital signage tools."
        />
        <SignageXPlans />
        <PricingTable />
      
      <CTA />
      
    </main>
  );
}
