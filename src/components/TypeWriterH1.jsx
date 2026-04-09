import { motion } from "framer-motion";

export const TypewriterH1 = ({ text }) => {
  // Split text into an array of characters
  const letters = Array.from(text);

  // Animation variants
  const container = {
    hidden: { opacity: 0 },
    visible: (i = 1) => ({
      opacity: 1,
      transition: { staggerChildren: 0.05, delayChildren: 0.04 * i },
    }),
  };

  const child = {
    visible: {
      opacity: 1,
      display: "inline",
      transition: { type: "spring", damping: 12, stiffness: 100 },
    },
    hidden: {
      opacity: 0,
      display: "none",
    },
  };

  return (
    // Change this line in your TypewriterH1 component
    <motion.h1
      className="md:text-[60px] text-[30px] text-[#D1EF53]"
      style={{
        display: "flex",
        flexWrap: "wrap", // This allows letters to move to the next line on mobile
        justifyContent: "center", // Keeps it centered if that's your design
      }}
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: false, amount: 0.5 }}
    >
      {letters.map((letter, index) => (
        <motion.span
          variants={child}
          key={index}
          style={{ display: "inline-block" }} // Ensures individual letters don't collapse
        >
          {letter === " " ? "\u00A0" : letter}
        </motion.span>
      ))}
    </motion.h1>
  );
};
