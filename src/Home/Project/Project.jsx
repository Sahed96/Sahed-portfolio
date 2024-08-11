import { PiBracketsCurlyBold } from "react-icons/pi";
import pic1 from "../../assets/1.png";
import arrow2 from "../../assets/Arrow 1 (1).png";
import pic2 from "../../assets/2.png";
import pic3 from "../../assets/3.png";
import { RxDotFilled } from "react-icons/rx";
import { Link } from "react-router-dom";

const Project = () => {
  return (
    <section id="project" className="mt-20 lg:p-0 p-4 text-white">
      <h3 className="text-[35px] gap-2 mb-6 text-white font-semibold flex items-center">
        Projects{" "}
        <span className="text-[#70FF00] ">
          <PiBracketsCurlyBold />
        </span>
      </h3>
      <div className="container mx-auto space-y-12">
        <div className="flex flex-col p-3 border-2 rounded-2xl border-green-300 overflow-hidden shadow-sm lg:flex-row">
          <img src={pic1} alt="" className="h-80 rounded-2xl aspect-video" />
          <div className="pt-2 lg:pl-6 ">
            <h3 className="text-3xl font-bold">
              EduSparkle (Scholarship Management System)
            </h3>
            <ul className="my-3 ">
              <li className="flex gap-1">
                <RxDotFilled />
                Users can search and filter scholarships based on criteria like
                eligibility, field of study, location, etc.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                Secure upload and storage for required documents, ensuring easy
                access for both applicants and administrators.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                users to manage their scholarship applications, track progress,
                and receive updates.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                Automated alerts for application deadlines, updates on
                application status, and new scholarship opportunities.
              </li>
            </ul>
            <p className="font-medium text-[#def1e1]">
              <span className="text-xl mr-4 font-bold">Technology Used:</span>{" "}
              React , Node Js , Tailwind , MongoDB , JavaScript , Html5
            </p>
            <div className="flex gap-4">
              <Link
                to="https://edu-sparkle-2959f.web.app/"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                Live Demo{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
              <Link
                to="https://github.com/Sahed96/EduSparkle-Client"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                Github Client{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
              <Link
                to="https://github.com/Sahed96/EduSparkle-Server"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                GitHub Server{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden p-3 rounded-2xl border-2 border-green-300 shadow-sm lg:flex-row-reverse">
          <img src={pic3} alt="" className="h-80 rounded-2xl aspect-video" />
          <div className="pt-2 lg:pr-6 ">
            <h3 className="text-3xl font-bold">
              Crafty Labs (Arts & Crafts e-Commerce Site)
            </h3>
            <ul className="my-3 ">
              <li className="flex gap-1">
                <RxDotFilled />
                handmade crafts, art supplies, and DIY kits
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                Discover upcoming trends and get inspired by the creativity from
                around the world
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                making it simple to keep track of items you love and plan your
                next purchase.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                Browse through our extensive range of handmade crafts, from
                intricate jewelry to charming home decor pieces.
              </li>
            </ul>
            <p className="font-medium text-[#def1e1]">
              <span className="text-xl mr-4 font-bold">Technology Used:</span>{" "}
              React , Node Js , Tailwind , MongoDB , JavaScript , Html5
            </p>
            <div className="flex gap-4">
              <Link
                to="https://art-and-craft-25847.web.app/"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                Live Demo{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
              <Link
                to="https://github.com/Sahed96/Crafty-Labs-Client"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                Github Client{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
              <Link
                to="https://github.com/Sahed96/Crafty-Labs-Server"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                GitHub Server{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
        <div className="flex flex-col overflow-hidden p-3 border-2 rounded-2xl border-green-300 shadow-sm lg:flex-row">
          <img src={pic2} alt="" className="h-80 rounded-2xl aspect-video" />
          <div className="pt-2 lg:pl-6 ">
            <h3 className="text-3xl font-bold">
              FairView Hotel (Hotel Management System)
            </h3>
            <ul className="my-3 ">
              <li className="flex gap-1">
                <RxDotFilled />
                Secure your stay at FairView Hotel with our simple and
                user-friendly room booking system.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                Leave a review about your stay and our services to help us
                improve and guide future guests.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                View our hotel map location and discover the best routes and
                nearby attractions.
              </li>
              <li className="flex gap-1">
                <RxDotFilled />
                Easily handle all aspects of your room reservations, from
                modifications to cancellations, right from your account.
              </li>
            </ul>
            <p className="font-medium text-[#def1e1]">
              <span className="text-xl mr-4 font-bold">Technology Used:</span>{" "}
              React , Node Js , Tailwind , MongoDB , JavaScript , Html5
            </p>
            <div className="flex gap-4">
              <Link
                to="https://fairview-hotel-c14d2.web.app/"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                Live Demo{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
              <Link
                to="https://github.com/Sahed96/Fairview-Hotel-Client"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                Github Client{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
              <Link
                to="https://github.com/Sahed96/Fairview-Hotel-Server"
                className="bg-transparent hover:bg-teal-500 text-white border-[1px] mt-2 border-white gap-2 flex items-center rounded-[12px] pl-6 pr-4 py-2"
              >
                GitHub Server{" "}
                <span>
                  <img src={arrow2} alt="" />
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;
