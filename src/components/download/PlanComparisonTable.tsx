"use client";

import React from "react";
import { Heading } from "@/components/common/MainHeading";
import { PlanComparisonFieldRow } from "./PlanComparisonFieldRow";
import { Circle } from "lucide-react";

interface PlanDefinition {
  id: string;
  label: string;
}

interface PlanComparisonField {
  id: string;
  label: string;
  values: Record<string, React.ReactNode | boolean | null | undefined>;
}

interface PlanComparisonCategory {
  id: string;
  title: string;
  icon?: React.ReactNode;
  fields: PlanComparisonField[];
}

interface PlanComparisonTableProps {
  title: string;
  subtitle?: string;
  plans: PlanDefinition[];
  categories: PlanComparisonCategory[];
}

export const PlanComparisonTable: React.FC<PlanComparisonTableProps> = ({
  title,
  subtitle,
  plans,
  categories,
}) => {
  return (
    <section className="w-full flex justify-center pb-16 px-4">
      <div className="container mx-auto flex flex-col gap-6">
        <Heading title={title} subtitle={subtitle} align="center" />

        <div className="overflow-x-auto rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md shadow-lg ">
          <table className="min-w-full text-sm md:text-base text-neutral-700 ">
            <thead className="h-15">
              <tr className="bg-deep-purple-500 text-white">
                <th className="py-3 px-4 text-left font-semibold text-xs md:text-sm rounded-l-xl ">
                  <span className="sr-only">Feature</span>
                </th>
                {plans.map((plan, index) => (
                  <th
                    key={plan.id}
                    className="py-3 px-4 text-center font-semibold text-md md:text-xl last:rounded-r-xl "
                  >
                    {plan.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <tr>
                    <td
                      colSpan={plans.length + 1}
                      className="pt-6 pb-3 px-4 text-xs md:text-sm font-semibold text-neutral-800 "
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-xl bg-white border border-neutral-200 text-black">
                          {category.icon ? (
                            category.icon
                          ) : (
                            <Circle className="h-3 w-3" strokeWidth={2} />
                          )}
                        </span>
                        <span>{category.title}</span>
                      </div>
                    </td>
                  </tr>

                  {category.fields.map((field) => (
                    <PlanComparisonFieldRow
                      key={field.id}
                      label={field.label}
                      plans={plans}
                      values={field.values}
                    />
                  ))}
                </React.Fragment>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
