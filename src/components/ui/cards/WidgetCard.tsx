import Image from "next/image";

export type WidgetItem = {
  id: string;
  title: string;
  tag: string;
  image: string;
};

interface WidgetCardProps {
  item: WidgetItem;
}

export default function WidgetCard({ item }: WidgetCardProps) {
  return (
    <div className="flex flex-col w-full rounded-3xl border border-neutral-100/50 shadow-sm overflow-hidden">
      {/* Header with window controls */}
      <div className="flex justify-between items-center p-3 md:p-4 border-b border-b-neutral-500/50 bg-white w-full">
        <div className="flex items-center gap-1">
          <span className="w-2 h-2 rounded-full bg-red-500/50"></span>
          <span className="w-2 h-2 rounded-full bg-yellow-500/50"></span>
          <span className="w-2 h-2 rounded-full bg-green-500/50"></span>
        </div>
        <div className="bg-neutral-100/50 h-2 w-14 rounded-full"></div>
      </div>

      {/* Image container */}
      <div className="relative w-full h-[220px] sm:h-[260px] md:h-[300px] lg:h-[320px] bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
          priority
        />
      </div>
    </div>
  );
}
