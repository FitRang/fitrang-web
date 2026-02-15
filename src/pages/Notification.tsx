import { useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import getUnreadMessages from "@/services/GetUnreadMessages";
import { useUserStore } from "@/store/UserStore";

export default function NotificationsPage() {

  const messages = useUserStore((state) => state.messages);
  const count = useUserStore((state) => state.count);

  const setMessages = useUserStore((state) => state.setMessages);
  const setCount = useUserStore((state) => state.setCount);

  useEffect(() => {

    async function syncUnreadMessages() {

      const currentLength = messages?.length ?? 0;

      if (count <= currentLength) return;

      try {

        const response = await getUnreadMessages();

        const unreadMessages = response.getUnreadMessages;

        setMessages(unreadMessages);

        setCount(unreadMessages.length);

      } catch (error) {
        console.error("Failed to fetch unread messages:", error);
      }
    }

    syncUnreadMessages();

  }, []);

  if (!messages || messages.length === 0) {
    return (
      <section className="w-full max-w-4xl p-6">
        <Card className="p-10 text-center text-muted-foreground">
          You have no notifications
        </Card>
      </section>
    );
  }

  return (
    <section className="w-full max-w-4xl p-6 space-y-8">

      <header className="mt-7">
        <h1 className="text-3xl font-semibold tracking-tight">
          Notifications
        </h1>

        <p className="text-muted-foreground">
          Stay up to date with important updates and activity
        </p>
      </header>

      <Card className="divide-y">
        {messages.map((notification) => (
          <article
            key={notification.id}
            className={`p-6 flex flex-col gap-2 ${notification.isRead
              ? "bg-background"
              : "bg-muted/40"
              }`}
          >

            <section className="flex items-start justify-between gap-4">

              <section className="space-y-1">

                <h2 className="font-medium leading-none">
                  {notification.sender}
                </h2>

                <p className="text-sm text-muted-foreground">
                  {notification.message}
                </p>

              </section>

              {!notification.isRead && (
                <span className="h-2 w-2 rounded-full bg-red-500 mt-1" />
              )}

            </section>

            <footer className="flex items-center justify-between pt-2">
              <time className="text-xs text-muted-foreground">
                {notification.createdAt}
              </time>
              <Button size="sm">
                Mark as read
              </Button>
            </footer>
          </article>
        ))}
      </Card>
    </section>
  );
}
