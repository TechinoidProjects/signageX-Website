"use client";

import { useState } from "react";
import { cn } from "@/lib/utils";
import { ArrowBigLeft, ArrowBigRight } from "lucide-react";

export interface StorySlide {
  id: string;
  heading: string;
  year: string;
  description: string;
}

interface StoryCarouselProps {
  slides: StorySlide[];
  className?: string;
}

export default function StoryCarousel({ slides, className }: StoryCarouselProps) {
  const [current, setCurrent] = useState(0);

  const next = () => setCurrent((prev) => (prev + 1) % slides.length);
  const prev = () => setCurrent((prev) => (prev - 1 + slides.length) % slides.length);

  const slide = slides[current];

  return (
    <div className={cn("relative h-full w-full mx-auto py-6", className)}>
      <div className="rounded-3xl bg-gradient-primary shadow-[0_0_80px_rgba(165,119,255,0.6)] p-10 text-center text-white select-none h-full">
        <h2 className="text-3xl font-bold mb-6">{slide.heading}</h2>
        <p className="text-lg font-semibold mb-4 opacity-90">{slide.year}</p>
        <div
          className="max-w-4xl mx-auto text-base opacity-80 leading-relaxed min-h-60 md:min-h-30 flex items-center"
        >
          <p className="text-center">{slide.description}</p>
        </div>

        <div className="flex items-center justify-center gap-6 mt-10">
          <button
            onClick={prev}
            className="w-10 h-10 flex items-center justify-center rounded-full border-3 border-white/30 hover:border-white/80 transition"
          >
            <ArrowBigLeft className="w-5 h-5" />
          </button>

          <div className="flex items-center gap-3">
            {slides.map((s, i) => (
              <div
                key={s.id}
                onClick={() => setCurrent(i)}
                className={cn(
                  "w-3 h-3 rounded-full cursor-pointer transition-all",
                  i === current ? "bg-purple-400 scale-110" : "bg-white/70",
                )}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 flex items-center justify-center rounded-full border-3 border-white/30 hover:border-white/80 transition"
          >
            <ArrowBigRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
}
