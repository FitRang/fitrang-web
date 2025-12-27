import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardDescription, CardTitle } from "@/components/ui/card";

export default function Homepage() {
  return (
    <main
      className="
        relative min-h-screen w-full
        flex flex-col items-center justify-center
        text-center px-6 overflow-hidden
        bg-[linear-gradient(to_right,#0000001f_1px,transparent_1px),linear-gradient(to_bottom,#0000001f_1px,transparent_1px)]
        bg-[size:80px_80px]
      "
    >
      <section aria-hidden="true">
        <div className="absolute -top-32 -left-32 h-[420px] w-[420px] rounded-full bg-rose-500/30 blur-3xl" />
        <div className="absolute -bottom-32 -right-32 h-[420px] w-[420px] rounded-full bg-indigo-500/30 blur-3xl" />
      </section>

      <header className="max-w-3xl">
        <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
          Fit
          <span className="text-rose-500">Rang</span>
        </h1>

        <p className="mt-4 text-sm uppercase tracking-widest text-foreground/70">
          Smart shopping, personalized
        </p>

      </header>

      <nav className="mt-6">
        <Link to="/" aria-label="Get FitRang Chrome Extension">
          <Button size="lg" className="px-8 cursor-pointer">
            Get the Chrome Extension
          </Button>
        </Link>
      </nav>

      <section
        className="mt-16 max-w-5xl grid grid-cols-1 md:grid-cols-3 gap-8"
        aria-labelledby="features-heading"
      >
        <Card className="max-w-sm p-5">
          <CardTitle className="text-rose-500">
            Personalized Matches
          </CardTitle>
          <CardDescription>
            Get recommendations based on fit, proportions, and preferences —
            not generic trends.
          </CardDescription>
        </Card>
        <Card className="max-w-sm p-5">
          <CardTitle className="text-rose-500">
            Works Where You Shop
          </CardTitle>
          <CardDescription>
            FitRang integrates directly into shopping websites,
            helping you decide faster without switching platforms.
          </CardDescription>
        </Card>
        <Card className="max-w-sm p-5">
          <CardTitle className="text-rose-500">
            Fast & Non-Intrusive
          </CardTitle>
          <CardDescription>
            No pop-ups or distractions.
            Just subtle insights exactly when they matter.
          </CardDescription>
        </Card>
      </section>

      <footer className="fixed bottom-5">
        <p className="text-xs text-foreground/60">
          Built for modern shoppers • Powered by FitRang
        </p>
      </footer>
    </main>
  );
}
