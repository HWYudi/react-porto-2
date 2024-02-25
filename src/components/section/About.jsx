import React from "react";

export default function About() {
  return (
    <div className="bg-[#3C454E] text-white py-20">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="mx-10 text-3xl font-semibold border-b-2 inline-block">
          About Me
        </h1>
        <div className="mt-20 md:mt-0 flex flex-wrap md:flex-nowrap justify-center items-center mx-10 gap-10">
          <div className="w-full md:w-1/2">
            <h1 className="text-3xl font-bold">
              <span className="text-[#6957DF]">Fullstack</span> Developer
            </h1>
            <p className="text-[#7c8594] capitalize text-base">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolorem,
              voluptatum! Veritatis quo laboriosam cum, molestias nihil id! Quos
              explicabo aut corporis. Laborum, nihil quibusdam debitis nam
              temporibus aspernatur possimus harum modi cum iusto dolore
              consequuntur eum. Quasi unde ab cumque, beatae, laborum neque
              nobis commodi nulla quas dignissimos doloribus quam?
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="/images/image (13).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
