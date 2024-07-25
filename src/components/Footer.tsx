import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#e3f2fd] py-4 border-t border-[#BCC6D0]">
      {" "}
      <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between">
        <p className="text-sm text-muted-foreground">
          &copy; 2024 MediAlert. All rights reserved.
        </p>
        <div className="flex items-center gap-4 mt-4 sm:mt-0">
          <Link
            href="#"
            className="text-muted-foreground hover:text-muted"
            prefetch={false}
          >
            Terms of Service
          </Link>
          <Link
            href="#"
            className="text-muted-foreground hover:text-muted"
            prefetch={false}
          >
            Privacy Policy
          </Link>
        </div>
      </div>
    </footer>
  );
}
