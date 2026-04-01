import React from 'react'
import logo from "/public/logo.webp";

import { FaFacebookF, FaInstagram, FaTiktok } from "react-icons/fa";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 via-neutral-800 to-black text-white">
      
      <img
        src={logo}
        alt="logo"
        className="w-32 h-full mb-4"
      />

      <h1 className="text-2xl font-bold mb-6">Our Social Media</h1>

      <div className="flex flex-col gap-4 w-64">

        <a 
          href="https://tiktok.com" 
          target="_blank" 
          className="flex items-center justify-center gap-3 bg-black py-3 rounded-lg hover:scale-105 transition"
        >
          <FaTiktok size={20} />
          TikTok
        </a>

        <a 
          href="https://www.facebook.com/profile.php?id=61578198429753" 
          target="_blank" 
          className="flex items-center justify-center gap-3 bg-blue-600 py-3 rounded-lg hover:scale-105 transition"
        >
          <FaFacebookF size={20} />
          Facebook
        </a>

        <a 
          href="https://www.instagram.com/traffic360_digitalhub?igsh=eXBocmVpMzZreHpu" 
          target="_blank" 
          className="flex items-center justify-center gap-3 bg-gradient-to-r from-pink-600 to-yellow-500 py-3 rounded-lg hover:scale-105 transition"
        >
          <FaInstagram size={20} />
          Instagram
        </a>

      </div>
    </div>
  );
}