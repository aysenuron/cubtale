import { FaStar } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Star({ delay, top, left, color, size }) {

    const rotation = Math.floor(Math.random() * 360); // Random static rotation

    return (
            <motion.div
              className="absolute"
              style={{
                top,
                left,
                width: size,
                height: size,
              }}
              initial={{ opacity: 0 }}
              animate={{
                opacity: [0.2, 0.1, 0.2],  // Twinkle effect
                scale: [1, 1.4, 1],    // Slight size change
                rotate: [rotation, rotation + 360],
              }}
              transition={{
                opacity: {
                  repeat: Infinity,
                  duration: 2 + Math.random() * 2, // Randomized twinkle duration
                  delay,
                  ease: "easeInOut",
                },
                scale: {
                  repeat: Infinity,
                  duration: 8 + Math.random() * 2, // Randomized scale duration
                  delay,
                  ease: "easeInOut",
                },
                rotate: {
                  repeat: Infinity,
                  duration: 50 + Math.random() * 4, // Different randomized duration for rotation
                  delay,
                  ease: "linear", // Smooth rotation
                },
              }}
            >
              <FaStar color={color} size={size} />
            </motion.div>
          );
}