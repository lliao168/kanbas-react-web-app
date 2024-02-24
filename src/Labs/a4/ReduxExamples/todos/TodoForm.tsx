import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { LabState } from "../../../store";


function TodoForm(
    // { todo, setTodo, addTodo, updateTodo }: {
    // todo: { id: string; title: string };
    // setTodo: (todo: { id: string; title: string }) => void;
    // addTodo: (todo: { id: string; title: string }) => void;
    // updateTodo: (todo: { id: string; title: string }) => void;
    // }
  ) {
    const { todo } = useSelector((state: LabState) => state.todosReducer);
    const dispatch = useDispatch();
    return (
      <li className="list-group-item">
        {/* <button onClick={() => addTodo(todo)}> Add </button>
        <button onClick={() => updateTodo(todo)}> Update </button> */}
        <button onClick={() => dispatch(addTodo(todo))}> Add </button>
        <button onClick={() => dispatch(updateTodo(todo))}> Update </button>
        <input
          value={todo.title}
        //   onChange={ (e) => setTodo({ ...todo, title: e.target.value }) 
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}
        />
      </li>
    );
  }
  export default TodoForm;
  
  