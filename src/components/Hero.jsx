import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Star from "./Star";
import Button from "./Button";

export default function Hero() {
  return (
    <>
      <section className="relative overflow-hidden py-8 md:py-16 md:mb-32 lg:mb-6 2xl:mb-40">
        <Star delay={0} color="#9EA4D2" top="3%" left="76%" size="90px" />
        <Star delay={1} color="#BCD5D6" top="20%" left="90%" size="50px" />
        <Star delay={1.5} color="#F78E88" top="45%" left="87%" size="70px" />
        <Star delay={1.5} color="#FFC844" top="80%" left="40%" size="70px" />
        <Star delay={1.5} color="#F78E88" top="70%" left="45%" size="40px" />
        <Star delay={0.8} color="#229A98" top="70%" left="85%" size="50px" />
        <Star delay={0.4} color="#FFC844" top="70%" left="92%" size="120px" />
        <Star delay={0.8} color="#229A98" top="70%" left="35%" size="30px" />

        <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
          <motion.div
            className="lg:w-1/2 mb-10 lg:mb-0"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
          >
            <div className="mb-4">
              <div className="mb-1 flex items-center">
                {[...Array(5)].map((_, i) => (
                  <FiStar key={i} className="text-[#FFC83D] fill-[#FFC83D]" />
                ))}
              </div>
              <p className="text-sm text-[#1F5066]">
                Trusted by 45,000+ parents
              </p>
            </div>
            <h1 className="text-[#229A98] text-4xl md:text-5xl lg:text-6xl 2xl:text-7xl tracking-tight mb-6 font-medium">
              Place Your Brand <br />{" "}
              <span className="lg:text-5xl 2xl:text-6xl text-[#9EA4D2]">
                Into Real Parenting Moments
              </span>
            </h1>
            <p className="text-lg mb-8 text-[#1F5066] max-w-xl">
              Over 45,000 parents across the US trust Cubtale to guide them
              through the everyday rhythms of baby care—feeding, sleep, diaper
              changes, and all the little moments in between.
              <br />
              <br />
              <span className="font-bold">
                We help brands show up seamlessly in these moments, where
                parents are already paying attention.
              </span>
            </p>
            <Button colorFrom={"#F78E88"} colorTo={"#D76D6D"}>
              Let's Talk 👋🏻
            </Button>
          </motion.div>
          <motion.div
            className="ml-12 -z-10 xl:ml-20"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.5, ease: "easeOut" }}
          >
            <video
              src="/hero-video.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-xs 2xl:w-md"
            />
          </motion.div>
        </div>
      </section>
    </>
  );
}
