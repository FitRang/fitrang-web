import React from "react";
import NavBar from "./components/NavBar";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <>
      <NavBar />
      <article
        className="
          h-screen
          flex items-center justify-center
          relative
          bg-[linear-gradient(to_right,#0003_1px,transparent_1px),linear-gradient(to_bottom,#0003_1px,transparent_1px)]
          bg-[size:80px_80px]
        "
      >
        {children}
      </article>
    </>
  );
}
