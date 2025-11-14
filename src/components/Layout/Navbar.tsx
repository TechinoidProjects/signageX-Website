"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

interface NavItem {
  label: string;
  href: string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "Solutions", href: "/solutions" },
  { label: "Industries", href: "/industries" },
  { label: "Pricing", href: "/pricing" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-background-light shadow-sm">
      {/* Desktop Navbar */}
      <nav className="hidden md:flex h-16 container mx-auto items-center justify-between relative">
        {/* Left Links */}
        <div className="flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-[#1f2a37] hover:text-[#6f3ff5] transition-colors"
            >
              {item.label}
            </Link>
          ))}
        </div>

        {/* Center Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt="Logo"
              width={90}
              height={30}
              priority
            />
          </Link>
        </div>

        {/* Right Buttons */}
        <div className="flex items-center gap-3">
          <Button size="sm" 
            outline
            className="w-full flex items-center justify-center gap-3 border-purple-100! text-gray-500! border" 
            href="#">
            Login
          </Button>
          <Button size="sm" color="purple"  href="#">
            Sign Up
          </Button>
        </div>
      </nav>

      {/* Mobile Navbar */}
      <nav className="flex md:hidden items-center justify-between px-4 h-16 relative">
        {/* Logo */}
        <div>
          <Link href="/">
            <Image
              src="/logo-black.png"
              alt="Logo"
              width={80}
              height={28}
              priority
            />
          </Link>
        </div>

        {/* Hamburger Icon */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="p-2 rounded-md text-gray-700 hover:text-purple-600 transition-colors"
          aria-label="Toggle Menu"
        >
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Menu Drawer */}
        {menuOpen && (
          <div className="absolute top-16 left-0 w-full bg-white border-t border-gray-100 shadow-md flex flex-col gap-4 p-5 animate-slideDown">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setMenuOpen(false)}
                className="text-sm font-medium text-gray-700 hover:text-purple-600 transition-colors"
              >
                {item.label}
              </Link>
            ))}

            <div className="flex flex-col gap-3 mt-3">
              <Button size="sm" 
                outline
                className="w-full flex items-center justify-center gap-3 border-purple-100! text-gray-500! border" 
                href="#">
              Login
              </Button>
              <Button size="sm" color="purple"  href="#">
              Sign Up
              </Button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;

