import MyContexts from "./components/my-contexts";
import Todos from "./components/todos";
import Toolbar from "./components/toolbar";

function App() {
  return (
    <MyContexts>
      <p>Todo App</p>
      <Toolbar />
      <Todos />
    </MyContexts>
  );
}

export default App;
