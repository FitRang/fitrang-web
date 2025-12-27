import { DropdownMenu, DropdownMenuContent, DropdownMenuLabel, DropdownMenuSeparator, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { Bell } from 'lucide-react';

export default function NotficationDropdown() {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Bell className="w-6 h-6 cursor-pointer"/>
      </DropdownMenuTrigger>
      <DropdownMenuContent className='w-56'>
        <DropdownMenuLabel>Notifications</DropdownMenuLabel>
        <DropdownMenuSeparator/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
