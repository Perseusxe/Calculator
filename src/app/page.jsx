"use client";
import { useState } from "react";

export default function Calculator() {
  const [numbers, setNumbers] = useState(""); // Store the current input
  const [answer, setAnswer] = useState(""); // Store the result

  const buttons = [
    "7", "8", "9", "/", 
    "4", "5", "6", "x", 
    "1", "2", "3", "+", 
    ".", "0", "=", "-"
  ];

  const handleClick = (button) => {
    if (button === "=") {
      // Evaluate the expression
      try {
        const expression = numbers.replace(/x/g, "*"); // Replace 'x' with '*'
        const result = eval(expression); // Evaluate the expression
        setAnswer(result); // Update the answer
        setNumbers(""); // Clear the input
      } catch {
        setAnswer("Error"); // Handle invalid expressions
      }
    } else {
      setNumbers((prev) => prev + button); // Append the button value to the input
      setAnswer(""); // Clear the answer when typing
    }
  };

  return (
    <div className="w-full h-full flex justify-center mt-[100px]">
      <div className="w-[20%] h-[500px] bg-gray-300 rounded-lg shadow-lg">
        {/* Input Display */}
        <div className="flex justify-center mt-[40px]">
          <input
            type="text"
            className="w-[90%] h-[75px] rounded-md text-black text-right px-4"
            value={numbers || answer} // Show input or the answer
            readOnly
          />
        </div>
        {/* Buttons Grid */}
        <div className="grid grid-cols-4 gap-2 mt-4 px-4">
          {buttons.map((button, index) => (
            <button
              key={index}
              className="w-[75px] h-[75px] bg-white text-black flex justify-center items-center rounded-md shadow hover:bg-gray-100"
              onClick={() => handleClick(button)} // Call handleClick on button press
            >
              {button}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
