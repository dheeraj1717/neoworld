import React from "react";
import { motion } from "framer-motion";
import CleanEnergyImage from "../../assets/CleanEnergy.svg";

const CleanEnergy = () => {
  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const imageVariants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  };

  return (
    <section className="flex w-full md:flex-row flex-col gap-10 sm:gap-5 text-center md:text-left  justify-around items-center  h-full  px-5 sm:px-10 lg:px-20 py-10 bg-[#e7f0f5]">
      <div className="flex w-full flex-col md:flex-row gap-10 sm:gap-5 text-center md:text-left justify-around items-center h-full px-5 sm:px-10 lg:px-20 py-10">
        <motion.img
          src={CleanEnergyImage}
          alt="Clean-Energy"
          className="max-w-[300px] sm:max-w-full"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        />
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="lg:-w-[600px] flex flex-col gap-5"
        >
          <h2 className="text-4xl font-semibold text-primary">
            Clean Energy Storage
          </h2>
          <p className="text-secondary max-w-[600px] leading-6 sm:leading-7 text-[14px] sm:text-[20px]">
            Our focus is on innovative solutions in clean energy storage,
            leveraging advanced materials and sustainable approaches to enhance
            efficiency and sustainability. We aim to lead in the development and
            commercialization of cutting-edge technologies that align with
            global environmental goals.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default CleanEnergy;
