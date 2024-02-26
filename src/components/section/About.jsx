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
            <p className="capitalize text-base bg-[#252B39] mt-5 p-5 rounded-xl">
             let me introduce myself my name is hijriyanto wahyudi but you can call me yudi I am 17 years old my pronouns are he/him , i live in batam kepulauan riau , I am a student of SMK Negeri 7 Batam , my hobby is playing games , reading , listening music , I am a Fullstack Developer. I love to build web applications. i love to learn new things.
            </p>
          </div>
          <div className="w-full md:w-1/2">
            <img src="./images/image (13).png" alt="" />
          </div>
        </div>
      </div>
    </div>
  );
}
