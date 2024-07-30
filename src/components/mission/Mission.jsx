import InnovativeIcon from "../../assets/InnovativeResearch.svg";
import ExcellenceIcon from "../../assets/Excellence.svg";
import SustainableSolutionsIcon from "../../assets/SustainableSolutions.svg";

const Mission = () => {
  return (
    <section className="py-10 md:px-10
    ">
      <div className=" flex justify-center items-center flex-col">
        <div className="max-w-[580px] text-center">
          <h3 className="text-4xl font-semibold text-primary tracking-tight">
            Mission & Vision
          </h3>
          <p className="text-secondary leading-6 mt-4 px-5">
            To lead globally in developing sustainable, advanced materials and
            technologies that revolutionize industries and enhance the quality
            of life.
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center  mx-auto gap-10 md:gap-10 lg:gap-24 mt-8">
        <div
          className="flex flex-col gap-2 w-[300px] text-center rounded-[8px] justify-center items-center p-5"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)" }}
        >
          <img src={InnovativeIcon} alt="" className="w-16" />
          <h4 className="text-2xl font-semibold text-primary">
            Innovative <br /> Research
          </h4>
          <p className="text-secondary">
            {" "}
            Using cutting-edge research to unlock the potential of advanced
            materials
          </p>
        </div>
        <div
          className="flex flex-col gap-2 w-[300px] text-center rounded-[8px] justify-center items-center p-5"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)" }}
        >
          <img src={ExcellenceIcon} alt="" className="w-16" />
          <h4 className="text-2xl font-semibold text-primary">
            Excellence in  <br /> Science
          </h4>
          <p className="text-secondary">
            {" "}
            Foster a culture of scientific rigor and excellence to solve
            critical real-world problems
          </p>
        </div>
        <div
          className="flex flex-col gap-2 w-[300px] text-center rounded-[8px] justify-center items-center p-5"
          style={{ boxShadow: "0px 2px 4px 0px rgba(171, 190, 209, 0.2)" }}
        >
          <img src={SustainableSolutionsIcon} alt="" className="w-16" />
          <h4 className="text-2xl font-semibold text-primary">
            Sustainable <br /> Solutions
          </h4>
          <p className="text-secondary">
            {" "}
            Develop eco-friendly and sustainable material solutions with a focus
            on minimizing environmental impact
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;