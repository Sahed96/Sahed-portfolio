import { FaGreaterThan, FaLessThan } from 'react-icons/fa';
import pic from '../../../public/sahed.png';
import './Pic.css';
import resume from '../../../public/resume.pdf';

const Banner = () => {
  return (
    <div className="lg:flex lg:p-0 p-4 justify-between items-center mt-12 lg:mt-[100px]">
      <div>
        <p className="text-[30px] lg:text-start text-center font-bold">
          Hello, i am
        </p>
        <h1 className="text-[#70FF00] ml-10 leading-6 flex items-center lg:text-[78px] text-[40px] font-bold">
          <FaLessThan />
          Golam
        </h1>
        <h1 className="text-[#70FF00] ml-40 leading-7 flex items-center lg:text-[78px] text-[40px] font-bold">
          Rosul /<FaGreaterThan />
        </h1>
        <p className="lg:text-[40px] text-[30px] font-bold ">
          Frontend Web Developer
        </p>
        <div className="lg:ml-[100px] ml-20">
          <a href={resume}>
            <button className="text-xl box-border border-4 border-sky-900 w-48 h-14 rounded-lg bg-sky-600 text-white relative group">
              <span className="pr-8 font-bold text-[25px]">Resume</span>
              <span className="bg-sky-900 absolute right-0 top-0  h-full flex items-center justify-center px-1 group-hover:duration-300 group-hover:w-full w-10 duration-300">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  className="w-8 inline mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g strokeWidth="0"></g>
                  <g
                    id="SVGRepo_tracerCarrier"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  ></g>
                  <g id="SVGRepo_iconCarrier">
                    <path
                      d="M12 3V16M12 16L16 11.625M12 16L8 11.625"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                    <path
                      d="M15 21H9C6.17157 21 4.75736 21 3.87868 20.1213C3 19.2426 3 17.8284 3 15M21 15C21 17.8284 21 19.2426 20.1213 20.1213C19.8215 20.4211 19.4594 20.6186 19 20.7487"
                      stroke="#ffffff"
                      strokeWidth="1.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    ></path>
                  </g>
                </svg>
              </span>
            </button>
          </a>
        </div>
      </div>
      <div className=" ">
        <img className="heroImg pb-14" src={pic} alt="" />
      </div>
    </div>
  );
};

export default Banner;
