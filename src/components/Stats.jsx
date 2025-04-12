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
  function Stat({ img, size, color, number, name }) {
    return (
      <div className="flex flex-col gap-6 items-center">
        <div className={`${size} flex justify-center items-center`}>{img}</div>
        <p className={`font-medium text-5xl text-[${color}]`}>{number}</p>
        <p className="text-xl text-[#1F5066]">{name}</p>
      </div>
    );
  }
  return (
    <section className="py-20">
      <div className="container mx-auto px-4 flex flex-col gap-4">
        <h2 className="text-[#229A98] text-center text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight mb-6 font-medium">
          Parents Love Cubtale
        </h2>
        <p className="text-[#1F5066] text-center -mt-6 text-lg">
          Trusted by Over 45,000 Parents in the US, with 4,000 New Families
          Joining Monthly
        </p>
        <div className="flex flex-col lg:flex-row gap-10 lg:gap-0 items-center lg:items-end justify-around">
          <Stat
            img={<StarAnimation />}
            color="#1F5066"
            size="w-28 -mb-4"
            number="4.9 / 5"
            name="Rated by 7,000 Parents"
          />
          <Stat
            img={<Baby />}
            color={"#1F5066"}
            size="w-48 -mb-8"
            number="200,000"
            name="Parents Ready to Meet New Brands"
          />
          <Stat
            img={<TimeAnimation />}
            color={"#1F5066"}
            size="w-48 -mb-8"
            number="1 hr / day"
            name="Time Spent on Cubtale"
          />
        </div>
      </div>
    </section>
  );
}
