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
  useEffect(() => {
    const loadSVG = async () => {
      const response = await fetch("/assets/background.svg");
      const svg = await response.text();
      document.getElementById("svg-container")!.innerHTML = svg;
    };

    loadSVG();
  }, []);

  return (
    <html lang="en">
      <body className="antialiased">
        <TestProvider>
          <UserProvider>
            <AnimatePresence>
              <div id="svg-container"></div>
              {children}
              </AnimatePresence>
          </UserProvider>
        </TestProvider>
      </body>
    </html>
  );
}
