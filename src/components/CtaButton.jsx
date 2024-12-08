import { motion } from "framer-motion";
import PropTypes from "prop-types";
const CtaButton = ({ name }) => {
  return (
    <motion.button
      whileHover={{ scale: 1.05, backgroundColor: "#c85d00" }}
      whileTap={{ scale: 0.95 }}
      className="block px-8 py-2.5 mx-auto mt-10 text-lg font-bold text-center text-white rounded-full bg-primaryColor"
    >
      {name}
    </motion.button>
  );
};

CtaButton.propTypes = {
  name: PropTypes.string.isRequired,
};

export default CtaButton;
