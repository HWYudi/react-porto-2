import React from "react";

export default function Service() {
  return (
    <div className="py-20 bg-gray-800 text-white">
      <div className="max-w-screen-xl mx-auto">
        <h1 className="mx-10 text-3xl font-semibold border-b-2 border-white inline-block">
          Services
        </h1>
        <div className="mt-20 flex flex-wrap md:flex-nowrap gap-5 mx-10">
          <div className="w-full md:w-1/3 p-5 lg:p-8 bg-[#27313B] rounded-md">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#7AEAD1"
                class="bi bi-code-slash"
                viewBox="0 0 16 16"
              >
                <path d="M10.478 1.647a.5.5 0 1 0-.956-.294l-4 13a.5.5 0 0 0 .956.294zM4.854 4.146a.5.5 0 0 1 0 .708L1.707 8l3.147 3.146a.5.5 0 0 1-.708.708l-3.5-3.5a.5.5 0 0 1 0-.708l3.5-3.5a.5.5 0 0 1 .708 0m6.292 0a.5.5 0 0 0 0 .708L14.293 8l-3.147 3.146a.5.5 0 0 0 .708.708l3.5-3.5a.5.5 0 0 0 0-.708l-3.5-3.5a.5.5 0 0 0-.708 0" />
              </svg>
              <h1 className="text-base">Web Development</h1>
            </div>
            <p className="text-sm mt-3 capitalize">
              Making dynamic or static websites and responsive websites. Or
              Full-stack Website depending on the project.
            </p>
          </div>

          <div className="w-full md:w-1/3 p-5 md:p-8 bg-[#27313B] rounded-md">
            <div className="flex items-center gap-3">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M5.92 11.4697C7.33 11.4697 8.46 12.6107 8.46 14.0307V17.4397C8.46 18.8497 7.33 19.9997 5.92 19.9997H2.54C1.14 19.9997 0 18.8497 0 17.4397V14.0307C0 12.6107 1.14 11.4697 2.54 11.4697H5.92ZM17.4601 11.4697C18.8601 11.4697 20.0001 12.6107 20.0001 14.0307V17.4397C20.0001 18.8497 18.8601 19.9997 17.4601 19.9997H14.0801C12.6701 19.9997 11.5401 18.8497 11.5401 17.4397V14.0307C11.5401 12.6107 12.6701 11.4697 14.0801 11.4697H17.4601ZM5.92 0C7.33 0 8.46 1.15 8.46 2.561V5.97C8.46 7.39 7.33 8.53 5.92 8.53H2.54C1.14 8.53 0 7.39 0 5.97V2.561C0 1.15 1.14 0 2.54 0H5.92ZM17.4601 0C18.8601 0 20.0001 1.15 20.0001 2.561V5.97C20.0001 7.39 18.8601 8.53 17.4601 8.53H14.0801C12.6701 8.53 11.5401 7.39 11.5401 5.97V2.561C11.5401 1.15 12.6701 0 14.0801 0H17.4601Z"
                  fill="url(#paint0_linear_51_81)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_51_81"
                    x1="10"
                    y1="0"
                    x2="10"
                    y2="19.9997"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stop-color="#7AEAD1" />
                    <stop offset="1" stop-color="white" />
                  </linearGradient>
                </defs>
              </svg>
              <h1 className="text-base">UI/UX DESIGNER </h1>
            </div>
            <p className="text-sm mt-3 capitalize">
              making a website with good user interface and good user experience
              for make it looks good
            </p>
          </div>

          <div className="w-full md:w-1/3 p-5 md:p-8 bg-[#27313B] rounded-md">
            <div className="flex items-center gap-3">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="#7AEAD1"
                class="bi bi-phone"
                viewBox="0 0 16 16"
              >
                <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z" />
                <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2" />
              </svg>
              <h1 className="text-base">Mobile Development</h1>
            </div>
            <p className="text-sm mt-3 capitalize">
              making a responsive mobile application using progressive web
              application/ PWA
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
