import React from "react";

function IphoneToggle({ toggle, onClick }: { onClick: () => void | null; toggle: boolean }) {
  return (
    <div
      className={`relative border-4 hover:scale-110 border-primary-800 !z-0 rounded-full w-12 h-6 transition duration-200 ease-linear cursor-pointer ${
        toggle === true ? ` bg-primary-800 ` : "bg-red-1100"
      }`}
      onClick={(e) => {
        e.preventDefault();
        e.stopPropagation();
        onClick();
      }}
    >
      <label
        // for={`toggle${index}`}
        className={`absolute flex items-center justify-center left-1  dark:bg-zinc-700    w-4 h-4 rounded-full transition transform
        duration-100 ease-linear cursor-pointer ${
          toggle === true
            ? `translate-x-[120%] ${"border-primary-800"} !bg-white  `
            : " !bg-primary-800  -translate-x-[20%] scale-90 border-transparent"
        }`}
      ></label>
      <input
        type="checkbox"
        id={`toggle`}
        name={`toggle`}
        className="appearance-none cursor-pointer w-full h-full active:outline-none focus:outline-none"
      />
    </div>
  );
}

export default IphoneToggle;
