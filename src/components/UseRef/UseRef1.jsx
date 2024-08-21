import React, { useRef } from "react";

const UseRef1 = () => {
  const inputRef = useRef();
  const changeBorder = () => {
    inputRef.current.focus();
    inputRef.current.style.backgroundColor = "#456645";
  };

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center bg-cyan-950">
      <h1 className="text-5xl font-bold text-white">UseRef hook</h1>
      <p className="text-2xl font-bold text-white">
        It is used to access DOM element directly.
      </p>
      <input type="text" ref={inputRef} className="mt-5"/>
      <button onClick={changeBorder} className="bg-teal-700 px-5 py-1 m-3">Click Here</button>
    </div>
  );
};

export default UseRef1;
