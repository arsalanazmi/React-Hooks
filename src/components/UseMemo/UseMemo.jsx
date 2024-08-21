import React, { useMemo, useState } from "react";

const UseMemo = () => {
  const [count, setCount] = useState(0);
  const [show, setShow] = useState(false);

  const getValue = () => {
    console.log("Count: ",count);
    
    return setCount(count + 1);
  };

  const countNumber = (num) => {
    console.log("Count Number", num);

    for (let i = 0; i <= 100000000; i++) {}
    return num;
  };

  const CheckData = useMemo(() => {
    return countNumber(count);
  }, [count]);

  return (
    <div className="h-screen flex flex-col justify-center items-center gap-5 text-center bg-yellow-800">
      <h1 className="text-5xl font-bold text-white ">UseMemo Hook</h1>
      <p className="text-2xl">Count value: {CheckData}</p>
      <button className="bg-red-800 py-2 px-4 text-white" onClick={getValue}>
        Counter
      </button>
      <button
        onClick={() => setShow(!show)}
        className="bg-green-900 px-5 py-1 text-white"
      >
        {show ? "You Clicked Me" : "Click Me"}
      </button>
    </div>
  );
};

export default UseMemo;
