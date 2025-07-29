"use client"

import { Mail, Phone } from "lucide-react"
import Link from "next/link"

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"

const Navbar = () => {

  return (

    <header className="w-full bg-gray-50 border-b border-gray-200" >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-12 text-sm">

          {/* Right side - Contact info */}
          <div className="flex items-center gap-6 text-gray-600">
            <div className="flex items-center gap-2">
              <Mail className="w-4 h-4" />
              <span>info@doorsoft.co</span>
            </div>
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>880181239633+</span>
            </div>
          </div>


          {/* Left side - Country selector */}
          <div className="flex items-center gap-12">
            <div className="flex items-center gap-6">
              <Link href="/subscribe" className="text-gray-600 hover:text-gray-800 transition-colors">
                الإشتراك
              </Link>
              <Link href="/login" className="text-gray-600 hover:text-gray-800 transition-colors">
                الدخول
              </Link>
            </div>
            <Select defaultValue="arabic">
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="اختر اللغة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="arabic">
                  <div className="flex items-center gap-2">
                    <img src="/images/flag/saudi.png" alt="Saudi Arabia Flag" className="rounded-sm w-6" />
                    <span>العربية</span>
                  </div>
                </SelectItem>
                <SelectItem value="english">
                  <div className="flex items-center gap-2">
                    <img src="/images/flag/England.png" alt="English Flag" className="rounded-sm w-6" />
                    <span>English</span>
                  </div>
                </SelectItem>
                <SelectItem value="french">
                  <div className="flex items-center gap-2">
                    <img src="/images/flag/turkey.png" alt="French Flag" className="rounded-sm w-6" />
                    <span>Français</span>
                  </div>
                </SelectItem>
              </SelectContent>
            </Select>

          </div>


        </div>
      </div>
    </header>
  );
};

export default Navbar;
