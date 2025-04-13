import { motion } from "framer-motion";
import {
  FiBox,
  FiActivity,
  FiTarget,
  FiUsers,
  FiDollarSign,
  FiPieChart,
} from "react-icons/fi";

const features = [
  {
    icon: <FiBox size={24} className="text-[#F389A9]" />,
    title: "Naturally Integrated",
    description:
      "Your brand seamlessly becomes part of parents' daily routines at precisely the moments they're most receptive—like when a mom logs a feeding for her 6-month-old.",
  },
  {
    icon: <FiActivity size={24} className="text-[#FFC83D]" />,
    title: "Highly Engaged Audience",
    description:
      "45,000+ parents actively rely on Cubtale every day, consistently spending an average of 1 hour/day engaged on our platform.",
  },
  {
    icon: <FiTarget size={24} className="text-[#A58CF2]" />,
    title: "Proven Performance",
    description:
      "We deliver millions of impressions and thousands of targeted, high-intent clicks each month from families interested in discovering new products.",
  },
  {
    icon: <FiUsers size={24} className="text-[#26AB9D]" />,
    title: "The Right Audience",
    description:
      "70% of Cubtale users are moms living in urban areas, primarily from families interested in discovering new technologies and products.",
  },
  {
    icon: <FiDollarSign size={24} className="text-[#4D9DE0]" />,
    title: "Cost Transparency",
    description:
      "Competitive per-click pricing, with no hidden fees—so you get the most value for your marketing budget with clear ROI.",
  },
  {
    icon: <FiPieChart size={24} className="text-[#E15554]" />,
    title: "Transparent Tracking",
    description:
      "Monthly reports covering impressions, clicks, and engagement—so you see the real impact of your campaign with detailed analytics.",
  },
];

export default function Features() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-[#1F5066] text-center leading-10 md:leading-12 lg:leading-16 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight mb-6 font-medium"
          >
            Hyper-Targeted Ads <br />{" "}
            <span className="text-[#229A98]">For Better Results</span>
          </motion.h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, i) => {
            return (
              <motion.div
                key={i}
                custom={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl p-8 shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-xl border border-gray-100"
              >
                <div
                  className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 ${
                    i === 0
                      ? "bg-pink-50"
                      : i === 1
                      ? "bg-yellow-50"
                      : i === 2
                      ? "bg-purple-50"
                      : i === 3
                      ? "bg-teal-50"
                      : i === 4
                      ? "bg-blue-50"
                      : "bg-red-50"
                  }`}
                >
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold mb-3 text-[#1F5066]">
                  {feature.title}
                </h3>
                <p className="text-[#1F5066]">{feature.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
