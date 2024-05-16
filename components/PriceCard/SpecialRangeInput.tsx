"use client";
import React, { useEffect } from "react";

const SpecialRangeInput = ({
  value,
  setValue,
}: {
  value: number;
  setValue: React.Dispatch<React.SetStateAction<number>>;
}) => {
  useEffect(() => {
    const sliderEl = document.getElementById("myRange");
    if (sliderEl) {
      sliderEl.style.background = `linear-gradient(to right, #a0f0eb ${value}%, #e6ecf8 ${value}%)`;
    }
  }, [value]);

  return (
    <input
      type="range"
      min="1"
      max="100"
      value={value}
      onChange={(e) => {
        setValue(Number(e.target.value));
      }}
      className="slider"
      id="myRange"
    />
  );
};

export default SpecialRangeInput;
