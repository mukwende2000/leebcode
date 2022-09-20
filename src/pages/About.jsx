import React from "react";
import images from "../images/index";

function About() {
  return (
    <div className="px-28">
      <div className="my-5">
        <h1 className="font-bold text-4xl">About Me</h1>
        <p className="text-xl text-gray-500">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus.
        </p>
        <div>
          <img src={images[2]} alt="" />
        </div>
      </div>
      <div className="my-5">
        <h3 className="text-2xl font-bold">About the blog</h3>
        <p className="text-xl text-gray-500">
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas
          tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit
          amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel,
          luctus pulvinar, hendrerit id, lorem. Maecenas nec odio et ante
          tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus.
          Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt.
          Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis
          magna. Sed consequat, leo eget bibendum sodales, augue velit cursus
          nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
          Vestibulum purus quam, scelerisque ut, mollis sed, nonummy id, metus.
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-2xl font-bold">My skills and Experiences</h3>
        <p className="text-xl text-gray-500">
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </p>
      </div>
      <div className="my-5">
        <h3 className="text-2xl font-bold">Side Projects</h3>
        <p className="text-xl text-gray-500">
          Vivamus elementum semper nisi. Aenean vulputate eleifend tellus.
          Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim.
          Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.
          Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum.
          Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur
          ullamcorper ultricies nisi.
        </p>
      </div>
      <div>
        <img src={images[3]} alt="promo-banner" />
      </div>
      <div className="p-12 bg-gray-100 w-full text-center">
        <h1 className="font-bold text-4xl">Newsletter</h1>
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
    </div>
  );
}

export default About;
