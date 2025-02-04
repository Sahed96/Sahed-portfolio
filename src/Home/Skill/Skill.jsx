import { PiBracketsCurlyBold } from "react-icons/pi";
import logo1 from "../../assets/akar-icons_github-fill.png";
import logo2 from "../../assets/css3-original 1.png";
import logo3 from "../../assets/html5-original 1.png";
import logo4 from "../../assets/javascript-original 1.png";
import logo5 from "../../assets/nodejs-original 1.png";
import logo6 from "../../assets/react-original 1.png";
import logo7 from "../../assets/vscode-icons_file-type-tailwind.png";
import logo8 from "../../assets/vscode-icons_file-type-vscode.png";
import logo9 from "../../assets/mo.png";
import logo10 from "../../assets/ex.png";

const Skill = () => {
  return (
    <div id="skill" className="mt-16 lg:p-0 p-4">
      <h3 className="text-[35px] gap-2 font-semibold flex items-center">
        Skills{" "}
        <span className="text-[#70FF00] ">
          <PiBracketsCurlyBold />
        </span>
      </h3>
      <div className="grid mt-6 grid-cols-2 lg:ml-0 ml-12 lg:grid-cols-5 gap-8">
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo3}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo2}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo4}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo7}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo6}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo5}
          alt=""
        />
        <img
          className="h-[100px] bg-[#c7edeb] p-3 rounded-3xl"
          src={logo1}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo8}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo9}
          alt=""
        />
        <img
          className="h-[100px] bg-[#161616] p-3 rounded-3xl"
          src={logo10}
          alt=""
        />
      </div>
    </div>
  );
};

export default Skill;
