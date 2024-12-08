import { motion } from "framer-motion";
import SectionVariants, { CardHoverVariants } from "../animations/varients.js";

// icons
import {
  LuCheckCircle,
  LuCalendar,
  LuVideo,
  LuUsers,
  LuStar,
  LuTrophy,
  LuArrowUpRight,
} from "react-icons/lu";
import CtaButton from "./CtaButton";

const stepsData = [
  {
    id: 1,
    title: "Anyone Can Apply",
    description:
      "Open to all college students in India, regardless of your coding experience.",
    icon: <LuCheckCircle />,
    backgroundColor: "bg-gradient-to-r from-purple-600 to-purple-500",
    stepBgColor: "bg-purple-500",
  },
  {
    id: 2,
    title: "Wait for Open Intake",
    description:
      "Keep an eye out for our application periods throughout the year.",
    icon: <LuCalendar />,
    backgroundColor: "bg-gradient-to-r from-blue-600 to-blue-500",
    stepBgColor: "bg-blue-500",
  },
  {
    id: 3,
    title: "Submit Your Application",
    description:
      "Create a video showcasing why you're the best fit and how you'll contribute to the community.",
    icon: <LuVideo />,
    backgroundColor: "bg-gradient-to-r from-green-600 to-green-500",
    stepBgColor: "bg-green-500",
  },
  {
    id: 4,
    title: "Create and Host Events",
    description:
      "Once accepted, start organizing coding events and invite luusers to participate.",
    icon: <LuUsers />,
    backgroundColor: "bg-gradient-to-r from-yellow-600 to-yellow-500",
    stepBgColor: "bg-yellow-500",
  },
  {
    id: 5,
    title: "Voting System",
    description:
      "Users can attend events and vote for their favorite each month.",
    icon: <LuStar />,
    backgroundColor: "bg-gradient-to-r from-pink-600 to-pink-500",
    stepBgColor: "bg-pink-500",
  },
  {
    id: 6,
    title: "Win Monthly Prizes",
    description: "The highest-voted event host wins the pool prize each month.",
    icon: <LuTrophy />,
    backgroundColor: "bg-gradient-to-r from-red-600 to-red-500",
    stepBgColor: "bg-red-500",
  },
  {
    id: 7,
    title: "Fresh LuStart Every Month",
    description:
      "The competition resets monthly, giving everyone a chance to shine.",
    icon: <LuArrowUpRight />,
    backgroundColor: "bg-gradient-to-r from-indigo-600 to-indigo-500",
    stepBgColor: "bg-indigo-500",
  },
];

const Journey = () => {
  let stepNum = 1;
  return (
    <section id="" className="py-20 pt-10">
      <motion.div
        variants={SectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container relative z-10 mx-auto"
      >
        <div className="w-full px-4 md:max-w-[650px] mx-auto mb-5 text-center">
          <h2 className="mb-3 text-2xl font-bold text-transparent sm:text-3xl md:text-4xl font-Sync bg-gradient-to-r from-gray-200 bg-clip-text to-gray-500">
            Your <span className="text-white"> 7-Step</span> Journey to Becoming
            a Coding Hero
          </h2>
          <p className="text-base text-gray-400 sm:text-lg ">
            Take the path to becoming a coding leader: apply, host events,
            inspire others, and compete for the top spot each month!
          </p>
        </div>
        <div className="relative grid w-full grid-cols-1 gap-10 px-4 mt-10 md:px-10 lg:grid-cols-2">
          <div className="w-full ml-auto ">
            {stepsData?.slice(0, 4).map((step) => (
              <motion.div
                variants={CardHoverVariants}
                initial="hidden"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="relative flex flex-wrap items-start gap-5 p-6 mb-4 bg-gray-800 rounded-lg sm:flex-nowrap"
                key={step.id}
              >
                <div
                  className={` ${step.backgroundColor} rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0 w-12 h-12 `}
                >
                  {step.icon}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-medium text-white font-Sync">
                    {step.title}
                  </h3>
                  <p className="text-base text-gray-400 leading-[25px]">
                    {step.description}
                  </p>
                </div>
                <p
                  className={`absolute top-6  bg-gray-900/40 ring-1 ring-gray-800 shadow-lg py-[2px] rounded text-white/40 right-6 ring-inset  px-2 text-sm font-Sync`}
                >
                  Step : {stepNum++}
                </p>
              </motion.div>
            ))}
          </div>

          <div className="w-full ml-auto ">
            {stepsData?.slice(4).map((step) => (
              <motion.div
                variants={CardHoverVariants}
                initial="hidden"
                whileHover="hover"
                whileTap={{ scale: 0.98 }}
                className="relative flex flex-wrap items-start gap-5 p-6 mb-4 bg-gray-800 rounded-lg sm:flex-nowrap"
                key={step.id}
              >
                <div
                  className={` ${step.backgroundColor} rounded-full flex items-center justify-center text-white text-2xl flex-shrink-0 w-12 h-12 `}
                >
                  {step.icon}
                </div>
                <div className="flex flex-col ">
                  <h3 className="mb-2 text-xl font-medium text-white font-Sync">
                    {step.title}
                  </h3>
                  <p className=" leading-[25px] text-gray-400  text-base">
                    {step.description}
                  </p>
                </div>
                <p
                  className={`absolute top-6 font-Sync  bg-gray-900/40 ring-1 ring-gray-800 shadow-lg py-[2px] rounded text-white/40 right-6  px-2 text-sm`}
                >
                  Step : {stepNum++}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
        <CtaButton name="Start Your Journey" />

        {/* blub  */}
        <div className="absolute left-0 w-32 h-32 bottom-10 rounded-full blur-[200px] bg-indigo-600 -z-10"></div>
      </motion.div>
    </section>
  );
};

export default Journey;
