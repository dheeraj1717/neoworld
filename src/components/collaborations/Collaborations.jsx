import React from "react";
import { motion } from "framer-motion";
import iitGuwahati from "../../assets/IIT_Guwahati_Logo.svg_.png";
import vcfirmsLogo from "../../assets/[removal.ai]_20db732b-947d-4718-92a6-9dd175678905-venturecapial.png";
import GrapheneCounsilLogo from "../../assets/graphenecouncilLogo.png";

const Collaborations = () => {
  const collaborators = [
    { src: iitGuwahati, name: "IIT Guwahati", width: "w-36" },
    { src: vcfirmsLogo, name: "VC Firm", width: "w-[250px]" },
    { src: GrapheneCounsilLogo, name: "Graphene Council", width: "w-[250px]" },
  ];

  const textVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, delay: i * 0.2 },
    }),
  };

  return (
    <div className="py-16 lg:py-20">
      <div className="text-center flex flex-col items-center gap-5 px-5">
        <motion.h1
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-4xl font-semibold text-primary"
        >
          Collaborations & Partners
        </motion.h1>
        <motion.p
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={textVariants}
          className="text-secondary max-w-[800px] text-center leading-6 sm:leading-7 text-[14px] sm:text-[20px]"
        >
          We are proud to collaborate with leading organizations in various
          sectors to advance material science and technology. Our partnerships
          with the Graphene Council, venture capital firms, academia, and
          manufacturers drive our mission forward and enable us to deliver
          cutting-edge solutions.
        </motion.p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-16 md:gap-10">
        {collaborators.map((item, index) => (
          <motion.div
            key={item.name}
            custom={index}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={cardVariants}
            className="w-[300px] flex flex-col justify-center items-center gap-3"
          >
            <div className="h-[150px] flex justify-center items-center">
              <img
                src={item.src}
                alt={`${item.name} logo`}
                className={item.width}
              />
            </div>
            <h4 className="text-xl font-medium text-primary">{item.name}</h4>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Collaborations;
