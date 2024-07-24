"use client";

import React from "react";
import Link from "next/link";

const Navbar: React.FC = () => {
  return (
    <header
      className="sticky top-0 z-40 w-full border-b border-[#BCC6D0]" // Darker border color
      style={{ backgroundColor: "#e3f2fd" }} // Updated background color
    >
      <div className="container mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2" prefetch={false}>
          <HeartPulseIcon className="h-6 w-6 text-foreground" />
          <span className="text-foreground">MediAlert</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link
            href="/signin"
            className="inline-flex h-9 items-center justify-center rounded-xl border border-primary/30 bg-background px-4 text-sm font-medium text-foreground shadow-sm transition-colors hover:bg-muted"
            prefetch={false}
          >
            Sign In
          </Link>
          <Link
            href="/start"
            className="inline-flex h-9 items-center justify-center rounded-xl bg-gray-800/90 px-4 text-sm font-medium text-white shadow transition-colors hover:bg-gray-700/90"
            prefetch={false}
          >
            Get Started
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

function HeartPulseIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
      <path d="M3.22 12H9.5l.5-1 2 4.5 2-7 1.5 3.5h5.27" />
    </svg>
  );
}
