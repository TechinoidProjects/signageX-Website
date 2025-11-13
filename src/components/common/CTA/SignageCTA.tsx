import React from "react";
import { Dice1, Dice2 } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Heading } from "../MainHeading";

const SignageHero = () => {
  return (
    <section className="relative w-full overflow-hidden rounded-3xl bg-dark-gradient px-6 py-16 md:px-10 md:py-24 flex items-center justify-center text-center text-white">
      {/* Background Dice Icons */}
      <Dice1
        className="absolute left-50 top-30 h-25 w-25 md:h-45 md:w-45 text-white/10 rotate-10"
        strokeWidth={2.5}
      />
      <Dice2
        className="absolute left-[-50] bottom-0 h-36 w-36 md:h-65 md:w-65 text-white/10 rotate-55"
        strokeWidth={2}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center gap-6 max-w-2xl">
        {/* Logo */}
        <div className="flex justify-center">
          <Image
            src="/logo-light.svg"
            alt="Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </div>

<Heading
  title="You Are Ready for AI Signage"
  subtitle=" Don’t replace your hardware. Upgrade it with signageX."
  size="md"
  titleColorClass="text-white"
  subtitleColorClass="text-white/90"
  />
       
        {/* CTA Button */}
        <Link
          href="#"
          className="mt-4 inline-block rounded-lg bg-white transition-all text-neutral-500 font-medium px-6 py-3 text-sm md:text-base"
        >
          Start Free Trial - No Card Needed
        </Link>
      </div>
    </section>
  );
};

export default SignageHero;
