import { FiArrowRight, FiStar } from "react-icons/fi";
import { motion } from "framer-motion";

export default function Hero() {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#D2E3E3] via-[#FFF4D0] to-[#FFC844] py-16 md:py-24">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                    <motion.div
                    className="lg:w-1/2 mb-10 lg:mb-0"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    >
                        <h1 className="text-4xl md:text-5xl lg:text-7xl text-[#254A5D] drop-shadow-sm tracking-tight mb-6">
                            Place Your Brand Into Real Parenting Moments
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-neutral-700 max-w-xl">
                        Over 45,000 parents across the US trust Cubtale to guide them through the everyday rhythms of baby care—feeding, sleep, diaper changes, and all the little moments in between.
                        <br /><br />
                        We help brands show up seamlessly in these moments, where parents are already paying attention.
                        </p>
                        <button className="bg-white hover:bg-[#259591] hover:text-white cursor-pointer text-gray-900 font-bold py-4 px-8 rounded-xl shadow-lg transition duration-300 ease-in-out hover:-translate-y-1 hover:scale-110">
                            Let's Talk 👋🏻
                        </button>
                        <div>
                            <div className="mt-8 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className="text-[#FFC83D] fill-[#FFC83D]" />
                                ))}
                            </div>
                            <p className="text-sm text-neutral-600">Trusted by 45,000+ parents</p>
                        </div>
                    </motion.div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}