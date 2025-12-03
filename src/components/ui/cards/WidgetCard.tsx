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
    <div className="rounded-3xl h-100 overflow-hidden border border-neutral-100/50 box-shadow-card flex flex-col">
      <div className="flex items-center justify-between gap-2 px-3 py-4 bg-white shrink-0">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500/50"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-500/50"></span>
          <span className="w-3 h-3 rounded-full bg-green-500/50"></span>
        </div>
        <div className="bg-neutral-100/50 h-3 w-20 rounded-full"></div>
      </div>

      <div className="relative w-full flex-1 flex items-center justify-center bg-gray-100">
        <Image
          src={item.image}
          alt={item.title}
          fill
          className="object-cover"
        />
      </div>
    </div>
  );
}
