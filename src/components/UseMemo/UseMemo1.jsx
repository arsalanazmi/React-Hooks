import React, { useState } from "react";

const UseMemo1 = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrementOne = () => {
    setCounterOne(counterOne + 1);
  };

  const incrementTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = () => {
    console.log("**************");
    for (let i = 0; i <= 10000000; i++) {}
    return counterOne % 2 === 0;
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-4 text-center bg-yellow-600">
      <h1 className="text-white font-bold text-5xl">UseMemo</h1>
      <button onClick={incrementOne} className="bg-red-600 px-5 py-1">
        Increment {counterOne}{" "}
      </button>
      <span>{isEven() ? "Even" : "Odd"}</span>
      <button onClick={incrementTwo} className="bg-red-600 px-5 py-1">
        Increment {counterTwo}
      </button>
      <span></span>
    </div>
  );
};

export default UseMemo1;
