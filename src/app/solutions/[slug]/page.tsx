// import { notFound } from 'next/navigation';
// import { solutions } from '@/lib/solutionsData';
// import { Dices } from 'lucide-react';
// import { Metadata } from 'next';

// interface SolutionPageProps {
//   params: {
//     slug: string;
//   };
// }

// export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
//   const solution = solutions.find(s => s.id === params.slug);
  
//   if (!solution) {
//     return {
//       title: 'Solution Not Found - SignageX',
//       description: 'The requested solution could not be found.'
//     };
//   }

//   return {
//     title: `${solution.title} - SignageX`,
//     description: solution.description,
//     openGraph: {
//       images: [solution.image],
//     },
//   };
// }

// export default function SolutionPage({ params }: SolutionPageProps) {
//   const solution = solutions.find(s => s.id === params.slug);

//   if (!solution) {
//     notFound();
//   }

//   return (
//     <main className="min-h-screen bg-backgroundLight flex flex-col items-center  mt-15">
//             <Hero
//                 badgeText={solution.subheading}
//                 heading={`Transform ${industry.title} Experiences with Digital Signage`}
//                 subheading={industry.description}
//                 buttonText="Start Free Trial"
//                 imageOneSrc={industry.imageSrc}
//                 imageTwoSrc={industry.imageSrc}
//             />
    
//             <PromoSectionBlock
//                 badgeText="Smart Usage"
//                 badgeIcon={Dices}
//                 title={`Smart Usage of ${industry.title} Signage`}
//                 subtitle={industry.description}
//                 promoSections={
//                     industry.promoSections ?? [
//                     {
//                         imageSrc: industry.imageSrc,
//                         heading: `When Signage Matters in ${industry.title}`,
//                         description: industry.description,
//                         reverse: industry.reverse,
//                     },
//                     ]
//                 }
//             />
//             <FeatureTabs
//               tabs={industry.tabs || []}
//               badgeText={industry.title}
//               heading={`Digital Signage for ${industry.title}`}
//               subheading={industry.description}
//             />
//             <FeaturedApps
//               headingTitle="Retail Digital Signage Apps"
//               headingSubtitle="Ready-to-use widgets for boosting sales, promoting products, and enhancing customer experience."
//               headingTitleColor="text-white"
//               headingSubtitleColor="text-white/90"
//               cards={industry.cards || []}
//               interval={7000}
//               buttonText="Explore All Retail Widgets"
//               buttonHref="/widgets/retail"
//             />
//             <WhyChooseTabsSection
//               badgeText="why us"
//               heading={`Why Choose SignageX For ${industry.title}`}
//               subheading="Experience AI-powered digital signage for every business."
//               features={industry.features || []}
//             />
//             <GetStarted />
//           <CTA />
//         </main>
//   );
// }


import Hero from "@/components/common/Hero";
import { solutions } from '@/lib/solutionsData';
import CTA from "@/components/common/CTA";
import { notFound } from "next/navigation";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export default async function SolutionsPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = solutions.find((item) => item.slug === slug);

  if (!solution) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col items-center  mt-15">
        <Hero
            badgeText={solution.badgeTitle}
            heading={solution.title}
            subheading={solution.description}
            buttonText="Start Free Trial"
            imageOneSrc={solution.imageSrcOne}
            imageTwoSrc={solution.imageSrcTwo}
        />
      <CTA />
    </main>
  );
}
