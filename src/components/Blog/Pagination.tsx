import { ArrowBigLeft, ArrowBigRight } from "lucide-react";
interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div className="flex gap-3 items-center">

      <button
        onClick={() => onChange(page - 1)}
        className={`${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:border-neutral-400/60"} w-10 h-10 flex items-center justify-center rounded-full border-3 border-neutral-400/30 transition`}
      >
        <ArrowBigLeft className="w-5 h-5 text-neutral-700" />
      </button>
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`px-4 py-2 rounded-lg transition 
            ${
              num === page
                ? "bg-purple-300 text-white border-purple-300"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
        >
          {num}
        </button>
      ))}
      <button
        onClick={() => onChange(page + 1)}
        className={`w-10 h-10 flex items-center justify-center rounded-full border-3 border-neutral-400/30 transition ${
          page === totalPages
            ? "opacity-40 cursor-not-allowed "
            : "hover:border-neutral-400/60"
        }`}
      >
        <ArrowBigRight className="w-5 h-5 text-neutral-700" />
      </button>
    </div>
  );
}
