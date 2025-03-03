import React, { useState } from "react";
import { MotionConfig, motion } from "framer-motion";

const AnimatedHamburgerButton = () => {
  const [active, setActive] = useState(false);

  const handleToggle = () => setActive((prevState) => !prevState);

  return (
    <MotionConfig transition={{ duration: 0.5, ease: "easeInOut" }}>
      <motion.button
        initial={false}
        animate={active ? "open" : "closed"}
        onClick={handleToggle}
        className="relative h-20 w-20 rounded-full bg-white/0 transition-colors hover:bg-white/20"
      >
        <motion.span
          variants={VARIANTS.top}
          className="absolute h-1 w-10 bg-white"
          style={{ y: "-50%", left: "50%", x: "-50%", top: "35%" }}
        />
        <motion.span
          variants={VARIANTS.middle}
          className="absolute h-1 w-10 bg-white"
          style={{ left: "50%", x: "-50%", top: "50%", y: "-50%" }}
        />
        <motion.span
          variants={VARIANTS.bottom}
          className="absolute h-1 w-5 bg-white"
          style={{
            x: "-50%",
            y: "50%",
            bottom: "35%",
            left: "calc(50% + 10px)",
          }}
        />
      </motion.button>
    </MotionConfig>
  );
};

const VARIANTS = {
  top: {
    open: { rotate: [0, 0, 45], top: ["35%", "50%", "50%"] },
    closed: { rotate: [45, 0, 0], top: ["50%", "50%", "35%"] },
  },
  middle: {
    open: { rotate: [0, 0, -45] },
    closed: { rotate: [-45, 0, 0] },
  },
  bottom: {
    open: { rotate: [0, 0, 45], bottom: ["35%", "50%", "50%"], left: "50%" },
    closed: {
      rotate: [45, 0, 0],
      bottom: ["50%", "50%", "35%"],
      left: "calc(50% + 10px)",
    },
  },
};

export default AnimatedHamburgerButton;