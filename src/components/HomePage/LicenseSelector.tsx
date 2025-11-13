"use client";

import React, { useState } from "react";

interface LicenseSelectorProps {
  min?: number;
  max?: number;
  defaultValue?: number;
  pricePerLicense?: number;
}

const LicenseSelector: React.FC<LicenseSelectorProps> = ({
  min = 1,
  max = 50,
  defaultValue = 12,
  pricePerLicense = 0.63,
}) => {
  const [licenses, setLicenses] = useState(defaultValue);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLicenses(Number(e.target.value));
  };

  return (
    <div className="flex flex-col md:flex-row justify-between items-center gap-6 w-full max-w-xl bg-background-light rounded-2xl p-6 transition-all duration-300 border-transparent">
      {/* Left Section */}
      <div className="flex flex-col gap-1 w-1/2 text-center md:text-left">
        <h3 className="text-base font-semibold text-gray-800">
          Select number of licenses needed
        </h3>
        <p className="text-sm text-gray-500">
          Pricing for all plans is based on the number of screens added
        </p>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center md:items-end gap-3 w-full md:w-1/2 bg-white p-4 rounded-3xl">
        <p className="text-sm font-medium text-gray-700">
          ${pricePerLicense.toFixed(2)} per license
        </p>

        <input
          type="range"
          min={min}
          max={max}
          value={licenses}
          onChange={handleChange}
          className="w-full accent-purple-300 cursor-pointer"
        />

        <p className="text-sm font-semibold text-gray-800">
          Number of licenses: <span className="text-deep-purple-500">{licenses}</span>
        </p>
      </div>
    </div>
  );
};

export default LicenseSelector;
