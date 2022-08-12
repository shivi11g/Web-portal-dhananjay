import React from "react";
import { Link } from "react-router-dom";
import logo2 from "./images/logo.png";
function Nav() {
  return (
    <>
      <div className="bg-blue-900  fixed top-0 flex justify-between text-white w-full">
        <div className=" details flex flex-col justify-between px-4 py-2 rounded-lg mt-2 h-14">
          <img className="w-16 " src={logo2} alt="logo1" />
        </div>
        <ul className=" flex justify-end flex-wrap space-x-4 w-full">
          <li className="shadow-lg rounded-lg px-4 py-4 border border-white-800 my-2 hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/basic-info">Basic Info</Link>
            </button>
          </li>
          <li className=" shadow-lg  rounded-lg px-4 py-4 border border-white-800 my-2 hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/contact">Contact</Link>
            </button>
          </li>
          <li className="shadow-lg  rounded-lg px-4 py-4 border border-white-800 my-2 hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/education">Education</Link>
            </button>
          </li>
          <li className="shadow-lg  rounded-lg px-4 py-4 border border-white-800 my-2 hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/test-score">Test Score</Link>
            </button>
          </li>
          <li className="shadow-lg  rounded-lg px-4 py-4 border border-white-800 my-2 hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/experience">Experience</Link>
            </button>
          </li>
          <li className="shadow-lg  rounded-lg px-4 py-4 border border-white-800 my-2  hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/academic-rewards">Academic Rewards</Link>
            </button>
          </li>
          <li className="shadow-lg  rounded-lg px-4 py-4 border border-white-800 my-2 hover:opacity-60 focus:opacity-100">
            <button>
              <Link to="/mba/additional-info">Additional Info</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Nav;
