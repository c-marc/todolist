import { useTodosContext } from "../context/todos";
import { Todo } from "./todo";

export default function Todos() {
  const { todos } = useTodosContext();

  console.log("Todos render", todos);

  const displayedTasks = todos.sortTasks
    ? todos.tasks.sort((a, b) => a.isDone - b.isDone)
    : todos.tasks;

  return (
    <ul>
      {displayedTasks.map((todo) => {
        return (
          <li key={todo.id}>
            <Todo todo={todo} />
          </li>
        );
      })}
    </ul>
  );
}
