"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // Close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setIsOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <nav className="p-1 bg-gray-50 text-black shadow-md fixed top-0 left-0 w-full z-50">
      <div className="container mx-auto flex justify-between items-center px-4 md:px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide py-2">
          MyApp
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-1">
          <Link href="/" className="px-3 hover:text-gray-900 font-medium transition">Home</Link>
          <Link href="/about" className="px-3 hover:text-gray-900 font-medium transition">About</Link>
          <Link href="/Login" className="px-3 hover:text-gray-900 font-medium transition">Login</Link>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <Button variant="ghost" className="text-black" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`absolute top-16 left-0 w-full bg-gray-50 shadow-md transition-all duration-300 ${isOpen ? "opacity-100 max-h-screen" : "opacity-0 max-h-0 overflow-hidden"}`}>
        <div className="flex flex-col items-start px-6 py-4 space-y-3">
          <Link href="/" className="text-lg py-2 w-full hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link href="/about" className="text-lg py-2 w-full hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link href="/Login" className="text-lg py-2 w-full hover:text-gray-900 transition" onClick={() => setIsOpen(false)}>Login</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
