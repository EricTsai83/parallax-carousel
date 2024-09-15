"use client";

import Image from "next/image";
import useHorizontalScroll from "@/hooks/use-horizontal-scroll";

interface SlideProps {
  src: string;
  alt: string;
}

const slides: SlideProps[] = [
  {
    src: "https://images.pexels.com/photos/687501/pexels-photo-687501.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 1",
  },
  {
    src: "https://images.pexels.com/photos/1459347/pexels-photo-1459347.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 2",
  },
  {
    src: "https://images.pexels.com/photos/1022166/pexels-photo-1022166.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 3",
  },
  {
    src: "https://images.pexels.com/photos/3162822/pexels-photo-3162822.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 4",
  },
  {
    src: "https://images.pexels.com/photos/2016703/pexels-photo-2016703.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 5",
  },
  {
    src: "https://images.pexels.com/photos/5818810/pexels-photo-5818810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 6",
  },
  {
    src: "https://images.pexels.com/photos/5896359/pexels-photo-5896359.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 7",
  },
  {
    src: "https://images.pexels.com/photos/5430078/pexels-photo-5430078.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 8",
  },
  {
    src: "https://images.pexels.com/photos/1431114/pexels-photo-1431114.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 9",
  },
  {
    src: "https://images.pexels.com/photos/1722179/pexels-photo-1722179.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    alt: "Image 10",
  },
];
function Slide({ src, alt }: SlideProps) {
  return (
    <div className="slide flex-shrink-0 w-[70vw] h-[calc(70vw*1.5)] sm:w-[40vw] sm:h-[calc(40vw*1.5)] md:w-[25vw] md:h-[calc(25vw*1.5)] overflow-clip relative mx-2 snap-center rounded-3xl">
      <Image
        src={src}
        width={278}
        height={417}
        alt={alt}
        className="block w-full h-full object-cover object-center absolute right-0 animate-parallax [animation-timeline:view(x)]"
      />
    </div>
  );
}

function Home() {
  const { containerRef } = useHorizontalScroll(2);
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-50 font-generalSans">
      <div className="py-8">
        <h1 className="text-center text-2xl md:text-4xl font-medium">
          Tailwind CSS Parallax Carousel
        </h1>
      </div>

      <div
        ref={containerRef}
        className="no-scrollbar overflow-scroll scroll-smooth w-full whitespace-nowrap touch-pan-x before:shrink-0 after:shrink-0 before:w-[36vw] after:w-[36vw] flex"
      >
        {slides.map((slide, index) => (
          <Slide key={index} src={slide.src} alt={slide.alt} />
        ))}
      </div>
    </div>
  );
}

export default Home;
