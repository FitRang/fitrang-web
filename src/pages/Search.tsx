import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function Search() {
  const users = [
    {
      id: 1,
      name: "Aarav Sharma",
      username: "aarav_sh",
      joinedAt: "Jan 2024",
      avatarUrl: "",
    },
    {
      id: 2,
      name: "Neha Verma",
      username: "neha.codes",
      joinedAt: "Mar 2023",
      avatarUrl: "",
    },
    {
      id: 3,
      name: "Rohan Mehta",
      username: "rohan_ml",
      joinedAt: "Aug 2022",
      avatarUrl: "",
    },
  ];

  return (
    <article className="p-8 w-full h-full">
      <section className="flex justify-between items-center mb-6">
        <h1 className="text-3xl font-bold text-black">Search Users</h1>

        <Input
          className="w-[400px]"
          type="text"
          placeholder="Search users by name or username"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="max-w-sm border-2 border-black">
            <CardHeader className="flex flex-row items-center gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="text-lg">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div>
                <CardTitle className="text-black">
                  {user.name}
                </CardTitle>

                <CardDescription className="text-rose-500">
                  @{user.username}
                </CardDescription>

                <p className="text-sm text-black/80">
                  Joined {user.joinedAt}
                </p>
              </div>
            </CardHeader>

            <CardFooter>
              <Button className="w-full cursor-pointer">
                View Profile
              </Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </article>
  );
}
