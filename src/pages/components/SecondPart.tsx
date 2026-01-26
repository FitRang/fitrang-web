import { useEffect, useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import createDossier from "@/services/CreateDossier"
import { useDossierStore } from "@/store/Dossier"
import { Loader2 } from "lucide-react"

export default function SecondPart() {
  const dossier = useDossierStore((s) => s.dossier)
  const updateDossier = useDossierStore((s) => s.updateDossier)

  const [preferredColorsInput, setPreferredColorsInput] = useState("")
  const [dislikedColorsInput, setDislikedColorsInput] = useState("")
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setLoading] = useState(false)

  useEffect(() => {
    setPreferredColorsInput(dossier.preferredColors?.join(", ") ?? "")
    setDislikedColorsInput(dossier.dislikedColors?.join(", ") ?? "")
  }, [dossier.preferredColors, dossier.dislikedColors])

  const parseColors = (value: string) =>
    value
      .split(",")
      .map((c) => c.trim().toLowerCase())
      .filter(Boolean)

  const handleSubmit = async () => {
    setError(null)

    try {
      setLoading(true)
      const res = await createDossier(dossier)
      console.log(res.createDossier)
    } catch (err: any) {
      const message =
        err?.response?.errors?.[0]?.message ??
        err?.message ??
        "Something went wrong"

      setError(message)
    } finally {
      setLoading(false)
    }
  }

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

          <form
            className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-10"
            onSubmit={(e) => e.preventDefault()}
          >
            <fieldset className="space-y-2 sm:space-y-3">
              <Label htmlFor="height" className="text-sm sm:text-base font-medium">
                Height (cm)
              </Label>
              <Input
                id="height"
                type="number"
                placeholder="e.g. 175"
                className="h-10 sm:h-12"
                value={dossier.height ?? ""}
                onChange={(e) =>
                  updateDossier({ height: e.target.value })
                }
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
                value={dossier.weight ?? ""}
                onChange={(e) =>
                  updateDossier({ weight: e.target.value })
                }
              />
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <Label
                htmlFor="preferredColors"
                className="text-sm sm:text-base font-medium"
              >
                Preferred Colors
              </Label>
              <Input
                id="preferredColors"
                placeholder="e.g. Black, Navy, Olive"
                className="h-10 sm:h-12"
                value={preferredColorsInput}
                onChange={(e) =>
                  setPreferredColorsInput(e.target.value)
                }
                onBlur={() =>
                  updateDossier({
                    preferredColors: parseColors(preferredColorsInput),
                  })
                }
              />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Colors you usually like to wear.
              </p>
            </fieldset>

            <fieldset className="space-y-2 sm:space-y-3">
              <Label
                htmlFor="dislikedColors"
                className="text-sm sm:text-base font-medium"
              >
                Disliked Colors
              </Label>
              <Input
                id="dislikedColors"
                placeholder="e.g. Neon green, Yellow"
                className="h-10 sm:h-12"
                value={dislikedColorsInput}
                onChange={(e) =>
                  setDislikedColorsInput(e.target.value)
                }
                onBlur={() =>
                  updateDossier({
                    dislikedColors: parseColors(dislikedColorsInput),
                  })
                }
              />
              <p className="text-xs sm:text-sm text-muted-foreground">
                Colors you prefer to avoid.
              </p>
            </fieldset>
          </form>
          {error && (
            <p className="mt-4 text-sm text-red-600">
              {error}
            </p>
          )}
          <Button
            onClick={handleSubmit}
            className="mt-6 w-full sm:w-1/2 md:w-1/3"
          >
            {
              isLoading ? <Loader2 className="h-4 w-4 animate-spin" /> : "Submit"
            }
          </Button>
        </article>
      </Card>
    </section>
  )
}
