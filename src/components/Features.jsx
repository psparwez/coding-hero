import { motion } from "framer-motion";
import SectionVariants, {
  CardHoverVariantsTwo,
} from "../animations/varients.js";

import SectionText from "../components/SectionText";

// icons
import { BsCurrencyDollar } from "react-icons/bs";
import { GoBook } from "react-icons/go";
import { LuZap } from "react-icons/lu";
import { FaNetworkWired } from "react-icons/fa";
import { LuAward } from "react-icons/lu";
import { RiCodeSSlashFill } from "react-icons/ri";
import CtaButton from "./CtaButton";

const benefitsList = [
  {
    id: 1,
    title: "Win Cash Prizes",
    description:
      "No worthless coupons, just real cash rewards for your skills.",
    icon: <BsCurrencyDollar className="text-4xl text-yellow-500" />,
    backgroundColor: "bg-gradient-to-r from-yellow-400/20 to-yellow-600/20",
  },
  {
    id: 2,
    title: "No Fees",
    description:
      "Participate in challenges and learn without any financial burden.",
    icon: <LuZap className="text-4xl text-green-500" />,
    backgroundColor: "bg-gradient-to-r from-green-400/20 to-green-600/20",
  },
  {
    id: 3,
    title: "Help Community Learn",
    description: "Share your knowledge and contribute to the growth of others.",
    icon: <GoBook className="text-4xl text-blue-500" />,
    backgroundColor: "bg-gradient-to-r from-blue-400/20 to-blue-600/20",
  },
  {
    id: 4,
    title: "Build Your Network",
    description:
      "Connect with like-minded individuals and grow your professional circle.",
    icon: <FaNetworkWired className="text-4xl text-purple-500" />,
    backgroundColor: "bg-gradient-to-r from-purple-400/20 to-purple-600/20",
  },
  {
    id: 5,
    title: "Join India's Best",
    description:
      "Be part of the most active and vibrant coding community in the country.",
    icon: <LuAward className="text-4xl text-red-500" />,
    backgroundColor: "bg-gradient-to-r from-red-400/20 to-red-600/20",
  },
  {
    id: 6,
    title: "Share Your Expertise",
    description: "Discuss web3, AI, Git, Python, JavaScript, HTML, and more.",
    icon: <RiCodeSSlashFill className="text-4xl text-teal-500" />,
    backgroundColor: "bg-gradient-to-r from-teal-400/20 to-teal-600/20",
  },
];

const Features = () => {
  return (
    <section id="features" className="px-4 py-20">
      <motion.div
        variants={SectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto"
      >
        <SectionText
          title="Why Become a"
          primaryText="Hero"
          description="Join the most active coding community in India and unleash your potential."
        />
        <div className="grid grid-cols-1 gap-5 mt-10 lg:px-16 md:grid-cols-3">
          {benefitsList?.map((benefit) => (
            <motion.div
              variants={CardHoverVariantsTwo}
              initial="hidden"
              whileHover="hover"
              whileTap={{ scale: 0.95 }}
              key={benefit.id}
              className={` ring-gray-600/30  p-6 sm:p-10 rounded-xl gap-3 bg-gradient-to-tr from-[#1b2034]/10 to-[#1b2034] shadow-xl ring-1 `}
            >
              <div
                className={`${benefit.backgroundColor} h-14  justify-center aspect-square rounded flex items-center mb-4`}
              >
                {benefit.icon}
              </div>
              <div>
                <h3 className="mb-3 text-lg font-bold text-white font-Sync">
                  {benefit.title}
                </h3>
                <p className="text-gray-400">{benefit.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <CtaButton name="Join Now" />
      </motion.div>
    </section>
  );
};

export default Features;
