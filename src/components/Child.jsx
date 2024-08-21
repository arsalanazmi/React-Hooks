import React, { useContext } from "react";
import { AppContext } from "./UseContext/UseContext";

const Child = () => {
  const userData = useContext(AppContext);
  return (
    <div>
      <h2 className="text-4xl font-bold text-gray-700 text-center ">Child Component</h2>
      <h2 className="text-3xl font-bold text-gray-700 text-center">UseContext Hook</h2>
      <h3 className="text-xl font-semibold text-gray-200">
        My name is {userData.name} and my age is {userData.age}
      </h3>
    </div>
  );
};

export default Child;
