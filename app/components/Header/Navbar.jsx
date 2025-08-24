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
    <header className="py-2 relative z-50 md:block hidden undefined">
      <div className="container">
        {/* Flex wrapper - always horizontal, but wraps on small screens */}
        <div className="flex items-center justify-between">

          {/* Left side - Contact info */}
          <div className="hidden md:flex items-center gap-4">
            {/* Phone */}
            <div class="flex items-center gap-2 border-e border-e-gray-600 pe-4 text-gray-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 512 512" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M497.39 361.8l-112-48a24 24 0 0 0-28 6.9l-49.6 60.6A370.66 370.66 0 0 1 130.6 204.11l60.6-49.6a23.94 23.94 0 0 0 6.9-28l-48-112A24.16 24.16 0 0 0 122.6.61l-104 24A24 24 0 0 0 0 48c0 256.5 207.9 464 464 464a24 24 0 0 0 23.4-18.6l24-104a24.29 24.29 0 0 0-14.01-27.6z"></path></svg><p>+880181239633</p></div>

            {/* Divider */}
            <span className="text-gray-300 hidden xs:inline">|</span>

            {/* Email */}
            <div class="flex items-center gap-2 text-gray-600"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 24 24" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill="none" d="M0 0h24v24H0V0z"></path><path d="M22 6c0-1.1-.9-2-2-2H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6zm-2 0-8 5-8-5h16zm0 12H4V8l8 5 8-5v10z"></path></svg><p>info@doorsoft.co</p></div>
          </div>

          {/* Right side - Country + Auth */}
          <div className="flex flex-wrap items-center gap-3 sm:gap-6">
            {/* Country Selector */}
            <div className="flex items-center gap-2 cursor-pointer">
              <Globe className="w-4 h-4" />
              <Select defaultValue="turkey">
                <SelectTrigger className="w-[110px] sm:w-[120px] h-8 text-xs sm:text-sm">
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
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
            >
              <LogIn className="w-4 h-4" />
              <span>Login</span>
              <ChevronDown className="w-3 h-3" />
            </Link>

            {/* Register */}
            <Link
              href="/register"
              className="flex items-center gap-2 text-gray-600 hover:text-gray-800"
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
