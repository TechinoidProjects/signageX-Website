"use client";

import { useState } from "react";
import { ChevronUp, ChevronDown } from "lucide-react";
import { Badge } from "../ui/badge-default";

export type FAQItem = {
  id: string;
  tag: string;
  heading: string;
  subheading: string;
};

interface FAQsProps {
  faqs: FAQItem[]; 
}

export const FAQs = ({ faqs }: FAQsProps) => {
  const [active, setActive] = useState(faqs[0]?.id);

  return (
    <section className="w-full flex justify-center items-center px-4 ">
      <div className="container mx-auto flex flex-col gap-10">
        {faqs.map((item) => {
          const isActive = item.id === active;

          return (
            <div
              key={item.id}
              className={`rounded-2xl transition-all ${
                isActive ? "bg-background-light" : ""
              }`}
            >
              <button
                onClick={() => setActive(item.id)}
                className="w-full flex items-center justify-between px-4 py-2"
              >
                <div className="flex flex-col">
                  {!isActive && (
                    <div className="flex w-full items-center gap-4">
                      <span className="text-md text-left md:text-xl font-semibold text-neutral-800 font-display">
                        {item.heading}
                      </span>
                      <Badge
                        text={item.tag}
                        variant="solid"
                        color="neutral"
                        showIcon={false}
                        size="sm"
                        className="hidden! md:inline-flex!"
                      />
                    </div>
                  )}

                  {isActive && (
                    <div className="px-4 py-2">
                      <div className="flex flex-col">
                        <div className="flex items-center gap-3">
                          <h3 className="text-md text-left md:text-xl font-semibold text-neutral-800 font-display">
                            {item.heading}
                          </h3>

                          <Badge
                            text={item.tag}
                            variant="solid"
                            color="deepPurple"
                            showIcon={false}
                            size="sm"
                            className="hidden! md:inline-flex!"

                          />
                        </div>

                        <p className="text-neutral-600 leading-relaxed text-left text-xs md:text-lg ">
                          {item.subheading}
                        </p>
                      </div>
                    </div>
                  )}
                </div>

                <div className="bg-purple-400 p-2 rounded-xl text-white max-w-lg">
                  {isActive ? (
                    <ChevronUp className="w-4 h-4" />
                  ) : (
                    <ChevronDown className="w-4 h-4" />
                  )}
                </div>
              </button>
            </div>
          );
        })}
      </div>
    </section>
  );
};
