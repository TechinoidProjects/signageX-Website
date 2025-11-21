interface PaginationProps {
  page: number;
  totalPages: number;
  onChange: (page: number) => void;
}

export default function Pagination({ page, totalPages, onChange }: PaginationProps) {
  return (
    <div className="flex gap-3 items-center">

      {/* Prev */}
      <button
        disabled={page === 1}
        onClick={() => onChange(page - 1)}
        className={`px-4 py-2 rounded-lg border 
        ${page === 1 ? "opacity-40 cursor-not-allowed" : "hover:bg-gray-100"}`}
      >
        Prev
      </button>

      {/* Page Numbers */}
      {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
        <button
          key={num}
          onClick={() => onChange(num)}
          className={`px-4 py-2 rounded-lg border transition 
            ${
              num === page
                ? "bg-purple-600 text-white border-purple-600"
                : "bg-white text-gray-700 hover:bg-gray-100"
            }`}
        >
          {num}
        </button>
      ))}

      {/* Next */}
      <button
        disabled={page === totalPages}
        onClick={() => onChange(page + 1)}
        className={`px-4 py-2 rounded-lg border 
        ${
          page === totalPages
            ? "opacity-40 cursor-not-allowed"
            : "hover:bg-gray-100"
        }`}
      >
        Next
      </button>
    </div>
  );
}
