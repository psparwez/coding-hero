import { motion } from "framer-motion";
import SectionVariants, { CardHoverVariants } from "../animations/varients.js";

import SectionText from "../components/SectionText";

// icons
import { BiGroup } from "react-icons/bi";
import { LuSofa, LuTicket } from "react-icons/lu";
import { AiOutlineLike } from "react-icons/ai";
const ourProgramData = [
  {
    id: 1,
    title: "Attend and learn any topic",
    description: "Expand your knowledge with diverse coding subjects",
    icon: <BiGroup size={30} />,
  },
  {
    id: 2,
    title: "Meet like-minded individuals",
    description: "Connect with peers from the comfort of your sofa.",
    icon: <LuSofa size={30} />,
  },
  {
    id: 3,
    title: "All events are free to join",
    description: "No cost barriers to your learning journey",
    icon: <LuTicket size={30} />,
  },
  {
    id: 4,
    title: "Use your VOTE as super power",
    description: "Appreciate the best event creators with vote",
    icon: <AiOutlineLike size={30} />,
  },
];

const OurProgram = () => {
  return (
    <section
      id="our-program "
      className="px-4 py-20 m-0 md:px-10 bg-gray-950/30"
    >
      <motion.div
        variants={SectionVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        className="container mx-auto "
      >
        <SectionText
          title="What's there for regular users"
          description="Join the Coding Hero program and unlock these amazing benefits"
        />
        <div className="grid items-center grid-cols-1 gap-6 mt-10 lg:px-32 md:grid-cols-2">
          {ourProgramData?.map((item) => (
            <motion.div
              variants={CardHoverVariants}
              initial="hidden"
              whileHover="hover"
              whileTap={{ scale: 0.98 }}
              className="shadow-xl rounded-xl ring-1 ring-gray-700/70 p-7 bg-gradient-to-tr from-gray-800 to-gray-900"
              key={item.id}
            >
              <div className="flex items-start justify-between gap-2">
                <div className="w-full">
                  <div className="flex items-start justify-between w-full">
                    <div className="flex flex-wrap items-center gap-3 mb-2 text-white">
                      <span className="text-2xl text-primaryColor">
                        {item.icon}
                      </span>
                      <h3 className="text-lg font-bold font-Sync ">
                        {item.title}
                      </h3>
                    </div>

                    <button className="px-3 py-1 text-sm text-white rounded-md shadow-lg bg-gradient-to-tr from-primaryColor to-primaryColor/60 justify-self-end ">
                      Free
                    </button>
                  </div>
                  <p className="mt-4 text-gray-400 sm:mt-0">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* cta  */}
        <div className="w-full py-5 mt-20 text-center">
          <h2 className="mb-4 text-2xl font-bold text-transparent sm:text-3xl md:text-4xl bg-gradient-to-r via-white bg-clip-text from-white to-gray-800 font-Sync">
            Ready to become a Coding Hero?
          </h2>
          <p className="w-full text-sm sm:text-base sm:w-[80%] mx-auto text-gray-400">
            Join thousands of students from across India and start your coding
            journey today!
          </p>
          <motion.button
            whileHover={{ scale: 1.05, backgroundColor: "#c85d00" }}
            whileTap={{ scale: 0.95 }}
            className="px-6 py-2 mt-6 text-base font-bold text-white rounded-full sm:px-8 bg-primaryColor"
          >
            Sign Up Now
          </motion.button>
        </div>
      </motion.div>
    </section>
  );
};

export default OurProgram;
