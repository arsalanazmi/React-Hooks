import React, { useEffect, useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";

const UseEffect = () => {
  const [count, setCount] = useState(0);

  const handleCount = (value) => {
    if (value == "INC") setCount(count + 1);
    if (value == "DEC") count == 0 ? setCount(0) : setCount(count - 1);
  };

  useEffect(() => {
    document.title = `UseEffect Hook: Count(${count})`;
  }, [count]);
  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 bg-rose-400 text-center">
      <h1 className="text-5xl font-bold text-blue-900 text-center">
        UseEffect Hook
      </h1>
      <p className="text-xl font-bold">Count can not be less than 0.</p>
      <div className="flex">
        <button className="mr-2 " onClick={() => handleCount("INC")}>
          <FaPlusSquare className="w-[30px] h-[30px] hover:border-2" />
        </button>
        <h2 className="text-4xl text-purple-900">{count}</h2>
        <button className="ml-2" onClick={() => handleCount("DEC")}>
          <FaMinusSquare className="w-[30px] h-[30px] hover:border-2" />
        </button>
      </div>
    </div>
  );
};

export default UseEffect;
