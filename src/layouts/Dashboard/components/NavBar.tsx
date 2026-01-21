import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { Bell, Menu } from "lucide-react";
import Logo from "@/assets/logo.png";
// import ProfileDropdown from "./ProfileDropdown";
import { Button } from "@/components/ui/button";
import { useRouter } from "@/routes/hooks/use-router";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  const router = useRouter();

  const handleAuth = async () => {
    router.push("/auth")
  };

  const navItems = [
    { label: "Home", to: "/" },
    { label: "Search", to: "/search" },
    { label: "Dossier", to: "/dossier" },
  ];

  return (
    <header className="w-full dark:bg-black border-b-4 border-black">
      <nav className="px-6 py-4 flex items-center justify-between" aria-label="Main navigation">

        <section className="flex items-center gap-8">
          <Link to="/" className="flex items-center gap-3">
            <img
              src={Logo}
              alt="FitRang logo"
              className="w-10 h-10 object-contain"
            />
            <span className="font-bold text-xl tracking-tight">FitRang</span>
          </Link>

          <ul className="hidden md:flex items-center gap-6">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-4 py-2 border-4 ${isActive
                      ? "border-black bg-rose-400"
                      : "border-transparent hover:border-black"
                    } font-semibold`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </section>

        <section className="hidden md:flex items-center gap-12 ml-auto mr-10">
          <Link to="/notifications" className="flex items-center gap-3">
            <Bell className="cursor-pointer" />
          </Link>
          {/* <ProfileDropdown /> */}
          <Button
            onClick={handleAuth}
          >LogIn/SignUp</Button>
        </section>

        <button
          className="md:hidden border-4 border-black p-2"
          aria-label="Toggle mobile menu"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Menu />
        </button>
      </nav>

      {open && (
        <section
          className="md:hidden bg-white dark:bg-black border-t-4 border-black px-6 py-4 flex flex-col gap-4"
          aria-label="Mobile navigation"
        >
          <ul className="flex flex-col gap-4">
            {navItems.map((item) => (
              <li key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block px-4 py-2 border-4 ${isActive
                      ? "border-black bg-rose-400"
                      : "border-transparent hover:border-black"
                    } font-semibold`
                  }
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>

          <section className="flex items-center gap-4 pt-2">
            <Link to="/notifications" className="flex items-center gap-3">
              <Bell className="cursor-pointer" />
            </Link>
            {/* <ProfileDropdown/> */}
            <Button
              onClick={handleAuth}
            >LogIn/SignUp</Button>
          </section>
        </section>
      )}
    </header>
  );
}
