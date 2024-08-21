import React, { useEffect, useRef, useState } from "react";

const UseRef = () => {
  const [input, setInput] = useState("");
  // const [changeCount, setChangeCount] = useState(0);
  const count = useRef(0);

  useEffect(() => {
    count.current = count.current + 1;
    // const currentLength = input.length;
    // if (currentLength !== count.current) {
    //   setChangeCount(changeCount + (currentLength - count.current));
    //   count.current = currentLength;
    // }
  });

  return (
    <div className="h-screen bg-slate-700 flex flex-col justify-center items-center text-center">
      <h2 className="text-5xl text-white font-bold">UseRef Hook</h2>
      <p className="text-2xl text-white font-medium">It creates a mutable variable which will not re render the components.</p>

      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter any text"
        className="m-5 p-2"
      />
      <h2 className="text-3xl text-white font-medium">
        The number times the Component render is: {count.current}
      </h2>
    </div>
  );
};

export default UseRef;
