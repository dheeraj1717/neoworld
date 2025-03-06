import { motion } from "framer-motion";
import aboutImage from "../../assets/About.svg";

const AboutUs = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="about">
      <div className="flex w-full md:flex-row-reverse flex-col gap-10 sm:gap-5 text-center md:text-left justify-around items-center bg-[#f6fefb] h-full px-5 sm:px-10 lg:px-20 py-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="max-w-[400px] sm:max-w-[450px] lg:max-w-[600px] flex flex-col gap-5"
        >
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[110%] tracking-wide text-[#4D4D4D]">
            About{" "}
            <span className="text-green">
              Neo World Advanced <br /> Materials
            </span>
          </h2>
          <p className="text-secondary leading-6 sm:leading-7 text-[14px] sm:text-[20px]">
          Neo World Advanced Materials is a pioneering startup committed to advancing the frontiers of material science and technology. Our work focuses on leveraging the potential of 2D, 3D, and biomaterials to develop innovative solutions for industrial and scientific challenges. With a strong emphasis on research and development, we create sustainable and impactful technologies across various sectors, including water filtration, healthcare, and energy storage.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={aboutImage}
            alt="About"
            className="max-w-[300px] sm:max-w-full"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUs;
