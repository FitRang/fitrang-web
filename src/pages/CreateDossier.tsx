import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import FirstPart from "./components/FirstPart";
import SecondPart from "./components/SecondPart";

export default function CreateDossier() {
  return (
    <article className="w-full h-full flex flex-col justify-center items-center">
      <Carousel className="w-1/2 h-full flex flex-col justify-center items-center">
        <CarouselContent className="w-full p-5">
          <CarouselItem>
            <FirstPart/>
          </CarouselItem> 
          <CarouselItem>
            <SecondPart/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </article>
  );
}
