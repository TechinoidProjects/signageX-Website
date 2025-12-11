"use client";

import React from "react";
import { Check, X } from "lucide-react";

interface PlanDefinition {
  id: string;
  label: string;
}

interface PlanComparisonFieldRowProps {
  label: string;
  plans: PlanDefinition[];
  values: Record<string, React.ReactNode | boolean | null | undefined>;
}

const renderValue = (value: React.ReactNode | boolean | null | undefined) => {
  if (value === true) {
    return (
      <Check className="mx-auto h-4 w-4 text-primary" strokeWidth={2.4} />
    );
  }

  if (value === false || value === null) {
    return (
      <X className="mx-auto h-4 w-4 text-neutral-300" strokeWidth={2.2} />
    );
  }

  return <span className="text-xs md:text-sm text-neutral-700">{value}</span>;
};

export const PlanComparisonFieldRow: React.FC<PlanComparisonFieldRowProps> = ({
  label,
  plans,
  values,
}) => {
  return (
    <tr className="border-t border-neutral-100 last:border-b hover:bg-neutral-50/60 transition-colors">
      <td className="py-3 px-4 text-xs md:text-sm font-medium text-neutral-700">
        {label}
      </td>

      {plans.map((plan) => (
        <td
          key={plan.id}
          className="py-3 px-4 text-center align-middle"
        >
          {renderValue(values[plan.id])}
        </td>
      ))}
    </tr>
  );
};
