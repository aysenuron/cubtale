import React from "react";
import { DotLottieReact } from "@lottiefiles/dotlottie-react";

const StarAnimation = () => {
  return <DotLottieReact src="/animation-stars.json" loop autoplay />;
};

const Baby = () => {
  return <DotLottieReact src="/animation-baby.json" loop autoplay />;
};

const TimeAnimation = () => {
  return <DotLottieReact src="/time.json" loop autoplay />;
};

export default function Stats() {
  function Stat({ img, size, number, name }) {
    return (
      <div className="flex flex-col gap-6 items-center">
        <div className={`${size} -mb-6 flex justify-center items-center`}>
          {img}
        </div>
        <p className="font-medium text-6xl text-[#229A98]">{number}</p>
        <p className="text-xl">{name}</p>
      </div>
    );
  }
  return (
    <section>
      <div className="container mx-auto px-4 flex flex-col lg:flex-row gap-10 lg:gap-0 items-center justify-around">
        <Stat
          img={<StarAnimation />}
          size="w-28"
          number="4.9 / 5"
          name="Rated by 7,000 Parents"
        />
        <Stat
          img={<Baby />}
          size="w-48"
          number="200,000"
          name="Parents Ready to Meet New Brands"
        />
        <Stat
          img={<TimeAnimation />}
          size="w-48"
          number="1 hr / day"
          name="Time Spent on Cubtale"
        />
      </div>
    </section>
  );
}
