import { motion } from "framer-motion";
import introductionImage from "../../assets/OBJECTS.svg";

const Introduction = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section id="home">
      <div className="flex w-full md:flex-row flex-col gap-10 sm:gap-5 text-center md:text-left justify-around items-center bg-[#F5F7FA] h-full lg:h-[75vh] px-5 sm:px-10 lg:px-20 py-10">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="sm:max-w-[450px] max-w-[400px] lg:max-w-[600px] flex flex-col gap-6"
        >
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[110%] tracking-wide text-primary">
            Welcome to{" "}
            <span className="text-green">Neo World Advanced Materials</span>
          </h1>
          <p className="text-secondary leading-7 text-[14px] sm:text-[20px]">
            Innovating the Future of Material Science. Discover our cutting-edge{" "}
            research and sustainable solutions.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img
            src={introductionImage}
            alt="Introduction"
            className="max-w-[300px] sm:max-w-full "
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Introduction;
