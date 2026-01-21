import React, { useEffect, useState } from "react";
import NavBar from "./components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

interface Notification {
  id: string;
  title: string;
  description?: string;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const [notifications, setNotifications] = useState<Notification[]>([]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setNotifications((prev) => [
        ...prev,
        {
          id: crypto.randomUUID(),
          title: "New notification",
          description: "This is a test notification",
        },
      ]);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    if (!notifications.length) return;

    toast("Event has been created", {
      description: "Sunday, December 03, 2023 at 9:00 AM",
      action: {
        label: "Undo",
        onClick: () => console.log("Undo"),
      },
    })
  }, [notifications]);

  return (
    <>
      <NavBar />
      <Toaster position="top-right" />
      <article
        className="
        h-screen
        flex flex-col
        items-center
        md:items-center md:justify-center
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
