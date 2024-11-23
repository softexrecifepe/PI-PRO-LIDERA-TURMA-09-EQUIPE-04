"use client";

import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { UserProvider } from "@/contexts/UserContext";
import { TestProvider } from '@/contexts/TestContext';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    storage.setItem("prevPath", pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className="antialiased">
        <TestProvider>
          <UserProvider>
            <AnimatePresence>{children}</AnimatePresence>
          </UserProvider>
        </TestProvider>
      </body>
    </html>
  );
}
