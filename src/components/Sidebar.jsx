import React from "react";
import { Link } from "react-router-dom";
import images from "../images/index";
import {
  FaFacebook,
  FaLinkedin,
  FaGithub,
  FaSlack,
  FaCodepen,
  FaHome,
  FaBlog,
  FaUser,
} from "react-icons/fa";

function Sidebar() {
  return (
    <div className="bg-[#5fcb71] flex flex-col items-center h-screen w-80 sticky top-0">
      <h1 className="font-bold text-3xl my-5 text-white">Anthony's Blog</h1>
      <div>
        <img src={images[0]} alt="profile" />
      </div>
      <p className="text-white text-center p-5">
        Hi, my name is Anthony Doe. Briefly introduce yourself here. You can
        also provide a link to the about page.
      </p>
      <Link to="/about" className="text-white text-center underline">
        Find out more about me here
      </Link>
      <div className="flex py-5">
        <FaFacebook className="text-4xl text-[#57cb71] bg-white p-2 rounded-full mx-3" />
        <FaLinkedin className="text-4xl text-[#57cb71] bg-white p-2 rounded-full mx-3" />
        <FaGithub className="text-4xl text-[#57cb71] bg-white p-2 rounded-full mx-3" />
        <FaSlack className="text-4xl text-[#57cb71] bg-white p-2 rounded-full mx-3" />
        <FaCodepen className="text-4xl text-[#57cb71] bg-white p-2 rounded-full mx-3" />
      </div>
      <hr className="text-white" />
      <nav>
        <ul className="">
          <li>
            <Link
              className="flex items-center text-xl font-bold text-white hover:text-black"
              to={{ pathname: "/" }}
            >
              <FaHome />
              <span className="px-2">Blog Home</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-xl font-bold text-white hover:text-black my-3"
              to={{ pathname: "/blogs" }}
            >
              <FaBlog /> <span className="px-2">Blog Post</span>
            </Link>
          </li>
          <li>
            <Link
              className="flex items-center text-xl font-bold text-white hover:text-black"
              to={{ pathname: "/about" }}
            >
              <FaUser /> <span className="px-2">About Me</span>
            </Link>
          </li>
        </ul>
      </nav>
      <button className="bg-red-300 px-20 py-3 my-6 text-white font-bold rounded">
        Get in touch
      </button>
    </div>
  );
}

export default Sidebar;
