"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const linkClass = (path) =>
    pathname === path
      ? "text-black font-bold px-4 py-2 rounded-full border border-gray-300 bg-white shadow-md transition-all duration-200"
      : "text-gray-600 hover:text-blue-600 px-4 py-2 rounded-full transition-all duration-200";

  return (
    <html lang="en">
      <body className="bg-gray-100 font-sans">
        {/* Header */}
        <header className="bg-white shadow-md px-6 py-4">
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
            <h1 className="text-2xl font-bold text-gray-800 mb-2 md:mb-0">
              🌟 Vishal's Website
            </h1>

            {/* Navbar */}
            <nav className="flex gap-4">
              <Link href="/home" className={linkClass("/home")}>
                Home
              </Link>
              <Link href="/about" className={linkClass("/about")}>
                About
              </Link>
              <Link href="/myinfo" className={linkClass("/myinfo")}>
                MyInfo
              </Link>
            </nav>
          </div>
        </header>

        {/* Main Content */}
        <main className="max-w-7xl mx-auto p-6">{children}</main>

        {/* Footer */}
        <footer className="bg-white shadow-inner px-6 py-4 text-center text-gray-500 text-sm">
          © 2025 Vishal. All rights reserved.
        </footer>
      </body>
    </html>
  );
}
