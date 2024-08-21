import React from "react";
import Child from "./Child";

const Parent = () => {
  return (
    <div className="h-screen bg-lime-500 flex flex-col justify-center items-center text-center">
      <h1 className="text-5xl font-bold text-gray-800">Parent Component</h1>
      <Child/>
    </div>
  );
};

export default Parent;
