import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaSquareFacebook } from "react-icons/fa6";
import { HashLink as Link } from "react-router-hash-link";

const Nav = () => {
  const navList = (
    <>
      <Link to="#about">About</Link>
      <Link to="#skill">Skill</Link>
      <Link to="#project">Project</Link>
      <Link to="#footer">Contact</Link>
    </>
  );
  return (
    <div className="navbar">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content border-[1px] bg-transparent rounded-box z-[1] mt-3 w-52 p-2"
          >
            {navList}
          </ul>
        </div>
        <a className="lg:text-4xl text-3xl font-bold">GolamRosul</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu gap-12 text-4xl font-semibold menu-horizontal px-1">
          {navList}
        </ul>
      </div>
      <div className="navbar-end gap-2 lg:gap-3">
        <Link to="https://www.linkedin.com/in/golam-rosul-sahed/">
          <button>
            <FaLinkedin className="lg:w-10 w-7 lg:h-10 h-7" />
          </button>
        </Link>
        <Link to="https://www.facebook.com/Sahed1802/">
          <button>
            <FaSquareFacebook className="lg:w-10 w-7 lg:h-10 h-7" />
          </button>
        </Link>
        <Link to="https://github.com/Sahed96">
          <button>
            <FaGithub className="lg:w-10 w-7 lg:h-10 h-7" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
