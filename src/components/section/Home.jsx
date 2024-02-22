import React from "react";

export default function Home() {
  return (
    <div className="h-screen max-w-screen-xl mx-auto flex justify-center items-center">
      <div className="flex flex-wrap md:flex-nowrap justify-center items-center mx-10 gap-3">
        <div className="w-full flex flex-col gap-3">
          <div>
            <h1 className="text-4xl font-bold">
              Hi There! This Is <span className="text-[#6957DF]">Hijriyanto Wahyudi</span>{" "}
              Fullstack Engineer.
            </h1>
          </div>
          <div>
            <p className="text-[#7C8594] font-medium text-xs">
              I’ll provides a full service range including technical skills.
              design,business understanding.
            </p>
          </div>
          <div className="flex gap-4">
            <div className="w-fit">
              <a
                href="/"
                className="bg-[#6957DF] text-white px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clip-path="url(#clip0_5_38)">
                    <path
                      d="M10.538 15.7585C14.9591 14.2785 17.4406 9.05042 15.1036 4.52831C12.2916 -0.912652 4.59399 -1.26671 1.28109 3.89253C-1.62286 8.41492 0.678589 14.2746 5.48543 15.7578C5.88477 15.8311 6.0307 15.5841 6.0307 15.3734C6.0307 15.1834 6.02358 14.5534 6.01931 13.8871C3.79838 14.3697 3.32928 12.9453 3.32928 12.9453C2.96553 12.0228 2.44233 11.7772 2.44233 11.7772C1.71626 11.2818 2.49714 11.2918 2.49714 11.2918C3.29867 11.3473 3.7215 12.1146 3.7215 12.1146C4.43405 13.3354 5.59149 12.9824 6.04565 12.7774C6.11825 12.2627 6.32469 11.9096 6.55247 11.711C4.78 11.5096 2.91499 10.8241 2.91499 7.76389C2.91499 6.89118 3.22677 6.18006 3.73645 5.62055C3.6553 5.41768 3.37982 4.60547 3.81546 3.5064C3.81546 3.5064 4.4853 3.29214 6.01148 4.32501C7.31557 3.97397 8.64713 3.96205 10.0092 4.32643C11.5325 3.29214 12.2037 3.50782 12.2037 3.50782C12.6401 4.60761 12.3653 5.4191 12.2835 5.62126C12.7953 6.18006 13.1042 6.89189 13.1042 7.7646C13.1042 10.8326 11.2364 11.5082 9.45748 11.706C9.74506 11.9538 9.99918 12.4392 9.99918 13.1838C9.99918 14.2516 9.98851 15.1122 9.98851 15.3756C9.98851 15.5884 10.1337 15.8368 10.538 15.7585Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_5_38">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                GitHub
              </a>
            </div>

            <div className="w-fit bg-[#232B36] border border-[#323A45] text-white px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2">
              <a href="/">contact me</a>
            </div>
          </div>
          <div className="mt-16">
            Services
          </div>
        </div>
        <div className="w-full flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/139124580?v=4"
            alt=""
            className="rounded-full"
          />
        </div>
      </div>
    </div>
  );
}
