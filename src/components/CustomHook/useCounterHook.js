import { useState } from "react";

const useCounterHook = (initiaValue=0) => {
  const [count, setCount] = useState(initiaValue);
  const increment = () => {
    return setCount(count + 1);
  };
  const decrement = () => {
    return setCount(count - 1);
  };
  return [count, increment, decrement];
};

export default useCounterHook;
