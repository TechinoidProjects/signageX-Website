import MainSection from "@/components/download/MainSection";
import CTA from "@/components/common/CTA";

export default function Download() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-start items-center  mt-0 md:mt-15">
        <MainSection/>
        <CTA/>
    </main>
  );
}