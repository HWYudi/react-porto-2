import React from "react";

export default function Home() {
  return (
    <div className="bg-[#27313B] text-white py-10 md:py-0">
      <div className="w-full min-h-screen flex justify-center items-center">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-wrap md:flex-nowrap justify-center items-start xl:items-center mx-10 gap-10 md:gap-0">
            <div className="w-full md:w-1/2 flex flex-col gap-3">
              <div>
                <p className="text-base font-bold">Hello Everyone 👋 I'm</p>
                <h1 className="text-2xl md:text-4xl font-bold">
                  <span className="text-[#7aead1]">
                    Hijriyanto Wahyudi
                  </span>
                </h1>
                <h1 className="text-base md:text-xl font-bold">Fullstack Developer</h1>
              </div>
              <div>
                <p className="text-[#7C8594] font-medium text-xs">
                  I’ll provides a full service range including technical skills.
                  Website, Frontend, Backend and Mobile.
                </p>
              </div>
              <div className="w-full flex gap-2">
                <div className="w-fit">
                  <a
                    href="https://github.com/HWYudi"
                    target="_blank"
                    rel="noreferrer"
                    className="bg-[#6957DF] text-white hover:bg-[#6957DF]/80 duration-200  px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2"
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

                <div className="w-fit bg-[#232B36] border border-[#323A45] text-white hover:bg-[#454B57] hover:text-[#7AEAD1] duration-300 px-6 py-2 rounded-full font-medium flex items-center justify-center gap-2">
                  <a
                    href="https://www.instagram.com/yuu.jsx/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    contact me
                  </a>
                </div>
              </div>
              <div className="mt-16 flex flex-wrap lg:flex-nowrap gap-10">
                <div className="w-full lg:w-1/2 flex gap-2">
                  <div className="items-start">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 30 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="14.5"
                        fill="#25323F"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="29"
                        height="29"
                        rx="14.5"
                        stroke="#59626B"
                      />
                      <path
                        d="M15.5976 6.66675C16.2278 6.66675 16.7984 7.01675 17.1135 7.53341C17.2668 7.78341 17.369 8.09175 17.3434 8.41675C17.3264 8.66675 17.4031 8.91675 17.5393 9.15008C17.9737 9.85841 18.936 10.1251 19.6854 9.72508C20.5286 9.24175 21.5931 9.53341 22.0785 10.3584L22.6491 11.3417C23.1431 12.1667 22.8705 13.2251 22.0189 13.7001C21.295 14.1251 21.0395 15.0667 21.4739 15.7834C21.6101 16.0084 21.7634 16.2001 22.0019 16.3167C22.2999 16.4751 22.5299 16.7251 22.6917 16.9751C23.0068 17.4917 22.9812 18.1251 22.6747 18.6834L22.0785 19.6834C21.7634 20.2167 21.1758 20.5501 20.5711 20.5501C20.2731 20.5501 19.9409 20.4667 19.6684 20.3001C19.447 20.1584 19.1915 20.1084 18.919 20.1084C18.0759 20.1084 17.369 20.8001 17.3434 21.6251C17.3434 22.5834 16.5599 23.3334 15.5806 23.3334H14.4224C13.4345 23.3334 12.651 22.5834 12.651 21.6251C12.6339 20.8001 11.9271 20.1084 11.084 20.1084C10.8029 20.1084 10.5474 20.1584 10.3345 20.3001C10.062 20.4667 9.72135 20.5501 9.4318 20.5501C8.81862 20.5501 8.231 20.2167 7.91589 19.6834L7.32827 18.6834C7.01316 18.1417 6.99613 17.4917 7.31124 16.9751C7.4475 16.7251 7.70299 16.4751 7.99254 16.3167C8.231 16.2001 8.38429 16.0084 8.52907 15.7834C8.95488 15.0667 8.69939 14.1251 7.97551 13.7001C7.13239 13.2251 6.85987 12.1667 7.3453 11.3417L7.91589 10.3584C8.40984 9.53341 9.46586 9.24175 10.3175 9.72508C11.0584 10.1251 12.0208 9.85841 12.4551 9.15008C12.5913 8.91675 12.668 8.66675 12.651 8.41675C12.6339 8.09175 12.7276 7.78341 12.8894 7.53341C13.2045 7.01675 13.7751 6.68341 14.3968 6.66675H15.5976ZM15.01 12.6501C13.6729 12.6501 12.5913 13.7001 12.5913 15.0084C12.5913 16.3167 13.6729 17.3584 15.01 17.3584C16.347 17.3584 17.4031 16.3167 17.4031 15.0084C17.4031 13.7001 16.347 12.6501 15.01 12.6501Z"
                        fill="url(#paint0_linear_4_56)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_4_56"
                          x1="14.9999"
                          y1="6.66675"
                          x2="14.9999"
                          y2="23.3334"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="#86FB92" />
                          <stop offset="1" stop-color="#FBF086" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h1>Services</h1>
                    <p className="text-[#7C8594]">
                      Website application design, Website Frontend & Backend
                    </p>
                  </div>
                </div>
                <div className="w-full lg:w-1/2 flex gap-2">
                  <div className="items-start">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 50 50"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <rect
                        x="0.5"
                        y="0.5"
                        width="49"
                        height="49"
                        rx="24.5"
                        fill="#25323F"
                      />
                      <rect
                        x="0.5"
                        y="0.5"
                        width="49"
                        height="49"
                        rx="24.5"
                        stroke="#59626B"
                      />
                      <path
                        d="M25 28.9674C30.4233 28.9674 35 29.8487 35 33.2487C35 36.65 30.3933 37.5 25 37.5C19.578 37.5 15 36.6187 15 33.2187C15 29.8174 19.6067 28.9674 25 28.9674ZM25 12.5C28.6739 12.5 31.6175 15.4425 31.6175 19.1138C31.6175 22.7851 28.6739 25.7289 25 25.7289C21.3274 25.7289 18.3825 22.7851 18.3825 19.1138C18.3825 15.4425 21.3274 12.5 25 12.5Z"
                        fill="url(#paint0_linear_30_166)"
                      />
                      <defs>
                        <linearGradient
                          id="paint0_linear_30_166"
                          x1="25"
                          y1="12.5"
                          x2="25"
                          y2="37.5"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stop-color="white" />
                          <stop offset="1" stop-color="#6241FF" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                  <div>
                    <h1>Biography</h1>
                    <p className="text-[#7C8594]">
                      Work for money and Code for love ! i’m Hijriyanto Wahyudi,
                      an Fullstack Web Developer based in Indonesia
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full md:w-1/2 flex justify-center">
              <img
                src="./images/myimage.Jpg"
                alt=""
                className="w-72 h-72 object-cover rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
