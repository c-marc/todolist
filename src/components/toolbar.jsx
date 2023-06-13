import { useTodosContext } from "../context/todos";

export default function Toolbar() {
  const { todos, dispatchTodos } = useTodosContext();
  const { sortTasks } = todos;

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    dispatchTodos({ type: "ADD_TASK", name: formData.get("name") });
    event.target.reset();
  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" />
        <button type="submit">Register Tast</button>
      </form>
      <button onClick={() => dispatchTodos({ type: "UNDO_LAST_EVENT" })}>
        Undo last event
      </button>
      <button onClick={() => dispatchTodos({ type: "RESET" })}>Reset</button>
      <button onClick={() => dispatchTodos({ type: "TOGGLE_SORT_TASKS" })}>
        {!sortTasks ? "Sort my tasks" : "Unsort my tasks"}
      </button>
    </>
  );
}
