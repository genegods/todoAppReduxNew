import React, { useState } from "react";
import { FaPlusSquare, FaMinusSquare } from "react-icons/fa";
import { useSelector, useDispatch } from "react-redux";
import { v4 as uuidv4 } from "uuid";
import { loadTodo, deleteTodo } from "../redux/todoRedux/todo.actions";
import { TODO_KEY } from "../redux/todoRedux/todo.reducer";

const TodoApp = () => {
  // initialize dispatch
  const dispatch = useDispatch();

  const [text, setText] = useState({
    myText: "",
  });

  // handle change
  const handleChange = (e) => {
    setText({
      ...text,
      [e.target.name]: e.target.value,
    });
  };

  // handle onSubmit
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(
      loadTodo({
        id: uuidv4(),
        todoItem: text,
      })
    );
    setText({
      myText: "",
    });
  };

  // view data
  const viewTodo = useSelector((state) => {
    return state[TODO_KEY];
  });

//   handle delete
const handleDelete = (id) =>{
    dispatch(deleteTodo(id))
}
  return (
    <React.Fragment>
      {/* <pre>{JSON.stringify(viewTodo)}</pre> */}
      <div className="bg-indigo-50 h-96 mt-10 rounded-lg mx-10 shadow-lg overflow-hidden sm:mx-20 md:mx-52 lg:mx-80">
        {/* header */}
        <div className="bg-green-900 h-16 flex justify-center items-center">
          <p className="uppercase font-bold text-3xl text-white">Todo app</p>
        </div>

        {/* body */}
        <div>
          <form onSubmit={handleSubmit}>
            <div className="flex justify-center mt-5 ">
              <input
                name="myText"
                value={text.myText}
                onChange={handleChange}
                type="text"
                placeholder="Enter todos"
                className="p-1 rounded-l-lg w-9/12 focus:outline-none pl-2"
              />
              <button type="submit">
                <FaPlusSquare className="bg-green-900 text-white text-3xl px-1 rounded-r-lg" />
              </button>
            </div>
          </form>

          {/* todo items */}
          <div>
            {viewTodo.map((todo) => {
              return (
                <div key={todo.id}>
                  <div className="flex justify-center mt-5">
                    <ul className="bg-green-900 w-9/12 rounded-l-lg w">
                      <li className="text-3x pl-2 text-white">{todo.todoItem.myText}</li>
                    </ul>
                    <button>
                      <FaMinusSquare className="bg-green-900 text-white text-3xl px-1 rounded-r-lg"
                      onClick={() =>handleDelete(todo.id)}
                       />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TodoApp;
