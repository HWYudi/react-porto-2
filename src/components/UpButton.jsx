import React from "react";

export default function UpButton() {
  return (
    <div className="fixed bottom-4 md:bottom-8 right-4 md:right-8 bg-white p-2 rounded-sm hover:bg-slate-300 active:bg-slate-400 ">
        <a href="#home">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        fill="currentColor"
        class="bi bi-chevron-double-up"
        viewBox="0 0 16 16"
      >
        <path
          fill-rule="evenodd"
          d="M7.646 2.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 3.707 2.354 9.354a.5.5 0 1 1-.708-.708z"
        />
        <path
          fill-rule="evenodd"
          d="M7.646 6.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 7.707l-5.646 5.647a.5.5 0 0 1-.708-.708z"
        />
      </svg>
      </a>
    </div>
  );
}
