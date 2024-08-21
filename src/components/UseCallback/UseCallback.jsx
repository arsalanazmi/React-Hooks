import React, { useCallback, useState } from "react";
import Todos from "./Todos";

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);

  const increment = () => {
    setCount(count + 1);
  };

  const addTodo = useCallback(() => {
    return setTodos((prev) => [...prev, "New Entry"]);
  }, [todos]);

  return (
    <div className="h-screen flex flex-col justify-center items-center text-center gap-3 bg-sky-700">
      <h1 className="text-5xl text-white font-bold">UseCallback Hook</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <hr />

      <div>
        <p className="text-2xl">Count: {count}</p>
        <button
          className="bg-red-500 px-5 py-1 text-white font-bold text-xl"
          onClick={increment}
        >
          Add Count
        </button>
      </div>
    </div>
  );
};

export default UseCallback;
