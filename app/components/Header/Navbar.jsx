"use client"

import { useState } from "react"
import { Mail, Phone, Globe, LogIn, UserPlus, ChevronDown, Menu, X } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen)
  }

  return (
    <header className="py-2 relative z-50 bg-white shadow-sm">
      <div className="container mx-auto px-4">
        {/* Flex wrapper for navbar content */}
        <div className="flex items-center justify-between">
          {/* Left side - Contact info (hidden on mobile) */}
          <div className="hidden lg:flex items-center gap-4">
            {/* Phone */}
            <div className="flex items-center gap-2 border-r border-gray-200 pr-4 text-gray-600">
              <Phone className="w-4 h-4" />
              <p className="text-sm">+880181239633</p>
            </div>

            {/* Divider */}
            <span className="text-gray-300">|</span>

            {/* Email */}
            <div className="flex items-center gap-2 text-gray-600">
              <Mail className="w-4 h-4" />
              <p className="text-sm">info@doorsoft.co</p>
            </div>
          </div>

          {/* Mobile menu button (visible on mobile) */}
          <button
            className="lg:hidden text-gray-600 focus:outline-none"
            onClick={toggleMobileMenu}
            aria-label="Toggle mobile menu"
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>

          {/* Right side - Country + Auth (desktop) */}
          <div className="hidden lg:flex items-center gap-6">
            {/* Country Selector */}
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe className="w-4 h-4" />
              <Select defaultValue="turkey">
                <SelectTrigger className="w-[120px] h-8 text-sm border-gray-200">
                  <SelectValue placeholder="Select Language" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="turkey">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/flag/turkey.png"
                        alt="Turkey Flag"
                        className="rounded-sm w-5"
                      />
                      <span>Turkey</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="england">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/flag/england.png"
                        alt="England Flag"
                        className="rounded-sm w-5"
                      />
                      <span>English</span>
                    </div>
                  </SelectItem>
                  <SelectItem value="france">
                    <div className="flex items-center gap-2">
                      <img
                        src="/images/flag/saudi.png"
                        alt="Saudi Flag"
                        className="rounded-sm w-5"
                      />
                      <span>Arabic</span>
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Login */}
            <Link
              href="/login"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span className="text-sm">Login</span>
              <ChevronDown className="w-3 h-3" />
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span className="text-sm">Register</span>
            </Link>
          </div>
        </div>

        {/* Mobile menu (visible when toggled) */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4">
            <div className="flex flex-col gap-4">
              {/* Contact info for mobile */}
              <div className="flex flex-col gap-2 border-t border-gray-200 pt-4">
                <div className="flex items-center gap-2 text-gray-600">
                  <Phone className="w-4 h-4" />
                  <p className="text-sm">+880181239633</p>
                </div>
                <div className="flex items-center gap-2 text-gray-600">
                  <Mail className="w-4 h-4" />
                  <p className="text-sm">info@doorsoft.co</p>
                </div>
              </div>

              {/* Country Selector */}
              <div className="flex items-center gap-2 cursor-pointer">
                <Globe className="w-4 h-4" />
                <Select defaultValue="turkey">
                  <SelectTrigger className="w-full h-10 text-sm border-gray-200">
                    <SelectValue placeholder="Select Language" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="turkey">
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/flag/turkey.png"
                          alt="Turkey Flag"
                          className="rounded-sm w-5"
                        />
                        <span>Turkey</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="england">
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/flag/england.png"
                          alt="England Flag"
                          className="rounded-sm w-5"
                        />
                        <span>English</span>
                      </div>
                    </SelectItem>
                    <SelectItem value="france">
                      <div className="flex items-center gap-2">
                        <img
                          src="/images/flag/saudi.png"
                          alt="Saudi Flag"
                          className="rounded-sm w-5"
                        />
                        <span>Arabic</span>
                      </div>
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Login */}
              <Link
                href="/login"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <LogIn className="w-4 h-4" />
                <span className="text-sm">Login</span>
                <ChevronDown className="w-3 h-3" />
              </Link>

              {/* Register */}
              <Link
                href="/register"
                className="flex items-center gap-2 text-gray-600 hover:text-gray-800 transition-colors"
              >
                <UserPlus className="w-4 h-4" />
                <span className="text-sm">Register</span>
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar