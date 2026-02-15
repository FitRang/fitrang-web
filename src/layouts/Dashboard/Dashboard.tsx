import React, { useEffect } from "react";
import NavBar from "./components/NavBar";
import { Toaster } from "@/components/ui/sonner";
import { toast } from "sonner";
import { useNotificationStore } from "@/store/UnreadMessageCount";
import { initNotificationWS } from "./NotificationConnection";
import { useUserStore } from "@/store/UserStore";
import { getMyInitialData } from "@/services/GetInitialData";

interface DashboardLayoutProps {
  children: React.ReactNode;
}

export function DashboardLayout({ children }: DashboardLayoutProps) {
  const isLoaded = useUserStore((state) => state.isLoaded);
  const unreadCount = useUserStore((state) => state.count);

  const notifications = useNotificationStore(
    (state) => state.notifications
  );

  useEffect(() => {
    if (!notifications.length) return;

    const latest = notifications[0];
    useUserStore.getState().setCount(unreadCount + 1);
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
    return () => ws.disconnect();
  }, []);

  useEffect(() => {
    async function loadUser() {
      if (isLoaded) return;
      const data = await getMyInitialData();

      useUserStore.getState().setMyProfile(data.getMyProfile);
      useUserStore.getState().setMyDossier(data.getMyDossier);
      useUserStore.getState().setMessages(data.getMessages);
      useUserStore.getState().setCount(data.getMessages.length);
    }

    loadUser();
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
