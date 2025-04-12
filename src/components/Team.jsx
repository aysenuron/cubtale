import { motion } from "framer-motion";
import { FiHeart, FiCode, FiSun } from "react-icons/fi";

export default function Team() {
  const team = [
    {
      name: "Selin Tamer",
      role: "Co-Founder & CEO",
      bio: "Mom of 2, obsessed with smart recommendations, and better care for kids.",
      imgUrl: "/selin.avif",
      iconBg: "bg-[#F389A9]",
      icon: <FiHeart className="text-white text-xl" />,
    },
    {
      name: "Duygu Altop",
      role: "Co-Founder & CTO",
      bio: "Mom of 1, PhD in Data Security, responds to every single user email, every day.",
      imgUrl: "/duygu.avif",
      iconBg: "bg-[#A58CF2]",
      icon: <FiCode className="text-white text-xl" />,
    },
    {
      name: "Tolga Demirsar",
      role: "Business Development Lead",
      bio: "Charting new paths in parent-brand connections, bringing over 45,000 families closer to their favorite brands every day.",
      imgUrl: "tolga.avif",
      iconBg: "bg-[#FFC83D]",
      icon: <FiSun className="text-white text-xl" />,
    },
  ];

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-[#1F5066] leading-10 md:leading-12 lg:leading-16 text-3xl md:text-4xl lg:text-5xl 2xl:text-6xl tracking-tight mb-6 font-medium">
            Meet the Team
          </h2>
          <p className="text-[#1F5066] max-w-2xl mx-auto text-lg">
            We're loving every moment of building Cubtale — come be a part of
            creating something parents can depend on.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              className="text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="relative mb-6 mx-auto w-48 h-48">
                <div className="w-full h-full rounded-full overflow-hidden border-4 border-[#26AB9D] bg-gradient-to-br from-[#F0F4FF] to-[#EEFBF9]">
                  <img
                    className="h-full w-full"
                    src={member.imgUrl}
                    alt={member.name}
                  />
                </div>
                <motion.div
                  className={`absolute -bottom-4 -right-4 ${member.iconBg} rounded-full w-14 h-14 flex items-center justify-center`}
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{
                    type: "spring",
                    stiffness: 300,
                    damping: 10,
                    delay: 0.3 + index * 0.1,
                  }}
                >
                  {member.icon}
                </motion.div>
              </div>

              <h3 className="font-bold text-xl text-[#1F5066] mb-1">
                {member.name}
              </h3>
              <p className="text-[#229A98] font-medium mb-4">{member.role}</p>
              <p className="text-[#1F5066]">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
