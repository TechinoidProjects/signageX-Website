// import { Metadata } from "next";
// import { Heading } from "@/components/common/MainHeading";
// import { Badge } from "@/components/ui/badge-default";
// import { Dices } from "lucide-react";
// import { solutions } from "@/lib/solutionsData";
// import Link from "next/link";

// export const metadata: Metadata = {
//   title: 'Solutions - SignageX',
//   description: 'Explore our digital signage solutions for various business needs',
// }

// export default function SolutionsPage() {
//   return (
//     <main className="min-h-screen bg-backgroundLight flex flex-col items-center pt-32 pb-16 px-4">
//       <div className="container mx-auto">
//         <div className="max-w-3xl mx-auto text-center mb-16">
//           <Badge text="Solutions" icon={Dices} variant="outline" color="custom" />
//           <Heading 
//             title="Digital Signage Solutions for Every Need" 
//             subtitle="Discover how our digital signage solutions can transform your business communications and customer engagement." 
//           />
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//           {solutions.map((solution) => (
//             <Link 
//               key={solution.id} 
//               href={`/solutions/${solution.id}`}
//               className="group"
//             >
//               <div className="bg-white rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow h-full flex flex-col">
//                 <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center mb-4">
//                   <solution.icon className="w-6 h-6 text-purple-600" />
//                 </div>
//                 <h3 className="text-xl font-semibold text-gray-900 mb-2">
//                   {solution.title}
//                 </h3>
//                 <p className="text-gray-600 mb-4 flex-grow">
//                   {solution.description}
//                 </p>
//                 <div className="text-purple-600 font-medium flex items-center gap-2 group-hover:gap-3 transition-all">
//                   Learn more
//                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-arrow-right">
//                     <path d="M5 12h14"></path>
//                     <path d="m12 5 7 7-7 7"></path>
//                   </svg>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </main>
//   );
// }



import UseCases from "@/components/Industries/UseCases";
import CTA from "@/components/common/CTA/index"
export default function AllIndustries() {
  return (
    <main className="min-h-screen bg-backgroundLight flex flex-col justify-center items-center mt-15">
      <UseCases/>
      <CTA/>
    </main>
  );
}
