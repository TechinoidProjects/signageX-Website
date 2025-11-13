"use client";

import { useState } from "react";
import Image from "next/image";
import { Zap } from "lucide-react";
import { Heading } from "../../common/MainHeading";

interface Card {
  id: number;
  image: string;
  title: string;
}

interface AnimatedCarouselProps {
  cards: Card[];
  interval?: number; // ms
}

export default function AnimatedCarousel({
  cards,
}: AnimatedCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const total = cards?.length || 0;

  const prevSlide = () => {
    setActiveIndex((prev) => (prev - 1 + total) % total);
  };

  const nextSlide = () => {
    setActiveIndex((prev) => (prev + 1) % total);
  };

  if (!cards || total === 0) {
    return <div className="text-center text-white py-16">No cards available</div>;
  }

  const prevIndex = (activeIndex - 1 + total) % total;
  const nextIndex = (activeIndex + 1) % total;

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

      <div className="flex justify-center items-center gap-4 md:gap-8 px-4 w-full">
        <div className="hidden sm:flex w-[180px] sm:w-40 md:w-[180px] h-[260px] md:h-[180px] rounded-2xl overflow-hidden opacity-50 scale-95 blur-[0.5px] shadow-lg">
          <Image
            src={cards[(activeIndex - 2 + total) % total].image}
            alt={cards[(activeIndex - 2 + total) % total].title}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        <div className="hidden sm:flex w-[180px] sm:w-40 md:w-[180px] h-[260px] md:h-[180px] rounded-2xl overflow-hidden opacity-50 scale-95 blur-[0.5px] shadow-lg">
          
          <Image
            src={cards[prevIndex].image}
            alt={cards[prevIndex].title}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>

        <div className="relative w-[300px] sm:w-[340px] md:w-[400px] h-[400px] rounded-3xl  shadow-2xl ">
          
          <div className="absolute z-30 top-1/2 right-[-15] bg-transparent border p-2 rounded-full shadow-[0_0_10px_rgba(138,99,255,0.7)] " onClick={prevSlide}>
            <Zap className="w-3 h-3 text-white" />
          </div>

          <div className="absolute z-30  top-1/2 left-[-15] bg-transparent border p-2 rounded-full shadow-[0_0_10px_rgba(138,99,255,0.7)]" onClick={nextSlide}>
            <Zap className="w-3 h-3 text-white" />
          </div>
          <div className="relative w-full h-full">
            {cards.map((card, i) => (
              <div
                key={card.id}
                className={`absolute inset-0 transition-all duration-700 ease-in-out ${
                  i === activeIndex
                    ? "opacity-100 translate-x-0 z-20"
                    : "opacity-0 translate-x-10 z-10"
                }`}
              >
                <Image
                  src={card.image}
                  alt={card.title}
                  width={400}
                  height={400}
                  className="object-cover w-full h-full rounded-3xl"
                />
                <div className="absoluteinset-0 bg-linear-to-t from-black/50 via-transparent to-transparent rounded-3xl" />
              </div>
            ))}
          </div>
        </div>

        {/* Right (next) */}
        <div className="hidden sm:flex w-[180px] sm:w-40 md:w-[180px] h-[260px] md:h-[180px] rounded-2xl overflow-hidden opacity-50 scale-95 blur-[0.5px] shadow-lg">
          <Image
            src={cards[nextIndex].image}
            alt={cards[nextIndex].title}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
        {/* Right (next-next) */}
        <div className="hidden sm:flex w-[180px] sm:w-40 md:w-[180px] h-[260px] md:h-[180px] rounded-2xl overflow-hidden opacity-50 scale-95 blur-[0.5px] shadow-lg">
          <Image
            src={cards[(activeIndex + 2) % total].image}
            alt={cards[(activeIndex + 2) % total].title}
            width={300}
            height={300}
            className="object-cover w-full h-full"
          />
        </div>
      </div>

      <div className="flex justify-center mt-10">
        <button className="bg-white text-[#1E1045] font-semibold py-3 px-6 rounded-xl hover:bg-white/90 transition">
          View All Widgets/Apps
        </button>
      </div>
    </section>
  );
}
