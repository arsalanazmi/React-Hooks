import React, { useEffect, useLayoutEffect, useState } from "react";

const UseLayoutEffect = () => {
  const [num, setNum] = useState(0);

  useEffect(() => {
    console.log("I am first useEffect");
  }, []);
  useLayoutEffect(() => {
    console.log("I am second useEffect");
  }, []);
  useEffect(() => {
    console.log("I am third useEffect");
  }, []);

  useLayoutEffect(() => {
    if (num == 0) setNum(Math.floor(Math.random() * 100 + 1));
  }, [num]);

  return (
    <div className="h-screen flex flex-col justify-center items-center bg-fuchsia-600 text-center">
      <h1 className="text-5xl font-bold text-white">UseLayout Effect</h1>
      <p className="text-2xl font-bold text-white">
        UseLayout Effect, runs synchronously after a render but before the
        screen is updated.
      </p>
      <p className="text-2xl font-bold text-white">
        UseEffect runs asynchronously and after a render is painted to the
        screen
      </p>
      <p className="text-white text-2xl mb-2 mt-5">Random number is {num}</p>
      <button
        className="bg-cyan-700 px-4 py-1 text-white"
        onClick={() => setNum(0)}
      >
        Random Number
      </button>
    </div>
  );
};

export default UseLayoutEffect;
