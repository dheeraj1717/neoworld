import React from "react";
import CleanEnergyImage from "../../assets/CleanEnergy.svg";

const CleanEnergy = () => {
  return (
    <section className="flex w-full md:flex-row flex-col gap-10 sm:gap-5 text-center md:text-left  justify-around items-center  h-full  px-5 sm:px-10 lg:px-20 py-10 bg-[#e7f0f5]">
      <div className="flex w-full flex-col md:flex-row  gap-10 sm:gap-5 text-center md:text-left  justify-around items-center  h-full  px-5 sm:px-10 lg:px-20 py-10">
        <img
          src={CleanEnergyImage}
          alt="about image"
          className="max-w-[300px] sm:w-full"
        />
        <div className="lg:-w-[600px] flex flex-col gap-5">
          <h2 className="text-4xl font-semibold text-primary">
            Clean Energy Storage
          </h2>
          <p className="text-secondary">
            Our focus is on innovative solutions in clean energy storage,
            leveraging advanced materials and sustainable approaches to enhance
            efficiency and sustainability. We aim to lead in the development and
            commercialization of cutting-edge technologies that align with
            global environmental goals., reomove all the hybrid part
          </p>
        </div>
      </div>
    </section>
  );
};

export default CleanEnergy;
