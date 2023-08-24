import React from "react";
import { useDispatch } from "react-redux";
import { deleteTask } from "./store/todoSlice";

type Props = {
  id: string;
  title: string;
};

const TodoCard = ({ id, title }: Props) => {
  const dispatch = useDispatch();
  return (
    <div className="w-full flex justify-between items-center p-3 rounded-md shadow-sm">
      <p className="font-semibold text-lg ">{title}</p>
      <button
        className="font-semibold text-sm p-2 bg-red-500 text-white rounded-sm"
        onClick={() => dispatch(deleteTask({ id }))}
      >
        Delete
      </button>
    </div>
  );
};

export default TodoCard;
