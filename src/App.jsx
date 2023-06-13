import Header from "./components/header";
import MyContexts from "./components/my-contexts";
import Todos from "./components/todos";
import Toolbar from "./components/toolbar";

function App() {
  return (
    <MyContexts>
      <Header />
      <Toolbar />
      <Todos />
    </MyContexts>
  );
}

export default App;
