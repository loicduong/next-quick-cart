"use client";

import Image from "next/image"
import { useRouter } from "next/navigation";
import logoIcon from "@/assets/icons/logo.svg";
import Link from "next/link"
import { useState } from "react";
import searchIcon from "@/assets/icons/search.svg";
import userIcon from "@/assets/icons/user.svg";

export default function Navbar() {
  const router = useRouter()

  const [isSeller] = useState(true)

  return (
    <nav className="flex items-center justify-between px-6 md:px-16 lg:px-32 py-3 border-b border-gray-300 text-gray-700">
      <Image className="cursor-pointer w-28 md:w-32" onClick={() => router.push('/')} src={logoIcon} alt="logo" />

      <div className="flex items-center gap-4 lg:gap-8 max-md:hidden">
        <Link href="/" className="hover:text-gray-900 transition">
          Home
        </Link>

        <Link href="/all-products" className="hover:text-gray-900 transition">
          Shop
        </Link>

        <Link href="/" className="hover:text-gray-900 transition">
          About Us
        </Link>

        <Link href="/" className="hover:text-gray-900 transition">
          Contact
        </Link>

        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">
          Seller Dashboard
        </button>}
      </div>

      <ul className="hidden md:flex items-center gap-4 ">
        <Image className="w-4 h-4" src={searchIcon} alt="search icon" />

        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={userIcon} alt="user icon" />

          Account
        </button>
      </ul>

      <div className="flex items-center md:hidden gap-3">
        {isSeller && <button onClick={() => router.push('/seller')} className="text-xs border px-4 py-1.5 rounded-full">
          Seller Dashboard
        </button>}

        <button className="flex items-center gap-2 hover:text-gray-900 transition">
          <Image src={userIcon} alt="user icon" />

          Account
        </button>
      </div>
    </nav>
  )
}