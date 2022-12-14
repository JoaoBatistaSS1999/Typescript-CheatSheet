import React, { useReducer } from "react";

type Action = { type: "add"; text: string } | { type: "remove"; idx: number };

interface Todo {
  text: string;
  complete: boolean;
}

type State = Todo[];

const TodoReducer = (state: State, action: Action) => {
  switch (action.type) {
    case "add":
      return [...state, { text: action.text, complete: false }];
    case "remove":
      return state.filter((_, index) => action.idx !== index);
    default:
      return state;
  }
};

const UseReducerTypes: React.FC = () => {
  const [todos, dispatch] = useReducer(TodoReducer, []);
  return (
    <div>
      <div></div>
    </div>
  );
};
export default UseReducerTypes;
