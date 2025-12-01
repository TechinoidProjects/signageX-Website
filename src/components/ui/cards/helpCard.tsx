
import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

interface HelpCardProps {
  title?: string;
  avatars: string[];
  membersCount?: string;
  link: string;
  logoSrc?: string;
}

export default function HelpCard({
  title = "Join Our Help",
  avatars,
  membersCount = "+10k",
  link,
  logoSrc ="/images/Discord.png",
}: HelpCardProps) {
  return (
    <Link
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className="block w-full max-w-xl mx-auto bg-background-light rounded-2xl p-6 relative transition hover:shadow-lg"
    >
      <div className="absolute top-4 right-4 bg-white rounded-full p-1 shadow-sm">
        <ArrowUpRight size={18} />
      </div>

      <div className="flex justify-center">
        <Image
          src={logoSrc}
          alt="Discord Logo"
          width={48}
          height={48}
        />
      </div>

      <h2 className="text-center text-lg font-semibold mt-3">{title}</h2>

      <div className="flex justify-center mt-4 shrink-0">
        {avatars.slice(0, 4).map((avatar, index) => (
          <div
            key={index}
            className={`w-10 h-10 rounded-full overflow-hidden border-2 border-white ${
              index !== 0 ? "-ml-3" : ""
            }`}
          >
            <Image
              src={avatar}
              alt={`Avatar ${index + 1}`}
              width={40}
              height={40}
              className="object-cover"
            />
          </div>
        ))}

        <div className="-ml-3 w-10 h-10 rounded-full bg-[#A78BFA] text-xs flex items-center justify-center text-white font-semibold">
          {membersCount}
        </div>
      </div>

    </Link>
  );
}
