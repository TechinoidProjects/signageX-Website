import React from "react";

interface StepConnectorProps {
  stepId: string;
  connectorPath: string;
}

export const StepConnector: React.FC<StepConnectorProps> = ({ stepId, connectorPath }) => {
  return (
    <svg
      className="pointer-events-none absolute left-1/2 bottom-[-150px] hidden h-[160px] w-[720px] -translate-x-1/2 md:block"
      viewBox="0 0 720 160"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id={`step-flow-${stepId}`} x1="120" y1="0" x2="600" y2="180">
          <stop offset="0%" stopColor="#C084FC" stopOpacity="0.2" />
          <stop offset="55%" stopColor="#8B5CF6" stopOpacity="0.5" />
          <stop offset="100%" stopColor="#6D28D9" stopOpacity="0.2" />
        </linearGradient>
      </defs>
      <path
        d={connectorPath}
        stroke={`url(#step-flow-${stepId})`}
        strokeWidth="2.4"
        strokeDasharray="10 16"
        strokeLinecap="round"
      />
    </svg>
  );
};
