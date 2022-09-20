import React from "react";
import images from "../images/index";

function Blog() {
  return (
    <div className="px-28 py-10">
      <div>
        <h1 className="text-4xl font-bold">
          Why Every Developer Should Have A Blog
        </h1>
        <p className="text-xltext-gray-500 my-1">
          <span>
            Published <span id="">3</span> days ago.
          </span>
          5 min read. 8 comments
        </p>
        <div>
          <img src={images[4]} alt="blog-post-image" />
        </div>
        <p className="text-xl text-gray-500 my-1">
          lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
        </p>
      </div>
      <div>
        <h2 className=" pt-5 text-3xl font-bold">Code Block Example</h2>
        <p className="text-gray-500 text-xl">
          You can get more info at{" "}
          <a href="https://highlightjs.org/.">https://highlightjs.org/.</a>{" "}
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus. Donec quam
          felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla
          consequat massa quis enim. Donec pede justo, fringilla vel, aliquet
          nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a,
          venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium.
          Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean
          vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat
          vitae, eleifend ac, enim.
          <code>{`function $initHighlight(block, cls) { 
  try {
    if (cls.search(/\bno\-highlight\b/) != -1)
      return process(block, true, 0x0F) +
              class="\${cls}";
  } catch (e) {
    /* handle exception */
  }
  for (var i = 0 / 2; i < classes.length; i++) {
    if (checkCondition(classes[i]) === undefined)
      console.log('undefined');
  }
}

export  $initHighlight;`}</code>
        </p>
      </div>
      <div>
        <h2 className=" pt-5 text-3xl font-bold">Typography</h2>
        <p className="text-gray-500 text-xl">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus
          et magnis dis parturient montes, nascetur ridiculus mus.
        </p>
        <h3 className=" py-5 text-2xl font-bold">Bullet Points</h3>
        <ul className="text-gray-500 text-xl list-disc list-inside">
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li className="my-2">Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
        </ul>
        <ol className="text-gray-500 text-xl mt-10 list-decimal list-inside">
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
          <li className="my-2">Lorem ipsum dolor sit amet consectetuer.</li>
          <li>Lorem ipsum dolor sit amet consectetuer.</li>
        </ol>
      </div>
      <div>
        <h3 className=" py-5 text-2xl font-bold">Quote Example:</h3>
        <p className="ml-10 border-l-2 border-black p-5 text-2xl font-bold w-3/4">
          You might not think that programmers are artists, but programming is
          an extremely creative profession. It's logic-based creativity.
          <div className="mt-3">John Romero</div>
        </p>
      </div>
      <div>
        <h3 className=" py-5 text-2xl font-bold">Promo Section Heading</h3>
        <p>
          You can use this section to promote your side projects etc. Lorem
          ipsum dolor sit amet, consectuer adipiscing elit.Aenean commodo ligula
          eget dolor. Aenean massa.
        </p>
        <div>
          <img src={images[3]} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Blog;
