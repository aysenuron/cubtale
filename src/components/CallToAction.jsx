import { motion } from "framer-motion";
import Button from "./Button";
import Star from "./Star";
import { FiUsers, FiHeart, FiStar } from "react-icons/fi";

const Bubble = ({ className, delay }) => (
  <motion.div
    className={`absolute rounded-full ${className}`}
    initial={{ y: 100, opacity: 0 }}
    animate={{ y: -20, opacity: 0.7 }}
    transition={{
      duration: 4,
      repeat: Infinity,
      repeatType: "loop",
      delay,
      ease: "easeOut",
    }}
  />
);

export default function CallToAction() {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white to-[#D0D3E8]">
      <Star delay={0} color="#229A98" top="10%" left="20%" size="20px" />
      <Star delay={1} color="#F78E88" top="80%" left="90%" size="30px" />
      <Star delay={1.5} color="#FFC844" top="50%" left="30%" size="30px" />
      <Star delay={0.8} color="#FFC844" top="60%" left="80%" size="40px" />
      <Star delay={0.4} color="#229A98" top="70%" left="15%" size="30px" />
      <Star delay={0.8} color="#9EA4D2" top="40%" left="90%" size="20px" />

      <Bubble className="w-8 h-8 bg-white/20 left-[10%] bottom-0" delay={0} />
      <Bubble
        className="w-12 h-12 bg-white/10 left-[20%] bottom-0"
        delay={1.5}
      />
      <Bubble className="w-6 h-6 bg-white/20 left-[30%] bottom-0" delay={0.8} />
      <Bubble
        className="w-16 h-16 bg-white/10 left-[70%] bottom-0"
        delay={1.2}
      />
      <Bubble
        className="w-10 h-10 bg-white/15 left-[85%] bottom-0"
        delay={0.5}
      />
      <Bubble className="w-7 h-7 bg-white/20 left-[50%] bottom-0" delay={2} />

      <div className="container mx-auto px-4 text-center relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#1F5066] leading-10 md:leading-12 lg:leading-16 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight mb-6 font-medium">
            Join Our Next Round of{" "}
            <span className="text-[#229A98]">Brand Partners</span>
          </h2>
          <p className="text-[#1F5066] text-lg max-w-3xl mx-auto">
            Reach parents at every step of their journey through trusted,
            meaningful partnerships that truly understand their needs.
            <span className="block text-[#1F5066] mt-6 font-bold text-lg">
              Cubtale is more than an app - it's a supportive family! 💖
            </span>
          </p>
        </motion.div>
        <motion.div
          className="flex flex-col sm:flex-row gap-6 justify-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <Button>Become a Partner</Button>
        </motion.div>
        <motion.div
          className="mt-16 flex flex-wrap justify-center gap-4 items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <div className="flex items-center text-[#229A98] bg-white/20 rounded-full py-2 px-6 backdrop-blur-sm border border-[#D0D3E8]">
            <FiUsers className="mr-2" />
            <span>45,000+ Happy Parents</span>
          </div>
          <div className="flex items-center text-[#229A98] bg-white/20 rounded-full py-2 px-6 backdrop-blur-sm border border-[#D0D3E8]">
            <FiStar className="mr-2" />
            <span>Trusted Brand Partners</span>
          </div>
          <div className="flex items-center text-[#229A98] bg-white/20 rounded-full py-2 px-6 backdrop-blur-sm border border-[#D0D3E8]">
            <FiHeart className="mr-2" />
            <span>Supportive Community</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
