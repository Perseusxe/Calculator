"use client";
import { useState } from "react";

export default function Calculator() {
  const [numbers, setNumbers] = useState("");
  const [answer, setAnswer] = useState("");
  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "x", 
    "1", "2", "3", "+", 
    ".", "0", "=", "-"
  ];

  const handleClick = (button) => {
  if (answer === '') {
   setAnswer("Enter an input")
  }
}
  return (
    <div className="w-full h-full flex justify-center mt-[100px]">
      <div className="w-[20%] h-[500px] bg-[grey] rounded-lg">
        <div className="flex justify-center mt-[40px]">
          <input
            type="text"
            className="w-[90%] h-[75px] rounded-md text-black"
            defaultValue={answer}
          />
        </div>
        <div className="grid grid-cols-4 gap-1 ml-[10px]">
      {buttons.map((button, index) => (
        <button key={index} className="btn">
          {button}
        </button>
      ))}
    </div>
      </div>
    </div>
  );
}
