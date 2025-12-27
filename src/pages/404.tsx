import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <article
      className="
        h-screen w-full
        flex flex-col items-center justify-center
        text-center px-6
        relative
        bg-[linear-gradient(to_right,#0003_1px,transparent_1px),linear-gradient(to_bottom,#0003_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    >
      <h1 className="text-6xl md:text-8xl font-extrabold tracking-tight">
        404
      </h1>

      <h2 className="text-3xl md:text-4xl font-bold mt-4">
        Page Not Found
      </h2>

      <p className="mt-4 max-w-xl text-lg text-black">
        The page you're looking for doesn't exist or has been moved.
      </p>

      <Link to="/" className="mt-8">
        <Button className="px-6 py-3 text-lg">
          Go Home
        </Button>
      </Link>
    </article>
  );
}

