import React from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const BackgroundScroll = ({ src, scrollRef }) => {
  const { scrollYProgress } = useScroll({
    container: scrollRef   // <-- NOW WORKS
  });

  // MOVE IMAGE UPWARDS
  const bgY = useTransform(
    scrollYProgress,
    [0, 1],
    ["0%", "-80%"]   // adjust later
  );

  return (
    <motion.div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100vh",
        overflow: "hidden",
        zIndex: -1,
        y: bgY
      }}
    >
      <img
        src={src}
        alt="story background"
        style={{
          width: "100%",
          height: "auto",
          minHeight: "100vh",    // ensures it never leaves blank space
          objectFit: "cover",
        }}
      />
    </motion.div>
  );
};

export default BackgroundScroll;
