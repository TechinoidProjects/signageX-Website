"use client";

import React from "react";
import { Heading } from "@/components/common/MainHeading";
import { Badge } from "@/components/ui/badge-default";
import { PlanComparisonFieldRow } from "./PlanComparisonFieldRow";
import { Circle, Dices } from "lucide-react";

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
  badgeText?: string;
  plans: PlanDefinition[];
  categories: PlanComparisonCategory[];
}

export const PlanComparisonTable: React.FC<PlanComparisonTableProps> = ({
  title,
  subtitle,
  badgeText = "Compare",
  plans,
  categories,
}) => {
  return (
    <section className="w-full flex justify-center py-16 px-4 md:px-0">
      <div className="container mx-auto flex flex-col gap-6">
        
        <div className="flex flex-col justify-between items-center text-center pb-6">
          <Badge text={badgeText} icon={Dices} variant="outline" color="custom" />
          <Heading title={title} subtitle={subtitle} align="center" />
        </div>

        <div className="w-full overflow-x-auto">
          <table className="min-w-full w-full table-fixed text-sm md:text-base text-neutral-700 border-separate border-spacing-y-3">
            <thead className="h-15 bg-deep-purple-500 text-white">
              <tr>
                <th className="py-3 px-4 text-left font-semibold text-xs md:text-sm rounded-l-xl md:w-1/2">
                  <span className="sr-only">Feature</span>
                </th>
                {plans.map((plan) => (
                  <th
                    key={plan.id}
                    className="py-3 px-4 text-center font-semibold text-md md:text-xl last:rounded-r-xl md:w-1/6"
                  >
                    {plan.label}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody className="w-full">
              {categories.map((category) => (
                <React.Fragment key={category.id}>
                  <tr>
                    <td
                      colSpan={plans.length + 1}
                      className="pt-6 pb-3 text-xs md:text-sm font-semibold text-neutral-800 "
                    >
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center justify-center h-9 w-9 rounded-lg bg-background-light/120 border border-neutral-100/50 text-black">
                          {category.icon ? (
                            category.icon
                          ) : (
                            <Circle className="h-2 w-2" strokeWidth={2} />
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
