import React from "react";

const RedNumber = ({ value }: { value: string }) => {
  return (
    <div className="rounded-full absolute right-0  top-[-150%] md:top-0 md:-right-[50%]  px-2 font-medium text-xs py-1 text-red-600 bg-red-600/10">
      {value}
    </div>
  );
};

export default RedNumber;
