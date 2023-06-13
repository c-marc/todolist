import { useTodosContext } from "../context/todos";

export default function Header() {
  const { todos } = useTodosContext();

  console.log("Header", todos);
  return (
    <>
      <h1>My todos</h1>
      <p>Done: {todos.numberOfDoneTasks}</p>
      <p>Not Done: {todos.numberOfUndoneTasks}</p>
    </>
  );
}
