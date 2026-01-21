import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

interface Notification {
  id: string;
  title: string;
  description?: string;
  createdAt: string;
  read: boolean;
}

const notifications: Notification[] = [
  {
    id: "1",
    title: "Event has been created",
    description: "Sunday, December 03, 2023 at 9:00 AM",
    createdAt: "2 minutes ago",
    read: false,
  },
  {
    id: "2",
    title: "Profile updated",
    description: "Your profile information was saved successfully",
    createdAt: "1 day ago",
    read: true,
  },
  {
    id: "3",
    title: "New login detected",
    description: "A new login was detected from Chrome on Linux",
    createdAt: "3 days ago",
    read: true,
  },
];

export default function NotificationsPage() {
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
        {notifications.length === 0 && (
          <section className="p-10 text-center text-muted-foreground">
            You have no notifications
          </section>
        )}

        {notifications.map((notification) => (
          <article
            key={notification.id}
            className={`p-6 flex flex-col gap-2 ${notification.read ? "bg-background" : "bg-muted/40"
              }`}
          >
            <section className="flex items-start justify-between gap-4">
              <section className="space-y-1">
                <h2 className="font-medium leading-none">
                  {notification.title}
                </h2>
                {notification.description && (
                  <p className="text-sm text-muted-foreground">
                    {notification.description}
                  </p>
                )}
              </section>

              {!notification.read && (
                <span className="h-2 w-2 rounded-full bg-primary mt-1" />
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
