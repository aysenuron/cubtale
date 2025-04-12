import { motion } from "framer-motion";
import { FiCheck } from "react-icons/fi";
import Star from "./Star";

const benefits = [
  {
    title: "Collaborative Campaign Creation",
    description:
      "Every advertisement is customized and fully approved by your team, so your messaging stays authentic.",
  },
  {
    title: "Transparent Performance Tracking",
    description:
      "Monthly reports covering impressions, clicks, and engagement—so you see the real impact of your campaign.",
  },
  {
    title: "Cost Transparency",
    description:
      "Competitive per-click pricing, with no hidden fees—so you get the most value for your budget. ",
  },
];

export default function Benefits() {
  return (
    <section className="py-20 relative">
      <Star delay={0} color="#229A98" top="3%" left="80%" size="80px" />
      <Star delay={1} color="#F78E88" top="20%" left="50%" size="50px" />
      <Star delay={1.5} color="#FFC844" top="10%" left="60%" size="30px" />
      <Star delay={0.8} color="#FFC844" top="70%" left="90%" size="50px" />
      <Star delay={0.4} color="#229A98" top="30%" left="85%" size="30px" />
      <Star delay={0.8} color="#9EA4D2" top="40%" left="90%" size="80px" />
      <div className="container mx-auto px-4 flex flex-col lg:flex-row lg:justify-between gap-16 lg:gap-0">
        <div className="flex-1">
          <motion.h2 className="text-[#1F5066] leading-10 md:leading-12 lg:leading-16 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight mb-6 font-medium">
            What It’s Like to Partner <br />{" "}
            <span className="text-[#229A98]">with Cubtale?</span>
          </motion.h2>
          <div className="space-y-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                className="flex items-start"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
              >
                <div className="bg-teal-100 p-3 rounded-xl mr-4 mt-1">
                  <FiCheck className="text-[#229A98]" size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-lg text-[#1F5066] mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-[#1F5066]">{benefit.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
        <div className="flex items-center justify-center w-full flex-1">
          <img
            className="w-2/3"
            src="/parents.avif"
            alt="illustration of parents"
          />
        </div>
      </div>
    </section>
  );
}
