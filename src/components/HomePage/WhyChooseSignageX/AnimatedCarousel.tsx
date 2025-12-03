import { Heading } from "../../common/MainHeading";
import AnimatedCards from "./AnimatedCards";


export default function AnimatedCarousel() {
  const cards = [
    { id: 1, image: "/images/featuredImage1.jpg", title: "October Event" },
    { id: 2, image: "/images/featuredImage2.jpg", title: "Quiz Time" },
    { id: 3, image: "/images/featuredImage3.jpg", title: "Fun Facts" },
    { id: 4, image: "/images/featuredImage4.jpg", title: "Mosquito Trivia" },
    { id: 5, image: "/images/featuredImage5.jpg", title: "November Event" },
  ];

  return (
    <section className="relative w-full bg-deep-purple-500 text-white py-16 overflow-hidden rounded-3xl my-6">
      <div className="text-center mb-10 px-4">
        <Heading 
          title="Ready-to-Use Apps & Widgets"
          subtitle="Access a library of pre-built apps and widgets designed for retail,
            education, healthcare, and more. Easily customize them with AI to
            create meaningful screen experiences — no effort required."
          titleColorClass="text-white"
          subtitleColorClass="text-white"
          size="md"
        />
      </div>
      <AnimatedCards cards={cards} interval={5000} />

      <div className="flex justify-center mt-10">
        <button className="bg-white text-[#1E1045] font-semibold py-3 px-6 rounded-xl hover:bg-white/90 transition">
          View All Widgets/Apps
        </button>
      </div>
    </section>
  );
}
