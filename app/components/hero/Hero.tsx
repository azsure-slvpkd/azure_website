import Image from "next/image";
import hero from "@/public/HeroImage.jpg";

export const Hero = () => {
  return (
    <section className="flex flex-col justify-between gap-6 sm:gap-10 md:gap-16 lg:flex-row">
      <div className="flex flex-col items-center justify-center sm:text-center lg:items-start lg:py-12 lg:text-left xl:w-1/2 xl:py-24">
        <h1 className="mb-8 text-4xl font-bold text-black sm:text-5xl md:mb-12 md:text-6xl">
          Stay Safe.
          <br /> Stay Compliant. <br />
          Stay AzSure.
        </h1>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12  xl:text-lg">
          AzSure is an upcoming platform designed to bring asbestos management
          into the digital age. Built for asbestos analysts, surveyors, licensed
          removal contractors, and duty holders. AzSure simplifies every step of
          the process – from surveys and reporting to removal tracking and
          compliance documentation. Whether you’re on-site or in the office, our
          secure, intuitive system ensures accuracy, efficiency, and full
          regulatory alignment.
        </p>

        <p className="mb-8 leading-relaxed text-gray-500 md:mb-12  xl:text-lg">
          Stay tuned – we’re redefining how the asbestos industry works, one
          compliant step at a time!
        </p>
      </div>

      <div className="h-48 overflow-hidden rounded-lg bg-gray-100 shadow-lg lg:h-auto xl:w-5/12">
        <Image
          src={hero}
          loading="lazy"
          alt="Worksite"
          className="h-full w-full object-cover object-center"
        />
      </div>
    </section>
  );
};
