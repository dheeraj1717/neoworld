import Logo from "../assets/xbulllogo.png";

const Header = () => {
  const navItems = ["Swap", "Node", "Pool"];
  return (
    <div className="flex justify-between px-20 py-4">
      <div className="logo bg-[]">
        <img src={Logo} alt="logo" className="h-[30px] w-[85px]" />
      </div>
      <div className="flex gap-x-5 text-white text-[16px]">
        <div className="py-[5px] px-[18px]">Docs</div>
        {navItems.map((item, i) => (
          <span
            key={i}
            className="border-[2px] border-[#21246A] rounded-[8px] py-[5px] px-[18px]"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Header;
