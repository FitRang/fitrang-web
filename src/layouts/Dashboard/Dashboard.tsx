import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useNotificationStore } from "@/store/UnreadMessageCount";
import { initNotificationWS } from "./NotificationConnection";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {

  const notifications = useNotificationStore(
    (state) => state.notifications
  );

  useEffect(() => {
    if (!notifications.length) return;

    const latest = notifications[0];

    toast(
      `${latest.sender.username}`,
      {
        description: (
          <span className="text-black">
            {latest.message}
          </span>
        ),
      }
    );

  }, [notifications]);

  useEffect(() => {
    const ws = initNotificationWS();
    return () => ws.close();
  }, []);

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
