import React from "react";
import IphoneToggle from "../shared/IphoneToggle";
import _STRINGS from "@/utils/LocalStrings";
import RedNumber from "./RedNumber";

const TogglePart = ({
  isMonthly,
  setIsMonthly,
}: {
  setIsMonthly: React.Dispatch<React.SetStateAction<boolean>>;
  isMonthly: boolean;
}) => {
  const onToggle = () => {
    setIsMonthly((e) => !e);
  };

  return (
    <div className="w-full flex items-center justify-center gap-4">
      <p className="text-xs md:text-base font-bold ">{_STRINGS.MONTHLY}</p>
      <IphoneToggle toggle={isMonthly} onClick={onToggle} />
      <div className="flex relative items-center gap-1">
        <p className="text-xs md:text-base font-bold "> {_STRINGS.YEARLY}</p>
        <RedNumber value={`-25%`} />
      </div>
    </div>
  );
};

export default TogglePart;
