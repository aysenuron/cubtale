import { motion } from "framer-motion";
import { FiStar } from "react-icons/fi";
import Star from "./Star";


export default function Hero() {
    return (
        <>
            <section className="relative overflow-hidden py-16 md:py-16 md:mb-32 lg:mb-3 2xl:mb-40">
                <Star delay={0} color="#9EA4D2" top="4%" left="76%" size="100px" />
                <Star delay={1} color="#BCD5D6" top="30%" left="90%" size="50px" />
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
                        <h1 className="text-[#229A98] text-4xl md:text-5xl lg:text-7xl tracking-tight mb-6">
                            Place Your Brand Into Real Parenting Moments
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-neutral-700 max-w-xl">
                        Over 45,000 parents across the US trust Cubtale to guide them through the everyday rhythms of baby care—feeding, sleep, diaper changes, and all the little moments in between.
                        <br /><br />
                        We help brands show up seamlessly in these moments, where parents are already paying attention.
                        </p>
                        <button className="font-extrabold z-10 bg-[#259591] hover:bg-[#9594D2] text-white cursor-pointer text-lg py-4 px-8 rounded-full shadow-xl hover:shadow-none transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-105">
                            Let's Talk 👋🏻
                        </button>
                        <div>
                            <div className="mt-8 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className="text-[#FFC83D] fill-[#FFC83D]" />
                                ))}
                            </div>
                            <p className="!font-extrabold text-sm text-neutral-600">Trusted by 45,000+ parents</p>
                        </div>
                    </motion.div>
                    <motion.div
                    className="ml-12 -z-10"
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
                        className="w-md 2xl:w-2xl"
                      />
                    </motion.div>
                </div>
            </section>
        </>
    )
}