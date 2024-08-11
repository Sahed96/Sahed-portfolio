import { FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer
      id="footer"
      className="footer footer-center mt-10 text-white bg-[#0b1e41] rounded p-10"
    >
      <div className="">
        <h2 className="font-semibold text-4xl">Feel free to reach out...</h2>
        <p className="font-normal text-xl">golam96rosul@gmail.com</p>
        <p className="font-normal text-xl">+88 01521404818</p>
      </div>
      <nav>
        <div className="grid grid-flow-col gap-4">
          <Link to="https://www.linkedin.com/in/golam-rosul-sahed/">
            <FaLinkedin className="w-[30px] h-[30px]" />
          </Link>
          <Link to="https://wa.me/qr/LWEXTJ6CKTB5M1">
            <FaWhatsapp className="w-[30px] h-[30px]" />
          </Link>
          <Link to="https://www.facebook.com/Sahed1802/">
            <button>
              <FaSquareFacebook className="w-[30px] h-[30px]" />
            </button>
          </Link>
        </div>
      </nav>
      <aside>
        <p className="text-lg font-medium">
          GolamRosul © ${new Date().getFullYear()} - All right reserved
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
