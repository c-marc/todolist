import { createContext, useReducer, useContext } from "react";

const initialState = {
  tasks: [],
  numberOfDoneTasks: 0,
  numberOfUndoneTasks: 0,
  lastState: null,
  sortTasks: false,
};

const TodosContext = createContext();

// ADD_TASK permet d'ajouter une nouvelle tâche dans le tableau et donc d'incrémenter numberOfUndoneTasks
// REMOVE_TASK supprime une tâche du tableau et fait baisser numberOfDoneTasks ou numberOfUndoneTasks en fonction du status de la tâche supprimée
// TOGGLE_TASK fait passer la clef isDone d'une tâche à l'inverse de sa valeur actuelle, fait aussi varier numberOfUndoneTasks et numberOfDoneTasks en conséquence
// RESET fait revenir le state à son status originel
// TOGGLE_SORT_TASKS fait passer la clef sortTasks à l'inverse de sa valeur, provoque ou annule le tri des tâches par status
// UNDO_LAST_EVENT

function todosReducer(state, action) {
  console.log("Reducer says:", action);
  switch (action.type) {
    case "ADD_TASK":
      return {
        ...state,
        id: Date.now(),
        tasks: [...state.tasks, { name: action.name, isDone: false }],
        numberOfUndoneTasks: state.numberOfUndoneTasks + 1,
        previousState: state,
      };
    case "REMOVE_TASK": {
      return {
        ...state,
        tasks: state.tasks.filter((t) => t.name !== action.name),
        numberOfUndoneTasks:
          state.numberOfUndoneTasks - Number(!action.wasDone),
        numberOfDoneTasks: state.numberOfDoneTasks - Number(action.wasDone),
        previousState: state,
      };
    }
    case "TOGGLE_TASK":
      return {
        ...state,
        tasks: state.tasks.map((t) =>
          t.name === action.name ? { ...t, isDone: !t.isDone } : t
        ),
        previousState: state,
      };
    case "RESET":
      return { ...initialState, previousState: state };
    case "TOGGLE_SORT_TASKS":
      return {
        ...state,
        sortTasks: !state.sortTasks,
        previousState: state,
      };
    case "UNDO_LAST_EVENT":
      return { ...state.previousState };
    default:
      throw new Error("unknow action");
  }
}

export const TodosProvider = ({ children }) => {
  const [todos, dispatchTodos] = useReducer(todosReducer, initialState);

  return (
    <TodosContext.Provider value={{ todos, dispatchTodos }}>
      {children}
    </TodosContext.Provider>
  );
};

export const useTodosContext = () => useContext(TodosContext);
