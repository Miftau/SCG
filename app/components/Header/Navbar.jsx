"use client";

import { useState, useEffect } from "react";
import { Mail, Phone, Globe, LogIn, UserPlus, ChevronDown, Menu, X } from "lucide-react";
import Link from "next/link";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useTranslator } from "@/app/context/TranslatorContext"; // ✅ use context

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { lang, translatePage } = useTranslator(); // ✅ take from provider

  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

  const languages = [
    { value: "en", label: "English", flag: "/images/flag/England.png" },
    { value: "tr", label: "Türkçe", flag: "/images/flag/turkey.png" },
    { value: "ar", label: "العربية", flag: "/images/flag/saudi.png" },
    { value: "it", label: "Italia", flag: "/images/flag/italy.png" },
    { value: "de", label: "Deutsch", flag: "/images/flag/Germen.png" },
    { value: "es", label: "Español", flag: "/images/flag/spain.png" },
  ];

  return (
    <header className="py-2 relative z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Left side */}
        <div className="hidden lg:flex items-center gap-4">
          <div className="flex items-center gap-2 border-r border-gray-200 pr-4 text-gray-600">
            <Phone className="w-4 h-4" />
            <p className="text-sm">+880181239633</p>
          </div>
          <span className="text-gray-300">|</span>
          <div className="flex items-center gap-2 text-gray-600">
            <Mail className="w-4 h-4" />
            <p className="text-sm">info@doorsoft.co</p>
          </div>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="lg:hidden text-gray-600 focus:outline-none"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>

        {/* Right side */}
        <div className="hidden lg:flex items-center gap-6">
          {/* Language Selector */}
          <div className="flex items-center gap-2 cursor-pointer">
            <Globe className="w-4 h-4" />
            <Select value={lang} onValueChange={translatePage}>
              <SelectTrigger className="w-[140px] h-8 text-sm border-gray-200">
                <SelectValue placeholder="Select Language" />
              </SelectTrigger>
              <SelectContent>
                {languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    <div className="flex items-center gap-2">
                      <img
                        src={language.flag}
                        alt={language.label}
                        className="rounded-sm w-5"
                      />
                      <span>{language.label}</span>
                    </div>
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {/* Login & Register */}
          <Link
            href="/login"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <LogIn className="w-4 h-4" />
            <span className="text-sm">Login</span>
            <ChevronDown className="w-3 h-3" />
          </Link>
          <Link
            href="/register"
            className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
          >
            <UserPlus className="w-4 h-4" />
            <span className="text-sm">Register</span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
