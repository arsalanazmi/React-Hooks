import React, { useReducer } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import reducer from "./reducer";

const initialState = 0;

const UseReducer = () => {
  const [count, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center gap-5 bg-amber-400">
      <h1 className="text-5xl font-bold text-blue-900 text-center">
        UseReducer Hook
      </h1>
      <p className="text-xl font-bold">Count can not be less than 0.</p>
      
      <div className="flex">
        <button className="mr-2" onClick={() => dispatch({ type: "INC" })}>
          <FaPlusSquare className="w-[30px] h-[30px] hover:border-2" />
        </button>
        <h2 className="text-4xl text-purple-900">{count}</h2>
        <button className="ml-2" onClick={() => dispatch({ type: "DEC" })}>
          <FaMinusSquare className="w-[30px] h-[30px] hover:border-2" />
        </button>
      </div>
    </div>
  );
};

export default UseReducer;
