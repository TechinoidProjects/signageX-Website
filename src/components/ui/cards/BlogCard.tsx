import Image from "next/image";
import { Badge } from "@/components/ui/badge-default";
import { ActionButton } from "@/components/ui/action-button";
import { ArrowRight } from "lucide-react";

interface BlogCardProps {
  image: string;
  category: string;
  date: string;
  author: string;
  title: string;
  description: string;
  readMoreHref: string;
  readTime?: string;
  direction?: "horizontal" | "vertical";
  color?: "invert" | "normal";
}

export default function BlogCard({
  image,
  category,
  date,
  author,
  title,
  description,
  readMoreHref,
  readTime = "7",
  direction = "horizontal",
  color = "normal",
}: BlogCardProps) {
  const isHorizontal = direction === "horizontal";
  const isColor = color === "normal";

  return (
    <div
      className={` w-full rounded-2xl shadow-sm overflow-hidden flex 
        ${isHorizontal ? "flex-row" : "flex-col"}
        ${isColor ? "bg-white" : "bg-background-light"}
      `}
    >
      {/* IMAGE */}
      <div className={` relative  ${isHorizontal ? "w-1/2 h-64 md:h-auto" : "w-full h-64"} `} >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover rounded-3xl p-3"
        />
      </div>

      {/* CONTENT */}
      <div className={` ${isHorizontal ? "w-1/2 p-3" : "w-full py-3 px-3"} `} >
        <div className={`rounded-xl bg-background-light p-2 px-3 h-full flex flex-col justify-between 
          ${isColor ?  "bg-background-light" : "bg-white"}`} >
          <div>
            <Badge
              text={category}
              variant="solid"
              color="grayPurple"
              showIcon={false}
              size="sm"
            />

            <p className="text-sm text-gray-500 mt-3">
              {date} By {author}
            </p>

            <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mt-3 leading-snug">
              {title}
            </h2>

            <p className="text-gray-600 mt-3 line-clamp-3">{description}</p>
          </div>

          <div className="flex items-center justify-between mt-4 w-full">
            <p className={`text-sm text-gray-500 ${isHorizontal ? "w-80" : "w-full"}`}>{readTime} min read</p>
            <ActionButton
              href={readMoreHref}
              variant="primary"
              size="md"
              iconRight={<ArrowRight className="w-5 h-5" />}
              className="w-20"
            >
              Read More
            </ActionButton>
          </div>
        </div>
      </div>
    </div>
  );
}