import { motion } from "framer-motion";
import SectionVariants, {
  CardHoverVariantsTwo,
} from "../animations/varients.js";

import {
  FaUsers,
  FaNetworkWired,
  FaStar,
  FaChalkboardTeacher,
  FaCrown,
} from "react-icons/fa";

import { MdOutlineChevronRight } from "react-icons/md";
import { LuAward } from "react-icons/lu";

const benefitsData = [
  {
    id: 1,
    title: "Earn Cash Prizes",
    description: "Compete and win exciting cash rewards.",
    icon: <LuAward className="text-3xl text-yellow-500" />,
    backgroundColor: "bg-gradient-to-r from-yellow-400 to-yellow-600",
  },
  {
    id: 2,
    title: "Build Community",
    description: "Create a network around your favorite tech.",
    icon: <FaUsers className="text-3xl text-blue-500" />,
    backgroundColor: "bg-gradient-to-r from-blue-400 to-blue-600",
  },
  {
    id: 3,
    title: "Network",
    description: "Connect with fellow tech enthusiasts.",
    icon: <FaNetworkWired className="text-3xl text-purple-500" />,
    backgroundColor: "bg-gradient-to-r from-purple-400 to-purple-600",
  },
  {
    id: 4,
    title: "Gain Reputation",
    description: "Stand out as a community leader in tech.",
    icon: <FaStar className="text-3xl text-orange-500" />,
    backgroundColor: "bg-gradient-to-r from-orange-400 to-orange-600",
  },
  {
    id: 5,
    title: "True Tech Teaching",
    description: "Share knowledge without sales pitches.",
    icon: <FaChalkboardTeacher className="text-3xl text-green-500" />,
    backgroundColor: "bg-gradient-to-r from-green-400 to-green-600",
  },
  {
    id: 6,
    title: "Leadership",
    description: "Develop your leadership skills.",
    icon: <FaCrown className="text-3xl text-red-500" />,
    backgroundColor: "bg-gradient-to-r from-red-400 to-red-600",
  },
];

const Benefits = () => {
  return (
    <section className="relative px-4 py-20 overflow-hidden md:px-10 bg-gradient-to-tr from-gray-950/30 via-gray-950/40 to-gray-900/10">
      <motion.div
        variants={SectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container w-full mx-auto backdrop-blur-3xl"
      >
        <div className="text-center">
          <p className="select-none conicGradient ">
            <span className="relative z-20 text-sm shadow-sm font-Sync sm:text-base">
              Become a Coding Hero
            </span>
          </p>
          <h2 className="mb-4 text-3xl font-bold text-transparent sm:text-4xl from-pink-600 font-Sync bg-gradient-to-r via-yellow-500 to-orange-600 bg-clip-text">
            Super power of Coding heros
          </h2>
          <p className="text-sm text-gray-400 sm:text-base">
            Join the Coding Hero program and unlock a world of opportunities.
            Open to all college students across India.
          </p>
        </div>
        <div className="grid items-center justify-center grid-cols-1 gap-5 mt-10 md:grid-cols-2 lg:grid-cols-3 lg:px-4">
          {benefitsData?.map((benefit) => (
            <motion.div
              variants={CardHoverVariantsTwo}
              initial="hidden"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="p-8 shadow-xl bg-gradient-to-bl rounded-xl from-gray-900 ring-1 ring-gray-800/70 to-gray-950/10 backdrop-blur-2xl "
              key={benefit.id}
            >
              <div>
                <div className="flex flex-wrap items-center gap-4 mb-2">
                  {benefit.icon}
                  <h3 className="text-lg font-semibold sm:text-xl text-blue-50 font-Sync ">
                    {benefit.title}
                  </h3>
                </div>
                <p className="text-base text-gray-400 ">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
          <div className="absolute w-24 h-24 -translate-x-1/2 bg-blue-400 rounded-full left-1/2 -z-10 blur-[100px]"></div>
        </div>

        <motion.button
          whileHover={{
            scale: 1.05,
            backgroundPosition: "right center",
            transition: { duration: 0.3 },
          }}
          className="flex items-center gap-1 px-6 py-2 sm:py-2.5 font-medium mx-auto text-lg text-center text-white rounded-full min-w-max mt-14 bg-gradient-to-r from-orange-500 to-pink-500 bg-[length:200%_100%] hover:from-orange-600 hover:to-pink-600 transition-all duration-500"
        >
          Join Now
          <MdOutlineChevronRight size={24} />
        </motion.button>
      </motion.div>
    </section>
  );
};

export default Benefits;
