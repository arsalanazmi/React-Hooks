import React, { useEffect, useState } from "react";

const CleanUp = () => {
  const [widthCount, setWidthCount] = useState(window.screen.width);
  
  const currentScreenWidth = () => {
    setWidthCount(() => window.innerWidth);
  };
  
  useEffect(() => {
    window.addEventListener("resize", currentScreenWidth);

    return () => {
      window.removeEventListener("resize", currentScreenWidth);
    };
  }, [widthCount]);
  
  return (
    <div className="h-screen flex flex-col justify-center items-center bg-orange-400">
      <h1 className="text-5xl font-bold text-yellow-700 text-center">
        UseEffect (Cleanup) Hook
      </h1>
      <h2 className="text-4xl text-white  font-bold text-center">
        The size of the window is: {widthCount}
      </h2>
    </div>
  );
};

export default CleanUp;
