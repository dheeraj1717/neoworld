import iitGuwahati from "../../assets/IIT_Guwahati_Logo.svg_.png";
import vcfirmsLogo from "../../assets/[removal.ai]_20db732b-947d-4718-92a6-9dd175678905-venturecapial.png";
import GrapheneCounsilLogo from "../../assets/graphenecouncilLogo.png";

const Collaborations = () => {
  return (
    <div className=" py-16 lg:py-20">
      <div className="text-center flex flex-col items-center gap-5  px-5">
        <h1 className="text-4xl font-semibold text-primary">
          Collaborations & Partners
        </h1>
        <p className="text-secondary max-w-[800px] text-center leading-6 sm:leading-7 text-[14px] sm:text-[20px] ">
          We are proud to collaborate with leading organizations in various
          sectors to advance material science and technology. Our partnerships
          with the Graphene Council, venture capital firms, academia, and
          manufacturers drive our mission forward and enable us to deliver
          cutting-edge solutions.
        </p>
      </div>
      <div className="flex flex-col md:flex-row justify-center items-center py-10 gap-16 md:gap-10">
        <div className="w-[300px] flex flex-col justify-center items-center gap-3">
          <img src={iitGuwahati} alt="" className="w-36 " />
          <h4 className="text-xl font-medium text-primary">IIT Guwahati</h4>
        </div>
        <div className="w-[300px] flex flex-col justify-center items-center gap-3">
          <img src={vcfirmsLogo} alt="" className="w-[250px]" />
          <h4 className="text-xl font-medium text-primary">
            Venture Capatalist Firms
          </h4>
        </div>{" "}
        <div className="w-[300px] flex flex-col justify-center items-center gap-10">
          <img src={GrapheneCounsilLogo} alt="" className="w-[250px]" />
          <h4 className="text-xl font-medium text-primary">Graphene Counsil</h4>
        </div>
      </div>
    </div>
  );
};

export default Collaborations;
