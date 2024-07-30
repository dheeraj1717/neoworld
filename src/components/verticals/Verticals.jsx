import React from "react";
import labIcon from "../../assets/Lab.svg";
import { Droplets, HeartPulse } from "lucide-react";

const Verticals = () => {
  return (
    <section id="verticals" className="flex justify-center flex-col items-center py-10 md:py-20 bg-[#f3f6f8]">
      <div className="flex w-full flex-col md:flex-row  gap-10 sm:gap-5 text-center md:text-left  justify-around items-center  h-full  px-5 sm:px-10 lg:px-20 ">
        <div className="max-w-[600px] flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-green">
            Microfluidics Lab-on-Chip
          </h2>
          <p className="text-secondary leading-6 sm:leading-7 text-[14px] sm:text-[20px] ">
          Our advanced lab-on-chip technology with nanomaterials provides precise blood analysis for early disease detection, enhancing diagnostic accuracy. We also utilize graphene in water filtration to ensure clean, safe drinking water by effectively removing contaminants. Additionally, our energy storage systems incorporate advanced materials for high efficiency and sustainability, supporting reliable energy solutions.
          </p>
        </div>
        <img src={labIcon} alt="lab image" />
      </div>
      <div className="flex flex-col lg:flex-row gap-16 lg:gap-24 py-10 px-5 mt-5">
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
        {/* <div
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
        </div> */}
      </div>
    </section>
  );
};

export default Verticals;
