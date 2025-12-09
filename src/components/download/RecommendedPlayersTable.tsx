"use client";

import { Heading } from "@/components/common/MainHeading";
import React from "react";

interface RecommendedPlayersTableProps {
  title: string;
  headers: string[];
  rows: (string | number)[][];
}

export const RecommendedPlayersTable: React.FC<RecommendedPlayersTableProps> = ({
  title,
  headers,
  rows,
}) => {
  return (
    <section className="w-full flex justify-center pb-16 px-4">
      <div className="w-full max-w-7xl mx-auto flex flex-col gap-6 px-4">
        <Heading title={title} align="left" size="lg" />

        <div className="w-full rounded-3xl shadow-sm border border-neutral-100 bg-white">
          <div className="w-full overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
            <table className="w-full text-sm md:text-base text-neutral-700">
            <thead>
              <tr className="text-white">
                {headers.map((header, index) => (
                  <th
                    key={header}
                    className={`py-4 px-4 text-left font-semibold bg-dark-gradient whitespace-nowrap ${
                      index === 0 ? 'rounded-tl-xl' : 
                      index === headers.length - 1 ? 'rounded-tr-xl' : 
                      ''
                    }`}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rows.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className="border-t border-neutral-100 hover:bg-neutral-50/60 transition-colors"
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={`${rowIndex}-${cellIndex}`}
                      className="py-3 px-4 whitespace-nowrap text-left"
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
            </table>
          </div>
        </div>
      </div>
    </section>
  );
};
