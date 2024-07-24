"use client";

import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <main className="flex-1">
      <section
        className="bg-[#e3f2fd] py-12 sm:py-20 text-muted-foreground" // Updated background color
      >
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <h1 className="text-3xl font-bold tracking-tight sm:text-4xl lg:text-5xl">
                Revolutionize Patient Care with MediAlert
              </h1>
              <p className="text-base sm:text-lg">
                Empower your healthcare practice with our cutting-edge medical
                software platform, designed to streamline patient management and
                enhance clinical documentation.
              </p>
              <div className="flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/get-started"
                  className="inline-flex h-11 items-center justify-center rounded-xl bg-gray-800/90 px-4 text-sm font-medium text-white shadow-sm transition-colors hover:bg-gray-700/90"
                  style={{ width: "160px" }} // Match Navbar button width
                >
                  Get Started
                </Link>
                <Link
                  href="/learn-more"
                  className="inline-flex h-11 items-center justify-center rounded-xl border-2 border-black bg-[#bbdefb] text-black shadow-sm transition-colors hover:bg-[#a0c4ff]"
                  style={{ width: "160px" }} // Match Navbar button width
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="flex items-center justify-center relative">
              <Link href="#" className="absolute inset-0 z-10" prefetch={false}>
                <span className="sr-only">View</span>
              </Link>
              <img
                src="/Main App Feature.png"
                width="600"
                height="600"
                alt="MediAlert"
                className="rounded-lg shadow-lg transition-all hover:scale-105 cursor-pointer"
                style={{ filter: "brightness(1.2)" }} // Adjust the brightness value as needed
              />
            </div>
          </div>
        </div>
      </section>
      <section className="py-12 sm:py-20 bg-[#e3f2fd]">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 animate-fade-in">
            <div className="rounded-lg bg-[#e3f2fd] p-6 shadow-sm border-2 border-black transition-all hover:bg-[#bbdefb]/80 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4">
                <UserIcon className="h-8 w-8 text-muted-foreground bg-muted-foreground/20 p-2 rounded-full" />
                <h2 className="text-2xl font-bold text-muted-foreground">
                  Patient Management
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Streamline your patient management with our intuitive interface
                and powerful tools. Easily track appointments, medical history,
                and more.
              </p>
              <div className="mt-4">
                <Link
                  href="/patient-management"
                  className="inline-flex h-9 items-center justify-center rounded-xl border-2 border-black bg-[#bbdefb] text-black shadow-sm transition-colors hover:bg-[#a0c4ff] text-sm py-2 px-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-[#e3f2fd] p-6 shadow-sm border-2 border-black transition-all hover:bg-[#bbdefb]/80 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4">
                <MicIcon className="h-8 w-8 text-muted-foreground" />
                <h2 className="text-2xl font-bold text-muted-foreground">
                  AI-Powered Transcription
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Streamline your clinical documentation with our AI-powered
                transcription service. Easily convert audio recordings into
                accurate text.
              </p>
              <div className="mt-4">
                <Link
                  href="/ai-transcription"
                  className="inline-flex h-9 items-center justify-center rounded-xl border-2 border-black bg-[#bbdefb] text-black shadow-sm transition-colors hover:bg-[#a0c4ff] text-sm py-2 px-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
            <div className="rounded-lg bg-[#e3f2fd] p-6 shadow-sm border-2 border-black transition-all hover:bg-[#bbdefb]/80 hover:scale-105 cursor-pointer">
              <div className="flex items-center gap-4">
                <FilePenIcon className="h-8 w-8 text-muted-foreground" />
                <h2 className="text-2xl font-bold text-muted-foreground">
                  Interactive Prompting
                </h2>
              </div>
              <p className="mt-4 text-muted-foreground">
                Enhance your clinical documentation with our interactive
                prompting feature. Easily add structured data and streamline
                your workflow.
              </p>
              <div className="mt-4">
                <Link
                  href="/interactive-prompting"
                  className="inline-flex h-9 items-center justify-center rounded-xl border-2 border-black bg-[#bbdefb] text-black shadow-sm transition-colors hover:bg-[#a0c4ff] text-sm py-2 px-4"
                >
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

function FilePenIcon(props) {
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
      <path d="M12 22h6a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v10" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
      <path d="M10.4 12.6a2 2 0 1 1 3 3L8 21l-4 1 1-4Z" />
    </svg>
  );
}

function MicIcon(props) {
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
      <path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
      <path d="M19 10v2a7 7 0 0 1-14 0v-2" />
      <line x1="12" x2="12" y1="19" y2="22" />
    </svg>
  );
}

function UserIcon(props) {
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
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  );
}

function XIcon(props) {
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
      <line x1="18" x2="6" y1="6" y2="18" />
      <line x1="6" x2="18" y1="6" y2="18" />
    </svg>
  );
}
