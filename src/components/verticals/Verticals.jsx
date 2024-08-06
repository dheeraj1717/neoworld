import React from "react";
import { motion } from "framer-motion";
import labIcon from "../../assets/Lab.svg";

const Verticals = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section
      id="verticals"
      className="flex justify-center flex-col items-center py-10 md:py-20 bg-[#f3f6f8]"
    >
      <div className="flex w-full flex-col md:flex-row gap-10 sm:gap-5 text-center md:text-left justify-around items-center h-full px-5 sm:px-10 lg:px-20">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="max-w-[600px] flex flex-col gap-5"
        >
          <h2 className="text-4xl font-semibold text-green">
            Microfluidics Lab-on-Chip
          </h2>
          <p className="text-secondary leading-6 sm:leading-7 text-[14px] sm:text-[20px]">
            At Neo World Advanced Materials, we are pioneering the development
            of state-of-the-art microfluidics lab-on-chip systems for both in
            vitro and in vivo studies. Our innovative technology is designed to
            provide a comprehensive blood picture and accurate biomarker
            detection, delivering precise quantitative data. This advanced
            solution empowers clinicians, doctors, and hospitals with vital
            insights for informed decision-making and improved patient care. By
            integrating cutting-edge nanomaterials and bioinformatics, our
            lab-on-chip devices are at the forefront of healthcare diagnostics,
            setting new standards in precision medicine.
          </p>
        </motion.div>
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <img src={labIcon} alt="lab" />
        </motion.div>
      </div>
    </section>
  );
};

export default Verticals;
