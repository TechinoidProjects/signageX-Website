"use client"

import Image from "next/image";
import { Play } from "lucide-react";
import React from "react";


interface VideoThumbnailProps {
  thumbnail: string;
  onClick?: () => void;
  alt?: string;
  youtubeSource?: string; // YouTube video ID (optional)
}


const VideoThumbnail: React.FC<VideoThumbnailProps> = ({
  thumbnail,
  onClick,
  alt = "Video thumbnail",
  youtubeSource,
}) => {
  const [isPlaying, setIsPlaying] = React.useState(false);

  // If playing and youtubeSource is provided, show YouTube embed
  if (isPlaying && youtubeSource) {
    return (
      <div className="relative w-80 md:w-full aspect-video mx-auto  h-full max-h-150 rounded-xl overflow-hidden">
        <iframe
          width="100%"
          height="100%"
          src={youtubeSource}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full"
        />
      </div>
    );
  }

  // Otherwise, show thumbnail
  return (
    <div
      className="relative w-80 md:w-full aspect-video h-full max-h-150 mx-auto group overflow-hidden rounded-3xl"
    >
      <Image
        src={thumbnail}
        alt={alt}
        fill
        className="object-cover transition-transform duration-500 group-hover:scale-105 "
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/50 transition-all duration-300 flex items-center justify-center">
        {/* Play button */}
        <button
          type="button"
          onClick={() => {
            setIsPlaying(true);
            if (onClick) onClick();
          }}
          className="rounded-full p-4 group-hover:scale-110 transition-transform bg-purple-300 focus:outline-none"
          aria-label="Play video"
        >
          <Play className="text-white w-8 h-8 fill-white" />
        </button>
      </div>
    </div>
  );
};

export default VideoThumbnail;
