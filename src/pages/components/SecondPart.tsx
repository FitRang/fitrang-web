import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function SecondPart() {
  return (
    <section className="w-full">
      <Card className="w-full max-w-5xl mx-auto p-4 sm:p-6 md:p-8">
        <article>
          <header className="mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Measurements & Preferences
            </h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted-foreground">
              Basic measurements and color choices help refine outfit suggestions.
            </p>
          </header>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <fieldset className="space-y-2 sm:space-y-3">
              <Label htmlFor="height" className="text-sm sm:text-base font-medium">
                Height (cm)
              </Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g. 175"
                className="h-10 sm:h-12"
              />
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <Label htmlFor="weight" className="text-sm sm:text-base font-medium">
                Weight (kg)
              </Label>
              <Input
                id="weight"
                type="number"
                placeholder="e.g. 70"
                className="h-10 sm:h-12"
              />
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <Label htmlFor="preferredColors" className="text-sm sm:text-base font-medium">
                Preferred Colors
              </Label>
              <Input
                id="preferredColors"
                placeholder="e.g. Black, Navy, Olive"
                className="h-10 sm:h-12"
              />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Colors you usually like to wear.
              </p>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <Label htmlFor="dislikedColors" className="text-sm sm:text-base font-medium">
                Disliked Colors
              </Label>
              <Input
                id="dislikedColors"
                placeholder="e.g. Neon green, Yellow"
                className="h-10 sm:h-12"
              />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Colors you prefer to avoid.
              </p>
            </fieldset>
          </form>

          <Button className="mt-6 w-full sm:w-1/2 md:w-1/3">Submit</Button>
        </article>
      </Card>
    </section>
  );
}
