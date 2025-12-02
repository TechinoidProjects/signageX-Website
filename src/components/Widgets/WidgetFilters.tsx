interface WidgetFiltersProps {
  tags: string[];
  activeTag: string | null;
  setActiveTag: (tag: string | null) => void;
}

export default function WidgetFilters({
  tags,
  activeTag,
  setActiveTag,
}: WidgetFiltersProps) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto whitespace-nowrap rounded-full bg-transparent border border-neutral-100/50 px-2 py-2 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
      <button
        onClick={() => setActiveTag(null)}
        className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
          activeTag === null
            ? "bg-purple-300 text-white shadow-sm"
            : "bg-transparent text-gray-700 hover:bg-white/70"
        }`}
      >
        All
      </button>

      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => setActiveTag(tag)}
          className={`px-4 py-1.5 rounded-full text-sm font-medium transition ${
            activeTag === tag
              ? "bg-purple-600 text-white shadow-sm"
              : "bg-transparent text-gray-600 hover:bg-white/70"
          }`}
        >
          {tag}
        </button>
      ))}
    </div>
  );
}
