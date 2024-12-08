import { motion } from "framer-motion";

const AnimatedSVG = () => {
  return (
    <motion.svg
      width="100%" // Make width 100% of its container
      height="100%" // Make height 100% of its container
      viewBox="0 0 1453 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }} // Initial opacity for the entire SVG
      animate={{ opacity: 1 }} // Animate opacity to full visibility
      transition={{ duration: 1 }} // Transition for opacity
    >
      {/* Rect Element */}
      <motion.rect
        x="0.5"
        y="0.5"
        width="1452"
        height="1023"
        rx="19.5"
        stroke="none"
        initial={{ opacity: 0 }} // Make it initially invisible
        animate={{ opacity: 1 }} // Fade in the rectangle
        transition={{ duration: 0.8 }}
      />

      {/* Path Element (Gradient Background) */}
      <motion.path
        d="M72.5 922.192C72.4229 921.964 72.4223 921.734 72.5 921.5V922.192C78.3725 939.549 527.837 941.241 553.5 921.5C579.5 901.5 571.5 874.5 607.5 904.5C643.5 934.5 699 904.5 699 904.5C699 904.5 742 864.5 782.5 865C823 865.5 844.5 895 851 904.5C857.5 914 845.5 862 876 852.5C906.5 843 928.5 799.5 951 811C951 811 1005.5 811 1011.5 730C1017.5 649 1065 697.5 1088.5 705C1112 712.5 1172.5 621.5 1178 588C1183.5 554.5 1268 566.5 1259.5 526C1251 485.5 1366.5 423.5 1368 327C1369.5 230.5 1436.5 216 1436.5 216V1016H72.5V922.192Z"
        fill="url(#paint0_linear_4_2)"
        initial={{ pathLength: 0 }} // Path initially not drawn
        animate={{ pathLength: 1 }} // Animate the path to be drawn
        transition={{
          duration: 2,
          ease: "easeInOut",
        }}
      />

      {/* Path Element (Outline) */}
      <motion.path
        d="M72.5 921.5C66.5 939.5 527.5 941.5 553.5 921.5C579.5 901.5 571.5 874.5 607.5 904.5C643.5 934.5 699 904.5 699 904.5C699 904.5 742 864.5 782.5 865C823 865.5 844.5 895 851 904.5C857.5 914 845.5 862 876 852.5C906.5 843 928.5 799.5 951 811C951 811 1005.5 811 1011.5 730C1017.5 649 1065 697.5 1088.5 705C1112 712.5 1172.5 621.5 1178 588C1183.5 554.5 1268 566.5 1259.5 526C1251 485.5 1366.5 423.5 1368 327C1369.5 230.5 1436.5 216 1436.5 216"
        stroke="#1f2937"
        fill="none"
        initial={{ pathLength: 0 }} // Path initially not drawn
        animate={{ pathLength: 1 }} // Animate the path to be drawn
        transition={{
          duration: 2,
          delay: 0.5,
          ease: "easeInOut",
        }}
      />

      {/* Circle Element */}
      <motion.circle
        cx="1435"
        cy="217"
        r="4.5"
        fill="#1f2937"
        stroke="#82BCFF"
        initial={{ scale: 0 }} // Initially scaled down
        animate={{ scale: 1 }} // Animate scale to normal size
        transition={{
          duration: 1,
          delay: 1.5,
          type: "spring",
          stiffness: 300,
        }}
      />

      {/* Gradient Definitions */}
      <defs>
        <linearGradient
          id="paint0_linear_4_2"
          x1="754.471"
          y1="216"
          x2="754.471"
          y2="1016"
          gradientUnits="userSpaceOnUse"
        >
          <stop stopColor="#1f2937" stopOpacity="0.15" />
          <stop offset="1" stopColor="#1f2937" stopOpacity="0.03" />
        </linearGradient>
      </defs>
    </motion.svg>
  );
};

export default AnimatedSVG;
