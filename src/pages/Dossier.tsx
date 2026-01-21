import { Card } from "@/components/ui/card";

const DOSSIER = {
  face_type: "oval",
  skin_tone: "olive",
  body_type: "trapezoid",
  hair_type: "wavy",
  height_cm: 176,
  weight_kg: 72,
  preferred_colors: ["Black", "Navy", "Olive"],
  disliked_colors: ["Neon Green", "Yellow"],
};

const formatEnum = (value?: string) =>
  value
    ? value.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase())
    : "—";

export default function DossierOverview() {
  return (
    <section className="w-full h-full space-y-6 sm:space-y-10 p-4 sm:p-8 overflow-auto">
      <Card className="w-full max-w-4xl mx-auto p-6 sm:p-10">
        <article>
          <header className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Personal Appearance
            </h2>
            <p className="mt-1 sm:mt-2 text-muted-foreground text-sm sm:text-base">
              A summary of your physical attributes used for styling.
            </p>
          </header>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Detail label="Face Type" value={formatEnum(DOSSIER.face_type)} />
            <Detail label="Skin Tone" value={formatEnum(DOSSIER.skin_tone)} />
            <Detail label="Body Type" value={formatEnum(DOSSIER.body_type)} />
            <Detail label="Hair Type" value={formatEnum(DOSSIER.hair_type)} />
          </dl>
        </article>
      </Card>

      <Card className="w-full max-w-4xl mx-auto p-6 sm:p-10">
        <article>
          <header className="mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl font-semibold tracking-tight">
              Measurements & Preferences
            </h2>
            <p className="mt-1 sm:mt-2 text-muted-foreground text-sm sm:text-base">
              Additional details that refine recommendations.
            </p>
          </header>

          <dl className="grid grid-cols-1 sm:grid-cols-2 gap-6 sm:gap-8">
            <Detail label="Height" value={`${DOSSIER.height_cm} cm`} />
            <Detail label="Weight" value={`${DOSSIER.weight_kg} kg`} />
            <Detail
              label="Preferred Colors"
              value={DOSSIER.preferred_colors.join(", ")}
            />
            <Detail
              label="Disliked Colors"
              value={DOSSIER.disliked_colors.join(", ")}
            />
          </dl>
        </article>
      </Card>
    </section>
  );
}

function Detail({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <dt className="text-sm sm:text-base text-muted-foreground">{label}</dt>
      <dd className="mt-1 text-lg sm:text-xl font-medium">{value}</dd>
    </div>
  );
}

