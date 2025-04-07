import { FiArrowRight, FiStar } from "react-icons/fi";

export default function Hero() {
    return (
        <>
            <section className="relative overflow-hidden bg-gradient-to-br from-[#FFE4F9] via-[#FCFFB2] to-[#E5FBFF] py-16 md:py-24">
                <div className="container mx-auto px-4 flex flex-col lg:flex-row items-center">
                    <div className="lg:w-1/2 mb-10 lg:mb-0">
                        <h1 className="text-4xl md:text-5xl lg:text-6xl xlg:text-8xl font-bold leading-tight mb-6">
                            Place Your Brand Into Real Parenting Moments
                        </h1>
                        <p className="text-lg md:text-xl mb-8 text-neutral-700 max-w-xl">
                        Over 45,000 parents across the US trust Cubtale to guide them through the everyday rhythms of baby care—feeding, sleep, diaper changes, and all the little moments in between.
                        <br /><br />
                        We help brands show up seamlessly in these moments, where parents are already paying attention.
                        </p>
                        <button className="bg-gradient-to-r from-[#69D2AB] to-[#4CC493] hover:from-[#4CC493] hover:to-[#3DB382] text-white font-bold py-5 px-8 rounded-xl shadow-lg transform transition-transform hover:scale-105 border-2 border-white">
                            Let's Talk ⚡️
                        </button>
                        <div>
                            <div className="mt-8 flex items-center">
                                {[...Array(5)].map((_, i) => (
                                    <FiStar key={i} className="text-[#FFC83D] fill-[#FFC83D]" />
                                ))}
                            </div>
                            <p className="text-sm text-neutral-600">Trusted by 45,000+ parents</p>
                        </div>
                    </div>
                    <div>

                    </div>
                </div>
            </section>
        </>
    )
}