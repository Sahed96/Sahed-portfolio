/* eslint-disable react/no-unescaped-entities */
import { PiBracketsCurlyBold } from "react-icons/pi";

const About = () => {
  return (
    <div id="about" className="lg:mt-20 mt-10 lg:p-0 p-4 lg:flex">
      <div>
        <h3 className="text-[35px] gap-2 font-semibold flex items-center">
          About Me{" "}
          <span className="text-[#70FF00] ">
            <PiBracketsCurlyBold />
          </span>
        </h3>
        <p className="text-lg font-normal mt-3 max-w-[600px] ">
          As a passionate Frontend Web Developer, I thrive on bringing dynamic
          and responsive websites to life. With a keen eye for design and a deep
          understanding of HTML, CSS, and JavaScript, I create user-friendly
          interfaces that not only look great but function seamlessly. My
          journey in web development has been fueled by a continuous drive to
          learn and adapt to the latest technologies and trends. I am committed
          to delivering high-quality code, optimizing performance, and enhancing
          user experiences. Let's collaborate to turn ideas into engaging
          digital experiences that captivate and delight users.
        </p>
      </div>
      <div>
        <div className="mb-6 lg:mt-0 mt-6 lg:flex justify-center">
          <h3 className="text-[35px] text-center gap-2 font-semibold flex items-center">
            Education{" "}
            <span className="text-[#70FF00] ">
              <PiBracketsCurlyBold />
            </span>
          </h3>
        </div>
        <div>
          <ul className="timeline  timeline-vertical">
            <li>
              <div className="timeline-start">(2017-22)</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end bg-transparent timeline-box">
                <p>
                  <span className="font-bold text-lg">University:</span>{" "}
                  National University
                </p>
                <p>
                  <span className="font-bold text-lg">Institute:</span> Govt.
                  Azizul Haque College,Bogura
                </p>
                <p>
                  <span className="font-bold text-lg">Subject:</span>{" "}
                  Mathematics
                </p>
              </div>
              <hr />
            </li>
            <li>
              <hr />
              <div className="timeline-start">2024</div>
              <div className="timeline-middle">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-5 w-5"
                >
                  <path
                    fillRule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
              <div className="timeline-end bg-transparent timeline-box">
                <p>
                  <span className="font-bold text-lg">Course:</span> Web
                  Development
                </p>
                <p>
                  <span className="font-bold text-lg">Institute:</span>{" "}
                  Programming Hero
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
