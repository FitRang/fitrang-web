import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";

export default function CreateDossier() {
  return (
    <main className="w-full">
      <article className="w-full px-4 sm:px-6 md:px-8 py-6">
        <section className="w-full max-w-5xl mx-auto">

          <section className="flex flex-col gap-6 md:hidden">
            <FirstPart />
            <SecondPart />
          </section>

          <section className="hidden md:block">
            <Carousel className="w-full">
              <CarouselContent>
                <CarouselItem>
                  <FirstPart />
                </CarouselItem>
                <CarouselItem>
                  <SecondPart />
                </CarouselItem>
              </CarouselContent>
              <CarouselPrevious />
              <CarouselNext />
            </Carousel>
          </section>

        </section>
      </article>
    </main>
  );
}
