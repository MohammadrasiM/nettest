"use client";
import React, { useEffect, useState } from "react";
import SpecialRangeInput from "./SpecialRangeInput";
import _STRINGS from "@/utils/LocalStrings";
import TogglePart from "./TogglePart";
import { features } from "@/utils/constants";
import Button from "../shared/Button";

const PriceCard = () => {
  const [value, setValue] = useState(0);
  const [isMonthly, setIsMonthly] = useState(true);

  return (
    <div className=" shadow-xl flex flex-col gap-8 items-center justify-center    rounded-md    ">
      <div className=" flex border-b items-center justify-center   flex-col w-full p-4 md:p-8 gap-8 ">
        <p className="text-xl  font-bold">
          {value * 2}K {_STRINGS.PAGEVIEWS}
        </p>

        <SpecialRangeInput value={value} setValue={setValue} />
        {/* Price part */}

        <div className="flex items-center justify-center gap-1">
          <p className="text-2xl text-black font-extrabold ">${((value / 4) * (isMonthly ? 1 : 0.75)).toFixed(2)}</p>{" "}
          <p className="  text-sm">/{_STRINGS.MONTH}</p>
        </div>
        <TogglePart isMonthly={isMonthly} setIsMonthly={setIsMonthly} />
      </div>
      <div className=" flex border-b items-center justify-center   flex-col w-full p-4 gap-8 ">
        <div className="flex flex-col items-center gap-4 w-full justify-center ">
          {features.map((e) => (
            <div key={`feat${e}`} className="flex  items-center gap-2">
              <img src="/assets/icons/tick.svg" />
              <p className="font-semibold text-sm">{e}</p>
            </div>
          ))}
        </div>
        <Button roundedClass="rounded-full" title={_STRINGS.START_TRIAL} />
      </div>
    </div>
  );
};

export default PriceCard;
