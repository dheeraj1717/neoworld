import React from "react";
import { motion } from "framer-motion";
import labIcon from "../../assets/Lab.svg";
import { Droplets, HeartPulse } from "lucide-react";

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
          <img src={labIcon} alt="lab image" />
        </motion.div>
      </div>
      {/* <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 py-10 px-5 mt-5">
        <div
          className="w-[80vw] lg:w-[400px] xl:w-[540px] flex flex-col px-10 py-4"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.5)" }}
        >
          <div className="relative flex justify-center items-center flex-col gap-2">
            <div className="absolute w-12 h-12 bg-green bg-opacity-10 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-mdrounded-tr-md  top-0 right-[41%]"></div>
            <HeartPulse size={40} className="text-green relative" />
            <h4 className="text-primary text-3xl font-semibold tracking-wide mt-2">
              Healthcare
            </h4>
            <p className="text-secondary text-center">
            Our advanced lab-on-chip technology with nanomaterials provides precise blood analysis for early disease detection, enhancing diagnostic accuracy
            </p>
          </div>
        </div>
        <div
          className="w-[80vw] lg:w-[400px] xl:w-[540px]  flex flex-col px-10 py-3"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.5)" }}
        >
          <div className="relative flex justify-center items-center flex-col gap-2">
            <div className="absolute w-12 h-12 bg-green bg-opacity-10 rounded-tl-2xl rounded-br-2xl rounded-tr-md rounded-bl-mdrounded-tr-md  top-0 right-[42%]"></div>
            <Droplets size={40} className="text-green relative " />
            <h4 className="text-primary text-3xl font-semibold tracking-wide mt-2 text-center">
              Graphene Water Filtration
            </h4>
            <p className="text-secondary text-center">
              We also utilize graphene in water filtration to ensure clean, safe
              drinking water by effectively removing contaminants. 
            </p>
          </div>
        </div>
      </div> */}
    </section>
  );
};

export default Verticals;
