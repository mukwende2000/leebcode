import React from "react";
import { Link } from "react-router-dom";
import images from "../images/index";
function Home() {
  console.log(images[0]);
  return (
    <div className="flex flex-col items-center grow text-center">
      <div className="p-12 bg-gray-100 w-full">
        <h1 className="font-bold text-4xl">
          DevBlog - A Blog Template Made For Developers
        </h1>
        <p className="py-5 text-gray-500 text-base">
          Welcome to my blog. Subscribe and get my latest blog post in your
          inbox.
        </p>
        <form action="" className="w-full">
          <input
            type="email"
            name="email"
            id="email"
            placeholder="Enter Email"
            className="w-1/2 h-12 rounded border-gray-500 border-2 bg-transparent focus:outline-5 outline-offset-6 outline-green-100 placeholder:translate-x-6"
          />
          <button className="h-12 px-12 bg-[#5fcb71] text-white font-bold rounded mx-2 hover:opacity-80 transition-opacity">
            Subscribe
          </button>
        </form>
      </div>
      <div>
        <div className="flex px-36 py-10 gap-20 items-start">
          <div className="w-1/2">
            <img src={images[1]} alt="" />
          </div>
          <div className="text-left">
            <h1 className="font-bold capitalize text-2xl">
              Top 3 javascript frameworks
            </h1>
            <p className="text-gray-500 my-1">
              <span>
                Published <span id="">3</span> days ago.
              </span>
              5 min read. 8 comments
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies...
            </p>
            <Link className="text-[#5fcb71] text-2xl">Read More</Link>
          </div>
        </div>
        <div className="flex px-36 py-20 gap-20 items-start">
          <div className="w-1/2">
            <img src={images[1]} alt="" />
          </div>
          <div className="text-left">
            <h1 className="font-bold capitalize text-2xl">
              Top 3 javascript frameworks
            </h1>
            <p className="text-gray-500 my-1">
              <span>
                Published <span id="">3</span> days ago.
              </span>
              5 min read. 8 comments
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies...
            </p>
            <Link className="text-[#5fcb71] text-2xl">Read More</Link>
          </div>
        </div>
        <div className="flex px-36 py-20 gap-20 items-start">
          <div className="w-1/2">
            <img src={images[1]} alt="" />
          </div>
          <div className="text-left">
            <h1 className="font-bold capitalize text-2xl">
              Top 3 javascript frameworks
            </h1>
            <p className="text-gray-500 my-1">
              <span>
                Published <span id="">3</span> days ago.
              </span>
              5 min read. 8 comments
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa. Cum sociis natoque
              penatibus et magnis dis parturient montes, nascetur ridiculus mus.
              Donec quam felis, ultricies...
            </p>
            <Link className="text-[#5fcb71] text-2xl">Read More</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
