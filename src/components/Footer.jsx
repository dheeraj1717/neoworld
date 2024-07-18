import Logo from "../assets/xbulllogo.png";
import XLogo from "../assets/Frame 10.png";
import TelegramLogo from "../assets/Frame 11.png";
import TiktokLogo from "../assets/Frame 9.png";
import Discordlogo from "../assets/Frame 12.png";
import InstagramLogo from "../assets/Frame 9 (1).png";
import maskgroup from "../assets/Mask group.png";

const Footer = () => {
  const socialImages = [
    { src: XLogo, alt: "X Logo" },
    { src: TelegramLogo, alt: "Telegram Logo" },
    { src: TiktokLogo, alt: "Tiktok Logo" },
    { src: Discordlogo, alt: "Discord Logo" },
    { src: InstagramLogo, alt: "Instagram Logo" },
  ];
  const Menu = ["Launch App", "Tokenomics", "Docs"];
  const Support = ["General Support", "Community", "Blog"];

  return (
    <div className="relative bg-[#070A47] rounded-[32px] md:p-20 p-10 md:m-20 m-5 text-[16px] font-inter overflow-hidden ">
      {/* Background Image */}
      <div
        style={{
          width: "363.81px",
          height: "363.81px",
          position: "absolute",
          top: "-70.52px",
          left: "0",
          opacity: 0.5,
          transform: "rotate(10.14deg)",
          background:
            "radial-gradient(50% 50% at 50% 50%, #D9D9D9 -60%, rgba(115, 115, 115, 0) 100%)",
          zIndex: 1,
        }}
      >
        <img
          src={maskgroup}
          alt="mask group"
          style={{ width: "100%", height: "100%" }}
        />
      </div>

      {/* Footer Content */}
      <div className="relative z-10">
        <div className="flex flex-col md:flex-row">
          <div className="w-full md:w-1/2">
            <div className="mb-6 md:mb-0">
              <img src={Logo} alt="logo" className="h-[80px]" />
            </div>
            <div>
              <p className="font-[400] leading-[24px] text-[#F2F3FC] w-full md:w-[420px] my-6">
                XBR Foundation builds protocol infrastructure for decentralized
                basket of token or coin, not creating or endorsing any Xstaking
                pools or investment strategies.
              </p>
            </div>
            <div className="flex gap-x-2">
              {socialImages.map((item, i) => (
                <img key={i} src={item.src} alt={item.alt} className="w-10" />
              ))}
            </div>
          </div>
          <div className="w-full md:w-1/2 flex justify-between md:justify-normal md:gap-x-44 mt-6 md:mt-0">
            <div className="flex flex-col">
              <div className="text-[14px] text-[#77798C] font-[500] uppercase mb-3 md:mb-7">
                Menu
              </div>
              {Menu.map((menu, i) => (
                <div key={i} className="text-[#F2F3FC] my-3 md:my-3">
                  {menu}
                </div>
              ))}
            </div>
            <div className="flex flex-col">
              <div className="text-[14px] text-[#77798C] font-[500] uppercase mb-3 md:mb-7">
                Support
              </div>
              {Support.map((support, i) => (
                <div key={i} className="text-[#F2F3FC] my-3 md:my-3">
                  {support}
                </div>
              ))}
            </div>
          </div>
        </div>
        <div
          className="mt-7"
          style={{
            border: "0.5px solid transparent",
            borderImageSource:
              "linear-gradient(90deg, rgba(119, 121, 140, 0) 0%, #77798C 9.73%, #77798C 90.25%, rgba(119, 121, 140, 0) 100%)",
            borderImageSlice: 1,
          }}
        ></div>
        <div className="md:flex justify-between mt-7 text-center">
          <div className="text-[#F2F3FC]">©2024 XBR FOUNDATION LAB</div>
          <div className="md:flex  text-[#5663F2] gap-x-10">
            <div>Terms & Conditions</div>
            <div>Privacy Policy</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
