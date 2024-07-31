import React from "react";
import { motion } from "framer-motion";

const careers = [
  {
    title: "Chief Technology Officer (CTO)",
    description: "Lead our technology strategy and development initiatives.",
  },
  {
    title: "Chief Operating Officer (COO)",
    description: "Oversee our operations and help drive our growth.",
  },
  {
    title: "Postdoctoral Research Scholars",
    description:
      "Contribute to cutting-edge research in sustainable development and advanced materials.",
  },
];

const Career = () => {
  const variants = {
    hidden: { opacity: 0, y: 100 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.3,
        duration: 0.3,
      },
    }),
  };

  return (
    <div id="careers" className="mb-10 px-5">
      <motion.h3
        className="text-4xl font-semibold text-primary tracking-tight text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={0}
        variants={variants}
      >
        Careers
      </motion.h3>

      <motion.h4
        className="text-2xl font-semibold text-green text-center mt-5"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        custom={1}
        variants={variants}
      >
        Join Our Team
      </motion.h4>
      <div className="w-full flex flex-col justify-center items-center ">
        <motion.p
          className="text-secondary leading-7 text-[14px] sm:text-[20px] mt-5 text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={2}
          variants={variants}
        >
          Neo World Advanced Materials is expanding! We are currently seeking
          passionate and innovative individuals to join our team in the
          following positions:
        </motion.p>
        <div className="mt-5 w-full flex flex-col lg:flex-row items-center justify-center">
          {careers.map((career, index) => (
            <motion.div
              key={index}
              className="bg-white shadow-md rounded-lg p-6 m-4 text-center w-[350px] h-[160px]"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index + 3}
              variants={variants}
            >
              <h5 className="text-xl font-bold text-green">{career.title}</h5>
              <p className="text-primary mt-2">{career.description}</p>
            </motion.div>
          ))}
        </div>
        <motion.p
          className="text-secondary leading-7 text-[14px] sm:text-[20px] max-w-[700px] text-center"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={careers.length + 3}
          variants={variants}
        >
          If you are driven by innovation and are eager to make a difference in
          the field of sustainable development, we want to hear from you! Join
          us in shaping the future of technology and material science.
        </motion.p>
        <h4 className="text-2xl text-green mt-5">Contact Us</h4>
        <div className="flex gap-2 text-primary">
          <div>Contact No. :</div>
          <div> +91 9848805721</div>
        </div>
        <div className="flex gap-2 text-primary">
          <div>Email :</div>
          <div>vn.madhav@gmail.com</div>
        </div>
      </div>
    </div>
  );
};

export default Career;
