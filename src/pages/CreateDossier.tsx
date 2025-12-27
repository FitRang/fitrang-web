import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import ProgressUpload from "./components/FileUploadComponent";

export default function CreateDossier() {
  return (
    <article className="w-full h-full flex justify-center items-center">
      <Carousel className="w-[50%]">
        <CarouselContent>
          <CarouselItem>
            <ProgressUpload/>
          </CarouselItem>
          <CarouselItem>
            <ProgressUpload/>
          </CarouselItem>
        </CarouselContent>
        <CarouselPrevious/>
        <CarouselNext/>
      </Carousel>
    </article>
  );
}
