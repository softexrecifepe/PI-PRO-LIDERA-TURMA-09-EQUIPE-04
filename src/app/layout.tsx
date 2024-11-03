"use client";

import "./globals.css";
import { AnimatePresence } from "framer-motion";
import { useEffect } from "react";
import { usePathname } from "next/navigation";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();

  useEffect(() => {
    const storage = globalThis?.sessionStorage;
    if (!storage) return;

    // Salva o caminho atual antes da mudança de rota
    storage.setItem("prevPath", pathname);
  }, [pathname]);

  return (
    <html lang="en">
      <body className={"antialiased"}>
        <AnimatePresence>
          {children}
        </AnimatePresence>
      </body>
    </html>
  );
}
