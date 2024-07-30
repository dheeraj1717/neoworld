import introductionImage from "../../assets/OBJECTS.svg";

const Introduction = () => {
  return (
    <section id="home">
      <div className="flex w-full md:flex-row flex-col gap-10 sm:gap-5 text-center md:text-left  justify-around items-center bg-[#F5F7FA] h-full lg:h-[75vh] px-5 sm:px-10 lg:px-20 py-10">
        <div className="sm:max-w-[450px] max-w-[400px] lg:max-w-[600px] flex flex-col gap-6">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold leading-[110%] tracking-wide text-primary">
            Welcome to{" "}
            <span className="text-green">Neo World Advanced Materials</span>
          </h1>
          <p className="text-secondary leading-7 text-[14px] sm:text-[20px]">
            Innovating the Future of Material Science. Discover our cutting-edge{" "}
            research and sustainable solutions.
          </p>
        </div>
        <div>
          <img
            src={introductionImage}
            alt="Introduction Image"
            className="max-w-[300px] sm:max-w-full "
          />
        </div>
      </div>
    </section>
  );
};

export default Introduction;
