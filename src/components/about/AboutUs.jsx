import React from "react";
import aboutImage from "../../assets/About.svg";

const AboutUs = () => {
  return (
    <section id="about">
      <div className="flex w-full md:flex-row flex-col gap-10 sm:gap-5 text-center md:text-left justify-around items-center bg-[#f6fefb] h-full  px-5 sm:px-10 lg:px-20 py-20">
        <div className="max-w-[400px] sm:max-w-[450px]  lg:max-w-[600px] flex flex-col gap-5">
          <h2 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[110%] tracking-wide text-[#4D4D4D]">
            About{" "}
            <span className="text-green">
              Neo World Advanced <br /> Materials
            </span>
          </h2>
          <p className="text-secondary leading-6 sm:leading-7 text-[14px] sm:text-[20px] ">
            We are a pioneering startup incubating at the state-of-the-art lab
            facilities of IIT Guwahati, committed to advancing the frontiers of
            material science and technology. Our strides forward stem from the
            innovative application of 2D, 3D, and biomaterials to navigate and
            resolve complex industrial and scientific problems. By leveraging
            cutting-edge research and development, we aim to create sustainable
            and impactful solutions across various sectors, including water
            filtration, healthcare, and energy storage.
          </p>
        </div>
        <div>
          <img
            src={aboutImage}
            alt="About Image"
            className="max-w-[300px] sm:max-w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
