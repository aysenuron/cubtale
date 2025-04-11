import { motion } from "framer-motion";
import { FiPackage, FiHeart, FiBox, FiMoon, FiActivity } from "react-icons/fi";
import Button from "./Button";

const partnerCategories = [
  {
    icon: <FiPackage size={20} className="text-white" />,
    title: "Baby & toddler food brands",
    bgColor: "bg-[#FFC83D]",
  },
  {
    icon: <FiHeart size={20} className="text-white" />,
    title: "Breastfeeding and lactation products",
    bgColor: "bg-[#F389A9]",
  },
  {
    icon: <FiBox size={20} className="text-white" />,
    title: "Diapering and skincare solutions",
    bgColor: "bg-[#A58CF2]",
  },
  {
    icon: <FiMoon size={20} className="text-white" />,
    title: "Sleep and developmental products",
    bgColor: "bg-[#26AB9D]",
  },
  {
    icon: <FiActivity size={20} className="text-white" />,
    title: "Health and wellness essentials for parents & babies",
    bgColor: "bg-blue-500",
  },
];

export default function Partners() {
  return (
    <>
      <div className="relative mt-40">
        <div className="absolute top-0 left-0 w-full overflow-hidden leading-[0] -translate-y-full z-[-1]">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#D2E3E3"
              fill-opacity="1"
              d="M0,224L26.7,208C53.3,192,107,160,160,138.7C213.3,117,267,107,320,133.3C373.3,160,427,224,480,224C533.3,224,587,160,640,154.7C693.3,149,747,203,800,213.3C853.3,224,907,192,960,170.7C1013.3,149,1067,139,1120,117.3C1173.3,96,1227,64,1280,53.3C1333.3,43,1387,53,1413,58.7L1440,64L1440,320L1413.3,320C1386.7,320,1333,320,1280,320C1226.7,320,1173,320,1120,320C1066.7,320,1013,320,960,320C906.7,320,853,320,800,320C746.7,320,693,320,640,320C586.7,320,533,320,480,320C426.7,320,373,320,320,320C266.7,320,213,320,160,320C106.7,320,53,320,27,320L0,320Z"
            ></path>
          </svg>
        </div>
      </div>
      <section className="bg-gradient-to-t from-white to-[#D2E3E3] mb-40">
        <div className="container ml-auto px-4 flex flex-col lg:flex-row gap-16 items-center">
          <div className="w-72">
            <img
              className="w-full"
              src="/parner-cubtale.webp"
              alt="cubtale-screen"
            />
          </div>
          <motion.div
            className="lg:w-1/2"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-[#1F5066] leading-16 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight mb-8 font-medium"
            >
              Our Ideal Partners Are:
            </motion.h2>

            <div className="space-y-6">
              {partnerCategories.map((category, index) => (
                <motion.div
                  key={index}
                  className="flex items-center"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
                >
                  <div className={`${category.bgColor} p-3 rounded-xl mr-4`}>
                    {category.icon}
                  </div>
                  <div>
                    <h3 className="font-bold text-xl">{category.title}</h3>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div
              className="mt-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.8 }}
            >
              <Button colorFrom={"#F78E88"} colorTo={"#D76D6D"}>
                Schedule a call ⚡️
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
