import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTask, todoType } from "./store/todoSlice";
import TodoCard from "./TodoCard";

function Home() {
  const [newTask, setNewTask] = useState<string>("");
  const data = useSelector((state: any) => state.todo.data);
  const dispatch = useDispatch();
  const addTaskHandler = () => {
    if (newTask) {
      dispatch(addTask({ title: newTask }));
    } else {
      alert("Please provide a task to add");
    }
    setNewTask("");
  };
  return (
    <div className="flex flex-col items-center">
      <div className="flex gap-5 items-center w-[500px] p-7 rounded-md bg-gray-100">
        <input
          className="w-full"
          type="text"
          placeholder="eg. wash car"
          value={newTask}
          onChange={({ target }) => setNewTask(target.value)}
        />
        <button
          className="bg-blue-400 text-white font-semibold text-slg"
          onClick={addTaskHandler}
        >
          Add task
        </button>
      </div>
      {data.length > 0 ? (
        <div className="flex flex-col gap-2 w-[640px]">
          {data.map((task: todoType) => (
            <TodoCard {...task} />
          ))}
        </div>
      ) : (
        <p>No items found</p>
      )}
    </div>
  );
}

export default Home;
