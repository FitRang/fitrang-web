import { Card } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function FirstPart() {
  return (
    <section className="w-full">
      <Card className="w-full max-w-4xl mx-auto p-4 sm:p-6 md:p-10">
        <article>
          <header className="mb-6 sm:mb-10">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Personal Appearance
            </h2>
            <p className="mt-1 sm:mt-2 text-sm sm:text-base text-muted-foreground">
              Help us understand your features for better styling recommendations.
            </p>
          </header>

          <form className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10">
            <fieldset className="space-y-2 sm:space-y-3">
              <legend className="text-base sm:text-lg font-bold">Face Type</legend>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your face type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Face Types</SelectLabel>
                    <SelectItem value="oval">Oval</SelectItem>
                    <SelectItem value="round">Round</SelectItem>
                    <SelectItem value="square">Square</SelectItem>
                    <SelectItem value="heart">Heart</SelectItem>
                    <SelectItem value="diamond">Diamond</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <legend className="text-base sm:text-lg font-bold">Skin Tone</legend>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your skin tone" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Skin Tones</SelectLabel>
                    <SelectItem value="pale">Pale</SelectItem>
                    <SelectItem value="light">Light</SelectItem>
                    <SelectItem value="olive">Olive</SelectItem>
                    <SelectItem value="dark">Dark</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <legend className="text-base sm:text-lg font-bold">Body Type</legend>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your body type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Body Types</SelectLabel>
                    <SelectItem value="rectangle">Rectangle</SelectItem>
                    <SelectItem value="trapezoid">Trapezoid</SelectItem>
                    <SelectItem value="triangle">Triangle</SelectItem>
                    <SelectItem value="inverted_triangle">Inverted Triangle</SelectItem>
                    <SelectItem value="oval">Oval</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <legend className="text-base sm:text-lg font-bold">Hair Type</legend>
              <Select>
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your hair type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Hair Types</SelectLabel>
                    <SelectItem value="straight">Straight</SelectItem>
                    <SelectItem value="wavy">Wavy</SelectItem>
                    <SelectItem value="curly">Curly</SelectItem>
                    <SelectItem value="coily">Coily</SelectItem>
                    <SelectItem value="bald">Bald / Shaved</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
          </form>
        </article>
      </Card>
    </section>
  );
}
