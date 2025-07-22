"use client";

import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { ArrowRightCircle, Menu, X } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const Links = [
    {
      name: "Demos",
      href: "/demos",
    },
    {
      name: "Hosting",
      href: "/hosting",
    },
    {
      name: "ProHosting",
      href: "/prohosting",
    },
    {
      name: "Domains",
      href: "/domains",
    },
    {
      name: "Need Help?",
      href: "/needhelp",
    },
    {
      name: "Pages",
      href: "/pages",
    },
    {
      name: "Contact Us",
      href: "/contact",
    },
  ];

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 h-16 z-50 relative" >
      <div className="max-w-7xl mx-auto">
        {/* Desktop Navbar */}
        <div className="flex justify-between items-center px-5 py-4">
          {/* Left Section */}
          <div className="flex items-center gap-x-6">
            <h1 className="font-semibold text-2xl text-gray-900">Logo</h1>
            <div className="hidden md:flex items-center gap-x-2">
              <Label
                htmlFor="en"
                className="text-sm text-gray-600 cursor-pointer"
              >
                EN
              </Label>
              <Checkbox id="en" className="w-4 h-4" defaultChecked />
            </div>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-x-6">
            {Links.map((link) => (
              <Link
                href={link.href}
                key={link.name}
                className="font-medium text-sm text-gray-700 hover:text-gray-900 transition-colors duration-200"
              >
                {link.name}
              </Link>
            ))}
            <Button className="bg-[#2B1F51] hover:bg-[#1f1639] text-white font-medium px-4 py-2 rounded-md transition-colors duration-200 flex items-center gap-x-2">
              Client login
              <ArrowRightCircle className="w-4 h-4" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="p-2 rounded-md text-gray-700 hover:text-gray-900 hover:bg-gray-100 transition-colors duration-200"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden transition-all  duration-300 ease-in-out relative z-50 ${
            isMenuOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
          } overflow-hidden bg-white border-t border-gray-200`}
        >
          <div className="px-5 py-4 space-y-4">
            {/* Language Toggle for Mobile */}
            <div className="flex items-center gap-x-2 pb-2 border-b border-gray-100">
              <Label
                htmlFor="en-mobile"
                className="text-sm text-gray-600 cursor-pointer"
              >
                EN
              </Label>
              <Checkbox id="en-mobile" className="w-4 h-4" defaultChecked />
            </div>

            {/* Mobile Navigation Links */}
            <div className="space-y-3">
              {Links.map((link) => (
                <Link
                  href={link.href}
                  key={link.name}
                  className="block font-medium text-base text-gray-700 hover:text-gray-900 transition-colors duration-200 py-1"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Client Login Button */}
            <div className="pt-3 border-t border-gray-100">
              <Button className="w-full bg-[#2B1F51] hover:bg-[#1f1639] text-white font-medium px-4 py-3 rounded-md transition-colors duration-200 flex items-center justify-center gap-x-2">
                Client login
                <ArrowRightCircle className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
