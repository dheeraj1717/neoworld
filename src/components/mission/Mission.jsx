import { motion } from "framer-motion";
import InnovativeIcon from "../../assets/InnovativeResearch.svg";
import ExcellenceIcon from "../../assets/Excellence.svg";
import SustainableSolutionsIcon from "../../assets/SustainableSolutions.svg";

const Mission = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.5,
        staggerChildren: 0.3,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="py-10 md:px-10">
      <div className="flex justify-center items-center flex-col">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
          className="max-w-[580px] text-center"
        >
          <motion.h3
            variants={itemVariants}
            className="text-4xl font-semibold text-primary tracking-tight"
          >
            Mission & Vision
          </motion.h3>
          <motion.p
            variants={itemVariants}
            className="text-secondary leading-6 sm:leading-7 text-[14px] sm:text-[20px] mt-4 px-5"
          >
            To harness advanced 2D, 3D, and biomaterials, delivering innovative,
            eco-friendly solutions that align with circular economy principles.{" "}
            <br />
            To be at the forefront of material innovation, driving sustainable
            advancements in essential technologies.
          </motion.p>
        </motion.div>
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={containerVariants}
        className="flex flex-col md:flex-row items-center justify-center mx-auto gap-10 md:gap-10 lg:gap-24 mt-8"
      >
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-2 w-[300px] text-center rounded-[8px] justify-center items-center p-5"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)" }}
        >
          <img src={InnovativeIcon} alt="innovation" className="w-16" />
          <h4 className="text-2xl font-semibold text-primary">
            Innovative <br /> Research
          </h4>
          <p className="text-secondary">
            Using cutting-edge research to unlock the potential of advanced
            materials
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-2 w-[300px] text-center rounded-[8px] justify-center items-center p-5"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)" }}
        >
          <img src={ExcellenceIcon} alt="excellence" className="w-16" />
          <h4 className="text-2xl font-semibold text-primary">
            Excellence in <br /> Science
          </h4>
          <p className="text-secondary">
            Foster a culture of scientific rigor and excellence to solve
            critical real-world problems
          </p>
        </motion.div>
        <motion.div
          variants={cardVariants}
          className="flex flex-col gap-2 w-[300px] text-center rounded-[8px] justify-center items-center p-5"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)" }}
        >
          <img src={SustainableSolutionsIcon} alt="sustainablesolutions" className="w-16" />
          <h4 className="text-2xl font-semibold text-primary">
            Sustainable <br /> Solutions
          </h4>
          <p className="text-secondary">
            Develop eco-friendly and sustainable material solutions with a focus
            on minimizing environmental impact
          </p>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Mission;
