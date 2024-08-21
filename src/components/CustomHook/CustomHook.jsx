import React from "react";
import useCounterHook from "./useCounterHook";

const CustomHook = () => {
  const [count, increment, decrement] = useCounterHook(10);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 bg-fuchsia-800">
      <h1 className="text-5xl font-bold text-gray-300">Custom Hook</h1>
      <div>
        <button onClick={increment} className="bg-green-600 px-2 py-4">
          Increment
        </button>
        <span className="px-5 py-4 bg-white">{count}</span>
        <button onClick={decrement} className="bg-red-600 px-2 py-4">
          Decrement
        </button>
      </div>
    </div>
  );
};

export default CustomHook;
