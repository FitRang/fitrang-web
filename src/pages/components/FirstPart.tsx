import { Card } from "@/components/ui/card"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { useDossierStore } from "@/store/Dossier"

export default function FirstPart() {
  const dossier = useDossierStore((s) => s.dossier)
  const updateDossier = useDossierStore((s) => s.updateDossier)

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
              <Select
                value={dossier.faceType}
                onValueChange={(value) =>
                  updateDossier({ faceType: value })
                }
              >
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your face type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Face Types</SelectLabel>
                    <SelectItem value="Oval">Oval</SelectItem>
                    <SelectItem value="Round">Round</SelectItem>
                    <SelectItem value="Square">Square</SelectItem>
                    <SelectItem value="Heart">Heart</SelectItem>
                    <SelectItem value="Diamond">Diamond</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <legend className="text-base sm:text-lg font-bold">Skin Tone</legend>
              <Select
                value={dossier.skinTone}
                onValueChange={(value) =>
                  updateDossier({ skinTone: value })
                }
              >
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
              <Select
                value={dossier.bodyType}
                onValueChange={(value) =>
                  updateDossier({ bodyType: value })
                }
              >
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your body type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Body Types</SelectLabel>
                    <SelectItem value="Rectangle">Rectangle</SelectItem>
                    <SelectItem value="Trapezoid">Trapezoid</SelectItem>
                    <SelectItem value="Triangle">Triangle</SelectItem>
                    <SelectItem value="Inverted Triangle">
                      Inverted Triangle
                    </SelectItem>
                    <SelectItem value="Oval">Oval</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <legend className="text-base sm:text-lg font-bold">Hair Type</legend>
              <Select
                value={dossier.hairType}
                onValueChange={(value) =>
                  updateDossier({ hairType: value })
                }
              >
                <SelectTrigger className="w-full h-10 sm:h-12">
                  <SelectValue placeholder="Select your hair type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Hair Types</SelectLabel>
                    <SelectItem value="Straight">Straight</SelectItem>
                    <SelectItem value="Wavy">Wavy</SelectItem>
                    <SelectItem value="Curly">Curly</SelectItem>
                    <SelectItem value="Coily">Coily</SelectItem>
                    <SelectItem value="Bald">Bald / Shaved</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </fieldset>
          </form>
        </article>
      </Card>
    </section>
  )
}
