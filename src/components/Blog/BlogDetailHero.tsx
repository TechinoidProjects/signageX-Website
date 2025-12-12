"use client";

import Image from "next/image";
import { Badge } from "../ui/badge-default";

type Author = {
  image: string;
  name: string;
  designation: string;
};

interface BlogDetailHeroProps {
  badge: string;
  title: string;
  description: string;
  author: Author;
  readTime: string;
  date: string;
  thumbnail: string;
}

const BlogDetailHero: React.FC<BlogDetailHeroProps> = ({
  badge,
  title,
  description,
  author,
  readTime,
  date,
  thumbnail,
}) => {
  return (
    <div className="w-full container mx-auto md:px-0 px-4 md:py-10 py-16 space-y-6">
      <Badge
        text={badge}
        showIcon={false}
        variant="solid"
        color="white"
      />

      <h1 className="text-3xl md:text-5xl font-bold text-neutral-500 leading-tight">
        {title}
      </h1>

      <p className="text-gray-600 text-lg max-w-3xl">{description}</p>

      <div className="flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src={author.image}
            alt={author.name}
            width={45}
            height={45}
            className="rounded-full object-cover"
          />
          <div>
            <p className="text-gray-900 font-semibold">{author.name}</p>
            <p className="text-gray-500 text-sm">{author.designation}</p>
          </div>
        </div>

        <div className="text-right">
          <p className="text-gray-600 text-sm">{readTime} read</p>
          <p className="text-gray-400 text-sm">{date}</p>
        </div>
      </div>

      {/* Thumbnail */}
      <div className="w-full">
        <Image
          src={thumbnail}
          alt={title}
          width={1400}
          height={700}
          className="w-full rounded-lg object-cover"
        />
      </div>
    </div>
  );
};

export default BlogDetailHero;
