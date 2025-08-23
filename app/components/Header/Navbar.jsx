"use client"

import { Mail, Phone, Globe, LogIn, UserPlus, ChevronDown } from "lucide-react"
import Link from "next/link"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Navbar = () => {
  return (
    <header className="w-full bg-white border-b border-gray-200">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 text-sm text-gray-600">

          {/* Left side - Contact info */}
          <div className="flex items-center gap-4">
            {/* Phone */}
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>+880181239633</span>
            </div>

            {/* Divider */}
            <span className="text-gray-300">|</span>

            {/* Email */}
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@doorsoft.co</span>
            </div>
          </div>

          {/* Right side - Country + Auth */}
          <div className="flex items-center gap-6">

            {/* Country Selector (Globe + Flag + Name) */}
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe className="w-4 h-4" />
               {/* Country Selector */}
            <Select defaultValue="turkey">
              <SelectTrigger className="w-[120px]">
                <SelectValue placeholder="Select country" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="turkey">
                  <div className="flex items-center gap-2">
                    <img src="/images/flag/turkey.png" alt="Turkey Flag" className="rounded-sm w-5" />
                    <span>Turkey</span>
                  </div>
                </SelectItem>
                <SelectItem value="england">
                  <div className="flex items-center gap-2">
                    <img src="/images/flag/england.png" alt="England Flag" className="rounded-sm w-5" />
                    <span>English</span>
                  </div>
                </SelectItem>
                <SelectItem value="france">
                  <div className="flex items-center gap-2">
                    <img src="/images/flag/saudi.png" alt="Saudi Flag" className="rounded-sm w-5" />
                    <span>Arabic</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>
            </div>

            {/* Login with dropdown */}
            <Link
              href="/login"
              className="flex items-center gap-1 hover:text-gray-800 transition-colors"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
              <ChevronDown className="w-3 h-3" />
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className="flex items-center gap-1 hover:text-gray-800 transition-colors"
            >
              <UserPlus className="w-4 h-4" />
              <span>Register</span>
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}

export default Navbar
