"use client";

import { usePathname } from "next/navigation";

export default function MobileCTA() {
  const pathname = usePathname();
  if (pathname === "/availability") return null;

  return (
    <div className="fixed bottom-0 inset-x-0 z-50 md:hidden bg-white border-t">
      <a href="/availability" className="block text-center py-4 bg-black text-white font-semibold">
        Check Availability
      </a>
    </div>
  );
}
