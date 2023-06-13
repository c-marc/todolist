import { TodosProvider } from "../context/todos";

export default function MyContexts({ children }) {
  return <TodosProvider>{children}</TodosProvider>;
}
