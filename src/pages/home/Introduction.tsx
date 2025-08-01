/* src\pages\home\Introduction.tsx */

import Image from "next/image";
import { useState, useEffect } from "react";

const links = [
  { name: "Open roles", href: "#" },
  { name: "Internship program", href: "#" },
  { name: "Our values", href: "#" },
  { name: "Meet our leadership", href: "#" },
];

const images = [
  {
    src: "/images/gallery/iflde-building-front.jpg",
    alt: "IFLDE building front",
  },
  { src: "/images/gallery/mab-building.jpg", alt: "MAB building" },
  { src: "/images/gallery/rtu-campus.jpg", alt: "RTU campus" },
];

export default function Introduction() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative isolate overflow-hidden bg-gray-900 py-16 sm:py-40">
      <div className="absolute inset-0 -z-10 w-full h-full">
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px] z-10">
          {images.map((image, index) => (
            <Image
              key={image.src}
              alt={image.alt}
              src={image.src}
              className={`absolute inset-0 size-full object-cover object-right md:object-center transition-opacity duration-1000 ease-in-out ${
                index === currentImage ? "opacity-100" : "opacity-0"
              }`}
              width={1459}
              height={865}
              priority={index === 0}
            />
          ))}
        </div>
      </div>

      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-linear-to-tr from-[#ff4694] to-[#776fff] opacity-20"
        />
      </div>

      <div
        aria-hidden="true"
        className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#2e1065] to-[#172554] opacity-20"
        />
      </div>
      <div
        aria-hidden="true"
        className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
      >
        <div
          style={{
            clipPath:
              "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
          }}
          className="aspect-1097/845 w-[68.5625rem] bg-gradient-to-tr from-[#2e1065] to-[#172554] opacity-20"
        />
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto lg:mx-0">
          <h2 className="text-2xl my-3 sm:my-4 font-semibold tracking-tight text-white sm:text-5xl">
            Your Partner in Accessible and Innovative Education
          </h2>
          <p className="my-4 sm:my-8 text-base sm:text-xl font-medium text-pretty text-white">
            The Institute of Flexible Learning and Digital Education (IFLDE) at
            RTU pioneers flexible learning solutions through our FlexiLearnPro
            initiative. We focus on delivering high-quality education through
            ETEEAP and innovative micro-credential programs, designed to meet
            the evolving needs of both professionals and students.
          </p>
        </div>

        <div className="mx-auto mt-6 sm:mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid grid-cols-1 gap-y-4 sm:gap-y-6 gap-x-4 sm:gap-x-8 text-sm sm:text-base font-semibold text-white sm:grid-cols-2 md:flex lg:gap-x-10">
            {links.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="hover:text-purple-300"
              >
                {link.name} <span aria-hidden="true">&rarr;</span>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
