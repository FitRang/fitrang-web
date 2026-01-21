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
    <article className="w-full h-full mx-auto p-4 sm:p-8 overflow-auto">
      <section className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h1 className="text-2xl sm:text-3xl font-bold text-black">Search Users</h1>
        <Input
          className="w-full sm:w-[400px]"
          type="text"
          placeholder="Search users by name or username"
        />
      </section>

      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {users.map((user) => (
          <Card key={user.id} className="w-full border-2 border-black">
            <CardHeader className="flex flex-col sm:flex-row items-center sm:items-start gap-4">
              <Avatar className="h-16 w-16">
                <AvatarImage src={user.avatarUrl} alt={user.name} />
                <AvatarFallback className="text-lg">
                  {user.name
                    .split(" ")
                    .map((n) => n[0])
                    .join("")}
                </AvatarFallback>
              </Avatar>

              <div className="text-center sm:text-left">
                <CardTitle className="text-black">{user.name}</CardTitle>
                <CardDescription className="text-rose-500">
                  @{user.username}
                </CardDescription>
                <p className="text-sm text-black/80">Joined {user.joinedAt}</p>
              </div>
            </CardHeader>

            <CardFooter>
              <Button className="w-full cursor-pointer">View Profile</Button>
            </CardFooter>
          </Card>
        ))}
      </section>
    </article>
  );
}

