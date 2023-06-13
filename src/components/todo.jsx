import { useTodosContext } from "../context/todos";

export function Todo({ todo }) {
  const { dispatchTodos } = useTodosContext();
  return (
    <div>
      <input
        type="checkbox"
        checked={todo.isDone}
        onChange={() => dispatchTodos({ type: "TOGGLE_TASK", name: todo.name })}
      />
      <p>{todo.name}</p>
      <button
        onClick={() =>
          dispatchTodos({
            type: "REMOVE_TASK",
            name: todo.name,
            wasDone: todo.isDone,
          })
        }
      >
        Supprimer
      </button>
    </div>
  );
}
