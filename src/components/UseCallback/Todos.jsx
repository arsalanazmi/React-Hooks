import { memo } from "react"

const Todos = ({ todos, addTodo }) => {
  console.log("child render");
  return (
    <div>
        <h2 className="text-3xl font-bold text-white mb-4">My Todos</h2>
      {todos &&
        todos.map((todo, i) => {
          return (
            <p
              className="bg-zinc-400 text-xl py-1 px-3 mb-2"
              key={i}
            >{`${todo} ${i}`}</p>
          );
        })}
      <button
        onClick={addTodo}
        className="bg-slate-700 px-5 py-1 text-white font-bold text-xl"
      >
        Add Todo
      </button>
    </div>
  );
};

export default memo(Todos);
