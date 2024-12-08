import PropTypes from "prop-types";
const SectionText = ({ title, primaryText, description }) => {
  return (
    <div className="text-center max-w-[650px] mx-auto">
      <h2 className="mb-3 text-4xl font-bold text-white font-Sync ">
        {title} <span className="text-primaryColor">{primaryText}</span>
      </h2>
      <p className="text-lg text-gray-400">{description}</p>
    </div>
  );
};

SectionText.propTypes = {
  title: PropTypes.string.isRequired,
  primaryText: PropTypes.string,
  description: PropTypes.string.isRequired,
};

export default SectionText;
