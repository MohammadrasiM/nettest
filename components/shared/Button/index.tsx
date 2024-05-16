import React, { LegacyRef, ReactNode } from "react";

type ButtonProps = {
  title?: string;
  containerClass?: string;
  roundedClass?: string;
  onClick?: (e?: React.MouseEvent) => void;
};
const buttonConfig = {
  //Variants
  primary: "btn-primary disabled:bg-gray-300 disabled:dark:bg-zinc-600 disabled:border-gray-300 ",
  md: "px-12 py-2.5",
  center: "flex  justify-center items-center",
};
const Button = ({
  title,

  onClick,
  containerClass,
  roundedClass = "rounded-md",
}: ButtonProps): JSX.Element => {
  const btnTitle = ` ${"text-md text-center font-medium"}`;
  return (
    <div className={containerClass}>
      <button
        type="button"
        className={` relative  transition-all font-medium text-base ${buttonConfig.primary} ${buttonConfig.md} ${buttonConfig.center}  ${btnTitle}  ${roundedClass}  `}
        onClick={typeof onClick == "function" ? onClick : void null}
      >
        <>{title}</>
      </button>
    </div>
  );
};

export default Button;
