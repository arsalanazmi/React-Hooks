import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const UseState = () => {
  const [count, setCount] = useState(0);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center gap-5 bg-purple-500">
      <h1 className="text-5xl font-bold text-blue-900 text-center">
        UseState Hook
      </h1>
      <p className="text-xl font-bold">Count can not be less than 0.</p>

      <div className="flex">
        <button className="mr-2 " onClick={() => setCount(count + 1)}>
          <FaPlusSquare className="w-[30px] h-[30px] hover:border-2" />
        </button>
        <h2 className="text-4xl text-purple-900">{count}</h2>
        <button
          className="ml-2"
          onClick={() => (count == 0 ? setCount(0) : setCount(count - 1))}
        >
          <FaMinusSquare className="w-[30px] h-[30px] hover:border-2" />
        </button>
      </div>
    </div>
  );
};

export default UseState;
