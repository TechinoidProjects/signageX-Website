
import Industries from "@/components/Industries/Industries";
import CTA from "@/components/common/CTA/index"
export default function AllIndustries() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-center items-center mt-15">
      <Industries />
      <CTA/>
    </main>
  );
}
