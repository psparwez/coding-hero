// framer motion
import { motion } from "framer-motion";
import { fadeInUp } from "../animations/varients.js";

import MedalImage from "../assets/images/medal.png";
// import graph from "../assets/images/graph.svg";
import AnimatedSVG from "./AnimatedSVG.jsx";

// Array of icon data
const iconsData = [
  {
    id: 1,
    color: "#fa580117",
    ringColor: "#fa580140",
    position: "top-24 left-56",
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-512/free-html-logo-icon-download-in-svg-png-gif-file-formats--brand-company-business-brands-pack-logos-icons-2284975.png?f=webp&w=256",
    delay: 0.5,
  },
  {
    id: 2,
    color: "#01ccfa17",
    ringColor: "#01ccfa34",
    position: "bottom-44 left-[450px]",
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-512/free-css-logo-icon-download-in-svg-png-gif-file-formats--logos-pack-icons-722685.png?f=webp&w=256",
    delay: 1,
  },
  {
    id: 3,
    color: "#faa70117",
    ringColor: "#faa70132",
    position: "bottom-48 right-[500px]",
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-512/free-javascript-logo-icon-download-in-svg-png-gif-file-formats--brand-development-tools-pack-logos-icons-225993.png?f=webp&w=256",
    delay: 1.5,
  },
  {
    id: 4,
    color: "#01d0fa17",
    ringColor: "#01d0fa41",
    position: "top-28 right-[250px]",
    imgSrc:
      "https://cdn.iconscout.com/icon/free/png-512/free-react-logo-icon-download-in-svg-png-gif-file-formats--programming-langugae-freebies-pack-logos-icons-1175109.png?f=webp&w=256",
    delay: 2,
  },
];

const iconAnimation = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 2,
      type: "spring",
      damping: 10,
      stiffness: 100,
    },
  },
};

const Hero = () => {
  const heroDescription = `Join India's most active coding community. Share knowledge, win prizes, and build your tech network - all for free!`;

  return (
    <section id="home" className="relative z-10">
      <div className="pt-14 ">
        <div className="container relative z-20 px-4 mx-auto overflow-hidden py-36 sm:px-0">
          <div className="text-center">
            {/* Animated Text Box */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 1.5,
                type: "spring",
                damping: 10,
                stiffness: 300,
              }}
              className="inline-flex items-center gap-2 px-3 py-2 mb-2 text-xs rounded-full select-none bg-primaryColor/5 text-primaryColor ring-1 ring-primaryColor/10"
            >
              {/* Animated Pulse Icon */}
              <span className="inline-block relative before:content-[''] before:absolute before:h-4 before:w-4 before:bg-primaryColor/20 before:-translate-y-1/2 before:-translate-x-1/2 before:top-1/2 before:left-1/2 before:rounded-full before:animate-pulse animate-pulse w-2 h-2 rounded-full bg-primaryColor/70" />
              Empower Your Journey to Coding Excellence!
            </motion.p>

            {/* Main Heading Animation */}
            <motion.h1
              {...fadeInUp}
              transition={{ ...fadeInUp.whileInView.transition }}
              className="text-[26px] lg:text-7xl text-yellow-50 font-Sync leading-[1.2] font-bold mb-4"
            >
              Become a Coding Hero,
              <br />
              <span className="text-transparent bg-gradient-to-r bg-clip-text from-primaryColor via-primaryColor to-yellow-100">
                Shape India&apos;s Tech Future.
              </span>
            </motion.h1>

            {/* Hero Description Text */}
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.whileInView.transition, delay: 1.0 }}
              className="w-full md:max-w-[70%] font-Urbanist mb-10 text-base sm:text-lg text-gray-400 mx-auto"
            >
              {heroDescription}
            </motion.p>

            {/* Monthly Prizes Text */}
            <motion.p
              {...fadeInUp}
              transition={{ ...fadeInUp.whileInView.transition, delay: 1.5 }}
              className="flex items-center justify-center gap-2 my-3 mb-10 text-base text-yellow-50"
            >
              <img className="h-5" src={MedalImage} alt="Golden Medal Icon" />
              Win Monthly Prizes
            </motion.p>

            {/* Sign Up Button Animation */}
            <motion.button
              whileHover={{
                scale: 1.05,
                backgroundColor: "#c85d00",
                transition: { type: "spring", stiffness: 300 },
              }}
              whileTap={{ scale: 0.95 }}
              {...fadeInUp}
              className="px-8 py-[10px] font-Urbanist text-base font-bold sm:text-lg rounded-full bg-primaryColor text-yellow-50 sm:font-medium"
            >
              Sign Up Now
            </motion.button>
          </div>
          {/* graph  */}

          <div className="absolute  bottom-0 left-auto -z-20 h-[750px]   right-0">
            <AnimatedSVG />
          </div>
          {/* bottom gradient background that cover graph   */}
          <div className="absolute bottom-0 w-full -z-10 h-80 bottomImage"></div>
          {/* Icons  */}
          <div className=" opacity-20">
            {iconsData.map((icon) => (
              <motion.div
                key={icon.id}
                variants={iconAnimation}
                initial="hidden"
                whileInView="visible"
                transition={{
                  ...iconAnimation.visible.transition,
                  delay: icon.delay,
                }}
                className={`absolute grid rounded-full   w-12 h-12 shadow-lg place-items-center ${icon.position}`}
                style={{
                  boxShadow: `inset 0 0 0 1px ${icon.ringColor}`,
                  backgroundColor: icon.color,
                }}
              >
                <img className="h-5 opacity-50" src={icon.imgSrc} alt="" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
