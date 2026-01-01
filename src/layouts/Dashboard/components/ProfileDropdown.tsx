import {
  LogOut,
  UserPen,
} from "lucide-react"

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import User from "@/assets/user.png";
import { useRouter } from "@/routes/hooks/use-pathname";

export default function DropdownMenuDemo() {
  const router = useRouter()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Avatar>
          <AvatarImage src={User} alt="@shadcn" className="cursor-pointer"/>
          <AvatarFallback>User Profile</AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          <DropdownMenuItem
            className="cursor-pointer"
            onClick={() => {router.push("/profile")}}
            >
            <UserPen />
            <span>Profile</span>
          </DropdownMenuItem>
        <DropdownMenuItem className="cursor-pointer">
          <LogOut />
          <span>Log out</span>
        </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
